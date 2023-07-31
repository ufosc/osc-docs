---
title: Authentication
description: Club Website Developer Authentication
sidebar_position: 7
---

# Authentication

:::tip Source Code

The authentication routine is specified in the [/auth](https://github.com/ufosc/Club_Website_2/blob/main/auth/auth.js) source folder.

:::

The website uses a cookie-based form of JWT authentication using the [PassportJS](https://www.passportjs.org/) authentication framework. The process is summarized as follows:
1. User attempts to log-in, sending their username and password.
2. Server verifies username/password, and creates a JSON object containing:
   * The user's ID.
   * A PBKDF2 hash of their password.
   * Whether they're an admin.
3. The JSON object is encoded and signed using the site's private key and passed to the user via cookie.
4. When the user attempts to access an authenticated resource, the browser reads their auth cookie.
5. It verifies that the user's current password hash matches the hash in its cookie object.
6. If the server can verify that the cookie was signed by its own private key, then it can trust the content of the underlying JSON object and grant resource access to the user.

## Authenticating Users

Passwords are stored in the MongoDB database and are specified in the [user database model](https://github.com/ufosc/Club_Website_2/blob/main/model/users.js). The password field is an object containing two strings: a hash and a salt. The hash uses the PBKDF2 algorithm to calculate a cryptographic sum of the user's password by appending the salt (a random series of characters) to the end of the user-provided password. The hash and salt are subsequently stored in the password database object.

Leveraging the properties of hash functions is what allows the website to remain secure: since different passwords produce different hashes, we need only to know the user's hash in order to authenticate them. If the user provides a password string which, when hashed, produces a replica of the hash string stored in the database, then we know that the user has entered the registered password.

A vulnerability arises, however, when multiple users share the same password. Using the same password will produce the same hash for multiple users, enabling an attacker to make inferences and better-educated guesses when attempting to compromise a user's password. For this reason, a fixed-length random series of characters, called a 'salt', is appended to the end of each user's password, producing a different hash for each. Since we know the length and value of the salt, we can append it to the end of a user's password and reproduce their unique hash.

This process is implemented [here](https://github.com/ufosc/Club_Website_2/blob/main/auth/auth.js), and reproduced below for reference:
```js title="auth/auth.js"
const crypto = require('crypto')
const pbkdf2 = require('pbkdf2')

const generateHash = (password, salt) => {
  return pbkdf2.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, 128).toString()
}

exports.hashPassword = (password) => {
  const salt = crypto.randomBytes(128).toString('base64')
  const hash = generateHash(password, salt)
  return { salt, hash }
}

exports.validatePasswordHash = (user, passwordAttempt) => {
  if (!user || !passwordAttempt) {
    return false
  }
  const { hash, salt } = user.password
  return hash === generateHash(passwordAttempt, salt)
}
```

## PassportJS

The above process is conveniently ported to web applications via the [PassportJS](https://www.passportjs.org/) module for NodeJS, which organizes authentication routines into strategies. The OSC website defines two strategies: 'login' and 'loggedIn', which validate login attempts and check whether a user is logged in, respectively. They are implemented [here](https://github.com/ufosc/Club_Website_2/blob/main/auth/passport.js), and reproduced below for reference:
```js
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt')
const UserModel = require('../model/users').UserModel
const jwtSecret = require('../utils/config').secret
const auth = require('./auth')

const JWTStrategy = passportJWT.Strategy

const cookieExtractor = (req) => {
  let token = null
  if (req && req.cookies) {
    token = req.cookies.jwt
  }
  return token
}

passport.use('login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async (username, passwordAttempt, done) => {
  const user = await UserModel.findOne({ username })
  if (!user) {
    return done(null, false, { message: 'Incorrect username or password' })
  }

  if (!auth.validatePasswordHash(user, passwordAttempt)) {
    return done(null, false, { message: 'Incorrect username or password' })
  }

  return done(null, user, { message: 'Log-in succesful' })
}))

passport.use('loggedIn', new JWTStrategy({
  jwtFromRequest: cookieExtractor,
  secretOrKey: jwtSecret,
  passReqToCallback: true
}, async (req, jwtPayload, done) => {
  req.userID = jwtPayload.id
  if (!mongoose.Types.ObjectId.isValid(req.userID)) {
    return done(null, false, { message: 'invalid token' })
  }

  const user = await UserModel.findById(jwtPayload.id)
  if (!user) {
    return done(null, false, { message: 'invalid token' })
  }

  if (user.password.hash !== jwtPayload.hash) {
    return done(null, false, { message: 'Password changed. Please try logging in again.' })
  }

  return done(null, 'authentication successful')
}))
```

The passport automatically keeps track of the 'login' and 'loggedIn' strategies, without us having to export them. Henceforth, they can be passed as middleware to Express routes:

```js
router.get('/', passport.authenticate('loggedIn', { session: false }), (req, res) => {
	// Do something here that requires the user to be logged in...
})
```

The `passport.authenticate('loggedIn, { session: false })` clause will run the `loggedIn` routine and authenticate the user.
