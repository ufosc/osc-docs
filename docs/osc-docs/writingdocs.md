---
title: Documentation
description: OSC Docs Writing Documentation
sidebar_position: 5
---

# Writing Documentation

Docusaurus is a powerful tool for creating documentation websites with ease. It simplifies the process of creating, organizing, and publishing documentation using Markdown as the primary content format. Markdown is a lightweight markup language that allows you to write formatted text, you can read more about it at the [Markdown Guide](/docs/osc-docs/markdown) page.


:::caution Installing the Project

It is highly recommended to have the OSC Docs repository installed on your system prior to modifying the code base. Installation of OSC Docs is documented in the [Installation](/docs/osc-docs/installation) guide.

:::

## Documentation Site Structure

Unlike most Docusaurus sites, which host documentation for a single project, the OSC Docs website organizes multiple projects into separate documentation sites (henceforth referred to as "sub-sites"). Each documentation sub-site resides in the project's 'docs' directory. In each sub-site's folder, a series of sub-folders and markdown files are stored. Docusaurus parses their structure and generates documentation sites automatically.

### Pages

Each file in a sub-site's folder will generate a separate documentation page. If there are multiple files in one folder, they will appear in alphabetical order

<img src="/img/osc-docs/osc-docs-structure-2.png" style={{ width: "100%", maxWidth: 600, border: "2px solid black" }} />

<img src="/img/osc-docs/osc-docs-structure-1.png" style={{ width: "100%", maxWidth: 600, border: "2px solid black" }} />

:::tip

Each file in the documentation directory appears as an entry (in alphabetical order) in the sub-site's navigation bar. If an 'index.md' file is added, then that'll be the first page visitors see when they navigate to the sub-site.

:::

### Folders

Similarly, you can create sub-folders to your documentation sub-site. Creating a folder in the sub-site directory and adding at least one file to it will create a dropdown menu in the sub-site's navigation bar.

<img src="/img/osc-docs/osc-docs-structure-3.png" style={{ width: "100%", maxWidth: 600, border: "2px solid black" }} />
<img src="/img/osc-docs/osc-docs-structure-4.png" style={{ width: "100%", maxWidth: 600, border: "2px solid black" }} />

:::caution

Sometimes, you might need to stop & restart docusaurus for new folders to take effect. Also, make sure that at least 1 file has been added to the sub-folder.

:::

### Customizing Order & Titles

If you wish to name a navigation menu page something other than its file name, you can add a metadata section to your markdown file, as in the example below:

```markdown
---
title: Introduction
description: OSC Docs Introduction
sidebar_position: 1
---
```

The `sidebar_position` key can also be used to rearrange the page's position in the navigation menu.

To customize folders and sub-menus, a separate metadata file needs to be created within the folder. The file must be called `_category_.json`, and assume the structure below:

```json
{
  "position": 3,
  "label": "Developers",
  "collapsible": true,
  "collapsed": true,
}
```

## Writing Documentation

Documentation is written in Markdown format. To learn about the basics of Markdown, see the [Markdown](/docs/osc-docs/markdown) guide.

To modify existing documentation, navigate to your desired project's subsite directory, and open your desired markdown (.md) file. Alternatively, if you wish to add a new page, simply create a new file and write up its content with [Markdown](/docs/osc-docs/markdown).

## Creating sub-sites

If, instead of modifying or adding to the documentation of an existing project, you wish to create a separate documentation site for a different project, you can do so by modifying the `docusaurus.config.js` file.

To add a new subsite, first make sure that you've created a subfolder for your project in the 'docs' directory. Then, navigate to the `plugins` section in `docusaurus.config.js` and append your desired information into the array:

```js title="docusaurus.config.js"
{
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'website',                 // a unique ID for your project
        path: 'docs/website',          // the path to your docs folder
        routeBasePath: 'docs/website', // the path on the website's URL
        editUrl: 'https://github.com/ufosc/osc-docs'
      }
    ],
  ]
}
```

### Adding the subsite to the navigation bar

To add your subsite to the website's navigation bar, navigate to the `themeConfig` property in `docusaurus.config.js` and add the following:

```js title="docusaurus.config.js"
// themeConfig.navbar attribute.
navbar: {
  title: 'OSC Docs',
  logo: {
    alt: 'OSC Logo',
    src: 'img/logo.png'
  },
  items: [
    // ....
    {
      to: 'docs/club',       // Your subsite routeBasePath
      label: 'Club Archive', // Label to appear on the navmenu.
      position: 'left'
    }
    // ...
  ]
}
```
:::tip Flagship Projects Only
Since navigation bar space is limited, please consider adding only flagship projects (i.e popular or actively maintained projects). The purpose of the navigation bar is provide high-visibility, convenient access to documentation pages; project that aren't being actively used or maintained should should be removed when new project sub-sites are created.
:::

### Adding the subsite to the footer
The site's footer has a section demarcated as "Projects" that tracks documentation subsites. It is an alternative to the navigation bar that can be used to expose lower-priority or less frequently used subsites. To add a subsite to the footer, navigate to the `themeConfig` property in `docusaurus.config.js` and add your label and path to the themeConfig.footer.links object:

```js title="docusaurus.config.js"
// See the themeConfig.footer.links attribute.
footer: {
  style: 'dark',
  links: [{
    title: 'Projects',
    items: [
      {
        label: 'OSC Website',
        to: '/docs/website'
      },
      {
        label: 'OSC Docs',   // Subsite label
        to: '/docs/osc-docs' // Subsite routeBasePath
      },
    ]
  },
  // ...
}
```

### Adding the subsite to the home page
The home page index should list all available projects, regardless of priority or intended visibility. All project subsites should be listed. To add a project to the index, navigate to the "Documentation Index" header in 'src/pages/index.md':

```md title="src/pages/index.md"
## Documentation Index

* [Club Archive](/docs/club): Archive of club presentations, notes, etc.
* [OSC Website](/docs/website): User & Developer Documentation for the [OSC website](https://ufosc.org).
* [OSC Docs](/docs/osc-docs): Developer Documentation for the OSC Docs website.
* [Swamp Scheduler](/docs/swamp-scheduler): Developer Documentation for the Swamp Scheduler web-app.
```

## Previewing your Changes Live

Starting a docusaurus server will allow you to instantly preview your markdown changes on your browser. It can be started by navigating to your project's directory, opening a terminal, and typing in the following command:

```bash
npm start
```

For more information, see the [Usage](/docs/osc-docs/usage) section. You must have the project and its dependencies installed, if you don't, then refer to the [Installation](/docs/osc-docs/installation) guide.
