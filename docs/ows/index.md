---
title: Introduction
description: OWS Introduction
sidebar_position: 1
---

# Introduction
<img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/ufosc/OpenWebServices/node.js.yml?label=NodeJS%20Build" /> <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/ufosc/OpenWebServices/go.yml?label=Go%20Build" /> <img alt="GitHub License" src="https://img.shields.io/github/license/ufosc/OpenWebServices" /> <img alt="GitHub issues" src="https://img.shields.io/github/issues/ufosc/OpenWebServices" />

<br /><br />
<img src="https://i.imgur.com/SpaZ5j2.png" width={700}/>

OpenWebServices is the UF Open Source Club's Microservices project. It currently implements a custom OAuth2 server, SMTP relay, and account management dashboard. It hopes to establish a common set of developer and project infrastructure services for use across the Open Source Club's projects. All microservices integrate with Kubernetes.

## Install

This project uses the [Go compiler](https://go.dev/) and [NodeJS](https://nodejs.org/en).
```bash
git clone https://github.com/ufosc/OpenWebServices.git
cd OpenWebservices/dashboard
npm i
```

## Quick Start
The project consists of three components: the authentication (Oauth2) server, the dashboard frontend, and the websmtp relay server. To get started, begin by launching the auth server:
```bash
cd oauth2
go run ./...
```

In a separate terminal, launch the NextJS dashboard:
```bash
cd dashboard
npm run dev
```

## Maintainers
Maintained by the UF Open Source Club, can be contacted via [Discord](https://discord.gg/j9g5dqSVD8)

Current Maintainers:
- Michail Zeipekki @zeim839
- Daniel Wildsmith @danielwildsmith

## License
[AGPL-3.0](https://github.com/ufosc/OpenWebServices/blob/main/LICENSE)

Copyright (C) 2024 Open Source Club
