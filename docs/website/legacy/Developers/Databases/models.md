---
title: Database Models
description: Club Website Developer Database
sidebar_position: 2
---

# Database Models

:::danger OUTDATED
This page is part of the documentation for release V1.0. This documentation is outdated and V1.0 is no longer maintained. See [index](/docs/website/) for the latest information.
:::

The database's structure is defined by the following collections:
1. Blogs (defined in [model/blog.js](https://github.com/ufosc/Club_Website_2/blob/main/model/blog.js))
2. Users (defined in [model/users.js](https://github.com/ufosc/Club_Website_2/blob/main/model/users.js))

:::note

To learn more about using models with MongooseJS, see [Using MongoDB](/docs/website/Developers/Databases/mongodb).

:::

Model instances are created and saved to the database in each model's corresponding API route.
* Blog posts are managed in [routes/blog.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/blog.js).
* Users are managed in [routes/users.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/users.js).

To learn more about routes, see [API & Routes](/docs/website/Developers/API/).
