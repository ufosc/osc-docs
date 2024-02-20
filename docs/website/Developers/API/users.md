---
title: Users Route
description: Club Website Developer API
sidebar_position: 6
---

# Users Route

The users route interfaces with the users  [database model](/docs/website/Developers/Databases/models) and serves users using their database ID.

:::tip routes/users.js

The users route is defined in [/routes/users.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/users.js) and operates on the `/api/users` API path.

:::

## Bulk Retrieve Users: (GET) /api/users/

To index users on the /admin page, it was necessary to implement a route which returned an index of the most recently created users. Unlike the `GET: /api/users/:id` route, which individual user metadata, the `GET: /api/users/` route returns all users in the database.

This is an authenticated route.

### Request Parameters

| Parameter    | Description            |
|--------------|------------------------|
| JWT (cookie) | (Required) Auth cookie |

### Sample Response

```json title="Content-Type: application/json"
[
	{
		"_id":"64bff624f6a34b73e74e7ddd",
		"username":"admin",
		"fullName":"admin",
		"role":"admin",
		"isAdmin":true,
		"date":"2023-07-25T16:19:48.161Z",
		"__v":0
	}
]
```

Empty response:

`Content-Type: application/json`
```json title="Content-Type: application/json"
[]
```

### Example

```bash
curl -XGET --cookie "jwt=<AUTH COOKIE>" 'https://ufosc.org/api/users'
```

## Fetch User: (GET) api/users/:id

This route fetches users by the specified URL ID parameter and returns them as a JSON object. This is an authenticated route.

### Request Parameters

| Parameter    | Description               |
|--------------|---------------------------|
| :id (path)   | ID of the requested user. |
| JWT (cookie) | (Optional) Auth cookie.   |

### Example

```bash
curl -XGET 'https://ufosc.org/api/users/<USER ID HERE>'
```

## Create User: (POST) /api/users/

This route consumes a JSON body and produces a new blog article. This route requires authentication.

### Request Parameters

Request body: `Content-Type: application/json`

| Parameter       | Description                                       |
|-----------------|---------------------------------------------------|
| JWT (cookie)    | (Required) Auth cookie                            |
| userame (body)  | (Required) Username, must be unique.              |
| password (body) | (Required) Password, must be > 6 chars.           |
| fullName (body) | (Optional) User full name                         |
| role (body)     | (Required) User role, any string.                 |
| isAdmin (body)  | (Required) Whether this user is an admin, boolean |

### Response

The server responds with the newly created JSON user object (the password is ommitted).

`Content-Type: application/json`
```json title="application/json"
{
	"_id":"64bff624f6a34b73e74e7ddd",
	"username":"admin",
	"fullName":"admin",
	"role":"admin",
	"isAdmin":true,
	"date":"2023-07-25T16:19:48.161Z",
	"__v":0
}
```

If the request body is missing the required fields, the following error will be returned:

```json title="routes/users.js"
{ "error": "Missing field(s) in request body" }
```

If the client attempts to manually assign an ID, by including an `_id` or `id` key in the request body, the following error will be returned:

```json title="routes/users.js"
{ "error": "Setting custom user ID is prohibited" }
```

If the username already exists, the following error is returned:

```json title="routes/users.js"
{ "error": "username already exists" }
```
### Example

```bash
curl -XPOST --cookie "jwt=<AUTH COOKIE>" -H "Content-type: application/json" -d '{
	"username": "myUser",
	"password":"123456",
	"role":"club manager",
	"isAdmin": false
}' 'https://ufosc.org/api/users/'
```

## Modify User: (PUT) api/users/:id

Modifies an existing user specified by the path parameter ':id'. This is an authenticated route.

### Request Parameters

Request body: `Content-Type: application/json`

| Parameter       | Description                                       |
|-----------------|---------------------------------------------------|
| :id (path)      | ID of the user.                                   |
| JWT (cookie)    | (Required) Auth cookie                            |
| userame (body)  | (Optional) Username, must be unique.              |
| password (body) | (Optional) Password, must be > 6 chars.           |
| fullName (body) | (Optional) User full name                         |
| role (body)     | (Optional) User role, any string.                 |
| isAdmin (body)  | (Optional) Whether this user is an admin, boolean |

### Response

The server responds with the modified JSON user object (password ommitted).

`Content-Type: application/json`
```json title="application/json"
{
	"_id":"64bff624f6a34b73e74e7ddd",
	"username":"admin",
	"fullName":"admin",
	"role":"admin",
	"isAdmin":true,
	"date":"2023-07-25T16:19:48.161Z",
	"__v":0
}
```

If the `_id` and `date` keys are ommitted, then the above response example may also be used as a sample request body. Note that all schema keys are optional: only the key/values that the client wishes to modify need to be specified.

If the ':id' parameter is invalid, the following JSON object is returned:

```json title="routes/users.js"
{ "error": "Invalid ID" }
```

If the ID is valid but not longer exists, the following JSON object is returned:
```json title="routes/users.js"
{ "error": "ID does not exist" }
```

To maintain database collection consistency, and prevent unexpected collision/behavior from renamed user IDs, modifying the ID parameter of users is prohibited. If a client attempts to send a JSON request body with an `id` or `_id` key, the following error will be returned:

```json title="routes/blog.js"
{ "error": "Setting custom user ID is prohibited" }
```

If a client lacks sufficient authentication, a status 401-Forbidden error will be returned.

### Example

```bash
curl -XPUT --cookie "jwt=<AUTH COOKIE>" -H "Content-type: application/json" -d '{
	"username": "myUser",
	"password":"123456",
	"role":"club manager",
	"isAdmin": false
}' 'https://ufosc.org/api/users/<USER ID HERE>'
```
## Delete User: (DELETE) api/users/:id

Deletes the user specified by the path parameter ':id'. This is an authenticated route.

### Request Parameters

| Parameter    | Description            |
|--------------|------------------------|
| :id (path)   | User's ID              |
| JWT (cookie) | (Required) Auth cookie |

### Response

The server responds with the JSON object of the deleted user (password ommitted).

`Content-Type: application/json`
```json title="Content-Type: application/json"
{
	"_id":"64bff624f6a34b73e74e7ddd",
	"username":"admin",
	"fullName":"admin",
	"role":"admin",
	"isAdmin":true,
	"date":"2023-07-25T16:19:48.161Z",
	"__v":0
}
```

If the ':id' parameter is invalid, the following JSON object is returned:

```json title="routes/users.js"
{ "error": "Invalid ID" }
```

If the ID is valid but not longer exists, the following JSON object is returned:
```json title="routes/users.js"
{ "error": "User not found" }
```

If the client attempts to delete the sole admin, the following JSON object is returned:
```json title="routes/users.js"
{ "error": "Deleting admin is prohibited" }
```

If a client lacks sufficient authentication, a status 401-Forbidden error will be returned.

### Example

```bash
curl -XDELETE --cookie "jwt=<AUTH COOKIE>" 'https://ufosc.org/api/users/<USER ID HERE>'
```
