---
title: Configuring Docusaurus
description: OSC Docs Configuring Docusaurus
sidebar_position: 7
---

# Configuring Docusaurus

This guide discusses modifying the `docusaurus.config.js` file, which includes configurations of the website's features and design template.

## Introduction

The docusaurus.config.js file is a crucial configuration file in a Docusaurus project. It allows you to customize various aspects of your documentation site, including the site metadata, themes, plugins, and more. In this guide, we'll walk you through the essential options you can modify in the docusaurus.config.js file to tailor your Docusaurus project to your needs.

## Prerequisites

Ensure you've installed the project's repository and its dependencies. If not, refer to the [Installation](/docs/osc-docs/installation) guide.

## Step 1: Locate the docusaurus.config.js File
In your Docusaurus project directory, you'll find the `docusaurus.config.js` file. It's at the root level of your project. Open this file in a text editor of your choice.

## Step 2: Basic Site Configuration

### a. 'title' and 'tagline'

```js title="docusaurus.config.js"
const config = {
  title: 'My Documentation Site',
  tagline: 'Documentation made easy',
  // ... other configuration options ...
}
```

Modify the title and tagline properties to reflect the name and tagline of your documentation site. These will appear in the site header and browser tab.

### b. url and baseUrl

```js title="docusaurus.config.js"
const config = {
  // ...
  url: 'https://www.example.com',
  baseUrl: '/',
  // ... other configuration options ...
}
```

Update the url and baseUrl properties to match the URL where you'll host your documentation site. If your site is hosted in a subdirectory, adjust the baseUrl accordingly.

## Step 3: Customize Themes

### a. 'themeConfig'

```js title="docusaurus.config.js"
const config = {
  // ...
  themeConfig: {
    navbar: {
      title: 'My Documentation Site',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.png',
      },
      // ... other navbar options ...
    },
    // ... other theme configuration options ...
  },
}
```

The `themeConfig` option allows you to customize the appearance and behavior of your documentation site. For example, you can modify the navbar's title, logo, and other settings to fit your branding.

## Step 4: Configure the Sidebar

```js title="docusaurus.config.js"
const config = {
  // ...
  themeConfig: {
    sidebar: {
      // Sidebar items for the documentation pages
      docs: [
        {
          type: 'doc',
          id: 'getting-started',
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: ['tutorial-1', 'tutorial-2'],
        },
      ],
      // ... other sidebar configuration options ...
    },
    // ... other theme configuration options ...
  },
}
```
In the `sidebar` option, you can organize your documentation pages and group them under categories. You can specify individual documentation pages using `type: 'doc'` and `id`, or you can create category-based groups using `type: 'category'`.


## Step 5: Add Plugins (Optional)

```js title="docusaurus.config.js"
const config = {
  plugins: [
    // Add your plugins here
  ],
  // ... other configuration options ...
}
```

If you want to enhance your documentation site with additional features, you can add plugins. Docusaurus has a rich ecosystem of plugins that you can integrate to extend functionality.

For instance, the OSC Docs website uses the "plugin-content-docs" plugin to create multiple documentation sites (as opposed to the default option of only one). To create a documentation site, first make sure that you've created a subfolder for your project in the 'docs' directory. Then, navigate to the plugins section in docusaurus.config.js and append your desired information into the array:
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

## Step 6: Save and Apply Changes

Once you have made the desired modifications to the docusaurus.config.js file, save the changes and close the file.

## Step 7: Preview Your Changes

To see your modifications in action, run the development server (you must open a terminal to the project's root folder):

```bash
npm start
```
Now, open your web browser and navigate to http://localhost:3000 to preview your updated Docusaurus documentation site with the custom configurations.

For more usage documentation, refer to the [Usage](/docs/osc-docs/usage) section.
