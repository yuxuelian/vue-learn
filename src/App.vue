<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
    <VuexTest/>
    <StateATest/>
    <StateBTest/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import VuexTest from './components/VuexTest.vue'
  import StateATest from './components/StateATest.vue'
  import StateBTest from './components/StateBTest.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      VuexTest,
      StateATest,
      StateBTest
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
