<template>
  <img v-if="isDark" src="~/assets/images/logo-white.svg" class="dalil-logo" />
  <img v-else src="~/assets/images/logo.svg" class="dalil-logo" />
</template>

<script>
export default {
  props: {

  },
  computed: {
    isDark(){
      return this.$colorMode.preference === 'dark';
    }
  }
}
</script>

<style scoped>

</style>
