<template>
    <div :class="{'ltr-dir': !rtl}" class="code-result leading-relaxed overflow-hidden rounded-md py-2 px-4 text-left white font-bold light:text-light-onSurfaceStrong dark:text-dark-onSurfaceStrong mb-4 light:bg-light-surface dark:bg-dark-surface border light:border-light-border dark:border-dark-border">
        <span class="label px-2 py-1 text-xs text-gray-600 border light:border-light-border dark:border-dark-border">{{label}}</span>
        <span v-if="result">{{result}}</span>
        <slot v-else />
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props: {
        label: {
            type: String,
            default: 'ناتج التشغيل'
        },
        rtl: {
            type: Boolean,
            default: false
        },
        result: {
            type: String,
            default: null
        },
    }
}
</script>

<style lang="scss" scoped>
.code-result{
  position: relative;
  .label{
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
