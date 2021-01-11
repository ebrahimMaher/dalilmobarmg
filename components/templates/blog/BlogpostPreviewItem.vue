<template>
  <NuxtLink
    :to="localePath({ name: 'blog-slug', params: { slug: post.slug } })"
    class="border light:border-light-border dark:border-dark-border flex flex-col mb-8 rounded-lg overflow-hidden hover:shadow-dalilmobarmg dark:hover:bg-dark-surface cursor-pointer transition duration-300 ease-linear"
  >
    <div class="w-full overflow-hidden h-15 light:bg-light-surface dark:bg-dark-surface">
      <img :src="post.imgUrl" :alt="post.title" class="w-100 " />
    </div>
    <div class="px-4 lg:px-5 pt-3 pb-5 w-full flex flex-col justify-between">
      <div class="mb-2">

        <div class="flex justify-between items-center mb-3">
          <div class="light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary text-sm" >
            {{ formatDateByLocale(post.date) }}
          </div>
          <div class="flex text-xs items-center light:bg-light-surface dark:bg-dark-surface rounded-full pl-2" >
            <img class="inline-block h-6 w-6 rounded-full border light:border-light-border dark:border-dark-border" :src="post.authors[0].avatarUrl" alt />
            <span class="leading-none last:ml-0 px-1 light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-dalil-lightindigo" >
              {{ post.authors[0].name }}
            </span>
          </div>
        </div>

        <h2 class="my-1 inline-block leading-tight light:hover:text-dalil-lightindigo dark:hover:text-dark-primaryText light:text-light-onSurfaceStrong dark:text-dark-onSurfaceStrong text-lg md:text-xl font-semibold" >
          {{ post.title }}
        </h2>
        <div class="py-3">
          <p
            class="truncate-multiline-3 leading-relaxed light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
          >
            {{ post.description }}
          </p>
        </div>

        <hr class="light:border-light-border dark:border-dark-border hidden lg:block my-5" />

        <div
          class="flex flex-row flex-no-wrap justify-start light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
        >
          <span v-for="(tag, id) in post.tags.slice(0,4)" :key="id" class="truncate uppercase font-medium text-ss px-2 py-1 rounded-full ml-2 border border-light-border dark:border-dark-border" >
            {{ tag }}
          </span>
        </div>
      </div>
      <!-- <div class="flex flex-col lg:flex-row text-sm">
        <div class="mb-4 lg:mb-0 flex items-center">
          <span
            v-for="(author, index) in post.authors"
            :key="index"
            class="flex items-center ml-3 light:bg-light-surface dark:bg-dark-surface rounded-full px-2 py-1"
          >
            <img
              class="inline-block h-6 w-6 rounded-full"
              :src="author.avatarUrl"
              alt
            />
            <span
              class="leading-none last:ml-0 px-1 light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-dalil-lightindigo"
            >
              {{ author.name }}
            </span>
          </span>
        </div>
      </div> -->
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDateByLocale(d) {
      const currentLocale = this.$i18n.locale || 'ar'
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString(currentLocale, options)
    }
  }
}
</script>
