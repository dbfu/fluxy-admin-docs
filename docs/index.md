---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Fluxy Admin'
  text: ''
  tagline: 一套高颜值后台管理系统全栈开发框架
  image:
    src: /logo.svg
    alt: FluxyAdmin
  actions:
    - theme: brand
      text: 开发指南
      link: /guide/quick-start
    - theme: alt
      text: 项目预览
      link: https://dev.fluxyadmin.cn/
      target: _blank

features:
  - title: 前端技术栈
    icon: 🎯
    details: Vite，React，Zustand，TypeScript，Ant Design，React Router，Tailwind Css，Axios，I18next

  - title: 后端技术栈
    icon: 🎁
    details: Midway，Typeorm，Mysql，Redis，Minio，Swagger，Casbin

  - title: RBAC权限管理
    icon: 🔑
    details: 支持用户、角色、菜单、按钮、接口权限

  - title: 国际化
    icon: 🌎
    details: 通过配套的vscode插件可以做到一键翻译

  - title: TypeScript
    icon: 🎯
    details: 严格类型检查，减少错误率

  - title: 前后端对接非常简单
    icon: 🚀
    details: 借助openapi2ts库，快速根据后端swagger文档生成前端service
---

<style>

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #466ea3 30%, #1b7ea4);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #466ea3 30%, #1b7ea4 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
