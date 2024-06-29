---
title: Testing & Linting
description: Club Website Developer Testing
sidebar_position: 8
---

# Testing & Linting

:::danger OUTDATED
This page is part of the documentation for release V1.0. This documentation is outdated and V1.0 is no longer maintained. See [index](/docs/website/) for the latest information.
:::

The project currently maintains unit tests for several backend routes and routines - no automated frontend testing has been implemented. The unit testing library used is [MochaJS](https://mochajs.org/), coupled with [ChaiJS](https://www.chaijs.com/) for testing assertions. Additionally, a linter has been configured to automatically format code according to the [JavaScript Standard Style](https://standardjs.com/).

Any contribution to the OSC Website source code must pass testing and linting workflows, as well as implement new tests where necessary. See: [contributing](https://github.com/ufosc/Club_Website_2/blob/main/CONTRIBUTING.md).

## Test Index

Source code and documentation indices for currently available unit tests.

 * Blog API Route Tests: [GitHub](https://github.com/ufosc/Club_Website_2/blob/main/test/blog.spec.js) or [Docs](/docs/website/Developers/API/blog).
 * Cache Tests: [GitHub](https://github.com/ufosc/Club_Website_2/blob/main/test/cache.spec.js) or [Docs](/docs/website/Developers/caching).
 * Edit API Route Tests: [GitHub](https://github.com/ufosc/Club_Website_2/blob/main/test/edit.spec.js) or [Docs](/docs/website/Developers/API/edit).
 * Users API Route Tests: [GitHub](https://github.com/ufosc/Club_Website_2/blob/main/test/users.spec.js) or [Docs](/docs/website/Developers/API/users).

## Running Tests
:::danger

Tests are only meant to be ran on development environments. Do not use production databases in testing, their contents <b>risk being deleted</b>. To learn more about managing environments, see [Usage & Configuration](/docs/website/Developers/configuration).

:::

```bash
npm run test
```

## Testing for Style Issues (Linting)

OSC Website source code implements JavaScript Standard Style. To test for compliance, run:

```bash
npm run lint
```

## Fixing Style Issues Automatically

In certain cases, the linter may be able to automatically fix linting issues. This is feature is made available via the following command:
```bash
npm run fix
```

If an issue cannot be automatically fixed, the command will issue an error. If this happens, the developer must manually resolve the issue.

## Silencing Linting Errors

Sometimes, the implementation of certain pre-existing libraries (usually chaiJS and mochaJS) or functions may require the developer to break the linter's rules. Although this should ideally be avoided whenever possible, the following example illustrates how to silence a problematic line of code:
```js
expect(fs.existsSync(path)).to.be.true // eslint-disable-line
```

If the linter complains of undefined global variables, it is silenced by adding the following code as the first line of the problematic file:
```js title="First Line of Code"
/* global describe, it, before */
```

Where `describe`, `it`, and `before` may each be replaced by some global variable.
