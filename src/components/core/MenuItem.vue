<template>
  <div class="menu-item">
    <!-- Marcelo -->
    <!-- Pasando los datos como variables - Ver tambien MenuContainer -->
    <router-link :to="path">{{label}}</router-link>
    <!-- Pasando los datos como objeto - Ver tambien MenuContainer -->
    <!-- <router-link :to="routerEntry.path">{{routerEntry.name}}</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    // Pasando los datos como variables - Ver tambien MenuContainer
    label: String,
    path: String
    // Pasando los datos como objeto - Ver tambien MenuContainer
    // routerEntry: Object
  }
}
</script>

<style scoped>
a {
  font-size: 20px;
  text-decoration: none;
  color: #FFFFFF;
  display: block;
  position: relative;
  z-index: 1;
  padding: 5px;
  margin: -5px;
}
div.menu-item {
  width: 90px;
  border: 1px solid #4b3d1c;
  border-radius: 16px;
  margin-right: 15px;
  display: inline-block;
  padding: 5px;
  background: #4b3d1c;
  box-shadow: 3px 3px 5px #111111;
}
div.menu-item:hover {
  transition: 0.5s ease-out;
  background: #968a5a;
}
div.menu-item:active {
  transition: 0.1s ease-out;
  box-shadow: 1px 1px 3px #111111;
}
div.menu-item:focus {
  outline: none;
}
</style>
