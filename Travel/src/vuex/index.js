import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
Vue.use(Vuex)
const state = {
  currentCity: '福州',
  num: 0
}
const mutations = {
  cityChange (state, city) {
    state.currentCity = city
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters
})
