const CONFIG = {
  // profile setting (required)
  profile: {
    name: "2mook2",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "이무기",
    bio: "언젠가 \uD83D\uDC32 될 이무기",
    email: "2moook2@gmail.com",
    linkedin: "2moook2",
    github: "2mook2",
    instagram: "",
  },
  projects: [
    {
      name: `Dementia_Analysis`,
      href: "https://github.com/2mook2/Dementia_Analysis",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Welcome to 2mook2",
    description: "Welcome to 2mook2",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://2mook2.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
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
      repo: "2mook2/morethan-log",
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

const { CONFIG: { link } } = CONFIG;
const projectName = link.includes('/projects') ? 'Project' : 'Service';

module.exports = { CONFIG: { ...CONFIG, projectName } };
