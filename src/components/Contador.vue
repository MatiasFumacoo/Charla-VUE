<template>

  <div class="Contador">
    <div class="jumbotron" :style="{'background-color': colorFondo}">
      <h2>{{titulo}}</h2>
      <br>
      <button class="btn btn-success my-3" @click="incrementar()">Contar {{ mostrarContador }} </button>
    </div>
  </div>

</template>

<script lang="js">

  import miMixin from '../mixins/myMixin'

  export default  {
    name: 'Contador',
    props: ['titulo', 'valorInicial', 'colorFondo'],
    mixins: [miMixin],
    beforeCreate () {
      //console.log('Contador beforeCreate')
    },
    created () {
      console.log('Contador created')
    },

    beforeMount () {
      //console.log('Contador beforeMount')
    },
    /* mounted () {
      console.log('Contador mounted')
      //this.refInterval = setInterval(() => {
      //  console.log('Hola!')//, this.contador2++)
      //}, 2000);
    }, */

    beforeUpdate () {
      //console.log('Contador beforeUpdate')
    },
    updated () {
      console.log('Contador updated')
    },

    beforeDestroy () {
      //console.log('Contador beforeDestroy')
    },
    destroyed () {
      console.log('Contador destroyed')
      //clearInterval(this.refInterval)
    },

    data () {
      return {
        contador : parseInt(this.valorInicial),
        contador2 : 0
      }
    },
    methods: {
      /* incrementar() {
        this.contador++
      } */
    },
    computed: {
      mostrarContador() {
        return this.contador
      }
    }
}


</script>

<style scoped>
  .Contador {

  }
  .Contador .jumbotron {
    /* background-color: darkgreen; */
    color: white;
  }
</style>
