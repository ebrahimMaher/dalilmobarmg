<template>
  <div class="bg-light-elevatedSurface border-t dark:bg-dark-surface">
    <div class="container mx-auto px-4 py-6">
      <section class="rounded py-6 sm:p-6">
        <!-- why title i18n -->
        <!-- <i18n path="homepage.slack.title" tag="h2" class="text-3xl font-medium pt-10 pb-8 text-center" > </i18n> -->
        <div class="flex justify-between pb-12 sm:py-18">
          <div class="hidden lg:block lg:w-5/12">
            <GithubIllustration class="inline-block" />
          </div>
          <div class="w-full lg:w-6/12 xl:w-7/12 lg:mr-12 pt-8">
            <!-- <div class="flex items-center">
              <div class="ml-6"><DalilLogo height="35" /></div>
              <div><GithubIcon height="50" /></div>
            </div>
            <hr class="lg:w-5/6 my-6"> -->
            <div class="flex items-center mb-6">
              <div class="ml-4 "><GithubIcon height="40" /></div>
              <i18n path="homepage.github.title" tag="h3" class="text-3xl text-black dark:text-dark-onSurfacePrimary font-semibold tracking-normal leading-tight" > </i18n>
            </div>
            <i18n
              path="homepage.github.description"
              tag="p"
              class="leading-loose text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
            >
              <template v-slot:break>
                <br />
              </template>
            </i18n>
            <div class="mt-8">
              <AppButton :variant="null" :href="$config.GithubLink" class="bg-black text-white hover:bg-gray-900 py-3 px-6 text-base" data-cy="slack" >
                <div class="flex">
                  <div class="ml-3">
                    <GithubIcon2 class="w-6 h-6" />
                  </div>
                  {{ $t('homepage.github.button') }}
                </div>
              </AppButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GithubIllustration from '~/assets/illustrations/developer-github.svg?inline'
import GithubIcon from '~/assets/icons/github-2.svg?inline'
import GithubIcon2 from '~/assets/icons/github-3.svg?inline'

import DalilLogo from '~/assets/images/logo.svg?inline'
import IconGroup from '~/components/atoms/icons/IconGroup'
export default {
  components: {
    GithubIllustration,
    DalilLogo,
    GithubIcon,
    GithubIcon2,
    IconGroup
  }
}
</script>
