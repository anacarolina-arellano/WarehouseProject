//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of form to add the information of a product
<template>
  <div class="text-center">
    <h3>Product</h3>
      <form>
        <v-text-field
          v-model="id"
          label="id"
          required
        ></v-text-field>
        <v-text-field
          v-model="nameProduct"
          label="Item's Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="description"
          label="Description"
          required
        ></v-text-field>
        <v-text-field
          v-model="inventory"
          label="Quantity"
          required
        ></v-text-field>
        <v-text-field
          v-model="category"
          label="Category"
          required
        ></v-text-field>
        <v-text-field
          v-model="wholesalePrice"
          label="Wholesale Price"
          required
        ></v-text-field>
        <v-text-field
          v-model="price"
          label="Retail Price"
          required
        ></v-text-field>
        <v-text-field
          v-model="imageName"
          label="Image Name"
          required
        ></v-text-field>
        <v-row>
          <v-btn  class="mr-4 lastBtn" @click="submit"> Register Incoming Shipment </v-btn>
        </v-row>
      </form>
  </div>
</template>
<script>
    import Controller from '@/mixins/controller'
    import { required} from 'vee-validate/dist/rules'
    class ProductInfo extends Controller {

        constructor( name, subComponentList = []) {
          super( name, subComponentList )
          this.vm = {
            id: "0",
            nameProduct: '',
            inventory: '',
            category: '',
            description: '',
            wholesalePrice: '',
            price: '',
            imageName: '',
          };
        }
        submit () {
          const newProduct = { 
            'id': this.id,
            'nameProduct': this.nameProduct,
            'price': this.price,
            'inventory': this.inventory ,
            'category': this.category,
            'description': this.description,
            'imageName': this.imageName,
          }
          this.$store.dispatch("addProduct", newProduct);
          alert("The product has been saved, you can see it in the customers page")
          this.clear()
        }
        clear () {
          this.id = "0"
          this.productName = ''
          this.inventory = 0
          this.category = ''
          this.description = ''
          this.wholesalePrice= 0
          this.price = 0
          this.itemsName = ''
          this.imageName = ''
        }
    } export default new ProductInfo('ProductInfo');
</script>
<style scoped>

    h3{
      text-align: left;
      font-size: 22px;
      margin-top: 25px;
      font-weight: bold;
    }

    .my-row{
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .lastBtn{
      margin-top: 40px;
      margin-bottom: 50px;
    }
</style>