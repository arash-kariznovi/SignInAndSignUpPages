import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BlueButton from './components/BlueButton.vue'

Vue.config.productionTip = false

Vue.component('blue-button', BlueButton);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
