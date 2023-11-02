import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  base: "/vue-timer/",
  title: "Vue Accurate Timer",
  description: "Accurate countdown timer and timer for Vue.js",
  head: [
    ["link", { rel: "apple-touch-icon", href: "/favicon.svg" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-VGF6FJFM8R",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-VGF6FJFM8R');",
    ],
  ],

  themeConfig: {
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/introduction" },
    ],

    sidebar: [
      { text: "Introduction", link: "/introduction" },
      { text: "Timer", link: "/timer" },
      { text: "Countdown Timer", link: "/countdown-timer" },
      { text: "View Demo", link: "/demo" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/skiff26/vue-timer" },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/skiff26/vue-timer/blob/main/LICENSE.md" target="_blank">MIT License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://www.linkedin.com/in/akulchytskyi/" target="_blank">Artem Kulchytskyi</a>',
    },
  },
});
