<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface">
    <div class="container mx-auto px-4 py-4">
      <section class="rounded pb-4 lg:py-6 sm:p-6">
        <!-- why title i18n -->
        <!-- <i18n path="homepage.slack.title" tag="h2" class="text-3xl font-medium pt-10 pb-8 text-center" > </i18n> -->
        <div class="flex justify-between py-4">
          <div class="w-full lg:w-6/12 xl:w-7/12 lg:ml-12 lg:pt-4">
            <div class="flex justify-center lg:justify-start items-center">
              <div class="hidden lg:block ml-6"><DalilLogo style="height: 35px" /></div>
              <div>
                <img v-if="$colorMode.preference === 'dark'" src="~/assets/images/slack-white.svg" style="height: 30px" />
                <img v-else src="~/assets/images/slack.svg" style="height: 30px" />
              </div>
            </div>
            <hr class="lg:w-5/6 my-6">
            <div>
              <i18n path="homepage.slack.short_title" tag="h2" class="font-semibold lg:font-medium text-center md:text-right text-2xl md:text-3xl lg:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary tracking-normal leading-tight mb-6" > </i18n>
            </div>
            <i18n
              path="homepage.slack.description"
              tag="p"
              class="text-center lg:text-right leading-loose text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
            >
              <template v-slot:break>
                <br />
              </template>
            </i18n>
            <div class="text-center lg:text-right mt-8">
              <AppButton :variant="null" :href="$config.slackInvitationLink" class="bg-yellow-500 hover:bg-yellow-400 py-3 px-6 text-base text-light-onSurfaceStrong" data-cy="slack" >
                <div class="flex">
                  <IconGroup class="w-6 h-6 ml-2" />
                  {{ $t('homepage.slack.button') }}
                </div>
              </AppButton>
            </div>
          </div>
          <div class="hidden lg:block lg:w-5/12">
            <img src="~/assets/illustrations/community.svg" class="inline-block" />

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import MentorIllustration from '~/assets/illustrations/mentorship.svg?inline'
import DalilLogo from '~/components/global/DalilLogo'
import IconGroup from '~/components/atoms/icons/IconGroup'
export default {
  components: {
    DalilLogo,
    IconGroup
  }
}
</script>
