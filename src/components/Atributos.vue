<template>
  <div class="Atributos">
    <div class="jumbotron">
      <h2>Componente Atributos</h2>
      <hr />
      <hr />
      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <h4>
        <u>:style</u>
      </h4>

      <button class="btn btn-success my-3" @click="estado1=!estado1">Cambiar</button>
      <p
        :style="{ color: 'white', backgroundColor: estado1? 'green':'red', borderRadius: '10px', padding: '10px'}"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ipsum libero obcaecati odit harum, numquam, quis velit qui quisquam iusto, quae atque. Perferendis id fugit illum maxime possimus non neque?</p>

      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <hr />
      <h4>
        <u>:class</u>
      </h4>

      <!-- <button class="btn btn-success my-3" @click="estado2=!estado2">Cambiar</button>
                <p :class="{ 'alert': true, 'alert-success': estado2, 'alert-danger': !estado2}">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ipsum libero obcaecati odit harum, numquam, quis velit qui quisquam iusto, quae atque. Perferendis id fugit illum maxime possimus non neque?
      </p>-->

      <button class="btn btn-success my-3" @click="estado2=!estado2">Cambiar</button>
      <p
        :class="['text-white',{ 'bg-success': estado2, 'bg-danger': !estado2}]"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ipsum libero obcaecati odit harum, numquam, quis velit qui quisquam iusto, quae atque. Perferendis id fugit illum maxime possimus non neque?</p>
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'Atributos',
    props: [],
    mounted () {

    },
    data () {
      return {
        estado1 : true,
        estado2 : true
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
.Atributos {
}

.Atributos .jumbotron {
  background-color: pink;
  color: #444;
}

.Atributos hr {
  background-color: #333;
}
</style>
