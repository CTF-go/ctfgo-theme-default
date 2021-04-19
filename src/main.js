import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import './styles/global.css'
import axios from 'axios'

// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

axios.defaults.baseURL = 'http://localhost:8080/v1/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
