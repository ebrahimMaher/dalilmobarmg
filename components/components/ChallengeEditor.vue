<template>
  <!-- Nuxt.js -->
  <transition name="scale-fade-transition">
    <div ref="editorWrapper" v-if="show" class="challenge-editor-wrapper dark-mode relative">
      <div ref="editorHeader" @mousedown="handleMouseDown" class="editor-header cursor-move flex items-center justify-between w-full text-sm text-gray-500">
        <div class="px-4 flex items-center" @mousedown.stop>
          <span class="text-sm text-gray-600">محرر تحديات دليل مبرمج</span>
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
      <div class="flex flex-col lg:flex-row items-stretch">

        <div class="challenge-info-wrapper flex flex-col text-gray-500">
          <div class="info-header flex py-3 px-5">
            <div class="icon ml-2 py-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
            </div>
            <div class="label text-md font-semibold">{{label}}</div>
          </div>
          <div class="sample-tests flex-grow p-3">
            <div class="text-sm">نتيجة اﻹختبار</div>

            <template v-if="challengeResult">

              <div class="font-semibold mt-3 mb-4 text-base w-full rounded-md p-2 text-center border-2" :class="{'border-green-600': challengeResult === 'success', 'border-red-500': challengeResult === 'error'}">
                <span class="text-green-500" v-if="challengeResult === 'success'">تم الحل بنجاح!</span>
                <span class="text-red-500" v-else-if="challengeResult === 'error'">الحل غير صحيح</span>
              </div>

              <div class="text-sm leading-loose text-gray-600">
                تم إجراء <span class="font-bold text-gray-500">{{cases ? cases.length : 0}} تجارب</span> على الدالة بحالات مختلفة؛
                <span v-if="challengeResult === 'success'" class="text-green-500">
                  وتخطت الدالة
                  <span class="font-bold">{{pluralize(successCases, 'تجربة', 'تجربتين', 'تجارب')}}</span>
                  بنجاح
                </span>
                <span v-else-if="challengeResult === 'error'">
                  <span v-if="successCases">
                    وتخطت الدالة
                    <span class="font-bold text-gray-500">{{pluralize(successCases, 'تجربة', 'تجربتين', 'تجارب')}}</span>،
                  </span>
                  <span class="text-red-500">ولكن لم تعمل الدالة بالشكل المطلوب في <span class="font-bold">{{pluralize(errorCases, 'تجربة', 'تجربتين', 'تجارب')}}</span>.</span>
                </span>
              </div>

            </template>
          </div>
          <div class="p-4">
            <button @click="runCode()" class="w-full mb-2 btn px-3 rounded-md py-1 text-sm border border-gray-700 text-gray-500 hover:text-gray-300 hover:shadow-lg transform transition-transform active:scale-95">
              تشغيل الكود (F5)
            </button>

            <button @click="testCases" class="w-full btn px-3 text-sm lg:text-base rounded-md py-1 lg:py-2 bg-primary-base text-orange-300 hover:bg-primary-light active:bg-primary-dark hover:shadow-lg transform transition-transform active:scale-95">
              اختبار الحل
            </button>
          </div>
        </div>
        <div class="editor-wrapper flex-grow">
          <div class="flex absolute" style="top: 13px; right: 13px; z-index: 5;">
          </div>

          <div>
            <codemirror
              class="challenge-editor"
              ref="cmEditor"
              v-model="code"
              :options="options"
            />
          </div>
          <!-- <div class="shortcuts grid grid-cols-11 ltr-dir">
            <div class="shortcut cursor-pointer select-none text-white flex justify-center items-center py-2 w-full" v-for="(shortcut, i) in shortcuts" :key="i" @click="shortcutClick(shortcut)">
              {{shortcut}}
            </div>
          </div> -->
          <div class="code-result overflow-y-auto flex flex-wrap items-stretch w-full py-3 px-5 text-sm" :class="{'text-gray-100': !error, 'text-red-500': error}">
            <div>

              <!-- <button @click="runCode()" class="btn px-3 rounded-md py-1 text-sm bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 hover:shadow-lg transform transition-transform active:scale-95">
                تشغيل الكود (F5)
              </button> -->

            </div>
            <!-- <div class="text-xs text-right text-gray-500">ناتج التشغيل</div> -->
            <div class="text-left ltr-dir flex-grow">
              <pre v-text="result"></pre>
            </div>
          </div>
        </div>
      </div>

      </div>
  </transition>
