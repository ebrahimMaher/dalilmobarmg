<template>
  <div>
    <div
      v-click-outside="clickOutsideHandler"
      class="header_mobile_aside h-full block lg:hidden fixed left-0 z-20 w-3/4 sm:w-1/2"
      :class="{ 'header_mobile_aside--open shadow-2xl': show }"
    >
      <div
        class="mx-auto h-full light:bg-light-elevatedSurface dark:bg-dark-surface transition-colors duration-300 ease-linear border-r light:border-light-border dark:border-dark-border"
      >
        <div class="content-wrapper h-full">
          <div class="overflow-y-auto h-full pt-4">
            <transition-group
              v-for="(sublinks, group) in sortedLinks"
              :key="group"
              tag="div"
              name="list"
              class="header_mobile_aside_group"
            >
              <component
                :is="$route.params.book === group ? `h3` : 'nuxt-link'"
                :key="`title-${group}`"
                :to="{
                  name: `tutorials-${tutorial}-book-slug`,
                  params: { book: group, slug: sublinks[0].slug }
                }"
                class="flex items-center uppercase text-gray-600 pb-2"
                :class="{
                  'hover:text-dalil-lightindigo mb-4 block':
                    $route.params.book !== group,
                  'font-bold': $route.params.book === group
                }"
              >
                <ChevronDownIcon
                  v-if="$route.params.book === group"
                  class="w-4 h-4 ml-2"
                />
                <ChevronRightIcon v-else class="w-4 h-4 ml-2" />
                <span>{{ $t(`content.tutorials.${tutorial}.${group}`) }}</span>
              </component>
              <ul
                v-if="$route.params.book === group"
                :key="`list-${group}`"
                class="pb-6"
              >
                <li v-for="(link, index) in sublinks" :key="index" class="py-2">
                  <NuxtLink
                    class="block dark:text-dark-onSurfacePrimary hover:text-dalil-lightindigo transition-colors duration-300 ease-linear"
                    exact-active-class="text-dalil-lightindigo"
                    :to="toLink(group, link)"
                    @click.native="show = false"
                  >
                    {{ link.title }}
                  </NuxtLink>
                </li>
              </ul>
            </transition-group>
          </div>
          <!-- <button
            class="inner-button sm:hidden absolute h-10 w-10 flex items-center justify-center text-dalil-gray bg-gray-200 dark:bg-dark-elevatedSurface dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
            @click="show = false"
          >
            <TimesIcon
              class="block h-5 fill-current transition-colors duration-300 ease-linear"
            />
          </button> -->
        </div>

      </div>
    </div>
    <button
      class="bookmark-button lg:hidden rounded-full flex items-center justify-center transform active:scale-95 active:text-white active:bg-dalil-indigo transition duration-100 ease-out"
      :class="{'text-white bg-dalil-indigo': show, 'text-dalil-indigo dark:text-dark-primaryText bg-light-elevatedSurface dark:bg-dalil-indigo': !show}"
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
    links: {
      type: Object,
      default: () => []
    },
    tutorial: {

    },
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    sortedLinks() {
      const links = {}
      sortBy(Object.keys(this.links), link => {
        return Object.keys(this.$i18n.t('content.tutorials.' + this.tutorial)).indexOf(link)
      }).forEach(key => {
        links[key] = this.links[key]
      })
      return links
    }
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
    toLink(group, link) {
      return this.localePath({
        name: `tutorials-${this.tutorial}-book-slug`,
        params: { book: group, slug: link.slug }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header_mobile_aside {
  bottom: theme('spacing.16');
  top: theme('spacing.16');
  transform: translateX(calc(-100% - 1px));
  transition-duration: 0.2s;
  transition-property: transform;
  // transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-timing-function: theme(
    'transitionTimingFunction.ease-in-out-material-sharp'
  );

  @screen lg {
    top: theme('spacing.24');
  }
}

.header_mobile_aside--open {
  transform: translateX(0);
  transition-delay: 0s;

  & .header_mobile_aside_group {
    transform: translateX(0);
  }
}

.content-wrapper {
  margin-right: auto;
  padding-right: 2rem;

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

.bookmark-button {
  width: 52px;
  height: 52px;
  position: fixed;
  // border-radius: 0 9999px 9999px 0;
  box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.101562);
  right: 1rem;
  bottom: 1rem;
  z-index: 15;
}

.inner-button {
  border-radius: 100%;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.101562);
  right: 1rem;
  top: 1rem;
}
</style>
