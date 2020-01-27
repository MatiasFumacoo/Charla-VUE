<template>
  <div id="app">
    <div class="container-fluid">
      <Navbar />
      <!-- <ContadorVuex titulo="Contador Vuex(2)" colorFondo="cornflowerblue"/> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
//import ContadorVuex from "./components/ContadorVuex.vue"


export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {
      mostrar: true
    };
  }
};
</script>

<style>
</style>
