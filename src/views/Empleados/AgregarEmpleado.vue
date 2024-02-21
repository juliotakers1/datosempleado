

<template>

    <div class="container">
     <div class="shadow-lg m-5 ">
      <form @submit.prevent="procesarFormulario">
            <EmpleadoForm :empleado="empleado" />
      </form>
          
     </div>
    </div>
  </template>
  <script setup>
  import EmpleadoForm from '@/components/Empleado/EmpleadoForm.vue'
  import { useEmpleadoStore } from '@/stores/empleado.store.js'
  import router from "@/router/index.js";
  import { ref} from 'vue';
  const store = useEmpleadoStore()
  const empleado = ref({
  nombre: '',
  apellido: '',
  direccion: '',
  edad: '',
  profesion: '',
  estadocivil: ''
})
const procesarFormulario = async() => {
  try{
    await store.guardarEmpleado(empleado.value)
    await  router.push('/')
  }catch (e) {
    console.log('error', e)
  }

}
  </script>
  <style scoped>
  
  </style>
  