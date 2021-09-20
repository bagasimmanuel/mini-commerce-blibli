<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="product-wrapper">

      <router-link name="product-name" :to='`/product/${prod.id}`' class="product-block" v-for="(prod, idx) in products" :key="idx">
        <div class="product-image">
          <img :src="prod.image">
        </div>
        <div class="product-info">
          <h4>{{ prod.title }}</h4>
          <span>{{ prod.price }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'

export default {
  name: 'ProductList',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['products']),
  },
  created() {
    this.getProducts()
  },
  methods: {
    ...mapActions([
      'getProducts'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/_variable.scss';
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.product-wrapper{
  display : flex;
  margin: 2em;
  padding: 1em;
  flex-wrap: wrap;

  a{
    color:$blue;
    text-decoration: none;
  }
  .product-block{
    padding:1em;
  }

}
</style>
