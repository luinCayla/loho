import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import GroupBuying from '@/components/groupbuying'
import Service from '@/components/Service'
import NearbyStore from '@/components/nearbystore'
import Mime from '@/components/mime'
import City from '@/components/home/city'
import ShopCar from '@/components/shopcar'
import Register from '@/components/mime/Register'
import AppOn from '@/components/near/AppOn'
import AppNow from '@/components/near/AppNow'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
            //name: 'nearbystore',
            component: NearbyStore,
            children: [
                     {path:'',redirect: 'now',name:'nearbystore'},
                     {path:'now',component:AppNow,name:'now'},
                     {path:'on',component:AppOn,name:'on'}

                   ]
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
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
})
