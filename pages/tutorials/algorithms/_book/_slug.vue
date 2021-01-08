<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div
      class="lg:min-h-screen lg:w-5/6 w-full lg:py-8 px-6 lg:px-12 lg:static lg:overflow-visible lg:max-h-full"
    >
      <!-- <LangFallback :doc-link="docLink" :lang-fallback="langFallback" /> -->

      <article>
        <h1 class="leading-relaxed text-2xl text-light-onSurfacePrimary dark:text-dark-onSurfaceStrong transition-colors duration-300 ease-linear" >
          {{ page.title }}
        </h1>
        <nuxt-content :document="page" />

        <LazyAppPrevNext
          :prev="prev"
          :next="next"
          section="guides"
          class="mt-4"
        />

        <div v-if="page" class="contributors-wrapper">
          <PageContributors :doc-link="docLink" :contributors="page.contributors" />
        </div>

      </article>
    </div>
    <AffixBlock v-if="$route.params.category !== 'tests'" class="border-r dark:border-dark-border pr-4">
      <AppToc
        v-if="page.toc && page.toc.length"
        :toc="page.toc"
        class="mb-8 block"
      />

    </AffixBlock>
  </div>
</template>

<script>
import copyCodeBlock from '~/mixins/copyCodeBlock'

export default {
  mixins: [copyCodeBlock],
  scrollToTop: true,
  async asyncData({ $content, params, store, error, app }) {
    let path = `/${app.i18n.defaultLocale}/tutorials/algorithms/${params.book}`
    let page, prev, next, langFallback

    try {
      page = await $content(path, params.slug).fetch()
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return error({
          statusCode: 500,
          message: app.i18n.t('common.an_error_occurred')
        })
      }
      if (params.book || params.slug){
        return error({
          statusCode: 404,
          message: app.i18n.t('common.page_not_found')
        })
      }
    }

    try {
      ;[prev, next] = await $content(path)
        .only(['title', 'slug', 'dir', 'menu'])
        .sortBy('position')
        .sortBy('title')
        .sortBy('menu')
        .surround(params.slug, { before: 1, after: 1 })
        .fetch()
    } catch (e) {}

    return {
      path,
      showModal: false,
      langFallback,
      section: params.section,
      book: params.book,
      page,
      prev,
      next
    }
  },
  head() {
    let name = this.$t('name');

    return {
      title: this.page.title,
      titleTemplate: '%s | ' + name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.page.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.description
        }
      ]
    }
  },
  computed: {
    docLink() {
      return `https://github.com/ebrahimMaher/dalilmobarmg/blob/master/content${this.path}/${this.$route.params.slug}.md`
    }
  }
}
</script>
<style lang="scss" scoped>
article h1 {
  @apply font-medium relative table mb-8;

  /* &::after {
    content: ' ';
    width: 80%;

    @apply block border-2 border-dalil-lightindigo mt-2 mb-1 rounded;
  } */
}
</style>
