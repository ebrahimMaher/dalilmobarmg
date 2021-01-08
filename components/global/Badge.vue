<template>
  <div class="e-badge text-white text-ss align-top px-1 rounded-sm" :class="classes">
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
    classes(){
      const color = this.color;
      return `bg-${color}-600 hover:bg-${color}-500`;
    }
  },
}
</script>
