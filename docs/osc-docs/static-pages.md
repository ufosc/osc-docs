---
title: Static Pages
description: OSC Docs Static Pages
sidebar_position: 6
---

# Static Pages

You can create static pages that are not part of a documentation sub-site by creating JavaScript or Markdown files in the project's `src/pages` directory. By default, you'll be able to navigate to said pages by visiting the `/<FILE_NAME>` path of the website.

To add the site to the website's topmost navigation bar, navigate to the `themeConfig` property in `docusaurus.config.js` and add the following:

```js title="docusaurus.config.js"
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

:::tip

The OSC Docs homepage is an example of a non-documentation static page. You may find its source code (in Markdown) in the project's `src/pages/index.md` path.

:::
