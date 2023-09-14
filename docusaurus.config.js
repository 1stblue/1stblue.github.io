// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '1stblue.com',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://1stblue.github.io',
    // www.1stblue.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: '1stblue', // Usually your GitHub org/user name.
    projectName: 'www.1stblue.com', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans', 'en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/1stblue/1stblue.github.io/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/1stblue/1stblue.github.io/tree/main/',
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
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Elastic Pipe',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docsVersionDropdown',
                        position: 'left',
                        label: '产品',
                        dropdownActiveClassDisabled: false,
                        dropdownItemsAfter: [
                            {
                                href: '/markdown-page',
                                label: 'Elastic Pipe - Cloud',
                            },
                            {
                                href: '/markdown-page',
                                label: 'Elastic Pipe - Enterprise',
                            },
                            {
                                href: '/markdown-page',
                                label: 'Elastic Pipe - Partner',
                            },
                            {
                                href: '/markdown-page',
                                label: 'Elastic Pipe - Developer',
                            }
                        ]
                    },
                    {to: '/blog', label: '方案', position: 'left'},
                    {to: '/blog', label: '案例', position: 'left'},
                    {to: '/blog', label: '连接器', position: 'left'},
                    {to: '/blog', label: '生态', position: 'left'},
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: '文档',
                    },
                    {to: '/docs/intro', label: 'APIs', position: 'left'},
                    {to: '/blog', label: '博客', position: 'left'},
                    {to: '/blog', label: '活动', position: 'left'},
                    {
                        href: 'https://github.com/1stblue',
                        label: 'GitHub',
                        position: 'right',
                    }
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: '关于',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/1stblue',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} 1stblue.com`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
