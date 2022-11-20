import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '797147138676-af41b2539ggbnvr4q9bc5h5lt1j79b6q.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
  plugin_name:'digitalics-login'
}
Vue.use(Argon)
Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')