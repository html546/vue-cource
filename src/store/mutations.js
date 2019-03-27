import Vue from 'vue';
const mutations = {
    SET_APP_NAME(state, params) {
        state.appName = params;
    },
    SET_APP_VERSION(state) {
        Vue.set(state, 'appVersion', 'v2.0')
    }
}
export default mutations;