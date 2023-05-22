const CONFIG = {
  // profile setting (required)
  profile: {
    name: "2mook2",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "junior",
    bio: "언젠가 용이 되길 꿈꾸는 2mook2",
    email: "2mook2@naver.com",
    linkedin: "2mook2",
    github: "2mook2",
    instagram: "2mook2",
  },
  projects: [
    {
      name: `2mook2`,
      href: "https://github.com/2mook2",
    },
  ],
  // blog setting (required)
  blog: {
    title: "2mook2",
    description: "welcome to 2mook2!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://2mook2.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "2mook2",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
