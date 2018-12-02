<template>
  <div class="hello">
    {{$store.state.count}}
    <button @click="increment(10)">增加</button>
    <button @click="decrement(20)">删除</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'HelloWorld',
    props: {},
    methods: mapActions([
      'increment',
      'decrement'
    ])
  }
</script>

<style scoped>

</style>
