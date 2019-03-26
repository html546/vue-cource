<template>
  <div>
    <a-input @input="handleInput" />
    <p> {{inputValue}} -> lastLetter is {{inputValueLastLetter}} </p>
    <!-- <a-show :content="inputValue" /> -->
    <p>appName:{{appName}},appNameWithVersion:{{appNameWithVersion}}</p>
    <p>userName:{{userName}},firstLetter is {{firstLetter}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue';
import AShow from '_c/AShow.vue';
import { mapState, mapGetters } from 'vuex';

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
      appName: state => state.appName
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
    handleInput(val) {
      this.inputValue = val;
    }
  },
}
</script>

<style lang="" scoped>
</style>
