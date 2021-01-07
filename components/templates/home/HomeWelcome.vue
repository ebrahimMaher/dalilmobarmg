<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface relative">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row justify-between py-10 sm:py-24">
        <figure class="w-full max-w-3/4 mx-auto lg:hidden">
            <img src="~/assets/images/home-vector.svg" />
        </figure>
        <div class="w-full lg:w-6/12 xl:w-8/12 text-center lg:text-right py-4 sm:p-0 lg:ml-12">
          <!--welcome title i18n -->
          <i18n
            path="homepage.welcome.title"
            tag="h1"
            class="text-4xl xl:text-5xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium tracking-normal leading-tight mb-6"
            style="font-size: 2.9rem;!important"
          >
            <template #name>
              <span class="font-semibold text-primary-base">{{$t('name')}} | </span>
            </template>
          </i18n>

          <!--welcome description i18n -->
          <i18n path="homepage.welcome.description" tag="h2" class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-8 mb-6" > </i18n>

          <div class="flex flex-col sm:block text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary my-8">
            <a href="#non-profit" class="py-2 px-3 bg-gray-100 hover:bg-indigo-50 rounded text-indigo-800 hover:text-light-onSurfacePrimary dark:hover:text-dark-onSurfacePrimary transition ease-out duration-200" >
              {{ $t('homepage.welcome.non_profit') }}
            </a>
          </div>

          <div class="flex flex-col sm:block pt-4">
            <AppButton
              to="/tutorials/algorithms/environment/intro"
              variant="primary"
              data-cy="fundamentals"
              class="sm:ml-4 py-3 px-6 text-base mb-4"
            >
              <TerminalIcon slot="icon" class="inline-block h-6 -mt-1 ml-1" />
              {{ $t('homepage.welcome.get_started') }}
            </AppButton>
            <AppButton
              :to="{name: 'blog'}"
              :variant="null"
              class="bg-transparent hover:text-primary-dark sm:ml-4 py-3 px-6 text-base"
              data-cy="github-stars"
            >
              <BlogIcon slot="icon" class="inline-block h-6 -mt-1 ml-1" />
              {{$t('homepage.welcome.blog')}}
            </AppButton>
          </div>
        </div>
        <figure class="hidden lg:block lg:w-4/12">
            <img src="~/assets/images/home-vector.svg" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import TerminalIcon from '~/components/atoms/icons/IconTerminal.vue'
import BlogIcon from '~/components/atoms/icons/IconBlog.vue'
export default {
  components: {
    BlogIcon,
    TerminalIcon
  },
  computed: {
    /**
     * This was done because the vimeo.com site has been blocked in Indonesia.
     * So, the video url is redirected to the youtube.com service.
     *
     * https://github.com/ebrahimMaher/dalilmobarmg/pull/661
     */
    videoUrl() {
      return this.$i18n.locale === 'id'
        ? 'https://www.youtube.com/embed/7ITypVi-qRY'
        : 'https://player.vimeo.com/video/311756540'
    }
  }
}
</script>
