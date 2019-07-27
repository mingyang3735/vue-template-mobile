import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
import 'amfe-flexible'
import './plugins/vant.js'
import 'vant/lib/icon/local.css'
import request from '@/common/js/request'

Vue.config.productionTip = false
Vue.prototype.$http = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
