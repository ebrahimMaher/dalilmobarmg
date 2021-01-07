<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="transition duration-200 ease no-underline inline-block font-medium text-sm px-4 py-2 shadow uppercase rounded"
    :class="`${variant} ${classes} ${disabled ? 'disabled' : 'hover:shadow-md'}`"
    :disabled="disabled"
    @click="clicked"
  >
    <div
      v-if="$slots.icon"
      class="inline-block fill-current stroke-current ml-1"
    >
      <slot name="icon" />
    </div>
    <slot />
  </NuxtLink>
  <a
    v-else
    :href="href"
    target="_blank"
    rel="noopener"
    class="transition duration-200 ease-in-out no-underline inline-block font-medium text-sm px-4 py-2 shadow uppercase rounded"
    :class="`${variant} ${classes} ${disabled ? 'disabled dark:bg-dark-surface' : 'hover:shadow-md'}`"
    :disabled="disabled"
    @click="clicked"
  >
    <div
      v-if="$slots.icon"
      class="inline-block fill-current stroke-current ml-1"
    >
      <slot name="icon" />
    </div>
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    classes: {
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    clicked(e){
      if (this.disabled){
        e.preventDefault();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.diabled{

}
.primary {
  @apply bg-primary-base text-white;

  &:hover {
    @apply bg-primary-light;
  }
  &:active {
    @apply bg-primary-dark;
  }
}

.secondary {
  @apply bg-gray-200 text-dalil-gray;

  &:hover {
    @apply bg-gray-300;
  }
}
</style>
