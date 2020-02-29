<template>
  <div class="container">
    <div class="contenido">
      <!-- Marcelo -->
      <!-- Para usar con firebase -->
      <h4>Titulo: {{data.titulo}}</h4>
      <p>{{data.texto}}</p>
      <p>E-Mail: {{data.email}}</p>
      <p><button-item value="Eliminar" @click="$emit('eliminar')"/></p>
      <!-- $emit emite un mensaje al web-component padre (Listado) -->
      <!-- Para usar con axios -->
      <!-- <p>User: {{data.userId}}</p> -->
      <!-- <h4>{{data.title}}</h4> -->
    </div>
  </div>
</template>

<script>
import ButtonItem from '@/components/core/ButtonItem'
export default {
  name: 'PostItem',
  components: {
    ButtonItem
  },
  props: ['data']
}
</script>

<style scoped>
div.container > div.contenido {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #4b3d1c;
  border-radius: 15px;
  background-color: #fbf2ad;
  color: #33240b;
  text-align: left;
  overflow: auto;
}
</style>
