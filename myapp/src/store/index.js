import Vuex from "vuex"
import Vue from "vue"
import axios from "axios"
Vue.use(Vuex) //需要vue.use
const store = new Vuex.Store({
    state: {
        cartData: []
    },
    mutations: {
        initCartData(state, cartData) {
            //mutation拿到action提交的数据以后，修改state，
            state.cartData = cartData
        }
    },
    actions: {
        changeNumAction(context, { id, num, type }) {
            //context 简单版的 store
            console.log(id, num, type)
            var number = num + type
            if (number >= 1) {
                //http://m.loho88.com/m-loho88/cart/item/196658/2 加减
                axios.put(`/api/m-loho88/cart/item/${id}/${number}`).then(res => {
                    console.log(res.data)
                    context.dispatch("getCartData") //修改数量以后，获取最新数据
                })
            }
        },
        getCartData(context) {
            //获取购物车数据的行为
            //进行数据请求
            axios.get("/api/cart/list/all").then(res => {
                console.log(res.data)
                let cartData = res.data.cart.gcpList
                    //获取数据以后 ，把数据提交给 mutations
                store.commit("initCartData", cartData)
            })
        }
    }
})

export default store