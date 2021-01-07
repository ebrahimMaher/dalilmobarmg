<template>
  <aside
    class="opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block border-l"
  >
    <div
      class="h-full overflow-y-auto scrolling-touch text-center lg:text-right lg:h-auto lg:block lg:relative lg:sticky lg:top-24"
    >
      <nav
        class="pt-6 lg:overflow-y-auto lg:block lg:pr-0 lg:pl-4 sticky?lg:max-h-(screen-24)"
        :class="{ hidden: !showNav }"
      >
        <div v-for="(sublinks, group) in sortedLinks" :key="`links-${group}`" class="mb-4">
          <component
            :is="$route.params.book === group ? `h3` : 'a'"
            :key="`title-${group}`"
            :to="{
              name: `tutorials-${tutorial}-book-slug`,
              params: { book: group, slug: sublinks[0].slug }
            }"
            class="flex select-none items-center cursor-pointer uppercase font-medium pb-2 transition-colors duration-100 ease-linear"
            :class="{
              'hover:text-dalil-lightindigo block':
                $route.params.book !== group && visibleGroup !== group,
              'font-bold text-dalil-lightindigo': $route.params.book === group,
              'text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary': $route.params.book !== group
            }"
            @click.prevent="visibleGroup === group ? visibleGroup = '' : visibleGroup = group"
          >
            <ChevronDownIcon
              v-if="$route.params.book === group || visibleGroup === group"
              class="w-4 h-4 ml-2"
            />
            <ChevronRightIcon v-else class="w-4 h-4 ml-2" />
            <span>{{ $t(`content.tutorials.${tutorial}.${group}`) }}</span>
          </component>
          <transition name="fade-down-transition">
            <div v-if="$route.params.book === group || visibleGroup === group">

              <ul class="pb-8 pl-2">
                <li
                  v-for="(link, index) in sublinks"
                  :key="index"
                  class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
                >
                  <NuxtLink
                    class="aside-nav-item p-2 flex rounded hover:bg-gray-100 hover:text-dalil-lightindigo dark:hover:text-dalil-lightindigo transition-colors duration-300 ease-linear"
                    exact-active-class="text-dalil-lightindigo hover:text-primary-dark bg-indigo-50 hover:bg-indigo-100 active:bg-indigo-200 dark:bg-indigo-800 dark:text-white"
                    :to="toLink(group, link)"
                  >
                    <template v-if="link.menu">
                      {{ link.menu }}
                    </template>
                    <template v-else>
                      {{ link.title }}
                      <div class="font-semibold mr-2 mt-1">
                        <Badge v-if="link.new || dateIsNew(link.createdAt)" color="indigo" :value="$t('new')" />
                        <Badge v-else-if="link.updated || dateIsNew(link.updatedAt)" color="green" :value="$t('updated')" />
                      </div>
                    </template>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
import sortBy from 'lodash.sortby'
import ChevronDownIcon from '~/assets/icons/chevron-down.svg?inline'
import ChevronRightIcon from '~/assets/icons/chevron-right.svg?inline'
import Badge from '~/components/global/Badge'

export default {
  components: {
    ChevronDownIcon,
    Badge,
    ChevronRightIcon
  },
  props: {
    links: {
      type: Object,
      default: () => []
    },
    tutorial: {
      type: String
    }
  },
  data() {
    return { current: 0, setInter: null, showNav: false, visibleGroup: '' }
  },
  computed: {
    sortedLinks() {
      const links = {}
      sortBy(Object.keys(this.links), link => {
        return Object.keys(this.$i18n.t(`content.tutorials.${this.tutorial}`)).indexOf(link)
      }).forEach(key => {
        links[key] = this.links[key]
      })
      return links
    }
  },
  methods: {
    dateIsNew(timestamp, days=2){
      // ** createdAt must be in UTC **
      if (!timestamp){
        return false;
      }
      let createdAt = new Date(timestamp);
      let timezoneOffset = new Date().getTimezoneOffset(); // to get user time in UTC

      let now = new Date(),
          nowUtc = new Date(now.getTime() + timezoneOffset * 60000),
          nowTimestamp = nowUtc.getTime();

      let createdAtTimestamp = createdAt.getTime(),
          addedTimestamp = days*24*60*60*1000,
          maxUtcTimestamp = createdAtTimestamp + addedTimestamp;

      return maxUtcTimestamp > nowTimestamp;
    },
    toLink(group, link) {
      const tutorial = this.tutorial;
      return this.localePath({
        name: `tutorials-${tutorial}-book-slug`,
        params: { book: group, slug: link.slug }
      })
    }
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
  .aside-nav-item{
    &:active{
      background-color: theme('colors.indigo.100');
    }
  }
</style>
