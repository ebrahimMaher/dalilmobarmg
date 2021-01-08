<template>
  <div>
    <h6
      class="mb-3 lg:mb-2 text-gray-500 dark:text-gray-600 uppercase tracking-wide font-bold text-sm lg:text-xs"
    >
      {{ $t('guide.toc_title') }}
    </h6>
    <nav>
      <scrollactive
        highlight-first-item
        active-class="toc-active-item"
        tag="ul"
        :offset="100"
      >
        <li
          v-for="link of toc"
          :key="link.id"
          class="text-gray-600 dark:text-gray-500"
          :class="{
            'border-t border-dashed dark:border-gray-800 first:border-t-0 font-semibold':
              link.depth === 2,
            'hidden md:block':
              link.depth > 2,
          }"
        >
          <NuxtLink
            :to="`#${link.id}`"
            data-cy="toc"
            class="block text-sm scrollactive-item transition-transform ease-in-out duration-300 transform hover:translate-x-1"
            :class="{
              'py-2': link.depth === 2,
              'mr-2 pb-2': link.depth === 3
            }"
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </scrollactive>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.affix {
  height: calc(100vh - 6rem);
  top: 6rem;
}

li {
  list-style: none;
}
.toc-active-item{
  @apply text-light-onSurfacePrimary font-bold;
}
.dark-mode{
  .toc-active-item{
    @apply text-dark-onSurfaceStrong
  }
}
</style>
