<template>
  <header
    class="sticky top-0 left-0 right-0 z-30 bg-light-elevatedSurface dark:bg-dark-elevatedSurface border-b h-16 lg:h-20 transition-colors duration-300 ease-linear"
  ><!-- :class="{ shadow: !onTop, 'shadow-reverse': onTop }" -->
    <div
      class="container relative mx-auto px-4 flex items-center lg:py-6 h-full"
    >
      <!-- Logo -->
      <NuxtLink
        class="inline-block text-dalil-gray h-7 lg:h-10 z-10 ml-auto"
        to="/"
      >
        <h1 class="m-0 h-0 w-0 overflow-hidden"> دليل مبرمج </h1>
        <DalilLogo
          class="h-6 lg:h-8 text-primary-base dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        />
      </NuxtLink>
      <!-- Center Navigation -->
      <div class="flex items-center">
        <nav class="hidden lg:flex lg:pt-1 xl:pt-0">
          <ul class="flex text-center">
            <li
              v-for="link in $t('header.links')"
              :key="link.slug"
              class="xl:px-4 lg:py-0 lg:px-2 py-2"
            >
              <NuxtLink
                v-if="!link.href"
                :disabled="link.disabled"
                class="block font-medium uppercase hover:no-underline light:hover:text-dalil-lightindigo dark:hover:text-dalil-lightindigo text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
                :to="
                  localePath({
                    name: link.slug,
                    params: { book: 'fundamentals', slug: 'environment' }
                  })
                "
                exact
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="buttons mr-2">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DalilLogo from '~/assets/images/logo.svg?inline'

export default {
  components: {
    DalilLogo
  },
  data() {
    return {
      onTop: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.onTop = window.pageYOffset < 60
    }
  }
}
</script>
