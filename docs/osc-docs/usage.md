---
title: Usage
description: OSC Docs Usage
sidebar_position: 3
---

# Usage

:::tip Local Installation Required

This section requires a local installation of the project repository. For installation instructions, refer to the [Installation Guide](/docs/osc-docs/installation).

:::

## Running the Project

Viewing local changes to the project requires launching a development server. This can be achieved by calling the following command on your terminal application:

```bash
npm start
```

The command must be called from within the project's root directory. The program should automatically open the site's local URL on your browser. If not, it can be accessed by visiting [localhost:3000](http://localhost:3000).

## Linting

The lint command is a linter command for Node.js projects that allows you to automatically analyze your codebase and identify potential issues or style violations. Linters are tools that enforce coding standards and best practices, helping developers maintain a consistent and clean codebase. Running the linter is necessary prior to committing to the codebase.

To list potential style errors, run:
```bash
npm run lint
```

To (try) to automatically fix style errors, run:
```bash
npm run fix
```

Please note that if the `fix` command returns errors, they'll have to be manually resolved.

## Building

Docusaurus works by compiling Markdown files into static website files (HTML, CSS, JavaScript, etc.). If you're simply testing local changes, then the `npm start` command will suffice. However, it is not appropriate to use `npm start` in production environments. In order to host the site publicly, it must first be packaged and built. This is made possible with the build command:
```bash
npm run build
```

Then, the `serve` command (see [Serving Locally](/docs/osc-docs/usage#serving-locally)) may be used to test the site before releasing it to the public.

## Serving Locally

The serve command may be used to test generated site files prior to releasing the site to the public. It exists as a final test before releases, and is not suitable for hosting on production environments. Nonetheless, it can be invoked by the following command:

```bash
npm run serve
```

## Deploying to GitHub Pages

The `deploy` command is used for deploying to GitHub pages. See the [Docusaurus site](https://docusaurus.io/docs/deployment) for documentation.

## Clearing Build Files

The `clear` command deletes automatically generated files (including build files). It can be invoked by running the following:
```bash
npm run clear
```

## Docusaurus

The `docusaurus` invokes the native Docusaurus command, displaying version info and usage instructions for internal commands. It may be invoked by running the following:
```bash
npm run docusaurus
```
