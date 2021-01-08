<template>
  <div class="e-badge text-white text-ss align-top px-1 rounded-sm" :class="colorClass">
    {{value}}
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    value: {},
    colorClass: {type: String, default: 'bg-indigo-600 hover:bg-indigo-500'}
  },
  data() {
    return {

    }
  },
  computed: {
  },
}
</script>
