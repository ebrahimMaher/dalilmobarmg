<template>
    <div class="code-result leading-relaxed overflow-hidden rounded-md py-2 px-4 text-left white font-bold mb-4 dark:bg-dark-surface border light:border-light-border dark:border-dark-border" :class="{'light:bg-light-surface light:text-light-onSurfaceStrong dark:text-dark-onSurfaceStrong': !error, 'light:bg-red-100 light:text-red-600 dark:text-red-400': error, 'ltr-dir': !rtl}">
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
        error: {
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
