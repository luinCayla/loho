// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import App from './App'
import router from './router'

import '@/style/usage/app.scss'

Vue.use(MintUI)

// import { Tabbar, TabItem } from 'mint-ui';
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
