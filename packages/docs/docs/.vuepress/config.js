const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: '../../vuepress',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Design System',
      description: 'A Design System for Sun Nuclear\'s Digital Products'
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
  theme: '@vuepress/theme-vue',
  // globalUIComponents: [
  //   'ThemeManager'
  // ],
  themeConfig: {
    featureOne: 'suncheck-machine.svg',
    repo: 'scottywalters/vuepress',
    editLinks: true,
    docsDir: 'packages/docs/docs',
    // logo: '/logo.png',
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
          '/suncheck/': getGuideSidebar('SunCHECK™', 'Guidelines', 'Components', 'Patterns', 'Data Visualization'),
          '/help/': getHelpSidebar('Help')
        }
      }
    }
  },
  plugins: [
    ['vuepress-plugin-code-copy', true],
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
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

function getHelpSidebar (helpTitle) {
  return [
    {
      title: helpTitle,
      collapsable: false,
      children: [
        ['', 'Overview'],
        'faq',
        'contact'
      ]
    }
  ]
}

const suncheckGuidelines = fs
.readdirSync(path.resolve(__dirname, '../suncheck/guidelines'))
.map(filename => 'guidelines/' + filename.slice(0, -3))
.sort()

const suncheckComponents = fs
  .readdirSync(path.resolve(__dirname, '../suncheck/components'))
  .map(filename => 'components/' + filename.slice(0, -3))
  .sort()

const suncheckPatterns = fs
.readdirSync(path.resolve(__dirname, '../suncheck/patterns'))
.map(filename => 'patterns/' + filename.slice(0, -3))
.sort()

const suncheckDataVisualization = fs
.readdirSync(path.resolve(__dirname, '../suncheck/dataVisualization'))
.map(filename => 'dataVisualization/' + filename.slice(0, -3))
.sort()

function getGuideSidebar (SunCheckTitle, SunCheckGuidelinesTitle, SunCheckComponentsTitle, SunCheckPatternsTitle, SunCheckDataVisualizationTitle) {
  return [
    {
      title: SunCheckTitle,
      collapsable: false,
      children: [
        ['', 'Overview']
      ]
    },
    {
      title: SunCheckGuidelinesTitle,
      collapsable: true,
      children: suncheckGuidelines
    },
    {
      title: SunCheckComponentsTitle,
      collapsable: true,
      children: suncheckComponents
    },
    {
      title: SunCheckPatternsTitle,
      collapsable: true,
      children: suncheckPatterns
    },
    {
      title: SunCheckDataVisualizationTitle,
      collapsable: true,
      children: suncheckDataVisualization
    }
  ]
}


