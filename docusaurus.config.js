// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Qat language docs',
  tagline: 'Envisioned to be superfast, modern systems language for efficient and maintainable software...',
  url: 'https://docs.qat.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qatlang', // Usually your GitHub org/user name.
  projectName: 'qat', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/qatlang/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'QAT docs',
        logo: {
          alt: 'Qat language logo',
          src: 'img/qat_logo.png',
        },
        items: [
          {
            href: 'https://github.com/qatlang/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Official Website',
                href: 'https://qat.dev',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://youtube.com/c/aldrinmathew',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/CNW3Uvptvd',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Compiler Repository',
                href: 'https://github.com/qatlang/qat',
              },
              {
                label: 'Docs Repository',
                href: 'https://github.com/qatlang/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aldrin Mathew, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
