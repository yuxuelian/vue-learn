export default {
  increment: (store, parm) => {
    store.commit('increment', parm)
  },
  decrement: (store, parm) => {
    store.commit('decrement', parm)
  }
}
