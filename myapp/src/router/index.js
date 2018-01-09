import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import GroupBuying from '@/components/groupbuying'
import Service from '@/components/Service'
import NearbyStore from '@/components/nearbystore'
import Mime from '@/components/mime'
import Login from '@/components/login'
import City from '@/components/home/city'
import ShopCar from '@/components/shopcar'
import Register from '@/components/login/Register'
import AppOn from '@/components/nearbystore/AppOn'
import AppNow from '@/components/nearbystore/AppNow'
import Shezhi from '@/components/mime/info/Shezhi'
import Paying from '@/components/mime/order/paying'
import Receiving from '@/components/mime/order/Receiving'
import Evaluate from '@/components/mime/order/Evaluate'
import Orders from '@/components/mime/order/Orders'
import Coupon from '@/components/mime/info/Coupon'
import MyInfo from '@/components/mime/message/MyInfo'
import MyGroupBuy from '@/components/mime/message/MyGroupBuy'
import MyCollect from '@/components/mime/message/MyCollect'
import MyEyeglass from '@/components/mime/message/MyEyeglass'
import MyAddress from '@/components/mime/message/MyAddress'
import MyPassword from '@/components/mime/message/MyPassword'
import List from '@/components/list'

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
            path: '/list/:cid/:tid/:tag',
            name: 'list',
            component: List
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
        }, {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/shezhi',
            name: 'shezhi',
            component: Shezhi
        }, ,
        {
            path: '/paying',
            name: 'paying',
            component: Paying
        },
        {
            path: '/receiving',
            name: 'receiving',
            component: Receiving
        },
        {
            path: '/evaluate',
            name: 'evaluate',
            component: Evaluate
        },
        {
            path: '/orders',
            name: 'orders',
            component: Orders
        },
        {
            path: '/coupon',
            name: 'coupon',
            component: Coupon

        },
        {
            path: '/my-info',
            name: 'my-info',
            component: MyInfo

        },
        {
            path: '/my-groupbuy',
            name: 'my-groupbuy',
            component: MyGroupBuy

        },
        {
            path: '/my-collect',
            name: 'my-collect',
            component: MyCollect

        },
        {
            path: '/my-eyeglass',
            name: 'my-eyeglass',
            component: MyEyeglass

        },
        {
            path: '/my-address',
            name: 'my-address',
            component: MyAddress

        },
        {
            path: '/my-password',
            name: 'my-password',
            component: MyPassword

        }
    ]
})