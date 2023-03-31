import { createStore } from 'vuex'
import { getProducts, getCategories } from '../tools/api.js'
export default createStore({
  state: {
    products: [],
    categories: [],
    categorySearch: ''
  },
  mutations: {
    setLocalProducts(state, payload) {
      state.products = payload
    },
    setLocalCategories(state, payload) {
      state.categories = payload
      state.categorySearch = payload[0]
    },
    setCategorySearch(state, payload) {
      state.categorySearch = payload
    }
  },
  actions: {
    localGetProducts({ commit }) {
      const products = []
      getProducts(res => {
        res.data.forEach(element => {
          products.push(element)
        });
        commit('setLocalProducts', products)
      })
    },
    localGetCategories({ commit }) {
      const categories = []
      getCategories(res => {
        res.data.forEach(element => {
          categories.push(element)
        });
        commit('setLocalCategories', categories)
      })
    },
    setCategorySearch({ commit }, category) {
      commit('setCategorySearch', category)
    }
  },
  modules: {
  }
})
