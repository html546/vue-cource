<template>
  <div class="tel">
    <p>
      {{message}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'tel',
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.$bus.$on('on-click', mes => {
      this.message = mes;
    })
  },
}
</script>
<style lang="less">
.tel {
  border: 1px solid red;
}
</style>

