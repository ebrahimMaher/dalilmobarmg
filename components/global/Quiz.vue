<template>
  <div class="quiz bg-primary-dark text-white border-r-4 border-orange-400 py-3 pr-8 pl-4 mt-8 mb-4 rounded-xl">
    <div class="quiz-icon bg-orange-400 text-primary-base shadow-md">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
    </div>
    <div class="mr-2 quiz-content text-md leading-loose">
      <div class="label text-orange-400 text-md font-bold mb-3">تمرين</div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {

  }
}
</script>

<style lang="scss">
  .quiz{
    position: relative;
    .quiz-icon{
      @apply rounded-full flex items-center justify-center;
      height: 50px;
      width: 50px;
      position: absolute;
      top: 0.5rem;
      right: -1.5rem;
    }
    .quiz-content{
      p{
        color: white!important;
      }
      code{
        @apply font-bold text-orange-400;
        letter-spacing: 1px;
        background-color: rgba(0,0,0, .15)!important;
      }
    }
  }
</style>
