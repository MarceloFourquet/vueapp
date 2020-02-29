<template>
  <div class="container">
    <!-- Marcelo -->
    <input
      type="button"
      :value="value"
      @click="$emit('click')"
    />
  </div>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
input[type=button] {
  width: 90px;
  font-size: 20px;
  border: 1px solid #4b3d1c;
  border-radius: 16px;
  background-color: #4b3d1c;
  color: #FFFFFF;
  padding: 5px;
  margin-top: 5px;
  box-shadow: 3px 3px 5px #111111;
}
input[type=button]:hover {
  transition: 0.5s ease-out;
  background-color: #968a5a;
  cursor: pointer;
}
input[type=button]:focus {
  outline: none;
}
input[type=button]:active {
  transition: 0.1s ease-out;
  box-shadow: 1px 1px 3px #111111;
}
</style>
