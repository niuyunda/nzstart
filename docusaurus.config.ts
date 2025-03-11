import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'NZ 生存指南',
  tagline: '在新西兰快速站稳脚跟',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nzstart.co.nz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'niuyunda', // Usually your GitHub org/user name.
  projectName: 'nzstart', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/niuyunda/nzstart/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/niuyunda/nzstart/tree/main/blog',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'NZ 生存指南',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        // {to: '/blog', label: '博客', position: 'left'},
        // {
        //   href: 'https://github.com/niuyunda/nzstart',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   // {
      //   //   title: '文档',
      //   //   items: [
      //   //     {
      //   //       label: '指南',
      //   //       to: '/docs/intro',
      //   //     },
      //   //   ],
      //   // },
      //   // {
      //   //   title: 'Community',
      //   //   items: [
      //   //     {
      //   //       label: 'Stack Overflow',
      //   //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //   //     },
      //   //     {
      //   //       label: 'Discord',
      //   //       href: 'https://discordapp.com/invite/docusaurus',
      //   //     },
      //   //     {
      //   //       label: 'X',
      //   //       href: 'https://x.com/docusaurus',
      //   //     },
      //   //   ],
      //   // },
      //   {
      //     title: '导航',
      //     items: [
      //       {
      //         label: '文档',
      //         to: '/docs/intro',
      //       },
      //       {
      //         label: '博客',
      //         to: '/blog',
      //       },
      //       // {
      //       //   label: 'GitHub',
      //       //   href: 'https://github.com/facebook/docusaurus',
      //       // },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} NZ 生存指南`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
