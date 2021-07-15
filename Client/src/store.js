//Copyright (c) 2021. Ana Carolina Arellano Alvarez
import Vuex, { Store } from "vuex";
import Vue from "vue";
import shop from "./server/api/shop";
import { _products } from "./server/api/shop";
import Axios from 'axios'
import { Server } from "./server/Server"

Vue.use(Vuex, Axios);
Axios.defaults.baseURL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    checkoutStatus: null
  },

  //Getters
  getters: {
    availableProducts(state, getters) {
      return state.products.filter((product) => product.inventory > 0);
    },
    cartProducts(state) {
      return state.cart.map((cartItem) => {
        const product = state.products.find(
          (product) => product.id == cartItem.id
        );
        return {
          name: product.nameProduct,
          price: product.price,
          quantity: cartItem.quantity,
          id: product.id,
        };
      });
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    productIsInStock(state, getters) {
      return (productId) => {
        const product = state.products.find(
          (product) => product.id == productId
        );
        return product.inventory > 0;
      };
    },
  },

  //actions
  actions: {
    
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        shop.getProducts((products) => {
          commit("setProducts", products);
          resolve();
        });
      });
    },
    addProduct({ state, getters, commit }, product) {
      commit("addProduct", product);
    },
    addProductToCart({ state, getters, commit }, productId) {
      if (getters.productIsInStock(productId)) {
        const itemInCart = state.cart.find((item) => item.id === productId);

        if (!itemInCart) {
          commit("pushProductToCart", productId);
        } else {
          commit("incrementItemQuantity", itemInCart);
        }
        commit("decrementProductInventory", productId);
      }
    },
    deleteProductFromCart({ state, getters, commit }, productId) {
      commit("delProductFromCart", productId);
    },
    checkout({ state, commit }) {
      shop.buyProducts(
        state.cart,
        () => {
          commit("emptyCart");
          commit("setCheckoutStatus", "success");
        },
        () => {
          commit("setCheckoutStatus", "fail");
        }
      );
    },
    //send to server
    submitSalesForm({state, commit}, newSale){
    //  commit("addNewSale", newSale);
    }
  },

  //mutations
  mutations: {
    //add new element to products
    addProduct(state, product) {
      shop.saveProducts([...state.products, product], () => {
        state.products.push(product);
      });
    },
    setProducts(state, products) {
      state.products = products;
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1,
      });
    },
    delProductFromCart(state, productId) {
      const cartItem = state.cart.find((product) => product.id == productId);
      cartItem.quantity--;
      if (cartItem.quantity == 0) {
        state.cart = state.cart.filter((product) => product.id != productId);
      }
      this.commit("incrementProductInventory", productId);
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },

    decrementProductInventory(state, productId) {
      const product = state.products.find((product) => product.id == productId);
      product.inventory--;
      shop.saveProducts(state.products)
    },

    incrementProductInventory(state, productId) {
      const product = state.products.find((product) => product.id == productId);
      product.inventory++;
      shop.saveProducts(state.products)
    },

    setCheckoutStatus(state, status) {
      state.checkStatus = status;
    },

    emptyCart(state) {
      state.cart = [];
    },
    addNewSale(state, newSale){
      console.log(newSale)
    }
  },
});
