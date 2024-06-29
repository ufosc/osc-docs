---
title: Build & Deploy
description: Club Website Building
sidebar_position: 3
---

Before deployment, the project must be compiled and bundled by [GatsbyJS](https://www.gatsbyjs.com/). This produces a set of optimized static files that may be hosted on a static web server or (in our case) on [GitHub pages](https://pages.github.com/). Note that the `npm run develop` command only spawns a development server, which lacks the appropriate optimizations for hosting to the public. Consequently, we use the gatsby build command:

```bash
npm run build
```

This will generate the static files for the site. The bundler will also momentarily spawn a server on `localhost:3000` to display webpack bundling information - it is safe to ignore/close this page. Once the build process is complete, you can host the site with the following command:

```bash
npm run serve
```

This will launch the site on the following URL: `http://localhost:9000`. Whilst this is an adequate production build, we recommend hosting the bundled site files using a dedicated web server such as [Apache](https://httpd.apache.org/) or [nginx](https://nginx.org/en/). We also highly recommend using [GitHub pages](https://pages.github.com/), which allows you to host on GitHub for free (with a custom domain).
