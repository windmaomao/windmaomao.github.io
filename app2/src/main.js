// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import vueHeadful from 'vue-headful'
import ClickOutside from 'vue-click-outside'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.component('Headful', vueHeadful)
Vue.directive('click-outside', ClickOutside)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
