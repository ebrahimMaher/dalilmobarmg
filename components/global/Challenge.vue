<template>
  <div class="challenge my-6 bg-light-surface dark:bg-dark-surface card rounded border-r-4 border-primary-light dark:border-orange-400 p-3 lg:p-5 pr-5 lg:pr-8">
    <div class="flag-icon bg-primary-base text-orange-400 shadow-md hover:shadow-lg">
      <svg class="w-100 h-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
    </div>
    <div class="challenge-title light:text-primary-base dark:text-orange-400 flex items-center mb-4">
      <!-- <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg> -->
      <div class="label mr-2 text-xl font-bold">{{label}}</div>
    </div>
    <div class="challenge-content text-md leading-loose mb-3">
      <slot />
    </div>
    <div class="challenge-actions mt-4">
      <button @click="showEditor = true" class="w-full bg-primary-base hover:bg-primary-dark text-orange-300 transform active:scale-95 transition duration-200 ease-in-out no-underline flex items-center justify-center text-md px-4 py-2 text-sm font-semibold shadow uppercase rounded">
        <svg class="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        ابدأ التحدي اﻵن
      </button>
    </div>

    <ChallengeEditor v-model="showEditor" :cases="cases" :label="label" :function-name="functionName" :parameters="parameters" />
  </div>
</template>

<script>
import ChallengeEditor from '../components/ChallengeEditor'
export default {
  components: {ChallengeEditor},
  props: {
    label: {
      type: String,
      default: 'تحدي'
    },
    cases: {
      type: Array,
    },
    functionName: {
      type: String,
      default: 'test'
    },
    parameters: {
      type: Array,
    }
  },
  data(){
    return {
      showEditor: false,
    }
  },
  mounted(){
    console.log(this.cases);
  }
}
</script>

<style lang="scss" scoped>
  .challenge{
    position: relative;
    .label{
      margin: 0!important;
      padding: 0!important;
    }
    .flag-icon{
      padding: 0.6rem;
      border-radius: 50%;
      width: 2.5rem;
      position: absolute;
      height: 2.5rem;
      top: 1rem;
      right: 0;
      transform: translateX(50%);
    }
  }
</style>

<style lang="scss">
  .challenge{
    .challenge-content{
      code{
        @apply border border-primary-light text-primary-base bg-transparent; // bg-indigo-100
      }
    }
  }
  .dark-mode{
    .challenge{
      .challenge-content{
        code{
          @apply bg-dark-surface text-dark-primaryText border-dark-primaryText;
        }
      }
    }
  }
</style>
