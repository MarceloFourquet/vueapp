<template>
  <div class="menu-container">
    <!-- Marcelo -->
    <!-- Pasando los datos como variables - Ver tambien MenuItem -->
    <MenuItem v-for="r in menu" v-bind:key="r.name" :path="r.path" :label="r.name"/>
    <!-- Pasando los datos como objeto - Ver tambien MenuItem -->
    <!-- <menu-item v-for="r in menu" v-bind:key="r.path" :router-entry="r"/> -->
  </div>
</template>

<script>
import MenuItem from '@/components/core/MenuItem'
export default {
  name: 'MenuContainer',
  components: {
    MenuItem
  },
  data () {
    return {
      text: ''
    }
  },
  computed: {
    menu () {
      return this.$router.options.routes
    }
  }
}
</script>

<style scoped>
div.menu-container {
  border: 1px solid #4b3d1c;
  border-radius: 15px;
  padding: 10px;
  background: #c8bd83;
}
</style>
