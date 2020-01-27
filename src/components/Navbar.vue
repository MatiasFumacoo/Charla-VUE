<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <router-link to="/">
        <a class="navbar-brand">Inicio</a>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <!-- LINK CONTADOR -->  
        <li class="nav-item">
          <router-link tag="li" to="/contador/Componente Contador/0/brown">
            <a class="nav-link">Contador</a>
          </router-link>
        </li>

        <!-- LINK ENTRADAS -->  
        <li class="nav-item">
          <router-link tag="li" to="/entradas">
            <a class="nav-link">Entradas</a>
          </router-link>
        </li>

        <!-- LINK ESTRUCTURA -->  
        <li class="nav-item">
          <router-link tag="li" to="/estructura">
            <a class="nav-link">Estructura</a>
          </router-link>
        </li>

        <!-- LINK ATRIBUTOS -->  
        <li class="nav-item">
          <router-link tag="li" to="/atributos">
            <a class="nav-link">Atributos</a>
          </router-link>
        </li>

        <!-- LINK USUARIOS -->  
        <li class="nav-item">
          <router-link tag="li" to="/usuarios">
            <a class="nav-link">Usuarios</a>
          </router-link>
        </li>

        <!-- LINK FORMULARIO -->  
        <li class="nav-item">
          <router-link tag="li" to="/formulario">
            <a class="nav-link">Formulario</a>
          </router-link>
        </li>

        <!-- LINK FORMULARIO VUE -->  
        <li class="nav-item">
          <router-link tag="li" to="/formulario-vue">
            <a class="nav-link">Formulario Vue</a>
          </router-link>
        </li>

        <!-- LINK CONTADOR VUEX -->  
        <li class="nav-item">
          <router-link tag="li" to="/contador-vuex/Componente Contador Vuex/orange">
            <a class="nav-link">Contador Vuex</a>
          </router-link>
        </li>


      </ul>
    </div>
  </nav>
</template>