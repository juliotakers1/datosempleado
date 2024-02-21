

<template>

  <div class="container">
   
        <div class="card shadow-lg mt-3">
            <div class="column m-3 ">
                <button type="button" class="btn btn-secondary me-2 mb-5" @click="cargarEmpleados">Cargar Listado</button>
                <router-link type="button" class="btn btn-success mb-5" to="/empleado">Agregar Nuevo</router-link>

                <h2 class="text-center fw-bold">Listado de Empleados</h2>
            </div>

            <div class="table-empleado container  table-responsive">
                <table class="table  table-striped pa-5">
                    <thead class="table-primary">
                      <tr >
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Profesión</th>
                        <th scope="col">Estado Civil</th>
                        <th scope="col">Nivel de Riesgo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in empleados" :key="item._id">
                        <td>{{ item._id }}</td>
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.apellido }}</td>
                        <td>{{ item.direccion }}</td>
                        <td>{{ item.edad }}</td>
                        <td>{{ item.profesion }}</td>
                        <td>{{ item.estadocivil }}</td>
                        <td><button type="button" class="btn btn-warning  text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="abrirModal(item.edad)"><i class="fa-solid fa-eye"></i></button></td>
                      </tr>
                     
                    </tbody>
                  </table>
            </div>
        </div>
        
  </div>
  
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Nivel de Riesgo</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{ mensajeModal }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
  
</template>
<script setup>
import { useEmpleadoStore } from '@/stores/empleado.store.js'
import { ref } from 'vue';
  const store = useEmpleadoStore()
  const empleados = ref(store.listaEmpleados);

  const cargarEmpleados = async() => {
  try{
    await store.cargarListaEmpleados()
    
  }catch (e) {
    console.log('error', e)
  }

}
const modalAbierto = ref(false)
const mensajeModal = ref('')
const abrirModal = (edad) => {
  modalAbierto.value = true;
  console.log(modalAbierto.value, 'modal')
  mensajeModal.value =
  edad >= 18 && edad <= 25
    ? "FUERA DE PELIGRO"
    : edad >= 26 && edad <= 50
    ? "TENGA CUIDADO, TOME TODAS LAS MEDIDAS DE PREVENCIÓN"
    : "POR FAVOR QUÉDASE EN CASA";

  console.log(mensajeModal.value, 'mensaje')
}
const cerrarModal = () => {
  modalAbierto.value = false;
};
</script>
<style scoped>

</style>
