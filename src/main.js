import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './tools/rem'
import './mock/mock-server.js'
import Search from './components/Search/Search.vue'
Vue.component(Search.name,Search)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
   router,
   store
}).$mount('#app')
