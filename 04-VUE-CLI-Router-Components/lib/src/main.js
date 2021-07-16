// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

import { createApp } from 'vue'
import App2 from './App2.vue'
import router from './router'

createApp(App2).use(router).mount('#app')
//將App2放到createApp()中

