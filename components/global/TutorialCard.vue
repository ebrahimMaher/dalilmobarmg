<template>
    <div class="tutorial-card flex flex-col justify-between bg-light-elevatedSurface dark:bg-dark-elevatedSurface card rounded shadow-md hover:shadow-lg p-3 lg:p-5">
        <div>
            <div class="card-icon h-48 mx-auto text-center w-full mb-4">
              <slot name="icon" />
            </div>
            <div>
            <div class="title mb-3">
                <h2 class="text-lg font-semibold text-primary-dark dark:text-dark-primaryText text-center" v-if="title">{{title}}</h2>
                <slot v-else name="title" />
            </div>
            </div>
            <div>
                <p class="leading-7 text-sm text-center" v-if="description">{{description}}</p>
                <slot v-else name="description" />
            </div>
        </div>
        <div class="actions w-full mt-5">
            <AppButton :disabled="soon" :to="to" :variant="color === 'primary' ? 'primary' : null" class="tutorial-button w-full text-center block py-3 px-6 text-base" :classes="buttonClasses">
                <div class="flex w-full justify-center items-center">
                  <i class="icon ml-2 w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </i>
                  <span v-if="buttonText">{{soon ? 'ستتوفر قريباً...' : buttonText}}</span>
                  <slot v-else name="button"></slot>
                </div>
            </AppButton>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    buttonClasses: {
      default: null
    },
    description: {
      type: String,
      default: ''
    },
    to: {
      default: null,
    },
    buttonText: {
      type: String,
      default: 'انتقل إلى الدورة',
    },
    soon: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
  .tutorial-card{
    z-index: 2;
  }
</style>
