import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({

    state: { // = equivalent to data properties - just like the vue instance
        products: [],
    },

    getters: { // = equivalent computed properties
        productsCount() {
            // ...
        }
    },

    actions: { // equiv to methods -- actions can be complex but they never update the state --- you are less likely to have bugs using this pattern in your code
        fetchProducts() {
            // make the call to API fetching products
            // run setProducts mutation
        }
    },

    mutations: { // responsible for setting or changing the state  ---- should be as simple as possible --- only responsible to updating just a piece of the state
        // 'state' is automatically passed by vuex as the first param in 'every' mutation, we can pass an additional parameter when calling a mutation that will be the payload in our example the payload is the products
        // alter state
        setProducts(state, products) {
            // update products

            state.products = products
        }
    }
})