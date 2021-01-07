<template>
  <div class="pt-4">
    <div class="pt-3 mt-6 border-t border-light-border dark:border-dark-border">
      <h3
        v-if="contributors.length"
        class="my-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary relative text-xl table transition-colors duration-300 ease-linear"
      >
        {{ $t('contribute.title') }}
      </h3>
      <div class="flex flex-wrap" v-if="contributors.length">
        <a v-for="(contributor, i) of contributorsData" :key="contributor.id" :href="`https://github.com/${contributor.github}`" rel="noopener" target="_blank" class="p-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary bg-light-surfaceElevated light:hover:bg-gray-200 dark:bg-dark-elevatedSurface dark:hover:bg-dark-surface rounded overflow-hidden flex items-center mb-2 ml-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear" :class="{'font-semibold': i === 0}" >
        <div class="ltr d-inline-block px-2" style="direction: ltr">
            <div class="leading">
              {{ contributor.name }}
            </div>
            <div v-if="contributor.github" class="text-sm font-normal text-gray-600 text-left">
              @{{contributor.github}}
            </div>
          </div>
          <img :alt="contributor.name" :src="contributor.github ? `https://github.com/${contributor.github}.png?size=64` : '/img/default-avatar.jpg'" class="border rounded-full h-12 w-12" />
        </a>
      </div>
      <p v-if="docLink && $route.params.book" class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pt-3 mb-8 transition-colors duration-300 ease-linear" >
        {{ $t('contribute.docs') }}
        <a :href="docLink" target="_blank" rel="noopener" class="btn py-3 px-4 lg:p-0 transform lg:transform-none active:scale-95 transition duration-100 border-2 border-black lg:border-0 rounded lg:rounded-none justify-center text-black lg:text-primary-base lg:hover:underline flex mt-3 lg:mt-0 lg:inline-block" >
          <GithubIcon class="fill-black w-6 h-6 ml-3" />
          {{ $t('contribute.edit_on_github') }}
        </a>
      </p>
      <p
        v-else-if="docLink && $route.path.startsWith('/blog')"
        class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pt-3 mb-8 transition-colors duration-300 ease-linear"
      >
        {{ $t('contribute.blog') }}
        <a
          :href="docLink"
          target="_blank"
          rel="noopener"
          class="text-primary-base dark:text-dark-primaryText hover:underline"
        >
          {{ $t('contribute.edit_on_github') }}
        </a>
      </p>

    </div>
  </div>
</template>

<script>
import GithubIcon from '~/assets/icons/github-3.svg?inline'
export default {
  components: {GithubIcon},
  props: {
    docLink: {
      type: String,
      required: false,
      default: ''
    },
    contributors: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    contributorsData(){
      return this.contributors.map(contributor => {
        return this.$store.state.contributors.find(cont=>{
          return cont.id === contributor;
        }) || {name: contributor}
      })
    }
  }
}
</script>
