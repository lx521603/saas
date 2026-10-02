// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // 👇 重点修改这里：必须显式声明 pricing collection
  content: {
    experimental: {
      sqliteConnector: 'native'
    },
    collections: {
      pricing: {
        type: 'data',          // 声明这是一个纯数据文件
        source: 'pricing.yml', // 必须与 content 目录下的文件名完全一致
      }
    }
  },

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ogImage: {
    zeroRuntime: true
  }
})