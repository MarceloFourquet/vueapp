<template>
  <div class="container">
    <!-- Marcelo -->
    <h6>FAECC</h6>
    <h3>Analista de Sistemas - Taller VI</h3>
    <h4>Trabajo Práctico</h4>
    <div class="imagen">
      <img src="@/assets/logo.png" width="30%" height="30%">
    </div>
    <h5>Aplicación desarrollada utilizando vue.js</h5>
    <h6>2018</h6>
  </div>
</template>

<script>
</script>

<style scoped>
div.container {
  margin-top: 5px;
  border: 1px solid #4b3d1c;
  border-radius: 15px;
  padding: 10px;
  background-color: #c8bd83;
  color: #4b3d1c;
  text-align: center;
}
div.imagen:hover {
 transform: rotateY(180deg);
 transition:all 1s ease-in-out;
}
</style>
