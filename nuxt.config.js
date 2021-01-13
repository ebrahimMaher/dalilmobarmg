import webpack from 'webpack'

export default {
  target: process.env.DEPLOY_TARGET || 'server',
  ssr: true,
  head: {
    htmlAttrs: {
      lang: process.env.NUXT_LOCALE,
      dir: 'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#4927d0' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'دليل مبرمج' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.dalilmobarmg.com/dalilmobarmg-card.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://www.dalilmobarmg.com/dalilmobarmg-card.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'دليل مبرمج'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.dalilmobarmg.com/dalilmobarmg-card.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css'
      }
    ],
    bodyAttrs: {
      class: [
        'font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary' // transition-colors duration-300 ease-linear
      ]
    }
  },
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
  ],
  modules: [
    '@nuxt/http',
    '@nuxt/content',
    'nuxt-i18n',
    'vue-scrollto/nuxt'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID || 'G-S43187LK9D',
  },
  pwa: {
    manifest: {
      name: 'دليل مبرمج'
    },
    meta: {
      name: 'دليل مبرمج',
      description: 'منصة دليل مبرمج: غير ربحية مفتوحة المصدر وهي بوابتك اﻷمثل لعالم البرمجة ودليلك في طريقك إلى احتراف البرمجة وعلوم الحاسوب',
      theme_color: '#4927d0',
      lang: 'ar',
      nativeUI: true,
    }
  },

  // Auto import components, see https://github.com/nuxt/components
  components: true,
  colorMode: {
    preference: 'light' // disable system
  },
  content: {
    content: {
      liveEdit: false
    },
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  css: [
    '~/assets/css/main.scss',
    'codemirror/lib/codemirror.css',
    'codemirror/theme/material-palenight.css',
  ],
  plugins: [
    '~/plugins/i18n',
    '~/plugins/directives',
    '~/plugins/intersection-observer.client.js',
    '~/plugins/vue-observe-visibility.client.js',
    '~/plugins/vue-scrollactive',
    {src: '~plugins/vue-codemirror', ssr: false },
  ],
  env: {
    URL: process.env.URL || false,
  },
  publicRuntimeConfig: {
    dalilLocale: process.env.NUXT_LOCALE || 'ar',
    slackInvitationLink: process.env.SLACK_INVITATION_LINK || '#',
    GithubLink: process.env.GITHUB_LINK || 'https://github.com/ebrahimMaher/dalilmobarmg',
  },
  loading: { color: '#4927d0' },
  generate: {
    fallback: false,
    routes: ['/', '404']
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'ar',
        iso: 'ar',
        file: 'ar.js',
        name: 'العربية',
        domain: 'https://www.dalilmobarmg.com'
      },
    ],
    vueI18n: {
      fallbackLocale: 'ar'
    },
    defaultLocale: 'ar',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/'
  },
  build: {
    html: {
      minify: {
        minifyCSS: false,
        minifyJS: false,
      }
    },
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
    ],
    loaders:  {
      vue: {
         prettify: false
      }
    }
  },
}
