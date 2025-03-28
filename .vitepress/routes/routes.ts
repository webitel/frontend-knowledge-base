export const routes = [
    {text: 'FAQ', link: '/docs/faq/index.md'},
    {text: 'Main', link: '/docs/main/index.md'},
    {
        text: 'How To\'s',
        collapsed: false,
        items: [
            {text: 'Write docs', link: '/docs/how-to/write-docs/write-docs.md'},
            {text: 'Manage hotfix branches', link: '/docs/how-to/hotfix-release/hotfix-release.md'},
        ],
    },
    {
        text: 'Onboarding',
        collapsed: false,
        items: [
            {text: 'Checklist', link: '/docs/onboarding/checklist.md'},
        ],
    },
    {
        text: 'Code Styleguide',
        collapsed: false,
        items: [
            { text: 'Code Linting and Reformatting', link: '/docs/styleguide/linting-and-reformatting/index.md' },
            { text: 'Inspiration Sources', link: '/docs/styleguide/inspiration-sources.md' },
            { text: 'CSS', link: '/docs/styleguide/css/index.md' },
        ],
    },
];
