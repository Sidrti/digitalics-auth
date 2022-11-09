import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import '@/assets/css/style.css'
import './registerServiceWorker'

import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '797147138676-3lr5gfhbdvnpj3f0ml4g885sgigked2p.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
  plugin_name:'digitalics-login'
}
Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')