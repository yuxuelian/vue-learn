<template>
  <div>
    {{$store.state.stateA.a}}
    <button @click="add">增加</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "StateATest",
    methods: mapActions('stateA', ['add'])
  }
</script>

<style scoped>

</style>
