<template>
  <div class="Estructura">
    <div class="jumbotron">
      <h2>Componente Estructura</h2>
      <hr />
      <hr />

      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <hr />
      <h4>
        <u>v-if</u>
      </h4>
      <button
        class="btn btn-warning my-3"
        @click="mostrar=!mostrar"
      >{{mostrar? 'Ocultar':'Mostrar'}}</button>

      <p
        v-if="mostrar"
        class="alert alert-warning"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem perspiciatis, et est rerum libero minima at nemo iste, culpa quibusdam facere, debitis nostrum. Totam debitis deserunt quaerat a numquam blanditiis.</p>
      <p v-else class="alert alert-danger">elemento removido</p>

      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <hr />
      <h4>
        <u>v-show</u>
      </h4>
      <button
        class="btn btn-warning my-3"
        @click="cambiarVisibilidad()"
      >{{obtenerTituloVisibilidad()}}</button>
      <p
        v-show="visibilidad()"
        class="alert alert-info"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem perspiciatis, et est rerum libero minima at nemo iste, culpa quibusdam facere, debitis nostrum. Totam debitis deserunt quaerat a numquam blanditiis.</p>

      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <hr />
      <h4>
        <u>v-for</u>
      </h4>
      <ul class="alert alert-info">
        <li v-for="(usuario, index) in usuarios" :key="index">{{ index + 1 }} - {{ usuario }}</li>
      </ul>
      <hr />

      <button class="btn btn-warning my-3" @click="agregar()">Agregar Alumno</button>
      <div v-if="alumnos.length">
        <table class="table">
          <tr class="bg-success text-white">
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Curso</th>
            <th>Foto</th>
          </tr>

          <tr class="bg-info text-white" v-for="(alumno, index) in alumnos" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ alumno.nombre | uppercase | wrap('***','###') }}</td>
            <td>{{ alumno.apellido | capitalize | reverse }}</td>
            <td>{{ alumno.edad }}</td>
            <td>{{ alumno.curso ? 'Si' : 'No' }}</td>
            <td>
              <img :src="alumno.foto" width="50" :alt="alumno.nombre" />
            </td>
          </tr>
        </table>
        <div
          class="alert alert-info"
        >{{ calcularAlumnosCurso.cantidad }} alumnos hicieron el curso de un total de {{ calcularAlumnosCurso.total}}</div>
      </div>
      <div v-else class="alert alert-danger">No se encontraron alumnos</div>

      <hr />

      <div class="media alert alert-danger" v-for="(alumno, index) in alumnos" :key="index">
      <!-- <div class="media alert alert-danger" v-for="(alumno, index) in alumnos" :key="index"> -->
        <img :src="alumno.foto" width="150" :alt="alumno.nombre" />
        <div class="media-body ml-3">
          <h6>
            <u>ID: {{index + 1}}</u>
          </h6>
          <p>
            Nombre:
            <a :href="alumno.foto">{{alumno.nombre}} {{alumno.apellido}}</a>
          </p>
          <p>
            Edad:
            <i>{{alumno.edad}}</i>
          </p>Hizo el curso
          <input type="checkbox" v-model="alumno.curso" />
          <button class="btn btn-danger mx-3" @click="borrar(index)">X</button>
        </div>
      </div>

      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <!-- -------------------------------------------------------- -->
      <hr />
      <h4>
        <u>v-else-if</u>
      </h4>
      <input type="text" v-model="nombre" />
      <br />
      <div class="btn btn-success mt-3">
        <div v-if="nombre=='Juan'">Bienvenido Juan</div>
        <div v-else-if="nombre=='Ana'">Bienvenida Ana</div>
        <div v-else-if="nombre=='Jose'">Bienvenido Jose</div>
        <div v-else>Bienvenido {{nombre}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'Estructura',
    props: [],
    /*
    filters: {
      uppercase: function(value) {
        if(!value) return ''
        value = value.toString()
        return value.toUpperCase()
      },
      capitalize: function(value) {
        if(!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      reverse: function(value) {
        if(!value) return ''
        value = value.toString()
        return value.split('').reverse().join('-')
      },
      wrap: function(value, begin, end) {
        if(!value) return ''
        value = value.toString()
        return begin + value + end
      }
    },
    */
    mounted () {
      /* fetch('https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios')
        .then(response => response.json())
        .then(json => console.log(json)) */
    },
    data () {
      return {
        mostrar: true,
        mostrar2: true,
        nombre : '',

        usuarios : [
            'Pedro',
            'Juan',
            'Ana',
            'Laura'
        ],
        //https://www.iconfinder.com/free_icons
        alumnos : [
            {nombre: 'Juan', apellido:'gomez', edad:32, curso:false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png'},
            {nombre: 'Ana', apellido:'picos', edad:23, curso:true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png'},
            {nombre: 'Diego', apellido:'mei', edad:27, curso:true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'},
            {nombre: 'Laura', apellido:'gutierrez', edad:41, curso:false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png'}
        ]
      }
    },
    methods: {
        cambiarVisibilidad() {
            this.mostrar2 = !this.mostrar2
        },
        obtenerTituloVisibilidad(){
            return this.mostrar2? 'Ocultar': 'Mostrar'
        },
        visibilidad() {
            return this.mostrar2
        },
        borrar(index) {
            this.alumnos.splice(index,1)
        },
        agregar() {
            var alumno = {nombre: 'Pablo', apellido:'Gonzalez', edad:33, curso:true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png'}

            this.alumnos.push(alumno)
        }
    },
    computed: {
        calcularAlumnosCurso() {
            var cant = 0

            this.alumnos.forEach(function(alumno) {
                if(alumno.curso) cant ++
            })

            return {
                cantidad : cant,
                total : this.alumnos.length
            }

        }

    }
}


</script>

<style scoped>
.Estructura {
}

.Estructura .jumbotron {
  background-color: orange;
  color: brown;
}

.Estructura hr {
  background-color: #333;
}
</style>
