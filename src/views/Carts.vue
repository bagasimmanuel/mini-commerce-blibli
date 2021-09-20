<template>
  <div class="about">
    <div class="product-wrapper">
        <table>
          <tbody>
            <tr class="row" v-for="(cartItem,id) in carts" :key="id">
              <td>
                <img :src="cartItem.image">
              </td>
              <td>
                <p> {{cartItem.title}} </p>
              </td>
              <td>
                <h5> {{cartItem.price}} </h5>
              </td>
              <td>
                  <div @click="hapus(id)">hapus</div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr >
              <td colspan="4">
                <button @click="checkout()">Checkout</button>
              </td>
            </tr>
          </tfoot>
        </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
$orange: #f37021;
$white: #fff;

// layout
.product-wrapper {
  margin: 0 auto;
  padding: 1em;
  width: 75%;

  table {
    margin: 0 auto;
    width: 70%;

    .row {
      border-bottom: #ccc 1px;
    }

    button {
      padding: 1em;
      background: $orange;
      color: $white;
      border: none;
      font-size: 1em;
      font-weight: bold;
      width: 100px;
      cursor: pointer;
      float: right;
    }
  }

  
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Cart',
  computed : {
    ...mapGetters(['carts'])
  },
  created(){
    this.getCart()
  },
  methods: {
    ...mapActions([
      "getCart",
      "removeItem"
    ]),
    checkout() {
      return this.$router.push('/checkout')
    },
    hapus(id){
      this.removeItem(id);
    }
  }
}
</script>
