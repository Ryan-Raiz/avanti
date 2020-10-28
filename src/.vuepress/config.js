const {
  name,
  description,
  repository: { url: repo }
} = require('../../package')

module.exports = {
  base: '/avanti/',
  title: ' ',
  description: ' ',
  theme: 'default-prefers-color-scheme',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/gorbi.png"}],

  ],
  themeConfig: {
    defaultTheme: 'dark',
    logo: '/gorbi.png',
    repo,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Read',
        link: '/read/',
      },
      {
        text: 'Gists',
        link: '/gists/',
      },
    ],
    sidebar: {
      '/read/': [
        {
          title: '',
          collapsable: false,
          children: [
            '',
            '1-Chapter',
            '2-Chapter',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
