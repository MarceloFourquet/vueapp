<template>
  <div class="container">
    <!-- Marcelo -->
    <button-item
      type="button"
      :value="value"
      @click="click"
    />
  </div>
</template>

<script>
import ButtonItem from '@/components/core/ButtonItem'
export default {
  name: 'SubmitButton',
  components: {
    ButtonItem
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    click () {
      if (this.$parent.validar) {
        console.log('Se encontró form-validator')
        // Llama a la función 'validar' del 'padre' ('FormValidator')
        let r = this.$parent.validar()
        if (r) {
          console.log('Validación OK')
          this.$emit('click')
        } else {
          console.log('Validación ERROR')
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
