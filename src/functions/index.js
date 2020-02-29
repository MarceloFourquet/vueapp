// Marcelo
import Vue from 'vue'
const functions = Vue.mixin({
  data () {
    return {
      validCheck: false
    }
  },
  props: {
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    subscribe (element) {
      // Busco el 'form' que lo envuelve (si existe)
      let elem = this.$parent
      // Busco de manera recursiva todos los elementos hacia
      // arriba hasta encontrar alguno que implemente 'subscribe'
      while (elem && !elem.subscribe) {
        elem = elem.$parent
      }
      // Lo suscribo al FormValidator, si existe
      if (elem) {
        elem.subscribe(element)
      }
    },
    checkValid () {
      this.validCheck = true
      return this.isValid()
    },
    isValid () {
      return true
    }
  },
  computed: {
    error () {
      return null
    }
  },
  mounted () {
    // Lo suscribo para que lo trate el form
    this.subscribe(this)
  }
})

export default functions
