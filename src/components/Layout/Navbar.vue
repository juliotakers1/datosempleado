<template>

    <div>
        <nav class="navbar navbar-expand-lg bg-primary pa-md">
            <div class="container-fluid">
              <a class="navbar-brand text-white" href="#">Test</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <router-link class="nav-link active text-white" aria-current="page" to="/">Listado</router-link>
                  <router-link class="nav-link active text-white" aria-current="page" to="/empleado">Nuevo</router-link>
                  
                </div>
              </div>
            </div>
          </nav>
    </div>
  </template>
  <script setup>
  
  </script>
  <style scoped>
  
  </style>
  