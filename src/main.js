import Vue from 'vue'
import App from './App.vue'
import router from './router'
//按需导入ElementUI
import './plugins/element.js'

//axios导入
import axios from 'axios'
//引入vuex
import store from './store/store'

//全局注册axios
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
