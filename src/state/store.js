import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'

import stateA from './modules/a.js'
import stateB from './modules/b.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stateA,
    stateB
  },
  state,
  mutations,
  actions
})
