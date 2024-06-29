---
title: Publishing News
description: Club Website Publishing News
sidebar_position: 4
---

# Publishing News

News can be published by creating markdown files in the `/src/content/` directory. Markdown is a markup language for writing on the web, it is explained in the [Markdown guide](/docs/osc-docs/markdown).

:::tip
To preview your article as it will appear on the website and see updates in real-time as you make changes, ensure that the development server is running by executing the command `npm run develop`.
:::

## Creating a new post

Begin by creating a new file using the following naming convention:
```
YYYY-MM-DD-<article-title>.md
```

`.md` is the file extension for markdown files. Now, open the file and paste the following header:

```md
---
slug: "/2024-spring-first-gbm"
date: "2024-01-16"
title: "Spring 2024: First GBM"
author: ["Admin"]
featuredImage: ../images/blog/2024-01-16-spring-first-gbm.jpeg
subtitle: January 16th, 5:00-6:00pm, Atlas Lab (Weimar Basement)
---
```

You must specify a unique slug, which is the relative URL at which your article will be hosted. You must also add a `featuredImage`, which is used as a thumbnail for your post. You can add a picture to the `/src/images/` directory and reference it in your markdown file by modifying the relative URL in the `featuredImage` attribute.

You can also specify multiple authors, for example:
```md
author: ["Author 1", "Author 2", "Author 3"]
```

## Adding body text

To add body text to a markdown file, you simply write the text as you would in any plain text document. Markdown provides a straightforward syntax for formatting the text. For example, you can create paragraphs by leaving a blank line between blocks of text. To emphasize text, you can use asterisks for italics (e.g., `*italic*`) and double asterisks for bold (e.g., `**bold**`). You can also create lists by starting lines with dashes or numbers, and add headers using one or more hash symbols (e.g., `# Header 1`, `## Header 2`). Links can be included using square brackets for the link text followed by parentheses containing the URL (e.g., `[ufosc](https://ufosc.org)`). Overall, markdown's simplicity makes it an efficient way to format and structure your text.

## Adding Images

To add an image to a Markdown file, you use the syntax `![alt text](image_url)`. The `alt text` is a description of the image that will be displayed if the image cannot be shown, and it is also used by screen readers for accessibility. The `image_url` is the path to the image file, which can be a relative path if the image is stored in the same directory as the Markdown file, or an absolute URL if the image is hosted online. For example, to add an image named "example.png" stored in the same directory, you would write `![Example Image](example.png)`. To add an image hosted online, you might write `![Online Image](https://example.com/image.png)`.
