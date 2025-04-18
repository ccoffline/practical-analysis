import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "首页",
  // description: "动态语言学方法",
  base: "/practical-analysis/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: '基础理论',
        items: [
          {
            text: '实践分析',
            link: '/实践分析/实践分析',
            items: [
              { text: '异化', link: '/实践分析/异化' },
              { text: '假设', link: '/实践分析/假设' },
            ]
          },
          {
            text: '经济的实践分析',
            link: '/经济的实践分析/经济的实践分析',
            items: [
            ]
          }
        ]
      },
      {
        text: '测试',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://ccoffline.github.io/practical-analysis/' }
    ]
  }
})
