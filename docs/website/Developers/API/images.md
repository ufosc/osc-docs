---
title: Images Route
description: Club Website Developer API
sidebar_position: 5
---

# Images Route

The blog route interfaces with the images [database model](/docs/website/Developers/Databases/models) and serves images using their database ID.

:::tip routes/images.js

The images route is defined in [/routes/images.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/images.js) and operates on the `/api/image` API path.

:::

## Bulk Retrieve Images: (GET) /api/image/

To index images on the /admin page, it was necessary to implement a route which returned an index of the most recently uploaded images. Unlike the `GET: /api/image/:id` route, which returns the actual image file, the `GET: /api/image/` route returns the underlying JSON objects.

This is an authenticated route.

### Request Parameters

| Parameter    | Description            |
|--------------|------------------------|
| JWT (cookie) | (Required) Auth cookie |

### Sample Response

```json title="Content-Type: application/json"
[
	{
		"_id":"64bff624f6a34b73e74e7de1",
		"filename":"1689501903131-459608087.png",
		"description":"lorem ipsum dolor",
		"path":"test/assets/1x1.png",
		"date":"2023-07-25T16:19:48.163Z","__v":0
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
curl -XGET --cookie "jwt=<AUTH COOKIE>" 'https://ufosc.org/api/image'
```

## Fetch Image File: (GET) api/image/:id

This route fetches image files by the specified URL ID parameter and returns them. An error is returned if the ID is invalid or non-existent.

### Request Parameters

| Parameter  | Description                    |
|------------|--------------------------------|
| :id (path) | ID of the requested blog post. |

### Example

```bash
curl -XGET 'https://ufosc.org/api/image/<IMAGE ID HERE>'
```

## Upload Image: (POST) /api/image/

This route consumes a `multipart/form-data` form, with a single image upload demarcated by the 'File' form field. To see an example submission, see: [public/js/editDb.js](https://github.com/ufosc/Club_Website_2/blob/main/public/js/editDb.js#L141). This is an authenticated route.

### Request Parameters

Request body: `Content-Type: multipart/form-data`

| Parameter                        | Description                    |
|----------------------------------|--------------------------------|
| JWT (cookie)                     | (Required) Auth cookie         |
| Description (form field)         | (Required) Image Description   |
| File (form field, as image file) | (Required) .png or .jpeg image |

### Response

The Image metadata.

`Content-Type: application/json`
```json title="application/json"
{
	"_id":"64bff624f6a34b73e74e7de1",
	"filename":"1689501903131-459608087.png",
	"description":"lorem ipsum dolor",
	"path":"test/assets/1x1.png",
	"date":"2023-07-25T16:19:48.163Z","__v":0
}
```
If the uploaded image bit alignment is wrong, the following will be returned:

```json title="routes/images.js"
{ "error": "Bad File Encoding" }
```

If the file type is wrong, the following will be returned:

```json title="routes/images.js"
{ "error": "bad file type: use .png or .jpeg instead" }
```

If the image File or description are missing, the following will be returned:
```json title="routes/images.js"
{ "error": "expected image and description" }
```

### Example

See [public/js/editDb.js](https://github.com/ufosc/Club_Website_2/blob/main/public/js/editDb.js#L141).

## Delete Image: (DELETE) api/image/:id

Deletes an image from the database. This is an authenticated route.

### Request Parameters

| Parameter    | Description            |
|--------------|------------------------|
| :id (path)   | ID of the image.       |
| JWT (cookie) | (Required) Auth cookie |

### Response

The server responds with the JSON object of the deleted image.

`Content-Type: application/json`
```json title="application/json"
{
	"_id":"64bff624f6a34b73e74e7de1",
	"filename":"1689501903131-459608087.png",
	"description":"lorem ipsum dolor",
	"path":"test/assets/1x1.png",
	"date":"2023-07-25T16:19:48.163Z","__v":0
}
```
If the ':id' parameter is invalid, the following JSON object is returned:

```json title="routes/images.js"
{ "error": "Invalid ID" }
```

If the ID is valid but not longer exists, the following JSON object is returned:
```json title="routes/images.js"
{ "error": "ID does not exist" }
```

If a client lacks sufficient authentication, a status 401-Forbidden error will be returned.
