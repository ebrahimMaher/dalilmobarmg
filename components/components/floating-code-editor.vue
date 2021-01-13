<template>
<div>
    <client-only>
      <code-editor v-model="show" />
    </client-only>
    <div class="floating-code-editor">
      <button class="btn bg-gray-900 text-purple-400 hover:bg-primary-dark rounded-full inline-flex items-center justify-center transform active:scale-95 transition duration-100 ease-linear" @click="show = !show">
        <svg class="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      </button>
    </div>
</div>
</template>

<script>
export default {
    data(){
      return {
        show: false,
      }
    },
    methods: {

    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>
.floating-code-editor{
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    z-index: 15;

    .btn{
      width: 50px;
      height: 50px;
      box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.101562);
    }

    @media (min-width: 1024px){
      bottom: 2rem;
      left: 2rem;

      .btn{
        width: 60px;
        height: 60px;
      }
    }

}
</style>
