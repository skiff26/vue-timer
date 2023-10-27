import { defineConfig } from "vitepress";

export default defineConfig({
  title: "⏱️Vue Accurate Timer",
  description: "Accurate countdown timer and timer for Vue.js",
  head: [
    ["link", { rel: "apple-touch-icon", href: "/favicon.svg" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
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
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message:
        'Released under the <a href="#" target="_blank">MIT License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://www.linkedin.com/in/akulchytskyi/" target="_blank">Artem Kulchytskyi</a>',
    },
  },
});
