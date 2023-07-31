---
title: Edit Route
description: Club Website Developer API
sidebar_position: 4
---

# Edit Route

The edit route renders the 'edit' pages that enable admins to create and modify articles, images, and other users. They return templated EJS sites that automatically fetch the requested resource's data and render it into editable HTML forms.

This set of routes is responsible for returning one of two possible options - both via the same EJS templates - for each form:

1. An empty form for creating new object instances.
2. A partially filled form for modifying existing instances.

:::tip routes/edit.js

The edit route is defined in [/routes/edit.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/edit.js) and operates on the `/api/edit` API path.

:::

## Create new Blog Entry: (GET) /api/edit/blog

This route returns the blog entry creation form with no pre-filled fields. The form's template is implemented in [/views/edit-blog.ejs](https://github.com/ufosc/Club_Website_2/blob/main/views/edit-blog.ejs).

This route is authenticated. It responds with an HTML page.

### Request Parameters

| Parameter    | Description            |
|--------------|------------------------|
| JWT (cookie) | (Required) Auth cookie |

### Example

```bash
curl -XGET --cookie "jwt=<AUTH COOKIE>" 'https://ufosc.org/api/edit/blog'
```

## Modify Existing Blog Entry: (GET) /api/edit/blog/:id

This route returns an HTML form, filled with pre-existing blog post data, that enables an admit to modify the specified blog post. This is an authenticated route. It responds with an HTML page.

### Request Parameters

| Parameter    | Description               |
|--------------|---------------------------|
| ID (path)    | ID of blog post to modify |
| JWT (cookie) | (Required) Auth cookie    |

### Response

Responds with an HTML page of the blog modification form.

If the object ID is invalid, the following JSON error is returned:
```json title="application/json"
{ "error": "The article you've tried to access no longer exists" }
```

If the object ID is valid but cannot be found, the following JSON error is returned:
```json title="application/json"
{ "error": "Article not found" }
```

If the client is not authenticated, a 403 forbidden error will be returned.

### Example

```bash
curl -XGET --cookie "jwt=<AUTH COOKIE>" 'https://ufosc.org/api/edit/blog/<BLOG ID HERE>'
```

## Create new User: (GET) /api/edit/user

This route returns the user creation form with no pre-filled fields. The form's template is implemented in [/views/edit-user.ejs](https://github.com/ufosc/Club_Website_2/blob/main/views/edit-user.ejs).

This route is authenticated. It responds with an HTML page.

### Request Parameters

| Parameter    | Description            |
|--------------|------------------------|
| JWT (cookie) | (Required) Auth cookie |

### Example

```bash
curl -XGET --cookie "jwt=<AUTH COOKIE>" 'https://ufosc.org/api/edit/user'
```

## Modify Existing User: (GET) /api/edit/user/:id

This route returns an HTML form, filled with pre-existing user data, that enables an admit to modify the specified user. This is an authenticated route. It responds with an HTML page.

### Request Parameters

| Parameter    | Description            |
|--------------|------------------------|
| ID (path)    | ID of user to modify   |
| JWT (cookie) | (Required) Auth cookie |

### Response

Responds with an HTML page of the blog modification form.

If the object ID is invalid, the following JSON error is returned:
```json title="application/json"
{ "error": "The user you've tried to access no longer exists" }
```

If the object ID is valid but cannot be found, the following JSON error is returned:
```json title="application/json"
{ "error": "User not found" }
```

If the client is not authenticated, a 403 forbidden error will be returned.

### Example

```bash
curl -XGET --cookie "jwt=<AUTH COOKIE>" 'https://ufosc.org/api/edit/user/<USER ID HERE>'
```

## Upload new image: (GET) /api/edit/image

This route returns the image upload form with no pre-filled fields. The form's template is implemented in [/views/edit-image.ejs](https://github.com/ufosc/Club_Website_2/blob/main/views/edit-image.ejs).

Since images are minimally customizable, their modification form does not exist. Instead, users may delete an existing image and replace it by uploading a new one.

This route is authenticated. It responds with an HTML page.

### Request Parameters

| Parameter    | Description            |
|--------------|------------------------|
| JWT (cookie) | (Required) Auth cookie |

### Example

```bash
curl -XGET --cookie "jwt=<AUTH COOKIE>" 'https://ufosc.org/api/edit/image'
```
