<template>
  <div class="home">
    <b>{{food}}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="getInfo">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUserInfo } from '@/api/user';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log(from.name)
    next(vm => {
      console.log(vm);
    });
  },
  beforeRouteLeave(to, from, next) {
    /* const leave = confirm('您确定要离开吗?')
    if (leave) next()
    else next(false) */
    next();
  },
  methods: {
    handleClick(type) {
      // this.$router.go(-1);
      // this.$router.back();
      if (type === 'back') this.$router.go(-1)
      else if (type === 'push') {
        const name = 'lison'
        this.$router.push({
          path: `/argu/${name}`
          /* name: 'argu',
          params: {
            name: 'lison'
          }, */
          /* query: {
            name: 'lison'
          } */
        })
      }
      else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
    },
    getInfo() {
      /* axios.post('/getUserInfo', {
        userId: 21
      }).then(res => {
        console.log(res);
      }) */
      getUserInfo({ userid: 21 }).then(res => {
        console.log('res:', res);
      })
    }
  },
}
</script>
