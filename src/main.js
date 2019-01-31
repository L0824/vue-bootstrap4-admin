import './lib/css'
import './lib/script'
import './lib/global'
import './lib/style.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import EventBus from './lib/eventBus.js'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
