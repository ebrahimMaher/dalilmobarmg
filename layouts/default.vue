<template>
  <div :class="cookieSpacerStyles">
    <TheHeader />
    <main
      class="lg:block relative bg-light-elevatedSurface dark:bg-dark-elevatedSurface transition-colors duration-300 ease-linear"
    >
      <Nuxt />
    </main>
    <TheFooter />
    <TheMobileBottomNav />
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const { path } = this.$route
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`
    let canonical = `https://dalilmobarmg.com${pathWithSlash}`
    if (this.$i18n.locale !== 'ar') {
      canonical = `https://${this.$i18n.locale}.dalilmobarmg.com${pathWithSlash}`
    }
    return {
      htmlAttrs: i18nSeo.htmlAttrs,

      meta: [
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('homepage.meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('homepage.meta.description')
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$i18n.t('homepage.meta.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$i18n.t('homepage.meta.description')
        }
      ],
      ...i18nSeo,

      link: [
        { rel: 'canonical', href: canonical },
        {
          rel: 'alternate',
          hreflang: 'en',
          href: `https://dalilmobarmg.com${pathWithSlash}`
        },
        {
          rel: 'alternate',
          hreflang: 'zh',
          href: `https://zh.dalilmobarmg.com${pathWithSlash}`
        },
        {
          rel: 'alternate',
          hreflang: 'ru',
          href: `https://ru.dalilmobarmg.com${pathWithSlash}`
        },
        {
          rel: 'alternate',
          hreflang: 'ja',
          href: `https://ja.dalilmobarmg.com${pathWithSlash}`
        },
        {
          rel: 'alternate',
          hreflang: 'ko',
          href: `https://ko.dalilmobarmg.com${pathWithSlash}`
        },
        {
          rel: 'alternate',
          hreflang: 'fr',
          href: `https://fr.dalilmobarmg.com${pathWithSlash}`
        },
        {
          rel: 'alternate',
          hreflang: 'id',
          href: `https://id.dalilmobarmg.com${pathWithSlash}`
        },

        ...i18nSeo.link
      ]
    }
  },
  computed: {
    cookieSpacerStyles() {
      return this.showCookieBanner ? 'pb-20 md:pb-4 lg:pb-20' : ''
    }
  },
  mounted() {
    const bannerCookie = 'cookieconsent_status'
    const docCookies = `; ${document.cookie}`

    this.showCookieBanner = !docCookies.includes(bannerCookie)
  }
}
</script>
