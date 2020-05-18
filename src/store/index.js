import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({

    state: { // = equivalent to data properties - just like the vue instance
        products: [],
        //{id, quantity}
        cart: [],
        checkoutStatus: null
    },

    getters: { // = equivalent computed properties

            // ...filter or calculate something on runtime, show products that are not sold out or calculate the shopping cart total
           availableProducts (state) {
            return state.products.filter(product => product.inventory > 0 )
           },

           cartProducts (state) {
             return state.cart.map(cartItem => {
                const product = state.products.find(product => product.id === cartItem.id)
                return {
                  title: product.title,
                  price: product.price,
                  quantity: cartItem.quantity
                }
             })

           },


           cartTotal (state, getters) {


            // let total = 0
            // getters.cartProducts.forEach(product => {
            //   total += product.price * product.quantity
            // })

            // return total
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0 )
           }

    },


    actions: { // equiv to methods -- actions can be complex but they never update the state --- you are less likely to have bugs using this pattern in your code
        fetchProducts({commit}) {
            // make the call to API fetching products
            // run setProducts mutation
            // context.commit() to commit a mutation
            // context.state() to access the state
            return new Promise((resolve, reject) => { // PROMISE

                shop.getProducts(products => {
                  commit('setProducts', products)
                  resolve()
                })

            })

        },

        addProductToCart (context, product) {

          if(product.inventory > 0) {

            //find cartItem
            const cartItem = context.state.cart.find(item => item.id === product.id)

            if(!cartItem){
            //push productToCart
            context.commit('pushProductToCart', product.id) //committing MUTATION with product.id payload

            } else {
            //incrementItemQuantity if the cart ITEM exists
              context.commit('incrementItemQuantity', cartItem) //committing MUTATION
            }

            context.commit('decrementProductInventory', product)

          }


        },

        checkout({state, commit}){

          shop.buyProducts (

              state.cart, //first arg


            () => {

              commit ('emptyCart') //2nd arg

              commit('setCheckoutStatus', 'YAY! We have received your order')
            },


            () => {

              commit('setCheckoutStatus', 'Please enter payment details') //third arg - callback runs on failure
            }
          )
        }

        // addToCart (context, product) {
        //   if (product.inventory > 0) {
        //     context.commit('pushProductToCart', product)
        //   } else {
        //     //show out of stock message
        //   }
        // }
    },

    mutations: { // responsible for setting or changing the state  ---- should be as simple as possible --- only responsible to updating just a piece of the state
        // 'state' is automatically passed by vuex as the first param in 'every' mutation, we can pass an additional parameter when calling a mutation that will be the payload in our example the payload is the products
        // alter state
        setProducts(state, products) {
            // update products

            state.products = products
        },

        // const cartItem = {id: 123, quantity:2} if an action passes a cartItem with an id and a quantity property, we can push it directly to the cart
        //
        // pushProductToCart (state, cartItem){
        //   state.cart.push(cartItem)
        pushProductToCart (state, productId){
          state.cart.push({
            id: productId, quantity: 1
          })

        },


        incrementItemQuantity (state, cartItem) {
          cartItem.quantity++
        },

        decrementProductInventory (state, product){
          product.inventory--
        },

        setCheckoutStatus (state, status){
          state.checkoutStatus = status
        },

        emptyCart (state) {
          state.cart = [] // does not require any params - since we are just resetting the cart by setting state.cart to an empty array
        }
    }
})
