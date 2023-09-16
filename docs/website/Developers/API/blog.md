---
title: Blog Route
description: Club Website Developer API
sidebar_position: 2
---

# Blog Route

The blog route interfaces with the blog [database model](/docs/website/Developers/Databases/models) and dynamically renders blog articles.

:::tip routes/blog.js

The blog route is defined in [/routes/blog.js](https://github.com/ufosc/Club_Website_2/blob/main/routes/blog.js) and operates on the `/api/blog` API path.

:::

## Bulk Retrieve Posts: (GET) /api/blog/

To index posts in the /blog and /admin pages, it was necessary to implement a route which returned an index of the most recent posts. Unlike the `GET: /api/blog/:id` route, which returns an HTML render of the blog, the `GET: /api/blog/` route returns the underlying JSON objects.

Although authentication is optional, non-authenticated users can only retrieve posts that are marked `status: published`.

### Request Parameters

| Parameter    | Description            |
|--------------|------------------------|
| JWT (cookie) | (Optional) Auth cookie |

### Sample Response

`Content-Type: application/json`
```json title="Content-Type: application/json"
[
	{
		"_id":"64be230c227074ba993f8e3f",
		"title":"post has been modified",
		"status":"draft",
		"previewImg":"/assets/blog_default_img.jpeg",
		"content":"my modified article",
		"subtitle":"my draft",
		"author":["zeim839"],
		"date":"2023-07-24T07:06:52.208Z",
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
curl -XGET 'https://ufosc.org/api/blog'
```

## Fetch Article Page: (GET) api/blog/:id

This route fetches articles by the specified URL ID parameter and returns them as rendered HTML. An error article is rendered if the ID is invalid or non-existent.

Articles whose status is not 'published' (e.g 'draft') are only visible to authenticated users. They do not render on the /blog page, but may be accessed by authenticated users if their ID is known. Generally, authenticated users may access these posts by clicking on the 'preview' button alongside their table entries in the [admin dashboard](/docs/website/admin).

### Request Parameters

| Parameter    | Description                                            |
|--------------|--------------------------------------------------------|
| :id (path)   | ID of the requested blog post.                         |
| JWT (cookie) | (Optional) Auth cookie for accessing restricted posts. |

### Example

```bash
curl -XGET 'https://ufosc.org/api/blog/<BLOG ID HERE>'
```

## Create Article: (POST) /api/blog/

This route consumes a JSON body and produces a new blog article. This route requires authentication.

### Request Parameters

Request body: `Content-Type: application/json`

| Parameter         | Description                                  |
|-------------------|----------------------------------------------|
| JWT (cookie)      | (Required) Auth cookie                       |
| title (body)      | (Required) Article title                     |
| status (body)     | (Required) Article status                    |
| previewImg (body) | (Optional) Article banner image URL          |
| content (body)    | (Optional) Article body text                 |
| subtitle (body)   | (Optional) Article subtitle                  |
| author (body)     | (Optional) JSON string array of author names |

### Response

The server responds with the newly created JSON blog object.

`Content-Type: application/json`
```json title="application/json"
{
	"_id":"64be231938d6d068d0732b50",
	"title":"new post",
	"status":"published",
	"previewImg":"/assets/blog_default_img.jpeg",
	"content":"my new article",
	"author":["zeim839"],
	"date":"2023-07-24T07:07:05.160Z","__v":0
}
```

If the request body is missing the required `title` or `status` keys, the following error will be returned:

```json title="routes/blog.js"
{ "error": "Missing field(s) in request body" }
```

If the client attempts to manually assign an ID, by including an `_id` or `id` key in the request body, the following error will be returned:

```json title="routes/blog.js"
{ "error": "Setting custom blog ID is prohibited" }
```

### Example

```bash
curl -XPOST --cookie "jwt=<AUTH COOKIE>" -H "Content-type: application/json" -d '{
	"title":"my blog title,
	"status":"published"
}' 'https://ufosc.org/api/blog/'
```

## Modify Article: (PUT) api/blog/:id

Modifies the existing article specified by the path parameter ':id'. This is an authenticated route.

### Request Parameters

Request body: `Content-Type: application/json`

| Parameter         | Description                                  |
|-------------------|----------------------------------------------|
| :id (path)        | ID of the requested blog post.               |
| JWT (cookie)      | (Required) Auth cookie                       |
| title (body)      | (Optional) Article title                     |
| status (body)     | (Optional) Article status                    |
| previewImg (body) | (Optional) Article banner image URL          |
| content (body)    | (Optional) Article body text                 |
| subtitle (body)   | (Optional) Article subtitle                  |
| author (body)     | (Optional) JSON string array of author names |

### Response

The server responds with the modified JSON blog object

`Content-Type: application/json`
```json title="application/json"
{
	"_id":"64be231938d6d068d0732b50",
	"title":"modified post",
	"status":"published",
	"previewImg":"/assets/blog_default_img.jpeg",
	"content":"my modified article",
	"author":["zeim839"],
	"date":"2023-07-24T07:07:05.160Z","__v":0
}
```

If the `_id` and `date` keys are omitted, then the above response example may also be used as a sample request body. Note that all schema keys are optional: only the key/values that the client wishes to modify need to be specified.

If the ':id' parameter is invalid, the following JSON object is returned:

```json title="routes/blog.js"
{ "error": "Invalid ID" }
```

If the ID is valid but not longer exists, the following JSON object is returned:
```json title="routes/blog.js"
{ "error": "ID does not exist" }
```

To maintain database collection consistency, and prevent unexpected collision/behavior from renamed article IDs, modifying the ID parameter of an article is prohibited. If a client attempts to send a JSON request body with an `id` or `_id` key, the following error will be returned:

```json title="routes/blog.js"
{ "error": "Setting custom blog ID is prohibited" }
```

If a client lacks sufficient authentication, a status 401-Forbidden error will be returned.

### Example

```bash
curl -XPUT --cookie "jwt=<AUTH COOKIE>" -H "Content-type: application/json" -d '{
	"previewImg":"/assets/blog_default_img.jpeg",
	"content":"my modified article",
	"author":["zeim839"]
}' 'https://ufosc.org/api/blog/<BLOG ID HERE>'
```

## Delete Article: (DELETE) api/blog/:id

Deletes the blog post specified by the path parameter ':id'. This is an authenticated route.

### Request Parameters

| Parameter    | Description                    |
|--------------|--------------------------------|
| :id (path)   | ID of the requested blog post. |
| JWT (cookie) | (Required) Auth cookie         |

### Response

The server responds with the JSON object of the deleted article.

`Content-Type: application/json`
```json title="Content-Type: application/json"
{
	"_id":"64be231938d6d068d0732b50",
	"title":"test post",
	"status":"published",
	"previewImg":"/assets/blog_default_img.jpeg",
	"content":"my article",
	"author":[],
	"date":"2023-07-24T07:07:05.160Z","__v":0
}
```

If the ':id' parameter is invalid, the following JSON object is returned:

```json title="routes/blog.js"
{ "error": "Invalid ID" }
```

If the ID is valid but not longer exists, the following JSON object is returned:
```json title="routes/blog.js"
{ "error": "Blog not found" }
```

If a client lacks sufficient authentication, a status 401-Forbidden error will be returned.

### Example

```bash
curl -XDELETE --cookie "jwt=<AUTH COOKIE>" 'https://ufosc.org/api/blog/<BLOG ID HERE>'
```
