import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes.js'
import App from './components/App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
})

// new Vue({
//   router
// }).$mount('#app')

new Vue({
  el: '#app',
  render: h => h(App)
})