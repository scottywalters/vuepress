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
          // '/api/': getApiSidebar(),
          '/guidelines/': getGuideSidebar('Guidelines', 'Components', 'Patterns')
          // '/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
          // '/theme/': getThemeSidebar('Theme', 'Introduction')
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

// function getApiSidebar () {
//   return [
//     'cli',
//     'node'
//   ]
// }

function getGuideSidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'color',
        'typography'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'button',
        'checkbox'
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'modal'
      ]
    }
  ]
}

// const officalPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort()

// function getPluginSidebar (pluginTitle, pluginIntro, officialPluginTitle) {
//   return [
//     {
//       title: pluginTitle,
//       collapsable: false,
//       children: [
//         ['', pluginIntro],
//         'using-a-plugin',
//         'writing-a-plugin',
//         'life-cycle',
//         'option-api',
//         'context-api'
//       ]
//     },
//     {
//       title: officialPluginTitle,
//       collapsable: false,
//       children: officalPlugins
//     }
//   ]
// }

// function getThemeSidebar (groupA, introductionA) {
//   return [
//     {
//       title: groupA,
//       collapsable: false,
//       sidebarDepth: 2,
//       children: [
//         ['', introductionA],
//         'using-a-theme',
//         'writing-a-theme',
//         'option-api',
//         'default-theme-config',
//         'inheritance'
//       ]
//     }
//   ]
// }
