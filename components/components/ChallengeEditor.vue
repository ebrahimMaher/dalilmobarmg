<template>
  <!-- Nuxt.js -->
  <transition name="fade-up-transition">
    <div ref="editorWrapper" v-show="show" class="challenge-editor-wrapper dark-mode relative">
      <div class="flex absolute" style="top: 13px; right: 13px; z-index: 5;">
      </div>


      <div ref="editorHeader" @mousedown="handleMouseDown" class="editor-header cursor-move flex items-center justify-between w-full text-sm text-gray-500">
        <div class="px-4 flex items-center" @mousedown.stop>
          <span class="text-sm text-gray-600">محرر دليل مبرمج</span>
        </div>
        <div class="cursor-pointer flex" @mousedown.stop>
          <div class="reset-btn btn h-10 flex items-center justify-center px-4 hover:bg-green-600 active:bg-green-700 hover:text-white" @click.stop.prevent="resetAll">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          </div>
          <div class="close-btn btn h-10 flex items-center justify-center px-4 hover:bg-red-600 active:bg-red-700 hover:text-white" @click.stop.prevent="show =false">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </div>
          <!-- <div class="resize-btn mr-2 btn h-10 flex items-center justify-center px-4 hover:bg-green-600 active:bg-green-700 hover:text-white" @click="show =false">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
          </div> -->
        </div>
      </div>
      <div>
        <codemirror
          class="challenge-editor"
          ref="cmEditor"
          v-model="code"
          :options="options"
        />
      </div>
      <div class="shortcuts grid grid-cols-11 ltr-dir">
        <div class="shortcut cursor-pointer select-none text-white flex justify-center items-center py-2 w-full" v-for="(shortcut, i) in shortcuts" :key="i" @click="shortcutClick(shortcut)">
          {{shortcut}}
        </div>
      </div>
      <div class="code-result overflow-y-auto flex flex-wrap items-stretch w-full py-3 px-5 text-sm" :class="{'text-gray-100': !error, 'text-red-500': error}">
        <div>

          <button @click="runCode" class="btn px-3 rounded-md py-1 text-sm bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 hover:shadow-lg transform transition-transform active:scale-95">
            تشغيل الكود (F5)
          </button>
        </div>
        <!-- <div class="text-xs text-right text-gray-500">ناتج التشغيل</div> -->
        <div class="text-left ltr-dir flex-grow">
          <pre v-text="result"></pre>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// import { codemirror } from 'vue-codemirror'


export default {
  props: {
    value: {type: Boolean}
  },
  components: {},
  data(){
    return {
      show: false,
      code: '',
      error: false,
      result: '',

      shortcuts: ['(', ')', '{', '}', '"', ';', '=', '+', '-', '*', '/'],

      options: {
        theme: 'material-palenight',
        tabSize: 2,
        autofocus: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/javascript',

        matchBrackets: true,
        autoCloseBrackets: true,
        showHint: true,
      }
    }
  },
  watch: {
    show(show){
      if (!show){
        this.$emit('input', false); // close
      }
    },
    value(show){
      this.show = show;
    }
  },
  methods: {
    shortcutClick(shortcut){
      this.code = this.code + shortcut;
    },
    handleMouseDown(e){
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      window.document.onmouseup = ()=>{
        // stop moving when mouse button is released:
        window.document.onmouseup = null;
        window.document.onmousemove = null;
      };

      // call a function whenever the cursor moves:
      const elmnt = this.$refs.editorWrapper;
      window.document.onmousemove = (e)=>{
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      };
    },
    runCode(){
      const self = this;
      this.reset();
      try{
        var console = {
          log(val){
            let result = self.result === '' ? val : `\n${val}`;
            self.result += result;
          }
        };
        let code = this.code;
        code = code.replace('window', 'notallowed');
        eval(code);
      }
      catch(e){
        this.error = true;
        this.result = e.message;
      }
    },
    reset(){
      this.result = '';
      this.error = false;
    },
    resetAll(){
      this.code = '';
      this.reset();
    },
    setKeyboardListener(){
      window.addEventListener('keydown', e=>{
        if (this.show){
          if (e.key === 'F5' || e.code == 116 || e.which == 116){
            e.preventDefault();
            this.runCode();
          }else if (e.key === 'Escape' || e.code == 27 || e.which == 27){
            e.preventDefault();
            this.show = false;
          }
        }
      })
    },
  },
  mounted(){
    this.setKeyboardListener();
  }
}
</script>

<style lang="scss">
  .challenge-editor-wrapper{
    position: fixed;
    z-index: 35;
    top: 30%;
    left: 1rem;
    width: 500px;
    min-height: 400px;
    box-shadow: 0px 5px 16px 1px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    @media(max-width: 768px){
      max-width: 100%;
      width: 100%;
      top: unset!important;
      left: 0!important;
      bottom: 0!important;
    }

    .challenge-editor{
      .CodeMirror{
        font-size: 16px;
        line-height: 1.75;
        @media(max-width: 768px){
          font-size: 15px;
        }
        *{
          text-align: left;
        }
        padding: 1rem 0.5rem;
        .CodeMirror-lines{
          padding: 4px;
        }
        .CodeMirror-cursor{
          padding: 4px!important;
        }
      }
    }
    .code-result{
      border-top: 1px solid rgb(#000, 0.25);
      height: 100px;
      max-height: 100px;
    }
    .code-result, .editor-header, .shortcuts{
      background: hsl(231, 22%, 17%);
    }
    .editor-header{
      border-bottom: 1px solid rgb(#000, 0.25);

      &:active{
        background: hsl(231, 22%, 16%);
      }
    }
    .shortcuts{
      border-top: 1px solid rgb(#000, 0.25);
    }
    .shortcut{
      &:hover{
        background: rgba(#000, 0.2);
      }
      &:active{
        background: rgba(#000, 0.4);
      }
    }
  }
</style>
