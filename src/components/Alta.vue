<template>
  <div class="container">
    <!-- Marcelo -->
    <div class="contenido">
      <form-validator>
        <h4>
          <text-input
            required="required"
            texto="Título:"
            placeholder="Ingrese un título"
            v-model="nuevo.titulo"
          />
        </h4>
        <p>
          <text-input
            required="required"
            texto="Texto:"
            placeholder="Ingrese un texto"
            v-model="nuevo.texto"
          />
        </p>
        <p>
          <email-input
            required="required"
            v-model="nuevo.email"
          />
        </p>
        <p>
          <submit-button
            value="Guardar"
            @click="guardarItem()"
          />
        </p>
        <!-- '@click' es un evento -->
      </form-validator>
    </div>
  </div>
</template>

<script>
import { db } from '@/db'
import FormValidator from '@/components/core/FormValidator'
import TextInput from '@/components/core/TextInput'
import EmailInput from '@/components/core/EmailInput'
import SubmitButton from '@/components/core/SubmitButton'
export default {
  name: 'Alta',
  components: {
    FormValidator,
    TextInput,
    EmailInput,
    SubmitButton
  },
  data () {
    return {
      nuevo: {}
    }
  },
  methods: {
    guardarItem () {
      db.ref('mensajes').push(this.nuevo)
      this.nuevo = {}
    }
  }
}
</script>

<style scoped>
div.container > div.contenido {
  margin-top: 5px;
  border: 1px solid #4b3d1c;
  border-radius: 15px;
  padding: 10px;
  background-color: #c8bd83;
  color: #33240b;
  text-align: left;
}
</style>
