import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)
const router = new Router({
  routes
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})
/**
 * 1.导航被触发
 * 2.在失活的组件(即将离开的页面组件)里调用离开守卫 beforeRouteLeave
 * 3.调用全局的前置守卫 beforeEach
 * 4.在重用的组件里调用 beforeRouteUpdate
 * 5.调用路由独享的守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件(即将进入的页面组件)里重用 beforeRouteEnter
 */

export default router;
