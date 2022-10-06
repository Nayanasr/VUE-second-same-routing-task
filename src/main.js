import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"
import store from "./store/store"

import HomeComp from "./components/HomeComp"
import LoginComp from "./components/LoginComp"
import SignupComp from "./components/SignupComp"
// import ProductComp from "./components/ProductComp"
import CartComp from "./components/CartComp"

// let isAuthenticated = false
let router = createRouter({
    //to remember the previous pages by using browser history

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeComp
        },
        {
            path: '/login',
            component: LoginComp
        },

        {
            path: '/signup',
            component: SignupComp
        },

        // {
        //     path: '/products',
        //     component: ProductComp
        // },

        {
            path: '/cart',
            component: CartComp
        },
    ]
})

router.beforeEach((to, from) => {
    console.log("to", to);
    console.log("from", from);
    //return true
    if (to.path === "/cart" && store.state.isAuthenticated) {
        return true
    } else if (to.path === "/cart" && !store.state.isAuthenticated) {
        return "/login"
    }
})
let app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
