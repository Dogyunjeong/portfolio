import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import vuex from './plugins/vuex'
import i18n from './i18n'
import firebase from '@/utilities/firebase.util'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
