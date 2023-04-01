import { createStore } from 'vuex'
import { getProducts, getCategories } from '../tools/api.js'
export default createStore({
  state: {
    products: [],
    categories: [],
    categorySearch: '',
  },
  mutations: {
    setLocalProducts(state, payload) {
      state.products = payload
    },
    setLocalCategories(state, payload) {
      state.categories = payload

    },
    setCategorySearch(state, payload) {
      state.categorySearch = payload
    },
  },
  actions: {
    localGetProducts({ commit }, onSuccess) {
      const products = []
      getProducts(res => {
        res.data.forEach(element => {
          products.push(element)
        });
        commit('setLocalProducts', products)
        localStorage.setItem('cachedProducts', JSON.stringify(products))
        onSuccess(false)
      })

    },
    localGetCategories({ commit }) {
      const categories = []
      getCategories(res => {
        res.data.forEach(element => {
          categories.push(element)
        });
        commit('setLocalCategories', categories)
        localStorage.setItem('cachedCategories', JSON.stringify(categories))
      })
    },
    setCategorySearch({ commit }, category) {
      commit('setCategorySearch', category)
    },
    getCachedData({ commit }, onSuccess) {
      const products = JSON.parse(localStorage.getItem('cachedProducts')) || [];
      const categories = JSON.parse(localStorage.getItem('cachedCategories')) || [];
      console.log("cacheaaado")
      commit('setLocalProducts', products)
      commit('setLocalCategories', categories)
      onSuccess(false)
    }
  },
  modules: {
  }
})
