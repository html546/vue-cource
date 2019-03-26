<template>
  <input
    @input="handleInput"
    :value="value"
  >
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.$emit('input', value);
    }
  },
}
</script>

<style lang="" scoped>
</style>