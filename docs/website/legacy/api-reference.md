---
title: API Reference
description: Club Website API Reference
sidebar_position: 4
---

:::danger OUTDATED
This page is part of the documentation for release V1.0. This documentation is outdated and V1.0 is no longer maintained. See [index](/docs/website/) for the latest information.
:::

:::caution Rate Limit

Routes are currently limited to 100-500 (may vary) requests per minute.

:::
:::note

The OSC Website API is intended for internal use only. Only non-authenticated public routes have been documented here. If you're seeking documentation for a self-hosted instance, refer to the [developers guide](/docs/website/Developers/API/) instead.

:::

## Bulk Retrieve Blog Posts: (GET) /api/blog/

To index posts in the /blog and /admin pages, it was necessary to implement a route which returned an index of the most recent posts. Unlike the `GET: /api/blog/:id` route, which returns an HTML render of the blog, the `GET: /api/blog/` returns the underlying JSON objects.

Although authentication is optional, non-authenticated users can only retrieve posts that are marked `status: published`.

### Request Parameters

| Parameter    | Description                    |
|--------------|--------------------------------|
| JWT (cookie) | (Optional) Auth cookie         |

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

## Fetch Blog Article Page: (GET) api/blog/:id

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

## GET /api/image/:id
Retrieves the individual blog image (as a file) specified by the path parameter `id`.

| Parameter | Description |
|-----------|-------------|
| :id (path)          |  ID of the requested image.           |

Example:
```bash
curl -XGET 'https://ufosc.org/api/image/<IMAGE ID HERE>'
```
