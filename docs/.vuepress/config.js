module.exports = {
  title: 'wh2o-api',
  description: 'American Whitewater\'s REST API built on Node.js',
  head: [
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap', rel: 'stylesheet' }],
  ],
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
      },
      {
        text: 'Endpoints',
        link: '/endpoints/'
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
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    ['@vuepress/google-analytics', {
      'ga': 'G-SXLSL03LVH'
    }]
  ]
}
