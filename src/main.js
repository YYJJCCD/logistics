import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import JsonExcel from 'vue-json-excel'

Vue.component('DownloadExcel', JsonExcel)
Vue.config.productionTip = false

Vue.use(antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
