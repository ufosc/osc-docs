---
title: Caching
description: Club Website Developer Caching
sidebar_position: 6
---

# Caching

Caching allows the website's server to imporove performance and preserve CPU by storing time-insensitive data in memory. Its most common use case is in serving the home and blog pages: instead of dynamically re-rendering the same page for each user request, it is rendered only once and then served from memory. Naturally, the cache updates its data after some predetermined time period, configurable by the [CACHE_INTERVAL](/docs/website/Developers/configuration#caching) environment variable.

## Cache Module

The cache module is defined in [utils/cache.js](https://github.com/ufosc/Club_Website_2/blob/main/utils/cache.js). The cache essentially functions as a state machine: it consumes user-defined functions that modify variables in the cache's internal state, and runs said functions at most once every `CACHE_INTERVAL` minutes. Likewise, if the `CACHE_INTERVAL` passes, then it will not update the cache until some other module tries to read its data (e.g when the server reads the cache to server a user's request).

### Example: Writing to the Cache
```js
const CacheModule = require('./utils/cache')
const cache = new CacheModule()

// These functions will run at most once every CACHE_INTERVAL.
// Their return values (which must be JSON objects) will be
// written to the cache's memory.

cache.register(() => {
	return { myKey1: "my value 1", myKey2: "my value 2" }
})

cache.register(() => {
	return { myKey3: "my value 3", myKey4: "my value 4" }
})

// Registering multiple functions

cache.register(myFunction1, myFunction2, ...)

// Start the cache interval.
// Updates every 5 minutes.
cache.start(5)
```

### Example: Reading from the Cache
```js
// You can read the stored cache values by reading from
// the .cache() object using the same keys that were
// returned by the registered callbacks.

console.log(cache.cache().myKey1)
console.log(cache.cache().myKey2)
console.log(cache.cache().myKey3)
```

### Example: Force-updating the cache
```js
cache.run()
```

`.run()` will force each callback function to be executed, hence forcefully updating the cache's state.

### Example: Starting/Stopping the cache

```js
// Start, update every 5 minutes.
cache.start(5)

// Stop the interval.
cache.stop()

// Start again
cache.start(5)
```

The cache can be started and stopped with the `.start(MINUTES)` and `.stop()` functions, respectively. The cache can be started and stopped as many times as needed without consequence.
