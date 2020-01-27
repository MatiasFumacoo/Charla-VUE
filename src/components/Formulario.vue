<template>

  <div class="Formulario">
    <div class="jumbotron">
      <h2>Componente Formulario</h2>
      <hr />
      <hr />

      <form @submit.prevent="enviar()" novalidate autocomplete="off">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            v-model.trim="f.nombre.valor"
            @input="f.nombre.dirty=true"
          >
        </div>
        <div v-if="f.nombre.valor=='' && f.nombre.dirty" class="alert alert-warning">
          Este campo es requerido
        </div>

        <div class="form-group">
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad"
            class="form-control"
            v-model.number="f.edad.valor"
            @input="f.edad.dirty=true"
          >
        </div>
        <div v-if="f.edad.valor=='' && f.edad.dirty" class="alert alert-warning">
          Este campo es requerido
        </div>

        <div class="form-group">
          <input type="submit" :disabled="f.nombre.valor=='' || f.edad.valor==''" class="btn btn-success mt-4" value="Enviar">
        </div>

      </form>

    </div>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'Formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        f : this.resetFormulario()
      }
    },
    methods: {
      resetFormulario() {
        return {
          nombre : {valor:'', dirty: false},
          edad: {valor:'', dirty: false}
        }
      },
      enviar() {
        console.log(this.f)
        this.f = this.resetFormulario()
      }
    },
    computed: {

    }
}


</script>

<style scoped>
  .Formulario {

  }

.Formulario .jumbotron {
  background-color: pink;
  color: brown;
}

.Formulario hr {
  background-color: #333;
}  
</style>
