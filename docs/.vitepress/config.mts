import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FluxyAdmin",
  description: "后端管理系统全栈开发框架",
  markdown: {
    config(md) {
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
      md.use(groupIconMdPlugin)
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '项目指南', link: '/guide/quick-start', activeMatch: '/guide/' },
      { text: '项目实战教程', link: '/practical-tutorial/introduce', activeMatch: '/practical-tutorial/' },
      {
        text: '项目预览',
        items: [
          { text: '基础项目', link: 'https://dev.fluxyadmin.cn/user/login', target: '_blank', },
          { text: '实战项目', link: 'https://dev.fluxyadmin.cn/user/login', target: '_blank' }
        ]
      },
      {
        text: '仓库地址', items: [
          { text: '前端仓库', link: '/https://github.com/dbfu/fluxy-admin-web', target: '_blank' },
          { text: '后端仓库', link: '/https://github.com/dbfu/fluxy-admin-server', target: '_blank' }
        ]
      }
    ],

    sidebar: {
      '/practical-tutorial/': {
        base: '/practical-tutorial/',
        items: [
          {
            text: '项目实战教程',
            items: [
              {
                text: '项目介绍',
                link: 'introduce',
              },
              {
                text: '实战开发',
                link: 'major',
                items: [
                  {
                    text: '专业管理',
                    link: 'major'
                  },
                  {
                    text: '宿舍管理',
                    link: 'hostel'
                  },
                  {
                    text: '学生管理',
                    link: 'student'
                  },
                  {
                    text: '我的报修',
                    link: 'my-repair'
                  },
                  {
                    text: '报修管理',
                    link: 'repair'
                  },
                  {
                    text: '首页报表',
                    link: 'main'
                  },
                ]
              },
            ]
          },
        ]
      },
      '/guide/': {
        base: '/guide/',
        items: [{
          text: '项目指南',
          items: [
            {
              text: '快速开始',
              link: 'quick-start'
            },
            {
              text: '项目配置',
              link: 'config',
            },
            {
              text: '菜单配置',
              link: 'menu-config',
            },
            {
              text: '按钮权限',
              link: 'button-auth',
            },
            {
              text: '国际化',
              link: 'i18n',
            },
            {
              text: '前端同步后端api',
              link: 'api',
            },
            {
              text: '前端全局数据',
              link: 'web-global-data',
            },
            {
              text: '后端装饰器',
              link: 'decorator',
            },
            {
              text: '代码模板',
              link: 'script',
            },
            {
              text: '部署',
              link: 'deploy',
            }
          ]
        }]
      }
    },
  },
  cleanUrls: true,
  head: [
    [
      'script',
      {},
      `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?6ab801bce8964c31739c7a30b1d629da";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
      `,
    ]
  ]
})
