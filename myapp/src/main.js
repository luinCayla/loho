// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

// 引入全部组件
// import MintUI from 'mint-ui'
// Vue.use(MintUI)

//自定义组件
import './modules/directives'


import '@/style/usage/app.scss'


//按需引入部分组件
import { Swipe, SwipeItem } from 'mint-ui';
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';
import { Popup } from 'mint-ui';


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);



Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})