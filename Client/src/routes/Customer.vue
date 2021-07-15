//Copyright (C) 2021 Ana Carolina Arellano Alvarez 

//template of the customer
page
<template>
  <div>
    <v-row>
      <v-col cols="10">
        <!--Use component of searbar-->
        <searchbar></searchbar>
      </v-col>
      <v-col cols="2">
        <!--Use component of cart button-->
        <cartButton></cartButton>
      </v-col>
    </v-row>

    <v-row class="my-filter">
      <!--Use component of filter-->
      <filterOptions></filterOptions>
    </v-row>
    <v-row>
      <!--Use component of cards for procuts-->
      <myCard
        v-for="product in products"
        :key="product.id"
        :nameProduct="product.nameProduct"
        :price="product.price"
        :category="product.category"
        :description="product.description"
        :imageName="product.imageName"
        :id="product.id"
      >
      </myCard>
    </v-row>
  </div>
</template>
<script>
import Controller from "@/mixins/controller";
import searchbar from "../components/Searchbar";
import cartButton from "../components/MyCartButton";
import myCard from "../components/Card";
import filterOptions from "../components/FilterOptions";
import { mapState, mapGetters, mapActions } from "vuex";

class Customer extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      loading: false,
    };
    this.components = {
      //include components to be used
      searchbar,
      cartButton,
      myCard,
      filterOptions,
    };

    //use of Vuex to get informatiion from the store 
    this.computed = {
      ...mapGetters({
        productIsInStock: "productIsInStock",
      }),
      ...mapState({
        
        products: (state) => state.products,
        
      }),

      productIsInStock() {
        return this.$store.getters.productIsInStock;
      },
    };
  }

  onCreated() {
    this.loading = true;
    this.fetchProducts().then(() => (this.loading = false));
  }
}

export default new Customer("Customer");
</script>

<style scoped>
.my-filter {
  max-height: fit-content;
  margin-bottom: 15px;
  width: 80%;
  margin-left: 5px;
}
</style>
