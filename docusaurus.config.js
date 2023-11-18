// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
export default {
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
          feedOptions: {
            limit: false,
          },
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
        additionalLanguages: ['bash', 'java', 'json', 'kotlin', 'properties'],
      },
    }),

    plugins: [
      // Configure Webpack
      () => ({
        configureWebpack() {
          return {
            module: {
              rules: [
                // When importing files from the example directory, import their source as text
                {
                  test: path.resolve(__dirname, 'src/examples/'),
                  // Excludind markdown files as we want to render them as React components.x
                  // Loading them as source files would break that.
                  exclude: [
                    /\.md$/,
                  ],
                  type: 'asset/source',
                },
              ],
            },
          };
        },
      }),
    ],
};
