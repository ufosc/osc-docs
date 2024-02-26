---
title: Accessing Resources
description: OWS Resource API
sidebar_position: 1
---

# Accessing Authenticated Resources

Accessing authenticated resources using the OWS API is quite easy, provided that you've set up a sufficiently permissioned client. This article assumes that you're familiar with the [Integrating with OAuth2](/docs/ows/usage/oauth2) section. Accessing authenticated resources essentially comes down to including the user's access token in an `Authorization` header.

:::tip Prerequisites
This section assumes that you've registered a client and have retrieved a user's access token. For more information, consult the [Integrating with OAuth2](/docs/ows/usage/oauth2) article.
:::

## Note on Permissions
As mentioned in [Integrating with OAuth2](/docs/ows/usage/oauth2), your client application may have greater or fewer privileges according to whether it is a confidential or public client - authorization grant or implicit grant scheme, respectively. Additionally, each client may only access as much data as is granted to it by the user. This is configured by the "permissions" section in the client signup process.

Modifying a client's permissions is prohibited for security reasons. If you'd like to modify permissions, you'll need to create a new client and ask your users to authorize themselves once more.

## Authorization Header
To access a resource on behalf of a user, you'll need to have an [access token](/docs/ows/usage/oauth2). The access token is attached to an authorization header according to the [RFC 6750 bearer token](https://datatracker.ietf.org/doc/html/rfc6750) specification.

The Authorization Header is an HTTP header. It is constructed as follows:
```
Authorization: Bearer <ACCESS_TOKEN>
```

Where `<ACCESS_TOKEN>` is the access token received from the user. The access token and `Bearer` keywords must be separated by a single space character.

You'll need to check for errors after each request. Errors are returned in JSON format, as well as in the `WWW-Authenticate` format specified in RFC6750. The JSON format is included in the body, and assumes the following form:
```json
{
    "error": "<ERROR_TYPE>",
    "error_description": "<ERROR_MSG>",
}
```

Where `<ERROR_TYPE>` is one of `invalid_request`, `invalid_token`, or `insufficient_scope`, and `<ERROR_MSG>` is a human-readable description of the error. The error will likewise be attached to the `WWW-Authenticate` header, which should be received as part of the response. It will assume the format below:
```
WWW-Authenticate: Bearer scope="<SCOPES>" realms="<REALMS>" error="<ERROR>" error_description="<ERROR_MSG>"
```

Where `<SCOPES>` specifies the client permissions required to access this route, `<REALMS>` specifies the user permissions for the route, and the rest of the parameters are equivalent to the JSON example.

## Resources
:::warning UNSTABLE
OWS is currently unstable. There is no guarantee that the resources below will be consistent across future releases..
:::

This section lists some of the resources accessible from the OWS API. In the future, this section will be replaced by a detailed API reference.
* (GET) /client/:id -- Get information on a client by referencing its Client ID.
* (GET) /user -- Get information on the user whose access token is specified in the Authorization header.
* (PUT) /user -- Modify the user whose access token is currently being used.
* (GET) /users -- Get a paginated list of users.
* (DELETE) /user/:id -- Delete the user with the specified ID.
* (GET) /clients -- Get a paginated list of clients.

To retrieve the user's information and finalize authentication, a client simply needs to call the `/user` route, which will return all private user information that the client is authorized to access.
