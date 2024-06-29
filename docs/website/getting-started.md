---
title: Getting Started
description: Club Website Getting Started
sidebar_position: 2
---

This post will help get your development environment set up such that you can develop, test, write blog/project content, or deploy the OSC website.

The project is built using the [GatsbyJS](https://www.gatsbyjs.com/) framework, which is a static site builder based on [ReactJS](https://react.dev/). You do not need to be familiar with either of these technologies to produce blog/project content, but getting a live environment set up where you can see your changes immediately reflected on the browser is extremely helpful. If you're interested in learning web-dev fundamentals, we recommend reading our [HTML](/docs/club/resources/html), [JavaScript](/docs/club/resources/javascript), and [CSS](/docs/club/resources/css) guides.

## Downloading the project

The project is hosted on GitHub, you can find the download page by clicking [here](https://github.com/ufosc/Club_Website_2). Once you've loaded the GitHub page, you may download the codebase by clicking on the green `code` button and selecting `Download zip`. Alternatively, if you have [Git](https://git-scm.com/) installed, you can clone the repository via your console/terminal:

```bash
git clone https://github.com/ufosc/Club_Website_2.git
cd Club_Website_2
```

## Installing NodeJS
You will need to install [NodeJS](https://nodejs.org/en) to run the project. NodeJS is a JavaScript execution environment that allows you to run server-side JavaScript code. It is used to test, build, and deploy the project.

## Installing Dependencies
Assuming you've installed NodeJS, you can install the project's dependencies with the following command:
```bash
npm install --force
```

If you're unsure how to run commands on a console or terminal, we suggest reading our [Bash](/docs/club/resources/bash) guide.

## Running the site
At this point, you're ready to start a development server that hosts the website on your local machine. To get started, run the following command:
```bash
npm run develop
```

The website may be accessed at the following URL: `http://localhost:8000`.
