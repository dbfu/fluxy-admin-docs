import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fluxy Admin",
  description: "Fluxy Admin",
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '项目指南', link: '/guide' },
      { text: '前端', link: '/web' },
      { text: '后端', link: '/server' },
      { text: '实战教程', link: '/markdown-examples' },
      { text: '仓库地址', items: [
        { text: '前端仓库', link: '/web' }, 
        { text: '后端仓库', link: '/server' }
       ]
      }
    ],

    sidebar: [
      {
        text: '实战教程',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