</template>

<script>
// import { codemirror } from 'vue-codemirror'


export default {
  props: {
    value: {type: Boolean},
    cases: {type: Array},
    label: {type: String, default: null},
    parameters: {type: Array},
    functionName: {type: String, default: 'dalilTest'},
  },
  components: {},
  data(){
    return {
      show: false,
      code: '',
      error: false,
      result: '',

      challengeResult: '',
      successCases: 0,
      errorCases: 0,

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
  computed: {
    initialCode(){
      const functionName = this.functionName,
        parameters = this.parameters && this.parameters.length ? this.parameters.join(', ') : '';
      return `function ${functionName}(${parameters}){
  // dalilmobarmg.com challenge
  // Start Here


}`;
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
    pluralize(num, single, dual, plural, singleWord="واحدة"){
      if (num === 1){
        return single + ' ' + singleWord;
      }else if (num === 2){
        return dual;
      }else if (num <= 10){
        return `${num} ${plural}`;
      }else{
        return `${num} ${single}`;
      }
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
    runCode(inputCode=null, log=true){
      const self = this;
      this.reset();

      try{

        var console = {
          returned: undefined,
          log(val){
            if (log){
              let result = self.result === '' ? val : `\n${val}`;
              self.result += result;
            }
          },
          testSolution(val){
            this.returned = val;
            return val;
          }
        };

        let code = inputCode ? inputCode : this.code;
        code = code.replace('window', 'notallowed');
        eval(code);
        return console.returned;
      }
      catch(e){
        this.error = true;
        this.result = e.message;
        return false;
      }
    },
    testCases(){
      const cases = this.cases;
      let success = 0,
        error = 0;
      cases.forEach(testCase=>{
        let parameters = testCase[0].join(', ');
        let code = this.code + `\nconsole.testSolution(${this.functionName}(${parameters}))`;
        let result = this.runCode(code, false);
        if (result === testCase[1]){
          success += 1;
        }else{
          error += 1;
        }
      });
      if (error > 0){
        this.challengeResult = 'error';
        this.playSound('error');
      }else{
        this.challengeResult = 'success';
        this.playSound('success');
      }
      this.successCases = success;
      this.errorCases = error;
    },
    reset(){
      this.result = '';
      this.error = false;
      this.challengeResult = '';
      this.successCases = 0;
      this.errorCases = 0;
    },
    resetAll(){
      this.code = this.initialCode;
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
    setInitialCode(){
      window.setTimeout(()=>{
        this.code = this.initialCode;
      }, 1000);
    },

    playSound(filename, ext = 'ogg', volume = .75) {
      var path = '/sounds/' + filename + '.' + ext,
          soundFile = new window.Audio(path);
      soundFile.volume = volume;
      soundFile.play();
    }
  },
  mounted(){
    this.setKeyboardListener();

    this.setInitialCode();
  }
}
</script>

<style lang="scss">
  .challenge-editor-wrapper{
    background: #292D3E;
    overflow-y: auto;
    position: fixed;
    z-index: 35;
    max-height: 100%;
    top: 30%;
    left: 25%;
    width: 800px;
    min-height: 400px;
    box-shadow: 0px 5px 16px 1px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    @media(max-width: 768px){
      max-width: 100%;
      width: 100%;
      top: unset!important;
      left: 0!important;
      bottom: 0!important;

      height: 100%;
    }
    .challenge-info-wrapper{
      width: 35%;
      @media(max-width: 768px){
        max-width: 100%;
        width: 100%;
        height: 38vh;
        overflow: hidden;
        .sample-tests{
          overflow-y: auto;
        }
      }
      background: hsl(231, 22%, 16%);
      border-left: 1px solid rgb(#000, 0.25);
      .info-header{
        border-bottom: 1px solid rgb(#000, 0.25);
      }
    }

    .challenge-editor{
        height: 350px;
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
        height: 350px;
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
      height: 75px;
      max-height: 75px;
      overflow: hidden;
    }
    .code-result, .challenge-editor{
      background: #292D3E;
    }
    .editor-header, .shortcuts{
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
    pre{
      background: transparent!important;
      border: 0!important;
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
