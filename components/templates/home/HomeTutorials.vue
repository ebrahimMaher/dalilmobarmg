<template>
  <div class="section-wrapper bg-light-surface dark:bg-dark-surface">
    <div class="container mx-auto px-4 py-16">
      <section class="rounded py-2 lg:py-6 md:px-6">
        <div class="margin-to-top grid grid-cols-1 lg:grid-cols-3 gap-4">
          <TutorialCard :title="$t('homepage.tutorials.computer_and_systems.title')" :description="$t('homepage.tutorials.computer_and_systems.description')" buttonClasses="bg-blue-700 hover:bg-blue-600 text-white">
            <template v-slot:icon>
              <ComputerIllutsration class="max-h-full"/>
            </template>
          </TutorialCard>
          <TutorialCard :to="{name: 'tutorials-algorithms-book-slug', params: {book: 'environment', slug: 'intro'}}" :title="$t('homepage.tutorials.algorithms.title')" :description="$t('homepage.tutorials.algorithms.description')" color="primary">
            <template v-slot:icon>
              <AlgorithmsIllutsration class="max-h-full" />
            </template>
          </TutorialCard>
          <!-- disabled for now, enabled classes: yellow-500 hover:bg-yellow-400 -->
          <TutorialCard soon button-classes="bg-gray-300 cursor-default shadow-none" :title="$t('homepage.tutorials.javascript.title')" :description="$t('homepage.tutorials.javascript.description')">
            <template v-slot:icon>
              <img src="/img/js.png" class="pb-3 mx-auto max-h-full" />
            </template>
          </TutorialCard>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TutorialCard from '~/components/global/TutorialCard'
import AlgorithmsIllutsration from '~/assets/illustrations/algorithms.svg?inline'
import ComputerIllutsration from '~/assets/illustrations/operating-system.svg?inline'
// import JSIllustration from '~/assets/illustrations/js.png'

export default {
  components: {
    TutorialCard,
    // JSIllustration,
    ComputerIllutsration,
    AlgorithmsIllutsration
  }
}
</script>
<style lang="scss" scoped>
@media (min-width: 1024px){
  /* move cards up to previous section */
  .section-wrapper{
    margin-top: 8rem!important;
  }
  .margin-to-top{
    margin-top: -15rem!important;
  }
}
</style>
