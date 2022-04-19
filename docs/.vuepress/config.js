const { path } = require('@vuepress/utils')

module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '我准备起飞',
  description: '起飞！唉~飞',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  clientAppEnhanceFiles: path.resolve(
    __dirname,
    './clientAppEnhance.js'
  ),
  themeConfig: {
    editLink: false,
    navbar: [
      {
        text: 'Web基础',
        link: '/web/',
      },
      {
        text: 'Vue相关',
        link: '/vue/',
      },
      {
        text: '计算机网络',
        link: '/network/'
      },
      {
        text: '2022面经',
        link: '/interview/'
      },
      {
        text: '更多',
        children: [
          {
            text: '规范',
            link: '/standard/',
          },
          {
            text: '后端',
            link: '/api/'
          },
        ],
      },
    ],
    darkMode: true, // 是否展示切换夜间模式按钮
    repo: 'https://github.com/jiqiangzhu/jiqiangzhu.github.io',
    repoLabel: 'Github',
    // sidebarDepth: 1,
    sidebar: {
      '/': [],
      '/web/': [
        {
          text: 'Web核心基础',
          children: ['index.md', 'html5.md', 'css3.md', 'flex.md', 'grid.md',
            'closure.md', 'js-prototype.md', 'array-prototype.md',
            'es6.md', 'promise.md', 'my-promise.md', 'async-await.md',
            'event-loop.md', 'interview-questions.md']
        }
      ],
      '/standard/': [
        {
          text: '企业级开发规范自动化构建',
          children: ['index.md', 'standard.md', 'git-flow.md', 'CI-CD.md']
        }
      ],
      '/vue/': [
        {
          text: 'Vue2.x',
          children: ['index.md', 'vue-basic.md', 'vue-router.md', 'vuex.md']
        },
        {
          text: 'Vue3.x',
          children: ['vue3-basic.md', 'vite.md']
        },
        {
          text: 'Vue面试',
          children: ['vue-interview.md']
        }
      ],
      '/network/': [
        {
          text: '计算机网络',
          children: ['http.md']
        }
      ],
      '/api/': [
        {
          text: '服务器相关',
          children: ['express-deploy.md', 'node.md']
        }
      ],
      '/interview/': [
        {
          text: '2022常见面试题',
          children: ['basic.md', 'code.md', 'framework.md', 'browser.md', 'optimize.md', 'composite.md']
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
        hotKeys: [], //空数组禁用快捷键
      },
    ],
  ],
}