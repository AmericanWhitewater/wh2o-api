module.exports = {
  title: 'wh2o-api',
  description: 'American Whitewater\'s REST API built on Node.js',
  head: [
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap', rel: 'stylesheet' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/icons/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/icons/favicon-32x32.png' }],
    ['link', { rel: 'shortcut icon', href: '/icons/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#4f758b' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#4f758b' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#4f758b' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0, user-scalable=no' }]
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
            title: 'Production',
            path: '/guide/production'
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
      'ga': 'UA-70972027-5'
    }],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content:not(.custom) img'
    }],
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary_large_image',
      type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }]
  ]
}
