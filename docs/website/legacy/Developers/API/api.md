---
title: API & Routes
description: Club Website Developer API
sidebar_position: 1
---

# API & Routes

:::danger OUTDATED
This page is part of the documentation for release V1.0. This documentation is outdated and V1.0 is no longer maintained. See [index](/docs/website/) for the latest information.
:::

The OSC website API exists to serve, create, modify, and delete dynamic resources, for instance:
1. Blog metadata and rendered HTML articles (documented in [Developers/API/blog](/docs/website/legacy/Developers/API/blog)).
2. Passing contact messages to the SMTP mail server (documented in [Developers/API/contact](/docs/website/legacy/Developers/API/contact)).
3. Serving the various editable forms (documented in [Developers/API/edit](/docs/website/legacy/Developers/API/edit)).
4. User authentication (documented in [Developers/API/users](/docs/website/legacy/Developers/API/users)).

In the source code, each route occupies a separate file in the [routes folder](https://github.com/ufosc/Club_Website_2/tree/main/routes), and all routes are subsequently organized in [routes/api.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/api.js).

## Express

:::note
Express.js is a backend web framework for creating and serving RESTful APIs on NodeJS. It is documented extensively at [expressjs.com](https://expressjs.com/).
:::

Expressjs, otherwise known as Express, implements a simple NodeJS web server. It defines a relative routing path and a series of middleware to use with each function. Each middleware is a JavaScript function that accepts an HTTP request (the `req` variable) and a response object (the `res` variable). The `res` variable is an interface for sending responses back to users.

Example:
```js
// An API route served over '/', using the HTTP GET method.
router.get('/', (req, res) => {

	// req holds the user's request.
	const body = req.body
	const someField = body.someField
	const someField2 = body.someField2

	// We respond by interfacing with 'res'
	res.status(200).send({ message: "accepted" })

})

// Other HTTP methods...
router.post('/', (req, res) => { /* ... */ })
router.delete('/', (req, res) => { /* ... */ })
router.put('/', (req, res) => { /* ... */ })
```

## Express Router

The express router, part of the Expressjs framework, enables developers to create and export APIs modularly. Meaning, an API can be developed according to some relative path (e.g `/users`), imported into another router, and then served over some other, more abstract path (e.g `/api/users`). Consider the following example:

```js title="File A"
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { /* ... */ }
router.post('/', (req, res) => { /* ... */ }
// ...

module.exports = router
```

Then, imported into file B:

```js title="File B"
const express = require('express')
const router = express.Router()

// The API defined in File A.
const myFirstRoute = require('./fileA')

// Serve the API in File A on /mySecondRoute.
router.use('/mySecondRoute', myFirstRoute)
```

In this way, HTTP routes can be defined in a secure, conveniently testable, and organized manner.
