---
title: Usage & Configuration
description: Club Website Configuration
sidebar_position: 2
---

# Usage & Configuration

:::danger OUTDATED
This page is part of the documentation for release V1.0. This documentation is outdated and V1.0 is no longer maintained. See [index](/docs/website/) for the latest information.
:::

## Usage
### Starting the webserver:
```bash
npm start
```
Unless you've manually specified a port, you can access the website by visiting [http://localhost:3000](http://localhost:3000) on your browser.

### Linting & fixing:
This project adheres to the JavaScript Standard syntax style, use linting to show you a list of syntax errors that you'll need to correct.
```bash
npm run lint
```
To automatically fix these, you can run:
```bash
npm run fix
```
Keep in mind that some syntax issues cannot be automatically resolved, in which case you'll need to run `npm run lint` again and resolve them manually.

### Running tests:
:::danger Volatile Data

Tests are only meant to be ran on development environments. Do not use production databases in testing, their contents <b>risk being deleted</b>.

:::
```bash
npm run test
```

## Configuration
All configurations are available in [config.js](https://github.com/ufosc/Club_Website_2/blob/main/utils/config.js) and can be modified by creating a `.env` file in the root directory.

### Node Environment
NODE_ENV: Sets the working environment.

Three options are available:
1. Development - for writing & testing new features.
2. Staging - for testing features before deployment.
3. Production - for finished features available to the public.

The working environment is set to 'development' by default. It can be changed by adding the following line to the `.env`:
```
NODE_ENV = "development"
```

### Database Connections
MONGO_URI: Sets the connection URI for the MongoDB database.

It can be changed by adding the following line to the `.env`:
```
MONGO_URI = "..."
```

### Server Port
The port to run the server on. Set to 3000 by default. It can be changed by adding the following line to the `.env`:
```
SERVER_PORT = 3000
```

### Admin Dashboard Endpoint

Because generic admin routes are subject to directory scans by vulnerability analyzers, we've added the option to configure the route manually. It is set to 'admin' by default, but can be changed via the following option in `.env`:
```
ADMIN_ROUTE = "admin"
```

### Rate Limiting

The limiter sets up a rate limiter that controls how many requests can be made by a user before they are timed-out. There are two available options:
1. RATE_LIMIT_TIMEOUT - the time interval (in minutes) where the user will be locked out of the site if they violate the rate limit.
2. RATE_LIMIT_MAX - the maximum number of requests in one RATE_LIMIT_TIMEOUT interval.

They can be modified as follows:
```
RATE_LIMIT_TIMEOUT = 5
RATE_LIMIT_MAX = 1500
```

### Caching
CACHE_INTERVAL: How long to cache static pages (blog, index, etc.) for.

Instead of repeatedly querying the database for data, non-priority pages are cached. The cache interval (in minutes) can be modified like so:
```
CACHE_INTERVAL = 30
```

### Secret
The secret is a key for encrypting JWTs. It can be modified like so:
```
SECRET = "any string"
```

### SMTP Contact Form
Configurations for the SMTP mailer. This is disabled in development environments, but can be modified with the following options:
1. `SMTP_HOST`: host address for the SMTP server (string).
2. `SMTP_PORT`: port for the host (integer, see above).
3. `SMTP_USER`: the server username (string).
4. `SMTP_PASS`: the server password (string.

### ADMIN_EMAIL
The email address to send contact form confirmation emails from. Can be set to anything so long as it's a valid email address. Modified as follows:
```
ADMIN_EMAIL = "no-reply@ufosc.com"
```
