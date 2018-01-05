import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GroupBuying from '@/components/groupbuying'
import Service from '@/components/Service.vue'
import NearbyStore from '@/components/NearbyStore'
import Mime from '@/components/Mime.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'',redirect:'/home'},
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/groupbuying',
      name: 'groupbuying',
      component: GroupBuying
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/nearbystore',
      name: 'nearbystore',
      component: NearbyStore
    },
    {
      path: '/mime',
      name: 'mime',
      component: Mime
    }
  ]
})
