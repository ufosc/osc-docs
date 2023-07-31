---
title: Database Models
description: Club Website Developer Database
sidebar_position: 2
---

# Database Models

The database's structure is defined by the following collections:
1. Blogs (defined in [model/blog.js](https://github.com/ufosc/Club_Website_2/blob/main/model/blog.js))
2. Images (defined in [model/images.js](https://github.com/ufosc/Club_Website_2/blob/main/model/images.js))
3. Users (defined in [model/users.js](https://github.com/ufosc/Club_Website_2/blob/main/model/users.js))

:::note

To learn more about using models with MongooseJS, see [Using MongoDB](/docs/website/Developers/Databases/mongodb).

:::

Model instances are created and saved to the database in each model's corresponding API route.
* Blog posts are managed in [routes/blog.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/blog.js).
* Images are managed in [routes/images.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/images.js).
* Users are managed in [routes/users.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/users.js).

To learn more about routes, see [API & Routes](/docs/website/Developers/API/).

:::tip Image Storage

The images database collection only stores metadata. Physical images are stored on the hard disk to reduce latency. To learn more, see [Image Storage](/docs/website/Developers/Databases/image-storage).

:::
