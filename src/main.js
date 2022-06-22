/*
 * @Description:
 * @Version: 1.0
 * @Autor: Bourne
 * @Date: 2022-06-22 11:02:56
 * @LastEditors: Bourne
 * @LastEditTime: 2022-06-22 11:09:53
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
