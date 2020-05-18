<template>
  <div class="main-wrap">

    <h1>SHOP NOW</h1>

    <larry v-if="loading"/>

    <ul v-else class="content">

      <li v-for="product in products">

        <h2>{{ product.title }}</h2>
        <h3>R {{ product.price | currency }}</h3>



        <h4>We only have {{ product.inventory }} Items left</h4>

         <button @click="addProductToCart(product)">Add To Cart</button>
      </li>

    </ul>

    <div class="header">
       <router-link to="/cart"><button >Cart</button></router-link>
    </div>


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
            return this.$store.getters.availableProducts
          },

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

 .main-wrap {
   width: 100%;
 }

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

.header {
  background-color: rgba(224, 223, 224, 0.2);
  position: fixed;
  display: absolute;
bottom: 0;
  width: 80%;
  height: 30px;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  z-index: 9;

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
  z-index: 10;
}

button:hover{
  background: #3514EB;
box-shadow: inset 20px 20px 60px #2d11c8,
            inset -20px -20px 60px #3d17ff;
transition: all ease 1s;
}

</style>
