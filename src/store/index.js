import { createStore } from 'vuex'
import {getProducts, getCategories} from '../tools/api.js'
export default createStore({
  state: {
    products:[],
    categories:[]
  },
  mutations: {
    setLocalProducts(state, payload){
      console.log(payload)
      state.products = payload
    }
  },
  actions: {
    localGetProducts({commit}){
      const products = []
      getProducts(res=>{
        res.data.forEach(element => {
        products.push(element)
        });
        commit('setLocalProducts',products)
      })
      
    }
  },
  modules: {
  }
})
