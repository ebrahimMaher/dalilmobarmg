<template>
  <div>
    <div
      v-click-outside="clickOutsideHandler"
      class="navigation-drawer h-full block lg:hidden fixed left-0 z-20 w-5/6 sm:w-3/4 shadow-2xl"
      :class="{ 'navigation-drawer--open': show }"
    >
      <div
        class="mx-auto h-full light:bg-light-elevatedSurface dark:bg-dark-surface transition-colors duration-300 ease-linear border-l light:border-light-border dark:border-dark-border"
      >
        <div class="content-wrapper h-full">
          <div class="overflow-y-auto h-full pt-4">
            <div class="flex items-center mx-auto w-full">
              <nav class="flex lg:pt-1 xl:pt-0 w-full">
                <ul class="flex flex-col text-right w-full">
                  <div class="font-bold text-sm text-light-onSurfacePrimary dark:text-dark-onSurfaceStrong pb-4 border-b light:border-light-border dark:border-dark-border mb-6">
                    {{$t('main_menu')}}
                  </div>
                  <li
                    v-for="link in $t('header.links')"
                    :key="link.slug"
                    class="py-3 px-4 light:bg-light- light:bg-light-surface dark:bg-dark-elevatedSurface rounded-lg mb-3 transition-transform duration-150 ease-linear transform active:scale-90"
                    @click="show = false"
                  >
                    <NuxtLink
                      v-if="!link.href"
                      :disabled="link.disabled"
                      class="block font-medium uppercase hover:no-underline light:hover:text-dalil-lightindigo dark:hover:text-dark-onSurfaceStrong text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary ease-linear"
                      :to="
                        localePath({
                          name: link.slug,
                          params: { book: link.param_book, slug: link.param_slug }
                        })
                      "
                      exact
                    >
                      {{ link.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>
    </div>

    <button
      class="w-10 h-10 lg:hidden rounded-full flex items-center justify-center transform active:scale-95 light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
      :class="{'light:bg-light-surface dark:bg-dark-surface text-dalil-indigo dark:text-dark-primaryText': show}"
      @click.prevent.stop="toggle"
    >
      <IconMenu
        v-if="!show"
        class="block stroke-current transition-colors duration-300 ease-linear w-6 h-6"
      />
      <TimesIcon
        v-else
        class="block h-5 fill-current transition-colors duration-300 ease-linear"
      />
    </button>


  </div>
</template>

<script>
import sortBy from 'lodash.sortby'

import IconMenu from '../icons/IconMenu'
import TimesIcon from '~/assets/icons/times.svg?inline'
import ChevronDownIcon from '~/assets/icons/chevron-down.svg?inline'
import ChevronRightIcon from '~/assets/icons/chevron-right.svg?inline'

export default {
  components: {
    IconMenu,
    TimesIcon,
    ChevronDownIcon,
    ChevronRightIcon
  },
  props: {
    tutorial: {

    },
  },
  data() {
    return {
      show: false
    }
  },
  computed: {

  },
  methods: {
    toggle(){
      console.log('test');
      this.show = !this.show;
    },
    clickOutsideHandler() {
      if (this.show) {
        this.show = false
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.navigation-drawer {
  transform: translateX(calc(-100% - 30px));
  transition-duration: 0.2s;
  transition-property: transform;
  // transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-timing-function: theme(
    'transitionTimingFunction.ease-in-out-material-sharp'
  );

  bottom: theme('spacing.16');
  top: theme('spacing.16');
  // top: 0;

  @screen lg {
    top: theme('spacing.24');
  }
}

.navigation-drawer--open {
  transform: translateX(0);
  transition-delay: 0s;

  & .navigation-drawer_group {
    transform: translateX(0);
  }
}

.content-wrapper {
  margin-right: auto;
  padding: 0 2rem;

  @screen sm {
    max-width: calc(theme('screens.sm') / 2);
  }

  @screen md {
    max-width: calc(theme('screens.md') / 2);
  }
}

button {
  outline: none;
}
</style>
