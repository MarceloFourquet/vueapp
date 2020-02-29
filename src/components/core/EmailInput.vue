<template>
  <div class="container">
    <!-- Marcelo -->
    <text-input
      :texto="texto"
      :parentValid="check"
      :errorMessage="errorMessage"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script>
import TextInput from '@/components/core/TextInput'
export default {
  name: 'EmailInput',
  components: {
    TextInput
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    texto: {
      type: String,
      default: 'E-Mail:'
    },
    errorMessage: {
      type: String,
      default: 'Email inválido'
    },
    placeholder: {
      type: String,
      default: 'Ingrese un e-mail'
    }
  },
  methods: {
    check () {
      const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
      return emailRegex.test(this.value)
    },
    onInput (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>
</style>
