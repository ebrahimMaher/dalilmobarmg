<template>
  <div class="steps-wrapper light:bg-light-surface dark:bg-dark-surface w-full px-6 py-5">
    <div class="header border-b light:border-light-border dark:border-dark-border pb-3 mb-4">
      <div class="title flex text-lg light:text-light-onSurfacePrimary dark:text-dark-onSurfaceStrong mb-1">
        <div class="icon ml-2 text-orange-500">
          <svg class="w-8 h-8" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div>{{title}}</div>
      </div>
      <div v-if="subtitle" class="subtitle text-sm light:text-gray-600 dark:text-dark-onSurfacePrimary">
        {{subtitle}}
      </div>
    </div>
    <div class="content px-5">
      <carousel>
        <slide v-for="(img, i) in images" :key="i">
          <img :src="slide" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';

export default {
  // components: {Carousel, Slide},
  props: {
    title: {
      type: String,
      default: 'الخطوات'
    },
    subtitle: {
      type: String,
      default: null
    },
    images: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>

</style>
