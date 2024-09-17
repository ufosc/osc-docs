---
title: Introduction
description: Introduction to the Open Source Club website
sidebar_position: 1
---

This page hosts the documentation for the Open Source Club's (OSC) websites. OSC currently maintains two separate websites, the [Landing site](/docs/website/ufosc/introduction) and [Documentation Site](/docs/website/docs-ufosc/introduction). The separation intends to optimize mutually-exclusive concerns: the landing site aims for maximal performance and accessibility, whereas the documentation site seeks developer convenience (particularly for non-technical contributors).

Both websites are live and may be accessed through [ufosc.org](https://ufosc.org) or [docs.ufosc.org](https://docs.ufosc.org).

## Landing Site
<img src="https://i.imgur.com/5k2EIUA.png" width="90%" height="90%" />

The landing site is the main UF Open Source Club website. It serves as a general hub of information concerning the club's operations at the University of Florida. We originally intended to integrate the site with docusaurus (i.e. to make it part of the documentation site), but found the docusaurus framework too restrictive and opinionated for our users' needs. Instead, we rebuilt the site from scratch using the GatsbyJS framework, which enabled us to build beautiful interactive components, integrate our content management system with GraphQL, and perform on-the-fly optimizations for the best user experience.

The landing site hosts information on current OSC projects, which we automatically generate into dedicated pages from project specification files. Similarly, it contains a news/blog page, where Markdown documents are statically compiled into articles.

 * The Landing site may be accessed at [ufosc.org](https://ufosc.org).
 * The documentation for the landing site is hosted [here](/docs/website/ufosc/introduction).

## Documentation Site
The documentation site hosts project documentation, meeting presentations/recordings, and programming resources. It is primarily used by current club members and project contributors for retrieving documents and project specifications. We use the Docusaurus framework because it makes it extremely easy to set up dedicated pages and to accommodate a great variety of different media. It also makes it *extremely* easy for non-technical contributors to set up project documentation.

 * The documentation site may be accessed at [docs.ufosc.org](https://docs.ufosc.org).
 * The documentation for the documentation site is hosted [here](/docs/website/docs-ufosc/introduction).
