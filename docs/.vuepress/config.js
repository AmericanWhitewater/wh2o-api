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
            title: 'Getting Started',
            path: '/guide/getting-started.md'
          },
          {
            title: 'Contributing',
            path: '/guide/contributing.md'
          },
          {
            title: 'Generate Docs',
            path: '/guide/generate-docs.md'
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
    ],
    plugins: ['@vuepress/active-header-links']
  }
}
