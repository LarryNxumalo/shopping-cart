<template>
  <div id="app">

    <ProductList/>


  </div>
</template>

<script>
import ProductList from '../components/ProductList'


export default {
  name: 'app',
  components: {
    ProductList,

  }
}
</script>

<style>

html,body {
 background-color: #3B1CFA;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3B1CFA;
}
</style>
