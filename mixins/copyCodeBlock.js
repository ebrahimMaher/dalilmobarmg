import Vue from 'vue'
import AppCopyButton from '~/components/molecules/AppCopyButton'

export default {
  mounted() {
    this._injectCopyButtons();
  },
  watch: {
    $route(){
      this._injectCopyButtons();
    }
  },
  methods: {
    _injectCopyButtons(){
      setTimeout(() => {
        const blocks = document.getElementsByClassName('nuxt-content-highlight')

        for (const block of blocks) {
          if (block.querySelector('.dalil-code-copy')){
            // don't inject button if exists
            return;
          }
          const CopyButton = Vue.extend(AppCopyButton)
          const component = new CopyButton().$mount()
          block.appendChild(component.$el)
        }
        console.log('done');
      }, 250)
    }
  }
}
