<template>
  <nav class="pt-6 lg:overflow-y-auto lg:block lg:pr-0 lg:pl-2 sticky?lg:max-h-(screen-24)">
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
            $route.params.book !== group && visibleGroup !== group && !isShort,
          'font-bold text-dalil-lightindigo dark:text-dark-onSurfaceStrong': $route.params.book === group,
          'text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary': $route.params.book !== group
        }"
        @click.prevent="visibleGroup === group ? visibleGroup = '' : visibleGroup = group"
      >
        <ChevronDownIcon
          v-if="$route.params.book === group || visibleGroup === group || isShort"
          class="w-4 h-4 ml-2"
        />
        <ChevronRightIcon v-else class="w-4 h-4 ml-2" />

        <span>{{ $t(`content.tutorials.${tutorial}.${group}`) }}</span>
      </component>
      <transition name="fade-down-transition">
        <div v-if="($route.params.book === group || visibleGroup === group) || isShort">

          <ul class="pb-2 pl-2">
            <li
              v-for="(link, index) in sublinks"
              :key="index"
              class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
            >
              <component
                :is="!link.uncompleted ? 'nuxt-link' : 'a'"
                class="aside-nav-item select-none p-2 flex items-center justify-between w-full rounded hover:bg-gray-100 dark:hover:bg-dark-surface hover:text-dalil-lightindigo dark:hover:text-dark-onSurfaceStrong"
                exact-active-class="text-dalil-lightindigo hover:text-primary-dark dark:text-dark-primaryText bg-indigo-50 border border-indigo-50 hover:bg-indigo-100 dark:bg-dark-surface dark:border-dark-border dark:text-white"
                :disabled="link.uncompleted"
                :to="!link.uncompleted ? toLink(group, link) : undefined"
              >
                <div v-if="link.menu">
                  {{ link.menu }}
                </div>
                <template v-else>
                  <div class="item-name" v-html="parseBraces(link.title)">
                    <!-- {{ link.title }} -->
                  </div>
                  <div class="font-semibold mr-2 mt-1">
                    <Badge v-if="link.uncompleted" color-class="bg-gray-500 hover:bg-gray-600" :value="$t('soon')" />
                    <Badge v-else-if="link.new || dateIsNew(link.createdAt)" color-class="bg-indigo-600 hover:bg-indigo-500" :value="$t('new')" />
                    <Badge v-else-if="link.updated || dateIsNew(link.updatedAt)" color-class="bg-green-600 hover:bg-green-500" :value="$t('updated')" />
                  </div>
                </template>
              </component>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
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
    return { visibleGroup: '' }
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
    },
    linksLength(){
      const sortedLinks = this.sortedLinks;

      let i = 0;
      for (let key in sortedLinks){
        let subLinks = sortedLinks[key];
        i += subLinks ? subLinks.length : 0;
      }
      return i;
    },
    isShort(){
      return this.linksLength < 10;
    }
  },
  methods: {
    parseBraces(text){
      let regex = /\((.*?)\)/g,
        braces = text.match(regex);
      if (braces && braces.length){
          let inBraces = braces[0].replace('(', '').replace(')', '');
          return text.replace(regex, `<span class="defination">${inBraces}</span>`);
      }
      return text;
    },
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
    @apply transform transition-transform duration-75 ease-linear;
    &:active{
      @apply scale-95 ;
    }
  }
  .item-name{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
</style>
<style lang="scss">
.item-name{
  .defination{
    @apply text-xs font-semibold text-gray-600 mr-1; // border-b border-dashed border-gray-300
  }
}
</style>
