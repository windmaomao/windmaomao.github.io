// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueResource)

// Global mixins
let paramsMixin = {
  methods: {
    paramsFromUrl: function() {
      let params = {}
      window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
        params[key] = value
      })
      return params
    }
  }
}
Vue.mixin(paramsMixin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
