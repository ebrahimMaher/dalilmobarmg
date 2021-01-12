<template>
  <article>
    <header class="flex items-center justify-between flex-col mt-4 lg:mt-8">
      <div class="flex flex-1 flex-col mb-8">
        <h1 class="text-2xl lg:text-3xl light:text-light-onSurfaceStrong dark:text-dark-onSurfaceStrong font-semibold mb-4 leading-normal">
          {{ post.title }}
        </h1>
        <div class="text-sm flex justify-between flex-row">
          <div>
            <div class="flex light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary text-sm" >
              <svg class="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              {{ formatDateByLocale(post.date) }}
            </div>
          </div>
          <div>
            <BlogpostAuthor
              v-for="(author, index) in post.authors"
              :key="index"
              :author="author"
            />
          </div>
        </div>
      </div>

      <div class="w-full overflow-hidden h-15 rounded-md light:bg-light-surface dark:bg-dark-surface">
        <img :src="post.imgUrl" :alt="post.title" class="w-100 " />
      </div>
    </header>
    <div class="mt-8 lg:mt-12">
      <NuxtContent :document="post" />
    </div>
    <div
      v-if="hasTags"
      class="border-t border-light-border dark:border-dark-border my-10"
    >
      <div
        class="flex flex-row flex-wrap justify-start my-10 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
      >
        <span
          v-for="(tag, id) in post.tags"
          :key="id"
          class="truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full ml-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogpostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasTags() {
      return this.post.tags
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

<style></style>
