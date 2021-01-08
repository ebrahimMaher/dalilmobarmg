<template>
  <div class="shadow-dalilmobarmg">
    <div class="container mx-auto px-4 lg:flex">
      <MobileAsideNav tutorial="algorithms" :links="links" />
      <TheAsideNavTutorials :links="links" tutorial="algorithms" class="hidden lg:block" />
      <div
        class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-7/8"
      >
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import groupBy from 'lodash.groupby'

export default {
  async asyncData({ $content, app, params, redirect }) {
    let pages = []
    if (!params.book) {
      return redirect('/tutorials/algorithms/environment/intro')
    }
    try {
      const locale = app.i18n.defaultLocale;

      pages = await $content(`${locale}/tutorials/algorithms`, { deep: true })
        .only(['slug', 'title', 'menu', 'category', 'position', 'new', 'updated', 'contributors', 'createdAt', 'updatedAt'])
        .sortBy('position')
        .sortBy('title')
        .sortBy('menu')
        .where({ position: { $gte: 0 } })
        .fetch()
    } catch (e) {}

    return {
      links: groupBy(pages, 'category')
    }
  }
}
</script>
