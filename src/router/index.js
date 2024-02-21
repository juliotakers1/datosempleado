import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TodosEmpleados',
      component: () => import('../views/Empleados/EmpleadosPage.vue')
    },
    {
      path: '/empleado',
      name: 'empleado',
      component: () => import('../views/Empleados/AgregarEmpleado.vue')
    }
  ]
})

export default router
