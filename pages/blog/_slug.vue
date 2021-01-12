<template>
  <div class>
    <div class="container blog-container overflow-hidden mx-auto pt-4 px-8 pb-8">
      <NuxtLink
        :to="localePath({ name: 'blog' })"
        class="btn blog-button border-primary-base dark:border-dark-border transition duration-200 ease no-underline text-xs lg:text-sm px-2 lg:px-4 py-2 uppercase rounded transform hover:shadow-lg hover:bg-primary-base active:translate-y-0 active:shadow-md active:scale-95 dark:text-dark-primaryText text-light-onSurfacePrimary dark:hover:text-white hover:text-white font-semibold inline-flex items-center"
      >
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        عودة إلى صفحة المدونة
      </NuxtLink>

      <BlogpostItem :post="post" />
      <BlogpostNavigationLinks :prev="prev" :next="next" />
      <PageContributors :doc-link="docLink" :contributors="post.contributors" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArrowRightIcon from '~/assets/icons/arrow-right.svg?inline'
import copyCodeBlock from '~/mixins/copyCodeBlock'

export default {
  name: 'PageSlug',
  scrollToTop: true,
  components: {
    ArrowRightIcon
  },
  mixins: [copyCodeBlock],
  middleware({ params, redirect }) {
    if (params.slug === 'index') {
      redirect('/')
    }
  },
  async asyncData({
    $content,
    store,
    app,
    params,
    error,
    router
  }) {
    const { slug } = params
    let path = `/${app.i18n.defaultLocale}/blog`
    let post, prev, next

    try {
      post = await $content(path, slug).fetch()
    } catch (e) {
      // fix bug of 404 without slug (index page)
      if (slug){
        return error({ statusCode: 404, message: 'Page not found' })
      }
    }

    if (app.i18n.defaultLocale !== app.i18n.locale) {
      try {
        path = `/${app.i18n.locale}/blog`
        post = await $content(path, slug).fetch()
      } catch (err) {
        path = `/${app.i18n.defaultLocale}/blog`
      }
    }

    try {
      ;[prev, next] = await $content(path)
        .only(['title', 'slug'])
        .sortBy('date', 'desc')
        .surround(slug, { before: 1, after: 1 })
        .fetch()
    } catch (e) {}

    return {
      post,
      slug,
      prev,
      next,
      path
    }
  },
  computed: {
    docLink() {
      return `https://github.com/ebrahimMaher/dalilmobarmg/blob/master/content${this.path}/${this.slug}.md`
    },
    ...mapState({
      host: state => state.host,
      isDev: state => state.isDev,
      envProd: state => state.envProd
    }),
    socialImage() {
      const image = this.post.imgUrl ? this.post.imgUrl : 'dalilmobarmg-card.png'
      return `${this.host}/${image}`
    }
  },
  head() {
    let name = this.$t('name');
    return {
      title: this.post.title,
      titleTemplate: '%s | ' + name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.dalilmobarmg.com/blog/${this.post.slug}`
        },
        { hid: 'og:image', property: 'og:image', content: this.socialImage },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.socialImage
        },
        {
          hid: 'twitter:image:',
          name: 'twitter:image:alt',
          content: this.post.imgUrl ? 'صورة المقال' : 'دليل مبرمج'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@media(min-width: 1024px){
  .container.blog-container{
    max-width: 54rem;
  }
}
@media (min-width: 1280px){
  .container.blog-container{
    max-width: 58rem;
  }
}
</style>
