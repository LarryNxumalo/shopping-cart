<template>
  <div >

    <h1>Cart</h1>

    <larry     v-if="loading"/>

    <ul v-else class="content">

      <li v-for="product in products">

        <h2>{{ product.title }}</h2>
        <h3>R {{ product.price | currency }}</h3>
        <h3> {{ product.quantity }}</h3>

      </li>

    </ul>

    <div class="total">TOTAL {{ total | currency }}</div>
    <button @click="$store.dispatch('checkout')">CHECKOUT</button> <!--We can create a method for this or trigger the action directly from our template using $store.dispatch('nameOfAction')-->
    <p v-if="$store.state.checkoutStatus">{{ $store.state.checkoutStatus}}</p> <!--instead of creating a computed property we can access the checkout status directly from store -->

  </div>
</template>

<script>

import Larry from './Larry'


export default {

  components: {
      Larry
  },

      data() {
        return {
          loading: false
        }
      },

       computed: {
          products() {
            return this.$store.getters.cartProducts
          },
          total() {
            return this.$store.getters.cartTotal
          }
       },

       methods: {

          addProductToCart(product) {
            this.$store.dispatch('addProductToCart', product)
          }
       },

       created() {
            this.loading = true //when instance created is fired make this.loading true
            this.$store.dispatch('fetchProducts' ) // then once products are loaded
              .then(()=> this.loading = false) // loaded = false
       },


}
</script>

<style scoped>


.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background: #3B1CFA;
  margin: auto;
  widows: 100%;
  height: 100%;
}

h1 {
 font-weight: bold;
 text-transform: uppercase;
 color: #fff;
  font-size: 50px;
 -webkit-text-fill-color: transparent; -webkit-text-stroke:1.5px #fff;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  /* width:1200px ;
  height: 400px; */

}

li {
  height: 200px;
  width: 250px;
  padding: 10px;

  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-size: 11px;
  color: #E0DFE0;
  background-color: #3514EB;
  margin-right: 50px;
  box-shadow:   20px 20px 60px #2d11c8,
             -20px -20px 60px #3d17ff;
  transition: all ease 1s;


}

li:hover {
  background: #3514EB;
box-shadow: inset 20px 20px 60px #2d11c8,
            inset -20px -20px 60px #3d17ff;
transition: all ease 1s;

}

li:last-of-type {
  margin-right: none;
}
h2{
  font-size: 15px;
  -webkit-text-fill-color: transparent; -webkit-text-stroke:.7px #fff;

}
h4 { font-size: 8px;}

p {
  color:#fff;
}

button {
  margin: auto;
  width: 200px;
  height: 30px;
  border-radius:27px;
  border: none;
  background: transparent;
  color: #fff;
  outline: none;
  box-shadow:   20px 20px 60px #2d11c8,
             -20px -20px 60px #3d17ff;
  transition: all ease 1s;
}
.total {
  color: #fff;
  font-size: 20px;
}

button:hover{
  background: #3514EB;
box-shadow: inset 20px 20px 60px #2d11c8,
            inset -20px -20px 60px #3d17ff;
transition: all ease 1s;
}

</style>
