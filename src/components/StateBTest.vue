<template>
  <div>
    {{$store.state.stateB.b}}
    <button @click="add">增加</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "StateBTest",
    methods: {
      ...mapActions('stateB', ['add'])
    }
  }
</script>

<style scoped>

</style>
