import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Webitel Front-end Knowledge Base",
  description: "Tech Docs, Code Styleguide, How-to's, and more",
  base: '/frontend-knowledge-base/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '../favicon.ico',
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: { provider: 'local' },
    nav: [
      { text: 'Home', link: '/docs' },
      { text: 'Examples', link: '/docs/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/webitel/frontend-knowledge-base',
      },
    ],// https://vitepress.dev/reference/default-theme-edit-link#site-level-config
    editLink: {
      // https://vitepress.dev/reference/runtime-api#usedata
      pattern:
          'https://github.com/webitel/frontend-knowledge-base/tree/main/:path',
    },
  }
})
