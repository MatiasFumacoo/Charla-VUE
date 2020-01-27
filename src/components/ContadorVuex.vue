<template>
  <div class="ContadorVuex">
    <div class="jumbotron" :style="{'background-color': colorFondo}">
      <h2>{{titulo}}</h2>
      <hr>
      <hr>
      <h3>Contador: {{mostrarContadorVuex}}</h3>
      <!-- <h3>Contador: {{$store.state.contador}}</h3> -->
      <button class="btn btn-success m-2" @click="decrementar()">Decrementar</button>
      <button class="btn btn-success m-2" @click="incrementar()">Incrementar</button>
    </div>
  </div>
</template>

<script lang="js">

/*   var miMixin = {
    computed: {
      mostrarContadorVuex() {
        //return this.contador
        return this.$store.state.contador
      }
    }      
  }
 */
  export default  {
    name: 'ContadorVuex',
    props: ['titulo', 'colorFondo'],
    //mixins: [miMixin],
    data () {
      return {
        //contador : 456
      }
    },
    methods: {
      incrementar() {
        //this.contador++
        console.log('incrementar dispatch')
        this.$store.dispatch('contarUp',2)
      },
      decrementar() {
        //this.contador--
        this.$store.dispatch('contarDown',3)
      }
    },
    computed: {
      /* mostrarContador() {
        //return this.contador
        return this.$store.state.contador
      } */
    }
}


</script>

<style scoped>
    .ContadorVuex {
    }
    .ContadorVuex .jumbotron {
        /* background-color: darkgreen; */
        color: brown;
    }
   
    .ContadorVuex hr {
        /* background-color: darkgreen; */
        color:#000;
    }
    
</style>
