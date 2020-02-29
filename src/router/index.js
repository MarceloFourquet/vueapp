// Marcelo
import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Listado from '@/components/Listado'
import Alta from '@/components/Alta'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/listado',
      name: 'Listado',
      component: Listado
    },
    {
      path: '/alta',
      name: 'Alta',
      component: Alta
    }
  ]
})
