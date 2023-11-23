import { FooterDiscordIcon } from "./icons/footer-discord";
import { FooterGithubIcon } from "./icons/footer-github";
import { FooterLinkedinIcon } from "./icons/footer-linkedin";
import { FooterRedditIcon } from "./icons/footer-reddit";
import { FooterTwitterIcon } from "./icons/footer-twitter";

export const menuItems = [
    {
        label: "Resources",
        items: [
            {
                label: "Getting Started",
                href: "/docs/getting-started/quickstart",
            },
            {
                label: "Tutorials",
                href: "/docs/tutorial/contributing",
            },
            {
                label: "Blog",
                href: "/blog",
            },
            {
                label: "React Admin Panel",
                href: "https://reactadminpanel.com",
            },
        ],
    },
    {
        label: "Product",
        items: [
            {
                label: "Examples",
                href: "/docs/examples",
            },
            {
                label: "Integrations",
                href: "/integrations",
            },
            // {
            //     label: "Become an Expert",
            //     href: "/become-an-expert",
            // },
            // {
            //     label: "Cloud",
            //     href: "/cloud",
            // },
        ],
    },
    {
        label: "Company",
        items: [
            {
                label: "About",
                href: "/about",
            },
            {
                label: "Store",
                href: "https://store.refine.dev",
            },
            {
                label: "Contact Us",
                href: "https://form.typeform.com/to/H54hLD9r",
            },
        ],
    },
];

export const secondaryMenuItems = [
    // {
    //     label: "Terms & Conditions",
    //     href: "#",
    // },
    {
        label: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        label: "License",
        href: "https://github.com/1stblue/1stblue.github.io/tree.main/next/LICENSE",
    },
];

export const footerDescription = `refine is a React-based framework for the rapid development of web applications. It eliminates the repetitive tasks demanded by CRUD operations and provides industry standard solutions.`;

export const socialLinks = [
    {
        icon: FooterGithubIcon,
        href: "https://github.com/1stblue/1stblue.github.io",
    },
    {
        icon: FooterDiscordIcon,
        href: "https://discord.gg/refine",
    },
    {
        icon: FooterRedditIcon,
        href: "https://www.reddit.com/r/refine/",
    },
    {
        icon: FooterTwitterIcon,
        href: "https://twitter.com/refine_dev",
    },
    {
        icon: FooterLinkedinIcon,
        href: "https://www.linkedin.com/company/refine-dev",
    },
];
