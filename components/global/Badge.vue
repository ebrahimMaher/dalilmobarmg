<template>
  <div class="e-badge text-white dark:text-black text-ss align-top px-1 rounded-sm" :class="`bg-${color}-600 hover:bg-${color}-500`">
    {{value}}
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    value: {},
    color: {type: String, default: 'indigo'}
  },
  data() {
    return {

    }
  },
  computed: {

  },
}
</script>
