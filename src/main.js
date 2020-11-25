import Vue from 'vue'
import App from './App.vue'
import router from './router'

// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI)

Vue.use(axios,VueAxios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
