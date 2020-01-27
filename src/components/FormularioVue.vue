<template>

  <div class="FormularioVue">
    <div class="jumbotron">
      <h2>Componente FormularioVue</h2>
      <hr />
      <hr />

      <vue-form :state="formstate" @submit.prevent="enviar()" autocomplete="off">
        <div class="form-group">
          <validate tag="label">
            <label for="nombre">Nombre</label>
            <input 
                type="text"
                id="nombre"
                name="nombre"
                class="form-control"
                v-model.trim="f.nombre"
                required
                :minlength="cantMinimaCaracteres"
                sin-espacios
            >
            <field-messages name="nombre" show="$dirty">
                <div class="alert alert-danger mt-1" slot="required">Este campo es requerido</div>
                <div class="alert alert-danger mt-1" slot="minlength">La cantidad mínima de caracteres es {{cantMinimaCaracteres}}</div>
                <div class="alert alert-danger mt-1" slot="sin-espacios">No se permiten espacios intermedios en este campo</div>

            </field-messages>
          </validate>

        </div>

        <div class="form-group">
          <validate tag="label">
            <label for="edad">Edad</label>
            <input 
                type="number"
                id="edad"
                name="edad"
                class="form-control"
                v-model.number="f.edad"
                required
            >
            <field-messages name="edad" show="$dirty">
                <div class="alert alert-danger mt-1" slot="required">Este campo es requerido</div>
            </field-messages>
          </validate>
        </div>

        <div class="form-group">
          <input type="submit" :disabled="!formstate.$valid" class="btn btn-success mt-4" value="Enviar">
        </div>

      </vue-form>

    </div>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'FormularioVue',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate : {},
        f : this.resetFormulario(),
        cantMinimaCaracteres : 4
      }
    },
    methods: {
      resetFormulario() {
        return {
          nombre : '',
          edad: ''
        }
      },
      enviar() {
        console.log(this.f)
        this.f = this.resetFormulario()
        this.formstate._reset()
      }
    },
    computed: {

    }
}


</script>

<style scoped>
  .FormularioVue {

  }

.FormularioVue .jumbotron {
  background-color: purple;
  color: white;
}

.FormularioVue hr {
  background-color: #ddd;
}  
</style>
