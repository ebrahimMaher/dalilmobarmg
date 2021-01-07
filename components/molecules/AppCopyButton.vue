<template>
  <button ref="copy" class="dalil-code-copy copy transition ease duration-200 p-4" :class="{'copied bg-green-500 hover:bg-green-600 focus:bg-green-700': copied, 'bg-primary-base hover:bg-primary-light focus:bg-primary-dark': !copied}">
    <IconClipboardCheck v-if="copied" class="w-6 h-6" />
    <IconClipboardCopy v-else class="w-6 h-6" />
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
  }
}
</script>
