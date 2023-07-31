---
title: Markdown
description: OSC Docs Markdown
sidebar_position: 4
---

# Markdown

Markdown is a lightweight markup language that allows you to write formatted text using a simple and intuitive syntax. It is commonly used for creating documentation, README files, blog posts, and more. This guide will introduce you to the basics of Markdown, enabling you to create formatted documents effortlessly.

Markdown plays a crucial role in the Docusaurus module as it is the primary content format for creating documentation pages, making it an essential part of the documentation workflow. This is a markdown language guide, to learn more about writing documentation with markdown, see [Documentation](/docs/osc-docs/writingdocs).

:::tip

To view this file's markdown code, scroll to the bottom of the page and click on "Edit this page."

:::

:::tip

You can test out writing code in markdown by using an [online markdown editor](https://dillinger.io/).

:::

## Headers

Headers are defined using hash (#) symbols before the text and demarcate sections in your documentation (titles, subtitles, and their constituent content). The number of hash symbols determines the header level. For example:

```markdown title="Markdown"
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

In Docusaurus, the above example will appears as below:

:::note Docusaurus Example

# Header 1
## Header 2
### Header 3
#### Header 4

:::

## Text Formatting

You can apply various text formatting styles in Markdown:

 * Bold: Enclose the text with double asterisks (`**text**`) or double underscores (`__text__`).
 * Italic: Enclose the text with single asterisks (`*text*`) or single underscores (`_text_`).
 * Strikethrough: Enclose the text with double tildes (`~~text~~`).
 * Code: Enclose the text with backticks (`` `code` ``).

 :::note Docusaurus Example
 Bold: **Bold Text!** <br />
 Italic: *Italic Text* <br />
 Strikethrough: ~~Strikethrough Text~~ <br />
 Code: `my code text`
 :::

## Lists

You can create both ordered and unordered lists:

Unordered List:

```markdown title="Markdown"
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3
```

Ordered List:
```markdown title="Markdown"
1. First item
2. Second item
3. Third item
```

:::note Docusaurus Example

Unordered list:
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

Ordered list:
1. First item
2. Second item
3. Third item

:::

## Links

You can add links in Markdown using square brackets and parentheses:

```markdown title="Markdown"
[Link Text](https://www.example.com)
```

## Images

You can include images using a similar syntax to links but with an exclamation mark at the beginning:

```
![Alt Text](image-url.jpg)
```

## Code Blocks

To display code blocks, enclose the code within triple backticks:

``````markdown
```js title="My Title"
console.log("Hello, Markdown!");
```
``````

:::note Docusaurus Example
```js title="My Title"
console.log("Hello, Markdown!");
```
:::

## Tables

Tables are created using vertical bars and hyphens:

```markdown title="Markdown"
| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

If you're finding this syntax difficult, you try using an online markdown table generator [here](https://tablesgenerator.com/markdown_tables).

:::note Docusaurus Example
| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
:::


## Blockquotes

To create blockquotes, use the greater than (>) symbol:

```markdown title="Markdown"
> This is a blockquote.
```

Example:
> This is a blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non augue quis ligula malesuada finibus. Fusce neque dolor, aliquet et ornare viverra, tempus vel sapien. Phasellus vitae commodo dolor.

## Escaping Characters

To escape special characters in Markdown, use a backslash (\\):

```markdown title="Markdown"
\*This text is not in italics\*
```

:::note Docusaurus Example
\*This text is not in italics\*
:::
