<template>
  <div class="flex justify-between items-center">
    <NuxtLink
      v-if="prev"
      :to="toLink(prev.slug)"
      class="btn blog-button border light:border-light-border dark:border-dark-border transition duration-200 ease no-underline text-xs lg:text-sm px-2 lg:px-4 py-2 uppercase rounded transform hover:shadow-lg hover:bg-primary-base active:translate-y-0 active:shadow-md active:scale-95 dark:text-dark-primaryText text-primary-base dark:hover:text-white hover:text-white font-semibold inline-flex items-center"
    >
      <!-- <ArrowLeftIcon class="h-5 ml-2" /> -->
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
      {{ prev.title || 'عودة إلى المقالات' }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      :to="toLink(next.slug)"
      class="btn blog-button border light:border-light-border dark:border-dark-border transition duration-200 ease no-underline text-xs lg:text-sm px-2 lg:px-4 py-2 uppercase rounded transform hover:shadow-lg hover:bg-primary-base active:translate-y-0 active:shadow-md active:scale-95 dark:text-dark-primaryText text-primary-base dark:hover:text-white hover:text-white font-semibold inline-flex items-center"
    >
      {{ next.title }}
      <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
    </NuxtLink>
  </div>
</template>

<script>
import ArrowLeftIcon from '~/assets/icons/arrow-left.svg?inline'
import ArrowRightIcon from '~/assets/icons/arrow-right.svg?inline'

export default {
  name: 'BlogpostNavigationLinks',
  components: {
    ArrowLeftIcon,
    ArrowRightIcon
  },
  props: {
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  },
  methods: {
    toLink(slug) {
      if (slug === 'index') {
        return this.localePath('blog')
      }
      return this.localePath({ name: 'blog-slug', params: { slug } })
    }
  }
}
</script>
