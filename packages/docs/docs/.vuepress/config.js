const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: '../../vuepress',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Physics Design System',
      description: 'Design System for SunCHECK™'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: '@vuepress/vue',
  themeConfig: {
    repo: 'scottywalters/vuepress',
    editLinks: true,
    docsDir: 'packages/docs/docs',
    logo: '/logo.png',
    smoothScroll: true,
    search: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar('Guidelines', 'Components', 'Patterns'),
          '/help/': getHelpSidebar('Help')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-177805551-1'
    }],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>'
    }],
    ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js'
  ]
})

function getHelpSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'contact',
        'faq'
      ]
    }
  ]
}

const guidelines = fs
.readdirSync(path.resolve(__dirname, '../guide/guidelines'))
.map(filename => 'guidelines/' + filename.slice(0, -3))
.sort()

const components = fs
  .readdirSync(path.resolve(__dirname, '../guide/components'))
  .map(filename => 'components/' + filename.slice(0, -3))
  .sort()

const patterns = fs
.readdirSync(path.resolve(__dirname, '../guide/patterns'))
.map(filename => 'patterns/' + filename.slice(0, -3))
.sort()

function getGuideSidebar (guidelinesTitle, componentsTitle, patternsTitle) {
  return [
    // {
    //   title: guidelinesTitle,
    //   collapsable: false,
    //   children: [
    //     ['', pluginIntro],
    //     'using-a-plugin',
    //     'writing-a-plugin',
    //     'life-cycle',
    //     'option-api',
    //     'context-api'
    //   ]
    // },
    {
      title: guidelinesTitle,
      collapsable: false,
      children: guidelines
    },
    {
      title: componentsTitle,
      collapsable: false,
      children: components
    },
    {
      title: patternsTitle,
      collapsable: false,
      children: patterns
    }
  ]
}
