<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TicTacToe message1 = m1  message2 ="x"  message3 ="x" @ohno="alertUser"></TicTacToe>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TicTacToe from './components/TicTacToe.vue';
export default {
  name: 'app',
  components: {
    HelloWorld,
    TicTacToe
  },

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
