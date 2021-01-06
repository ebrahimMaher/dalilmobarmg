<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface">
    <div class="container mx-auto px-4 pb-4 pt-4">
      <section class="rounded py-6 sm:p-6">
        <!-- why title i18n -->
        <!-- <i18n path="homepage.slack.title" tag="h2" class="text-3xl font-medium pt-10 pb-8 text-center" > </i18n> -->
        <div class="flex justify-between pb-4">
          <div class="w-full lg:w-6/12 xl:w-7/12 lg:ml-12 pt-8">
            <div class="flex items-center">
              <div class="ml-6"><DalilLogo height="35" /></div>
              <div><Slack height="30" /></div>
            </div>
            <hr class="lg:w-5/6 my-6">
            <div>
              <i18n path="homepage.slack.title" tag="h2" class="text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium tracking-normal leading-tight mb-6" > </i18n>
            </div>
            <i18n
              path="homepage.slack.description"
              tag="p"
              class="leading-loose text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
            >
              <template v-slot:break>
                <br />
              </template>
            </i18n>
            <div class="mt-8">
              <AppButton :variant="null" :href="$config.slackInvitationLink" class="bg-yellow-500 hover:bg-yellow-400 py-3 px-6 text-base" data-cy="slack" >
                <div class="flex">
                  <IconGroup class="w-6 h-6 ml-2" />
                  {{ $t('homepage.slack.button') }}
                </div>
              </AppButton>
            </div>
          </div>
          <div class="hidden lg:block lg:w-5/12">
            <CommunityIllustration class="inline-block" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MentorIllustration from '~/assets/illustrations/mentorship.svg?inline'
import CommunityIllustration from '~/assets/illustrations/community.svg?inline'

import DalilLogo from '~/assets/images/logo.svg?inline'
import Slack from '~/assets/images/slack.svg?inline'
import IconGroup from '~/components/atoms/icons/IconGroup'
export default {
  components: {
    MentorIllustration,
    CommunityIllustration,
    DalilLogo,
    Slack,
    IconGroup
  }
}
</script>
