module.exports = {
  title: 'wh2o-api',
  description: 'American Whitewater\'s REST API built on Node.js',
  themeConfig: {
    logo: '/aw-logo-small.png',
    lastUpdated: 'Last updated',
    smoothScroll: true,
    repo: 'https://github.com/AmericanWhitewater/wh2o-api',
    editLinks: true,
    editLinkText: 'Recommend a change',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guides',
        link: '/guide/'
      }
    ],
    sidebar: [
      {
        title: 'Introduction',
        path: '/introduction/'
      },
      {
        title: 'Guides',
        path: '/guide/',
        children: [
          {
            title: 'Quick Start',
            path: '/guide/quick-start'
          },
          {
            title: 'Database',
            path: '/guide/database'
          },
          {
            title: 'Contributing',
            path: '/guide/contributing'
          },
          {
            title: 'Generate Docs',
            path: '/guide/generate-docs'
          },
          {
            title: 'Deployment',
            path: '/guide/deployment'
          }
        ]
      },
      {
        title: 'Authorization',
        path: '/authorization/'
      },
      {
        title: 'Endpoints',
        path: '/endpoints/'
      }
    ]
  },
  plugins: ['@vuepress/back-to-top', ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }]],
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#4f758b' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#4f758b' }],
    ['meta', { name: 'msapplication-TileImage', content: '/mstile-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
}
