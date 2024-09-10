import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yonas's Portfolio",
  description: "6.1040 Fall 2024",
  // TODO: add your base here; this should be your repo name!
  base: "/portfolio-yogas/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "About Me", link: "aboutme" },
      { text: "Assignments", link: "/assignments" },
    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "Assignments",
        link: "/assignments/",
      },
    ],

    // sidebar: [
    //   {
    //     text: "Assignments",
    //     link: "/assignments/",
    //   },
    // ],
    socialLinks: [{ icon: "github", link: "https://github.com/61040-fa24" }],
  },
});
