// 引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入4个对象
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})