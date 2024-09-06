---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Fluxy Admin"
  text: "Fluxy Admin"
  tagline: My great project tagline
  image:
    src: /logo.svg
    alt: FluxyAdmin
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
