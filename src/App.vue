<template>
  <div id='app'>
    <!-- Marcelo -->
    <MenuContainer/>
    <router-view/>
  </div>
</template>

<script>
import MenuContainer from '@/components/core/MenuContainer'
export default{
  name: 'App',
  components: {
    MenuContainer
  },
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
}
</style>
