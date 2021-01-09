<template>
  <div class="expand-wrapper my-2">
    <button @click="show = !show" :class="{'w-full': full}" class="btn cursor-pointer px-4 py-2 font-bold text-sm shadow bg-light-elevatedSurface light:text-light-onSurfacePrimary dark:text-dark-onSurfaceStrong dark:bg-dark-surface hover:bg-light-surface dark:hover:bg-dark-surface hover:text-primary-base transform active:scale-95 transition duration-150 rounded">
      {{show ? hideText : buttonText}}
    </button>

    <transition name="fade-down-transition">
      <div v-if="show" class="expand-content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: ''
    }
  },
  props: {
    buttonText: {
      type: String,
      default: 'عرض المزيد'
    },
    full: {
      type: Boolean,
      default: false,
    },
    hideText: {
      type: String,
      default: 'إخفاء'
    },
  }
}
</script>

<style>

</style>
