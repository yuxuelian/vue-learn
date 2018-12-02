const state = {
  b: 20
}

const mutations = {
  add(state) {
    state.b++
  }
}

const actions = {
  add: (store) => {
    store.commit("add")
  }
}

export default {
  // 导出时必须开启 namespaced 否则报
  // [vuex] module namespace not found in mapState()
  namespaced: true,
  state,
  mutations,
  actions
}
