import Vue from 'vue'
import Demo from './Demo.vue'
import EasyGoTop from '../src/index'

Vue.config.productionTip = false
Vue.use(EasyGoTop)

new Vue({
  render: h => h(Demo)
}).$mount('#app')
