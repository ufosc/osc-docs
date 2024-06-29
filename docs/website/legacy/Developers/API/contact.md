---
title: Contact Route
description: Club Website Developer API
sidebar_position: 3
---

# Contact Route

:::danger OUTDATED
This page is part of the documentation for release V1.0. This documentation is outdated and V1.0 is no longer maintained. See [index](/docs/website/) for the latest information.
:::

The contact route manages the website contact form. It validates email addresses and form input fields, and (if applicable) sends emails to both the OSC and form-user's email addresses.

:::tip routes/contact.js

The contact route is defined in [/routes/contact.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/contact.js) and operates on the `/api/edit` API path.

:::

## Submit Contact Form: (POST) /api/contact/

This route expects the contact form's field data (as JSON). If the data is successfully validated, it sends an email to the admin account notifying it of the new message, whilst also sending a receipt of the submitted form to the specified email address of the submitter.

Email protocol interfacing is achieved via an SMTP server, which receives and processes outgoing server mail. For configuration instructions, see [configuration](/docs/website/legacy/Developers/configuration).

### Request Parameters

| Parameter              | Description                |
|------------------------|----------------------------|
| FirstName (JSON, body) | The sender's first name    |
| LastName (JSON, body)  | The sender's last name     |
| Email (JSON, body)     | The sender's email address |
| Message (JSON, body)   | The sender's message       |

### Sample Response

If the request succeeded, a single 'Success' string will be returned.
