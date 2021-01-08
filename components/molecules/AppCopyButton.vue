<template>
  <button ref="copy" class="dalil-code-copy transform active:scale-95 copy transition ease duration-200 p-4" :class="{'copied bg-green-500 hover:bg-green-600 focus:bg-green-700': copied, 'bg-primary-base hover:bg-primary-light focus:bg-primary-dark': !copied}">
    <template v-if="copied">
      <IconClipboardCheck class="w-5 h-5" />
      <!-- <span class="hidden lg:inline-block mr-1">تم النسخ</span> -->
    </template>
    <template v-else>
      <IconClipboardCopy class="w-5 h-5" />
      <!-- <span class="hidden lg:inline-block mr-1">نسخ</span> -->
    </template>

    <span class="text-md font-medium hidden lg:inline-block mr-1">نسخ</span>
  </button>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  data() {
    return {
      state: 'init'
    }
  },
  computed: {
    copied(){
      return this.state === 'copied';
    }
  },
  mounted() {
    setTimeout(() => {
      const copyCode = new Clipboard(this.$refs.copy, {
        target(trigger) {
          return trigger.previousElementSibling
        }
      })

      copyCode.on('success', event => {
        event.clearSelection()
        this.state = 'copied'
        window.setTimeout(() => {
          this.state = 'init'
        }, 2000)
      })
    }, 300)
  }
}
</script>
