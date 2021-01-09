<template>
  <aside
    class="opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block border-l dark:border-dark-border"
  >
    <div
      class="h-full overflow-y-auto scrolling-touch text-center lg:text-right lg:h-auto lg:block lg:relative lg:sticky lg:top-24"
    >
      <TutorialsNav :links="links" :tutorial="tutorial" />
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
    return {

    }
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
  },
  methods: {

  },
  mounted(){

  }
}
</script>
