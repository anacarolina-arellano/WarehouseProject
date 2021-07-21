//Copyright (c) 2021. Ana Carolina Arellano Alvarez
require("firebase/firestore");
import Vuex, { Store } from "vuex";
import Vue from "vue";
import shop from "./api/shop";
//import { _products } from "./api/shop";
import Axios from "axios";
import Firebase from "firebase";
import VueFire from "vuefire";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCax50cGuVzw79GIAUG8D-05iu5Vui4Po4",
  authDomain: "warehouseproject-98791.firebaseapp.com",
  projectId: "warehouseproject-98791",
  storageBucket: "warehouseproject-98791.appspot.com",
  messagingSenderId: "645551647408",
  appId: "1:645551647408:web:0599ee2e98506d6fa76975",
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
const db = Firebase.firestore();
Vue.use(Vuex, Axios, VueFire, Firebase);
Axios.defaults.baseURL = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    checkoutStatus: null,
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
      db.collection("shop")
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            let currentID = doc.id;
            let appObj = { ...doc.data(), ["id"]: currentID };
            commit("setProducts", appObj)
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
    //call muttaion of new sale
    submitSalesForm({ state, commit }, newSale) {
      commit("addNewSale", newSale);
    },
  },

  //mutations
  mutations: {
    //add new element to products
    addProduct(state, product) {
      shop.saveProducts([...state.products, product], () => {
        state.products.push(product);
      });
    },
    setProducts(state, product) {
      state.products.push(product)
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
      shop.saveProducts(state.products);
    },

    incrementProductInventory(state, productId) {
      const product = state.products.find((product) => product.id == productId);
      product.inventory++;
      shop.saveProducts(state.products);
    },

    setCheckoutStatus(state, status) {
      state.checkStatus = status;
    },

    emptyCart(state) {
      state.cart = [];
    },
    //send to firebase
    addNewSale(state, newSale) {
      //Axios.post("http://localhost:4001/sale", newSale).then((response) => {
      //alert("Data has been receives successfully");
      //});
    },
  },
});
