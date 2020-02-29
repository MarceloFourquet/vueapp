<template>
  <div class="container">
    <!-- Marcelo -->
    <label>{{texto}}</label>
    <input
      type="text"
      :value="value"
      :required="required"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
    <!-- Con ':value' recibimos el valor y con '@input' lo devolvemos -->
    <span class="error" v-if="error">
      {{error}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    texto: {
      type: String,
      default: ''
    },
    // value es una palabra reservada para poder usar 'v-model' en el padre
    value: {
      type: String,
      default: ''
    },
    required: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: 'Debe completar este campo'
    },
    // A través de 'parentValid' recibimos la función 'check' propia de 'EmailInput'
    parentValid: {
      type: Function
    }
  },
  methods: {
    isValid () {
      let valid = true
      if (this.required) {
        valid = !!(this.value && this.value.trim() !== '')
      }
      // Utiliza la función 'check' propia de 'EmailInput'
      if (this.parentValid) {
        valid = valid && this.parentValid()
      }
      return valid
    }
  },
  computed: {
    error () {
      if (this.validCheck && !this.isValid()) {
        return this.errorMessage
      }
      return null
    }
  }
}
</script>

<style scoped>
input::placeholder{
  color: #f7f7f7;
  transition: color 0.5s ease-out;
}
input:focus::placeholder{
  color: #b7b7b7;
}
input[type=text]{
  width: 95%;
  border: 1px solid #4b3d1c;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px;
  color: #33240b;
}
input[type=text]:focus {
  outline: none;
}
span.error{
  color: red;
  font-size: 12px;
  font-style: italic;
  font-weight: bold;
}
</style>
