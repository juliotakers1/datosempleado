import {ref} from 'vue';

import axios from 'axios';

// const baseUrl = 'http://localhost:3000/'
const baseUrl = 'https://datospersonasfe-b4feccf09065.herokuapp.com/'
export const useEmpleadoStore = () => {

    const listaEmpleados = ref([])


    const cargarListaEmpleados = async () => {
        try {
            const response = await axios.get(baseUrl + 'empleado')

            listaEmpleados.value = await response.data.empleados
            // console.log(listaPersonas.value, 'cargarlista')

        } catch (error) {
            console.log('Error al cargar el empleado', error);
        }
    }
    const guardarEmpleado = async (payload) => {
        try {
            await axios.post(baseUrl + 'empleado/', payload)
            console.log(payload, 'payload');
        } catch (error) {
            console.log('error al guardar');
        }
    }


    return {
        cargarListaEmpleados,
        guardarEmpleado,
        listaEmpleados  
      }
}


