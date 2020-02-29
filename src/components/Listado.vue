<template>
  <div class="container">
    <!-- Marcelo -->
    <post-item
      v-for="(item, key) in datos"
      v-bind:key="key"
      :data="item"
      @eliminar="eliminarItem(key)"
    />
    <!-- '@eliminar' captura el 'emit' del hijo (PostItem) y llama a la función -->
    <Alta/> <!-- Se agrega como web-component -->
    <!-- Para usar el componente importado a nivel de aplicación en @/main.js -->
    <!-- <alta-component/> -->
  </div>
</template>

<script>
import { db } from '@/db'
import Alta from './Alta'
// Para usar axios
// import axios from 'axios'
export default {
  name: 'Listado',
  components: {
    Alta
    // Para usar el componente importado a nivel de aplicación en @/main.js
    // 'alta-component': AltaComponent
  },
  data () { // 'data' inicializa las variables del componente
    return {
      datos: []
    }
  },
  mounted () { // 'mounted' define el comportamiento del web-component cada vez que es montado
    db.ref('mensajes').on('value', (data) => (this.datos = data.val()))
    // 'value' es un evento que actúa cuando se agrega, elimina o cambia un valor

    // Para usar axios
    // axios.get('http://jsonplaceholder.typicode.com/todos/').then(response => (this.datos = response.data))
  },
  methods: { // A diferencia de 'data' y 'mounted', 'methods' es un grupo de funciones
    eliminarItem (key) {
      db.ref('mensajes').child(key).remove()
    }
  }
}
</script>

<style scoped>
</style>
