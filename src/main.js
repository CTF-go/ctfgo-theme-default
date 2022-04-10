import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import showdown from 'showdown'
import './plugins/vuesax.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()
library.add(faUserSecret, faSpinner, faAlignLeft)
Vue.prototype.showdown = showdown
Vue.component('font-awesome-icon', FontAwesomeIcon)
axios.defaults.withCredentials = true
axios.defaults.baseURL = '/api/v1'
Vue.prototype.$http = axios
//var cors = require('cors');    
//const app = express();
//app.use(cors({credentials: true, origin: 'http://192.168.3.83:8080'}));

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
