import Vue from 'vue'
import VueGtag from 'vue-gtag'
import './plugins/base'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.use(VueGtag, {
  config: { id: 'G-FJTJ7PSJVW' },
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
