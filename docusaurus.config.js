// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Plamen Totev's Blog",
  url: 'https://plamentotev.github.io',
  baseUrl: '/',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      metadata: [
        // Override the Docusaurus default (summary_large_image)
        { name: 'twitter:card', content: 'summary' },
        // Add additional metadata
        { name: 'twitter:site', content: '@TotevPlamen' },
        { name: 'twitter:creator', content: '@TotevPlamen' },
      ],
      navbar: {
        title: "Plamen Totev's Blog",
        items: [
          {
            href: 'https://github.com/plamentotev/plamentotev.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/ptotev/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://twitter.com/TotevPlamen',
            label: 'Twitter',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'kotlin', 'properties'],
      },
    }),
};

module.exports = config;
