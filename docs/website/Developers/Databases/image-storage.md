---
title: Image Storage
description: Club Website Developer Database
sidebar_position: 3
---

# Image Storage

The images API route exists to serve image content for blog articles. To minimise latency, images are stored on the server's hard disk, whilst image metadata lives on the database. The purpose of the metadata is to assert the image's existence, physical location, description, and API path.

If you'd like to learn more about the type of metadata that's stored, refer to [models/images.js](https://github.com/ufosc/Club_Website_2/blob/main/model/images.js).

## Express Multer

The [Express Multer](https://expressjs.com/en/resources/middleware/multer.html) library enables the Express webserver to do multiplexing. Consequently, this means that it can receive multiform and multipart data (data that takes multiple requests to transmit, i.e large image files). The library is configured to save incoming image files to the disk (`/uploads`) folder:

```js title="routes/images.js"
const multer = require('multer')
// ...

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Create directory if it doesnt exist.
    if (!fs.existsSync('uploads/')) {
      fs.mkdirSync('uploads/', { recursive: true })
    }
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    // If its not a .jpeg, then it will be caught later.
    const suffix = (file.mimetype === 'image/png') ? '.png' : '.jpeg'
    const prefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, prefix + suffix)
  }
})
// ...

// Max size: 25MB
const upload = multer({ storage, limits: { fileSize: 26214400 } })
```

Essentially, whenever a new file arrives, it will be stored in the destination specified by `storage.destination` with the file name specified by `storage.filename`. The file name function (`storage.filename`) generates a file name according to the following criteria:

1. If the file type is '.png', then the file name suffix will be `.png`. Otherwise, it will be `.jpeg`. If it is neither, an error will be issued later on [here](https://github.com/ufosc/Club_Website_2/blob/main/routes/images.js#L65).
2. The prefix will be the current date, plus a dash symbol ('-'), plus some random number.
3. Finally, the file name is produced by combining the two strings: `prefix + suffix`.

With the multer storage configured, the `storage` constant is passed along with a `fileSize` limit (set to 25MB) to produce the `upload` constant, which can now be used as an [Express Middleware](https://expressjs.com/en/guide/using-middleware.html).

:::tip Express Middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They control the data coming and going from the server's routes. When the upload `upload.single('file')` is used, the middleware will ensure that a single file has been sent by the client, and will then store it on the disk.

:::


## Image Upload Route

Image API operations are managed in [routes/images.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/images.js). An excerpt of the image upload route is copied below as an explanatory reference:

```js title="routes/images.js"
router.post('/', passport.authenticate('loggedIn', { session: false }), upload.single('File'), (req, res) => {

  // ...

  const image = new ImageModel({
    filename: req.file.filename,
    description: req.body.Description,
    path: req.file.path
  })

  image.save((err) => {
    if (err) return res.status(500).send({ error: 'Internal Server Error' })
  })

  return res.status(200).send(image)
})
```

First, the `passport.authenticate('loggedIn', { session: false })` ensures that the user is `loggedIn` before they can proceed with uploading an image. Next, `upload.single('File')` ensures that a single file has been sent, and then saves that file on the disk. Finally, `(req, res)` is the function definition that handles the rest of the image upload routine.

The `upload` middleware will automatically store the file's metadata in the `req` object, that way we can pass it along to our `(req, res)` function:

1. `req.file.filename` stores the name of the file, as defined by `storage.filename`.
2. `req.file.path` is the file system path where our file is located.
3. `req.body.Description` is not actually handled by `upload`. It is passed by the image submission form and keeps the user-specified image description.

With this information, we create a new ImageModel instance (read [Using MongoDB](/docs/website/Developers/Databases/mongodb) to learn more about models):
```js
const image = new ImageModel({
	filename: req.file.filename,
	description: req.body.Description,
	path: req.file.path
})
```

And save it to the database:
```js
image.save((err) => {
    if (err) return res.status(500).send({ error: 'Internal Server Error' })
})
```

Note that the physical image has already been saved by `upload` to our server's `/upload` folder.

Henceforth, whenever we want to retrieve and send an image (assuming we know it's ID), we can query the MongoDB database, retrieve its file system path, and load the image into memory:

```js title="routes/images.js"
const imageExists = await ImageModel.findById(req.params.id)
if (!imageExists) {
	return res.status(404).send({ error: 'ID does not exist' })
}

res.status(200).sendFile(resolve(imageExists.path))
```

If we find that, for some reason, the file no longer exists on the file system, we delete it from the database and return an error:
```js title="routes/images.js"
if (!fs.existsSync(imageExists.path)) {
    await ImageModel.findByIdAndDelete(req.params.id)
    return res.status(404).send({ error: 'image does not exist' })
}
```
