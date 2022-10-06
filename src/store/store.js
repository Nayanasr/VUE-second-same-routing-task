import { createStore } from "vuex";
// import axios from "axios"
let store = createStore({
    state() {
        return {
            // products: [],
            isAuthenticated: false
        }
    },

    mutations: {
        login(state) {
            state.isAuthenticated = true
        },

        logout(state) {
            state.isAuthenticated = false
        },
        // fetchProducts(state, payload) {
        //     state.products = payload
        // }
    },
    // actions: {
    //     async fetchProducts(context) {
    //         try {
    //             let res = await axios.get("https://ty-shop.herokuapp.com/api/products")
    //             console.log("response", res);
    //             let resProducts = res.data.products;
    //             console.log("resProducts", resProducts);
    //             context.commit("fetchProducts", resProducts)
    //         }
    //         catch (err) {
    //             console.log("error", err);
    //         }
    //     }
    // }
})

export default store