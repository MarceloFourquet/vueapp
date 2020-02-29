<template>
  <div class="container">
    <!-- Marcelo -->
    <slot/>
    <!-- 'slot' indica donde deben dibujarse los componentes del formulario -->
  </div>
</template>

<script>
export default {
  name: 'FormValidator',
  data () {
    return {
      elementos: []
    }
  },
  methods: {
    subscribe (element) {
      console.log('Se esta registrando ' + element.$options.name)
      // Pushea 'element' hacia la función 'subscribe' declarada en /src/functions/index.js
      this.elementos.push(element)
    },
    validar () {
      let validForm = true
      for (let i = 0; i < this.elementos.length; i++) {
        let element = this.elementos[i]
        // 'checkValid' es una función declarada en /src/functions/index.js
        if (!element.checkValid) {
          console.error('No se implementó la función checkValid en el elemento: ' + element.$options.name)
        } else {
          if (!element.checkValid()) {
            validForm = false
          }
        }
      }
      return validForm
    }
  }
}
</script>

<style scoped>
</style>
