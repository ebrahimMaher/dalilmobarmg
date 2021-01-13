<template>
  <a target="_blank" :class="{'w-full': full}" class="block text-center btn cursor-pointer px-4 py-2 font-bold text-sm shadow-md bg-primary-base text-white hover:bg-primary-dark transform active:scale-95 transition duration-150 rounded">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    full: {type: Boolean, default: true}
  },

}
</script>

<style>

</style>
