<template>
  <div class="flex justify-between items-center mt-8 lg:mt-12">
    <NuxtLink
      v-if="prev && !prev.uncompleted"
      data-cy="prev"
      :to="
        localePath({
          name: `tutorials-${tutorial}-book-slug`,
          params: { book: prevBook, slug: prev.slug }
        })
      "
      class="blog-button ml-1 lg:ml-0"
      :class="classes"
    >
      <IconArrowRight class="w-4 h-4 ml-1" />
      <div class="btn-text">
        <template v-if="prev.menu">
          {{ prev.menu }}
        </template>
        <template v-else>
          <span class="hidden lg:inline-block">{{ prev.title }}</span>
          <span class="lg:hidden">السابق</span>
        </template>
      </div>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next && !next.uncompleted"
      data-cy="next"
      :to="
        localePath({
          name: `tutorials-${tutorial}-book-slug`,
          params: { book: nextBook, slug: next.slug }
        })
      "
      class="mr-1 lg:mr-0"
      :class="classes"
    >
      <div class="btn-text">
        <template v-if="next.menu">
          {{ next.menu }}
        </template>
        <template v-else>
          <span class="hidden lg:inline-block">{{ next.title }}</span>
          <span class="lg:hidden">التالي</span>
        </template>
      </div>
      <IconArrowLeft class="w-4 h-4 mr-1" />
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      classes: "btn border light:border-light-border dark:border-dark-border transition-transform lg:transition-all duration-200 ease no-underline text-sm lg:text-sm px-5 lg:px-4 py-2 uppercase rounded transform lg:hover:shadow-lg bg-light-surface dark:bg-dark-surface lg:bg-transparent lg:hover:bg-primary-base lg:dark:hover:text-white lg:hover:text-white active:translate-y-0 lg:active:shadow-md active:scale-95 light:text-primary-base dark:text-dark-primaryText lg:dark:text-dark-primaryText lg:text-primary-base font-semibold flex items-center"
    }
  },
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    },
    tutorial: {
      type: String,
      default: ''
    }
  },
  computed: {
    prevBook() {
      if (!this.prev) {
        return
      }

      const dirs = this.prev.dir.split('/').slice(-1)

      return dirs[dirs.length - 1]
    },
    nextBook() {
      if (!this.next) {
        return
      }

      const dirs = this.next.dir.split('/')

      return dirs[dirs.length - 1]
    }
  }
}
</script>
<style lang="scss" scoped>
.btn{
  overflow: hidden;
}
.btn-text{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    max-width: 100%;
}
</style>
