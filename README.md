# OSC-Docs
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme) ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/ufosc/osc-docs/node.js.yml) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![GitHub](https://img.shields.io/github/license/ufosc/osc-docs) ![GitHub issues](https://img.shields.io/github/issues/ufosc/osc-docs)

The OSC Docs website is a source of truth for projects and club activity at the University of Florida's Open Source Club. More specifically, it hosts user and developer documentation for the various projects started each semester. This project uses [Docusaurus](https://docusaurus.io/) to quickly and conveniently generate static sites from [Markdown](https://www.markdownguide.org/basic-syntax/) files.

This project is self-documenting. See [docs.ufosc.org](https://docs.ufosc.org).

## Install

Prerequisites:
1. [Git](https://git-scm.com/downloads)
2. [NodeJS & NPM](https://nodejs.org/)

Clone the repository:
```bash
git clone https://github.com/ufosc/osc-docs.git
```

Navigate to the installed directory and install the NodeJS dependencies:
```bash
cd osc-docs
npm install
```

## Usage

<b>Starting the webserver:</b>
```
npm start
```
You can access the website by visiting http://localhost:3000 on your browser.

<b>Linting & fixing:</b>
<br/>
This project adheres to the Javascript Standard syntax style, use linting to show you a list of syntax errors that you'll need to correct.
```
npm run lint
```
To automatically fix these, you can run:
```
npm run fix
```
Keep in mind that some syntax issues cannot be automatically resolved, in which case you'll need to run `npm run lint` again and resolve them manually.

## Maintainers
Maintained by the UF Open Source Club, can be contacted via [Discord](https://discord.gg/j9g5dqSVD8)

Current Maintainers:
- Michail Zeipekki @zeim839
- Daniel Wildsmith @danielwildsmith

## Contributing
All contributions are welcome and appreciated, so long as they adhere to the [license](#license). Contributors are urged to familiarize themselves with the [contribution guidelines](CONTRIBUTING.md).

## License
[AGPL-3.0-or-later](LICENSE.md) <br/>
Copyright (C) 2023 Open Source Club
