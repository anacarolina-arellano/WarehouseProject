//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of the cards that hold the information of each product in  the customer page
<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12 my-card"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      v-bind:src="require(`../assets/${imageName}`)"
    ></v-img>

    <v-card-title>{{nameProduct}}</v-card-title>

    <v-card-text class="my-text">
      
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          ${{price}}
        </div>
      </v-row>

      <div class="my-3 subtitle-1">
          {{category}}
      </div>

      <div>{{description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="my-actions">
      <v-btn
        color="deep-purple lighten-2"
        class="my-button"
        text
        @click="addProductToCart(id)"
      >
        {{nameProduct}} <br/> ${{price}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
    import Controller from '@/mixins/controller'
    import { mapState, mapGetters, mapActions } from "vuex";
    class Card extends Controller {

      constructor( name, subComponentList = []) {
        super( name, subComponentList )
        this.props = {
          //needed props per card
          nameProduct: String,
          price: Number,
          category: String,
          description: String,
          imageName: String,
          id: Number
        }
        this.methods = {
          addProductToCart(product) {
            this.$store.dispatch("addProductToCart", product);
          },
        };
        this.computed= {
          ...mapGetters({
            productIsInStock: 'productIsInStock',
          }),
        };
      }
      onCreated() {
        //console.log(this.props.nameProduct)
      } 
    }

    export default new Card('myCard');
</script>
<style scoped>
.my-actions{
    justify-content: center;
}
.my-button{
    background-color: #FFBD59;
}

.my-text{
  padding-bottom: 0%;
}
.my-card{
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
}

</style>