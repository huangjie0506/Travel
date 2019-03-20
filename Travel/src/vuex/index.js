import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  currentCity: '福州'
}
const mutations = {
  cityChange (state, city) {
    state.currentCity = city
  }
}
export default new Vuex.Store({
  state,
  mutations
})
