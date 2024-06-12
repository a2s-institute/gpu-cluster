const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = "a2s-institute";
const projectName = "gpu-cluster";

const url = process.env.URL || "https://a2s-institute.github.io";
const baseUrl = process.env.BASE_URL || "/gpu-cluster/";

const config = {
    title: 'A2S GPU Cluster',
    tagline: 'A Kubernetes-based compute cluster with ready-to-use machine learning environments',
    favicon: 'img/A2S_Bildmarke_RGB.svg',

    url: url,
    baseUrl: baseUrl,

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // GitHub Pages adds a trailing slash by default
    trailingSlash: false,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName,
    projectName,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        [
            'docusaurus2-dotenv',
            {
                path: "./.env", // The path to your environment variables.
                safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
                systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
                silent: false, //  If true, all warnings will be suppressed
                expand: false, // Allows your variables to be "expanded" for reusability within your .env file
                defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
            }
        ]
    ],

    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
                },
                blog: {
                    showReadingTime: true,
                    editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
                    editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
                        `https://github.com/${organizationName}/${projectName}/edit/main/${blogDirPath}/${blogPath}`,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        ({
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
            },
            navbar: {
                title: 'A2S GPU Cluster',
                logo: {
                    alt: 'A2S Group Logo',
                    src: 'img/A2S_Bildmarke_RGB.svg',
                },
                items: [{
                        type: 'doc',
                        docId: 'about',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        to: 'https://a2s-cluster.inf.h-brs.de',
                        label: 'JupyterHub',
                        position: 'left'
                    },
                    {
                        to: '/blog',
                        label: 'News',
                        position: 'left'
                    },
                    {
                        href: 'https://github.com/a2s-institute/gpu-cluster',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right'
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} A2S Institute<br>
                        Institute for Artificial Intelligence and Autonomous Systems (A2S)<br>
                        Hochschule Bonn-Rhein-Sieg`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
