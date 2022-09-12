import Vue from 'vue'
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies'

import App from './App.vue'
import router from './router/router'
import store from "./store"


Vue.use(VueCookies)


Vue.config.productionTip = false

console.log('%c Thanks for using! - Chuncha 💖', 'background-color: #000; color: #fff; font-size:25px');
console.log('-> Github: https://github.com/HelloGwkki/EvoStart <-');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function (registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function (error) {
    console.log('Service Worker registration failed, error:', error);
  });
}

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
