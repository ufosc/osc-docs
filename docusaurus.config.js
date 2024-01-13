// @ts-check
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext')
const lightCodeTheme = require('prism-react-renderer/themes/shadesOfPurple')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UF OSC Docs',
  tagline: 'Docs & Tutorials for UF Open Source Club Developers',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.ufosc.org',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ufosc', // Usually your GitHub org/user name.
  projectName: 'osc-docs', // Usually your repo name.
  deploymentBranch: 'deployment',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/club',
          routeBasePath: 'docs/club',
          editUrl: 'https://github.com/ufosc/osc-docs/blob/main'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'website',
        path: 'docs/website',
        routeBasePath: 'docs/website',
        editUrl: 'https://github.com/ufosc/osc-docs/blob/main'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'osc-docs',
        path: 'docs/osc-docs',
        routeBasePath: 'docs/osc-docs',
        editUrl: 'https://github.com/ufosc/osc-docs/blob/main'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'swamp-scheduler',
        path: 'docs/swamp-scheduler',
        routeBasePath: 'docs/swamp-scheduler',
        editUrl: 'https://github.com/ufosc/osc-docs/blob/main'
      }
    ]
  ],

  themeConfig: ({
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'OSC Docs',
      logo: {
        alt: 'OSC Logo',
        src: 'img/logo.png'
      },
      items: [{
        to: 'docs/club',
        label: 'Club Archive',
        position: 'left'
      },
      {
        to: 'docs/website',
        label: 'OSC Website',
        position: 'left'
      },
      {
        to: 'docs/osc-docs',
        label: 'OSC Docs',
        position: 'left'
      },
      {
        to: 'docs/swamp-scheduler',
        label: 'Swamp Scheduler',
        position: 'left'
      },
      {
        to: 'https://osc-proximity-documentation.vercel.app/guide/what-is-proximity.html',
        label: 'Earshot',
        position: 'left'
      },
      {
        href: 'https://ufosc.org',
        label: 'ufosc.org',
        position: 'right'
      },
      {
        href: 'https://github.com/ufosc',
        label: 'GitHub',
        position: 'right'
      }
      ]
    },
    footer: {
      style: 'dark',
      links: [{
        title: 'Projects',
        items: [{
          label: 'OSC Website',
          to: '/docs/website'
        },
        {
          label: 'OSC Docs',
          to: '/docs/osc-docs'
        },
        {
          label: 'Swamp Scheduler',
          to: '/docs/swamp-scheduler'
        }
        ]
      },
      {
        title: 'Community',
        items: [{
          label: 'Instagram',
          href: 'https://www.instagram.com/uf_osc/'
        },
        {
          label: 'Discord',
          href: 'https://discord.com/invite/Gsxej6u'
        },
        {
          label: 'Facebook',
          href: 'https://www.facebook.com/groups/ufosc/'
        }
        ]
      },
      {
        title: 'More',
        items: [{
          label: 'Home',
          href: 'https://ufosc.org'
        },
        {
          label: 'Blog',
          href: 'https://ufosc.org/blog'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/ufosc'
        }
        ]
      }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UF Open Source Club. Licensed under AGPL-3.0-or-later`
    },
    prism: {
      darkTheme: darkCodeTheme,
      lightTheme: lightCodeTheme
    }
  })
}

module.exports = config