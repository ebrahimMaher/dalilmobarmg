<template>
  <div>
    <div class="mb-3 text-xs">
    ﻻ تنسى استخدام علامات التنصيص "" مع النصوص (strings)
    </div>
    <div class="w-full flex shadow-md text-base">
      <input v-model="value" class="field text-base flex-grow light:bg-light-elevatedSurface dark:bg-dark-elevatedSurface light:text-light-onSurfaceStrong dark:text-dark-onSurfaceStrong p-4 px-4 rounded-r" type="text" placeholder="أدخل القيمة">
      <span style="width: 90px" :class="{'bg-red-600': result === false, 'bg-green-500': result === true, 'bg-primary-base': result === null}" class="w-28 font-bold text-center text-white p-3 px-5 text-lg rounded-l transition-all ease-linear duration-200">{{result}}</span>
    </div>
    <div v-if="error" class="error-msg mt-3 text-red-800 text-xs">
      {{error}}
    </div>

  </div>
</template>

<script>

export default {
  props: {
    initial: {}
  },
  data(){
    return {
      value: '',
      result: null,
      error: false,
    }
  },
  watch: {
    value(value){
      if (value){
        this.getResult(value)
      }else{
        this.result = null;
        this.error = false;
      }
    }
  },
  components: {},
  methods: {
    getResult(){
      let code = this.value;
      code = code.replace('window', 'notallowed');
      code = code.replace('document', 'notallowed');
      code = code.replace('alert', 'notallowed');
      code = code.replace('console.log', 'notallowed');
      code = code.replace('localStorage', 'notallowed');

      try{
        this.result = Boolean(eval(`${code}`));
        this.error = false;
      }
      catch(e){
        this.error = e.message;
        this.result = null;
      }
    }
  },
  mounted(){
    if (this.initial !== undefined){
      this.value = this.initial;
    }
  }
}
</script>

<style>

</style>
