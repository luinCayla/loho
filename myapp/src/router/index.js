import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GroupBuying from '@/components/groupbuying'
import Service from '@/components/Service.vue'
import Home from '@/components/home'
import GroupBuying from '@/components/GroupBuying'
import Service from '@/components/Service'
import NearbyStore from '@/components/NearbyStore'
import Mime from '@/components/mime'
import City from '@/components/home/city'
import ShopCar from '@/components/shopcar'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '', redirect: '/home' },
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
        }, {
            path: '/city',
            name: 'city',
            component: City
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            component: ShopCar
        }
    ]
})
