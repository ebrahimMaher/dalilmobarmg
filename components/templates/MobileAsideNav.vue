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
            <TutorialsNav :links="links" :tutorial="tutorial" />
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
      :class="{'text-white bg-dalil-indigo': show, 'bg-primary-base text-white hover:bg-primary-dark': !show}"
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
  padding: 0 1rem;

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
  width: 50px;
  height: 50px;
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
