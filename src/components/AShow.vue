<template>
  <div>
    <p>AShow {{content}}</p>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="" scoped>
</style>