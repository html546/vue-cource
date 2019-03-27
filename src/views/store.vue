<template>
  <div>
    <a-input
      :value="stateValue"
      @input="handleStateValueChange"
    />
    <p> {{stateValue}} -> lastLetter is {{inputValueLastLetter}} </p>
    <!-- <a-show :content="inputValue" /> -->
    <p>appName:{{appName}},appNameWithVersion:{{appNameWithVersion}}</p>
    <p>userName:{{userName}},firstLetter is {{firstLetter}}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <p>{{appVersion}}</p>
    <button @click="changeUserName">修改用户名</button>
    <button @click="registerModule">动态注册模块</button>
    <p
      v-for="(li,index) in todoList"
      :key="index"
    >{{li}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue';
import AShow from '_c/AShow.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

/*import { createNamespacedHelpers } from 'vuex';
 const { mapState } = createNamespacedHelpers('user');
const { mapGetters } = createNamespacedHelpers('user')*/
export default {
  name: 'store',
  data() {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName,
      appName: state => state.appName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : [],
      stateValue: state => state.stateValue
    }),
    /* ...mapGetters([
      'firstLetter',
      'appNameWithVersion'
    ]), */

    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1)
    },
    /* appNameWithVersion() {
      return this.$store.getters.appNameWithVersion
    }, */
    /*  ...mapState({
       appName: state => state.appName,
       userName: state => state.user.userName
     }) */
    /* appName() {
      return this.$store.state.appName
    }, */
    /*userName() {
      console.log(this.$store.state.users);
      return this.$store.state.users.userName
    } */
  },
  methods: {
    ...mapMutations([
      'SET_USER_NAME',
      'SET_APP_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput(val) {
      this.inputValue = val;
    },
    handleChangeAppName() {
      /*  this.$store.commit({
         type: 'SET_APP_NAME',
         appName: 'newAppName'
       }) */
      /* this.SET_APP_NAME({
        appName: 'newAppName'
      }); */
      this.updateAppName()
      // this.$store.commit('SET_APP_VERSION')
    },
    changeUserName() {
      // this.$store.state.user.userName = 'haha'; 错误的方法
      this.SET_USER_NAME('vue-cource')
      // this.$store.dispatch('updateAppName', '123');
    },
    registerModule() {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    },
    handleStateValueChange(val) {
      this.SET_STATE_VALUE(val);
    }
  },
}
</script>

<style lang="" scoped>
</style>
