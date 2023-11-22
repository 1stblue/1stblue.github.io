// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config();

const redirectJson = require("./redirects.json");
const tutorialData = require("./tutorial-units");

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
            "@docusaurus/preset-classic",
            {
                docs: Boolean(process.env.DISABLE_DOCS)
                    ? false
                    : {
                          path: "./docs",
                          sidebarPath: require.resolve("./sidebars.js"),
                          editUrl:
                          "https://github.com/1stblue/1stblue.github.io/tree/main/",
                          showLastUpdateAuthor: true,
                          showLastUpdateTime: true,
                          disableVersioning:
                              process.env.DISABLE_VERSIONING === "true",
                          versions: {
                              current: {
                                  label: "4.xx.xx",
                              },
                          },
                          lastVersion: "current",
                          admonitions: {
                              tag: ":::",
                              keywords: [
                                  "additional",
                                  "note",
                                  "tip",
                                  "info-tip",
                                  "info",
                                  "caution",
                                  "danger",
                                  "sourcecode",
                                  "create-example",
                              ],
                          },
                      },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve("./src/refine-theme/css/fonts.css"),
                        require.resolve("./src/refine-theme/css/custom.css"),
                        require.resolve("./src/css/custom.css"),
                        require.resolve("./src/css/split-pane.css"),
                        require.resolve("./src/css/demo-page.css"),
                    ],
                },
                gtag: {
                    trackingID: "G-27Z1WY952H",
                },
            },
        ],
    ],
    plugins: [
        [
            "@docusaurus/plugin-client-redirects",
            {
                redirects: redirectJson.redirects,
            },
        ],
        [
            "docusaurus-plugin-copy",
            {
                id: "Copy Workers",
                path: "static/workers",
                context: "workers",
                include: ["**/*.{js}"],
            },
        ],
        async function tailwindcss() {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
        // "./plugins/docgen.js",
        "./plugins/examples.js",
        "./plugins/checklist.js",
        ...(process.env.DISABLE_BLOG
            ? []
            : [
                  [
                      "./plugins/blog-plugin.js",
                      {
                          blogTitle: "Blog",
                          blogDescription: "A Docusaurus powered blog!",
                          routeBasePath: "/blog",
                          postsPerPage: 12,
                          blogSidebarTitle: "博客",
                          blogSidebarCount: 0,
                          feedOptions: {
                              type: "all",
                              copyright: `Copyright © ${new Date().getFullYear()} refine.`,
                          },
                      },
                  ],
              ]),
        "./plugins/intercom.js",
        "./plugins/clarity.js",
    ],
    themeConfig: {
        prism: {
            theme: require("prism-react-renderer/themes/nightOwlLight"),
            darkTheme: require("prism-react-renderer/themes/vsDark"),
            magicComments: [
                // Remember to extend the default highlight class name as well!
                {
                    className: "theme-code-block-highlighted-line",
                    line: "highlight-next-line",
                    block: { start: "highlight-start", end: "highlight-end" },
                },
                {
                    className: "code-block-hidden",
                    line: "hide-next-line",
                    block: { start: "hide-start", end: "hide-end" },
                },
                {
                    className: "theme-code-block-added-line",
                    line: "added-line",
                    block: { start: "added-start", end: "added-end" },
                },
                {
                    className: "theme-code-block-removed-line",
                    line: "removed-line",
                    block: { start: "removed-start", end: "removed-end" },
                },
            ],
        },
        image: "img/refine_social.png",
        algolia: {
            appId: "KRR9VEUPCT",
            apiKey: "cd0188125dcd31fb4b011b5e536d963a",
            indexName: "refine",
            contextualSearch: true,
        },
        metadata: [
            {
                name: "keywords",
                content:
                    "react-admin, react-framework, internal-tool, admin-panel, ant-design, material ui, mui",
            },
        ],
        navbar: {
            logo: {
                alt: "refine",
                src: "img/refine_logo.png",
            },
            items: [
                { to: "blog", label: "Blog", position: "left" },
                {
                    type: "docsVersionDropdown",
                    position: "right",
                    dropdownActiveClassDisabled: true,
                },
                {
                    href: "https://github.com/refinedev/refine",
                    position: "right",
                    className: "header-icon-link header-github-link",
                },
                {
                    href: "https://discord.gg/refine",
                    position: "right",
                    className: "header-icon-link header-discord-link",
                },
                {
                    href: "https://twitter.com/refine_dev",
                    position: "right",
                    className: "header-icon-link header-twitter-link",
                },
            ],
        },
        footer: {
            logo: {
                alt: "refine",
                src: "/img/refine_logo.png",
            },
            links: [
                {
                    title: "Resources",
                    items: [
                        {
                            label: "Getting Started",
                            to: "docs",
                        },
                        {
                            label: "Tutorials",
                            to: "docs/tutorial/introduction/index/",
                        },
                        {
                            label: "Blog",
                            to: "blog",
                        },
                    ],
                },
                {
                    title: "Product",
                    items: [
                        {
                            label: "Examples",
                            to: "examples",
                        },
                        {
                            label: "Integrations",
                            to: "integrations",
                        },
                        {
                            label: "Become an Expert",
                            to: "become-a-refine-expert",
                        },
                    ],
                },
                {
                    title: "Company",
                    items: [
                        {
                            label: "About",
                            to: "about",
                        },
                        {
                            label: "Store 🎁",
                            to: "https://store.refine.dev",
                        },
                    ],
                },
                {
                    title: "__LEGAL",
                    items: [
                        {
                            label: "License",
                            to: "https://github.com/refinedev/refine/blob/master/LICENSE",
                        },
                        // {
                        //     label: "Terms",
                        //     to: "/enterprise",
                        // },
                        // {
                        //     label: "Privacy",
                        //     to: "/privacy-policy",
                        // },
                        // {
                        //     label: "info@refine.dev",
                        //     to: "mailto:info@refine.dev",
                        // },
                    ],
                },
                {
                    title: "__SOCIAL",
                    items: [
                        {
                            href: "https://github.com/refinedev/refine",
                            label: "github",
                        },
                        {
                            href: "https://discord.gg/refine",
                            label: "discord",
                        },
                        {
                            href: "https://reddit.com/r/refine",
                            label: "reddit",
                        },
                        {
                            href: "https://twitter.com/refine_dev",
                            label: "twitter",
                        },
                        {
                            href: "https://www.linkedin.com/company/refine-dev",
                            label: "linkedin",
                        },
                    ],
                },
            ],
        },
        docs: {
            sidebar: {
                autoCollapseCategories: true,
            },
        },
        colorMode: {
            defaultMode: "dark",
        },
    },
    customFields: {
        /** Footer Fields */
        footerDescription:
            '<strong style="font-weight:700;">refine</strong> is a React-based framework for the rapid development of web applications. It eliminates the repetitive tasks demanded by <strong style="font-weight:700;">CRUD</strong> operations and provides industry standard solutions.',
        contactTitle: "Contact",
        contactDescription: [
            "Refine Development Inc.",
            "256 Chapman Road STE 105-4 Newark, DE 19702",
        ],
        contactEmail: "info@refine.dev",
        /** ---- */
        /** Live Preview */
        LIVE_PREVIEW_URL:
            process.env.LIVE_PREVIEW_URL ?? "http://localhost:3030/preview",
        /** ---- */
        tutorial: tutorialData,
    },
    webpack: {
        jsLoader: (isServer) => ({
            loader: require.resolve("swc-loader"),
            options: {
                jsc: {
                    parser: {
                        syntax: "typescript",
                        tsx: true,
                    },
                    target: "es2017",
                },
                module: {
                    type: isServer ? "commonjs" : "es6",
                },
            },
        }),
    },
};

module.exports = config;
