import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import routeMock from '../api-mock'

// axios mock method
const mock = new MockAdapter(axios)

routeMock.forEach(res => {
  mock['on'+ res.method](res.url).reply(res.status, res.response.data)
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product:{},
    products:[],
    carts:[],
    shipping:{},
    payment: {}
  },
  mutations: {
    setProduct (state, value) {
      state.product = value
    },
    setProducts (state, value) {
      state.products = value
    },
    setCart (state, value) {
      state.carts = value
    },
    removeItem (state, index) {
      console.log(index)
      state.carts = state.carts.filter((object, idx) => idx !== index);
    }
  },
  actions: {
    getProducts ({ commit }) {
      axios.get("/api/products").then(function (response) {
        commit('setProducts', response.data)
      });
    },
    getProduct ({ commit }, param) {
      axios.get("/api/products/"+ param.id).then(function (response) {
        commit('setProduct', response.data)
      });
    },
    getCart ({ commit }) {
      axios.get("/api/cart").then(response => {
        commit('setCart', response.data)
      })
    },
    removeItem ({ commit }, index) {
      commit('removeItem', index)
    }
  },
  getters: {
    products: state => state.products,
    carts: state => state.carts
  }

})