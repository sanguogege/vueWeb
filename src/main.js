import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Vue.use(VueAxios,axios);

axios.defaults.baseURL = '/api'

axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false
