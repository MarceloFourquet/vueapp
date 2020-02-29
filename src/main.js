// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Marcelo
import Vue from 'vue'
import App from './App'
import router from './router'
import functions from './functions'
import PostItem from '@/components/core/PostItem'

// Para importar y registrar un componente a nivel de aplicación
/*
import AltaComponent from '@/components/AltaComponent'
Vue.component('alta-component', AltaComponent)
*/
Vue.component('post-item', PostItem)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mixins: [functions] // Importa una serie de funciones desde '/src/functions/index.js'
})
