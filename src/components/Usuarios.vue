<template>
  <div class="Usuarios">
    <div class="jumbotron">
      <h2>Componente Usuarios</h2>
      <hr />
      <hr />

      <button class="btn btn-success m-3" @click="obtenerUsuarios()">GET</button>
      <button class="btn btn-info m-3" @click="guardarUsuario()">POST</button>

      <div class="media alert alert-danger" v-for="(usuario, index) in usuarios" :key="index">
        <img :src="usuario.foto" width="250" :style="{borderRadius: '80px'}" :alt="usuario.nombre" />
        <div class="media-body ml-3">
          <h5>
            <u>ID: {{index + 1}} - ObjectID: {{usuario.id}}</u>
          </h5>
          <br />
          <p>
            Nombre:
            <a :href="usuario.foto">{{usuario.nombre}} {{usuario.apellido}}</a>
          </p>
          <p>
            Descripcion:
            <i>{{usuario.descripcion}}</i>
          </p>
          <p>
            Coordenadas:
            <i>
              <u>{{usuario.coordenadas}}</u>
            </i>
          </p>
          <p>
            Comentarios:
            <i>
              <b>{{usuario.comentarios}}</b>
            </i>
          </p>
          <h6>
            Creado:
            <i>{{usuario.createdAt}}</i>
          </h6>

            <button class="btn btn-danger m-3" @click="borrarUsuario(usuario.id)">DELETE</button>
            <button class="btn btn-warning m-3" @click="actualizarUsuario(usuario.id)">PUT</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">

  import axios from 'axios'
  import miMixin from '../mixins/myMixin'

  export default  {
    name: 'Usuarios',
    props: [],
    mixins: [miMixin],
    mounted () {
        //this.obtenerUsuarios()
    },
    data () {
      return {
        //https://www.iconfinder.com/free_icons
        usuarios : [],
        url: 'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios'
      }
    },
    methods: {
        obtenerUsuarios() {
            axios.get(this.url)
            .then(respuesta => {
                //console.log(respuesta.data)
                this.usuarios = respuesta.data
            })
            .catch(e => {
                console.log(`Error axios GET: ${e}`)
            })
        },
        guardarUsuario() {
            let usuario = {
                nombre: "Juan Perez",
                foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-256.png",
                descripcion: "Usuario del sistema",
                coordenadas: "123456",
                comentarios: "Hola como están!"
            }

            axios.post(this.url, usuario)
            .then( respuesta => {
                console.log(respuesta.data)
                //this.obtenerUsuarios()
                this.usuarios.push(respuesta.data)
            })
            .catch(e => {
                console.log(`Error axios POST: ${e}`)
            })
        },
        borrarUsuario(id) {
            axios.delete(`${this.url}/${id}`)
            .then(respuesta => {
                console.log(respuesta.data)
                //this.obtenerUsuarios()
                let index = this.usuarios.findIndex(usuario => usuario.id === id)
                this.usuarios.splice(index,1)
            })
            .catch(e => {
                console.log(`Error axios DELETE: ${e}`)
            })
        },
        actualizarUsuario(id) {
            let usuario = {
                nombre: "Ana Lopez",
                foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png",
                descripcion: "Supervisora del sistema",
                coordenadas: "654321",
                comentarios: "Bienvenidos!"
            }

            axios.put(`${this.url}/${id}`, usuario)
            .then( respuesta => {
                console.log(respuesta.data)
                let index = this.usuarios.findIndex(usuario => usuario.id === id)
                console.log(index, respuesta.data)
                //this.obtenerUsuarios()
                this.usuarios.splice(index,1,respuesta.data)
                //this.usuarios[index] = respuesta.data
            })
            .catch(e => {
                console.log(`Error axios PUT: ${e}`)
            })
        }
    },
    computed: {
    }
}


</script>

<style scoped>
.Usuarios {
}

.Usuarios .jumbotron {
  background-color: teal;
  color: white;
}

.Usuarios hr {
  background-color: #333;
}
</style>
