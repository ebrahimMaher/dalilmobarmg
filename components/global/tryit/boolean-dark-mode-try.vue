<template>
  <div class=" light:bg-light-surface dark:bg-dark-surface w-full py-3">
    <div class="text-sm font-semibold mb-2">
      اضغط على الزر:
    </div>
    <div class="toggler flex">
      <button :class="{'text-orange-400': value, 'text-white': !value}" class="light:bg-primary-base dark:bg-dalil-lightindigo font-bold w-full px-4 lg:w-auto lg:px-12 relative overflow-hidden flex items-center justify-center rounded h-10 transform active:scale-95" @click="setMode" >
        <span class="relative overflow-hidden w-5 h-5 flex items-center justify-center ml-2" >
          <MoonIcon class="w-5 h-5 absolute" />
        </span>
        <transition name="from-bottom-to-bottom" mode="out-in">
          <span>{{value ? 'true' : 'false'}}</span>
        </transition>
      </button>
    </div>
  </div>
</template>

<script>
import MoonIcon from '~/assets/icons/moon.svg?inline'

export default {
  data(){
    return {
      value: false,
    }
  },
  components: {MoonIcon},
  methods: {
    setMode(){
      const theme = this.$colorMode.preference === 'light' ? 'dark' : 'light';
      this.$colorMode.preference = theme;
      this.value = theme === 'dark';
    }
  },
  mounted(){
    this.value = this.$colorMode.preference === 'dark';
  }
}
</script>

<style>

</style>
