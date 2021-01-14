<template>
  <div class="bg-light-surface dark:bg-dark-surface">
    <div class="container mx-auto px-4 py-8">
      <section class="rounded pb-4 lg:py-6 sm:p-6">
        <!-- why title i18n -->
        <!-- <i18n path="homepage.slack.title" tag="h2" class="text-3xl font-medium pt-10 pb-8 text-center" > </i18n> -->

          <div class="text-center w-full">
            <!-- <div class="flex justify-center lg:justify-start items-center">
              <div class="hidden lg:block ml-6"><DalilLogo style="height: 35px" /></div>
              <div>
                <img src="~/assets/images/facebook.svg" style="height: 45px" />
              </div>
            </div>
            <hr class="lg:w-5/6 my-6 dark:border-dark-border"> -->

            <div class="flex justify-center items-center mb-6">
              <img src="~/assets/images/facebook.svg" style="height: 40px" />
              <i18n path="homepage.facebook.title" tag="h2" class="font-semibold mr-3 lg:font-medium text-center md:text-right text-2xl md:text-3xl lg:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary tracking-normal leading-tight" > </i18n>
            </div>
            <i18n
              path="homepage.facebook.description"
              tag="p"
              class="text-center lg:px-16 leading-loose text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
            >
              <template v-slot:break>
                <br />
              </template>
            </i18n>

            <div class="text-center mt-8">
              <AppButton :variant="null" :href="$config.facebookGroupLink" class="bg-blue-700 hover:bg-blue-600 py-3 px-6 text-base text-white" data-cy="slack" >
                <div class="flex">
                  <IconGroup class="w-6 h-6 ml-2" />
                  {{ $t('homepage.facebook.button') }}
                </div>
              </AppButton>
            </div>
          </div>
      </section>
    </div>
  </div>
</template>

<script>
// import MentorIllustration from '~/assets/illustrations/mentorship.svg?inline'
import DalilLogo from '~/components/global/DalilLogo'
import IconGroup from '~/components/icons/IconGroup'
export default {
  components: {
    DalilLogo,
    IconGroup
  }
}
</script>
