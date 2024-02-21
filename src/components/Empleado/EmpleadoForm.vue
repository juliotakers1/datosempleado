

<template>

    <div class="p-3">
        <h2 class="text-center fw-bold">Empleado</h2>
            <div class="mb-3">
            <label for="exampleInputName" class="form-label">Nombre</label>
            <input type="text" class="form-control"  aria-describedby="emailHelp" v-model="empleado.nombre">
            </div>

          <div class="mb-3">
            <label for="exampleInputApellido" class="form-label">Apellido</label>
            <input type="text" class="form-control" v-model="empleado.apellido">
          </div>

          <div class="mb-3">
            <label for="exampleInputDireccion" class="form-label">Dirección</label>
            <input type="text" class="form-control"  aria-describedby="emailHelp" v-model="empleado.direccion">
            </div>
            
          <div class="mb-3">
            <label for="exampleInputEdad" class="form-label">Edad</label>
            <input type="number" class="form-control" v-model="empleado.edad">
          </div>

          <div class="mb-3">
            <label for="exampleInputProfesion" class="form-label">Profesión</label>
            <input type="text" class="form-control" v-model="empleado.profesion">
          </div>
          
          <div class="mb-3">
            <label for="exampleInputEstadoCivil" class="form-label">Estado Civil</label>
            <select class="form-select" aria-label="Default select example" v-model="empleado.estadocivil">
                <option selected></option>
                <option value="Soltero(a)">Soltero(a)</option>
                <option value="Casado(a)">Casado(a)</option>
                <option value="Divorciado(a)">Divorciado(a)</option>
                <option value="Otro">Otro</option>
              </select>
            <!-- <input type="text" class="form-control" v-model="empleado.estadoCivil"> -->
          </div>
          <div class=" text-end">
            <button type="submit" class="btn btn-primary">Guardar</button>
       
          </div>
          
    </div>
  </template>
  <script setup>
  import { ref, defineProps } from 'vue';
  const props = defineProps(['empleado']);
const empleado = ref(props.empleado);
  </script>
  <style scoped>
  
  </style>
  