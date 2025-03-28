export const routes = [
    {text: 'FAQ', link: '/faq/index.md'},
    {text: 'Main', link: '/main/index.md'},
    {
        text: 'How To\'s',
        collapsed: false,
        items: [
            {text: 'Write docs', link: '/how-to/write-docs/write-docs.md'},
            {text: 'Manage hotfix branches', link: '/how-to/hotfix-release/hotfix-release.md'},
        ],
    },
    {
        text: 'Onboarding',
        collapsed: false,
        items: [
            {text: 'Checklist', link: '/onboarding/checklist.md'},
        ],
    },
    {
        text: 'Code Styleguide',
        collapsed: false,
        items: [
            { text: 'Code Linting and Reformatting', link: '/styleguide/linting-and-reformatting/index.md' },
            { text: 'Inspiration Sources', link: '/styleguide/inspiration-sources.md' },
            { text: 'CSS', link: '/styleguide/css/index.md' },
        ],
    },
];
