---
title: Using MongoDB
description: Club Website Developer Database
sidebar_position: 1
---

# Using MongoDB

:::danger OUTDATED
This page is part of the documentation for release V1.0. This documentation is outdated and V1.0 is no longer maintained. See [index](/docs/website/) for the latest information.
:::

The website uses [MongoDB](https://www.mongodb.com/), a document-oriented database program, to fetch and serve information for the backend. When running in a development environment, the backend is automatically configured to connect to a public OSC testing database. This section documents the basic prolegomena of operating and managing the OSC Website database.

For the OSC testing URI, see [here](https://github.com/ufosc/Club_Website_2/blob/main/utils/config.js#L3) (note that the database is public and volatile, and not meant for production environments). For instructions on changing environments or configuring your own Mongo connection URI, see [here](/docs/website/legacy/Developers/configuration).

## Mongoose Basics

The project uses the [Mongoose](https://mongoosejs.com/) library as an abstraction over the default MongoDB NodeJS package. Mongoose organizes database structures into schemas and models (analogous to schemas in SQL) that automatically validate and enforce rules on database entries. For instance:

```js title="model/images.js"
const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const ImageModel = mongoose.model('image', ImageSchema)
module.exports = { ImageSchema, ImageModel }
```

In the [source above](https://github.com/ufosc/Club_Website_2/blob/main/model/images.js), an `ImageSchema` is defined. The schema defines `filename, description, path, and date` as properties of the 'Image' object. Similarly, it enforces certain rules over these properties: that 'filename' is a required string, that 'date' is a required JavaScript 'Date' object with a default value, etc.

Furthermore, Mongoose allows us to formalize a 'model' from this schema, in this case, it is named `ImageModel`. The `ImageModel` acts as a driver to our database's 'Image' collection (collections are structures similar to tables in SQL). Once the model is created, it is exported and ready to be used in other files. What follows is a series of code examples drawn from the website sourcecode that illustrate what models are capable of:

### Example 1

```js title="routes/images.js:32"
const images = await ImageModel.find().sort({ date: -1 })
```

The [example](https://github.com/ufosc/Club_Website_2/blob/main/routes/images.js#L32) above fetches all images in the database and sorts them in descending (-1) date order.

### Example 2

```js title="routes/images.js:68"
const image = new ImageModel({
	filename: req.file.filename,
	description: req.body.Description,
	path: req.file.path
})

image.save((err) => {
	if (err) return res.status(500).send({ error: 'Internal Server Error' })
})
```

In the [example](https://github.com/ufosc/Club_Website_2/blob/main/routes/images.js#L68C3-L76C5) above, a new <ins>instance</ins> of an `ImageModel` with some given data, automatically validates it to make sure it matches the schema we've defined, and then attempts to save it to the database.

:::info Further Reading
To learn more about Mongoose and MongoDB, refer to the [Mongoose Documentation](https://mongoosejs.com/docs/index.html) and the [MongoDB NodeJS documentation](https://www.mongodb.com/languages/mongodb-with-nodejs).
:::

## Database.js

The database connection URI is configured in [utils/config.js](https://github.com/ufosc/Club_Website_2/blob/main/utils/config.js), whilst the effective database connection configuration happens in [utils/database.js](https://github.com/ufosc/Club_Website_2/blob/main/utils/database.js). The database utility modularizes the connection (allowing us to handle the connection in multiple files simultaneously), whilst also implementing various event listeners:

```js title="utils/database.js"
mongoose.connection.on('connected', () => {
	// CONNECTION SUCCEEDED...
})

mongoose.connection.on('error', (error) => {
	// CONNECTION FAILED...
})

mongoose.connection.on('disconnected', () => {
	// DISCONNECTED...
})

process.on('SIGINT', (error, data) => {
	// SIGINT: User stopped the program.
})
```

Database.js is imported, and a database connection is subsequently opened in [main.js](https://github.com/ufosc/Club_Website_2/blob/main/app.js#L81).

## Setting up your own database

If you're interested in hosting your own instance of the website, you'll need to set up your own MongoDB node. The MongoDB team currently offers free (but limited) database hosting on their [MongoDB Atlas](https://www.mongodb.com/atlas) platform. Alternatively, you can set up MongoDB [community edition](https://www.mongodb.com/try/download/community) on your machine and host your own instance for "free."
