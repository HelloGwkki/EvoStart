import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies'

import router from './router/router'
import store from "./store"

Vue.use(VueCookies)

Vue.config.productionTip = false


new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
