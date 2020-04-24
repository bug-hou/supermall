import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store/store"

Vue.config.productionTip = false
// 添加一个事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
