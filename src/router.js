import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Contador from './components/Contador'
import Entradas from "./components/Entradas/index.vue"
import Estructura from "./components/Estructura.vue"
import Atributos from "./components/Atributos.vue"
import Usuarios from "./components/Usuarios.vue"
import Formulario from "./components/Formulario.vue"
import FormularioVue from "./components/FormularioVue.vue"
import ContadorVuex from "./components/ContadorVuex.vue"

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/entradas'},
    {path: '/contador/:titulo/:valorInicial/:colorFondo', component: Contador, props: true},
    {path: '/entradas', component: Entradas},
    {path: '/estructura', component: Estructura},
    {path: '/atributos', component: Atributos},
    {path: '/usuarios', component: Usuarios},
    {path: '/formulario', component: Formulario},
    {path: '/formulario-vue', component: FormularioVue},
    {path: '/contador-vuex/:titulo/:colorFondo', component: ContadorVuex, props: true},
    {path: '*', redirect: '/entradas'}
  ]
})
