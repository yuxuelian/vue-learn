export default {
  increment(state, parm) {
    window.console.log(parm)
    state.count++
  },
  decrement(state, parm) {
    window.console.log(parm)
    state.count--
  }
}
