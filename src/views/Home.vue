<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ProductList msg="Eyo yo ma man"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
