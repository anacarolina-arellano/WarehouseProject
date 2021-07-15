//Copyright (C) 2021 Ana Carolina Arellano Alvarez //template of the page
<template>
  <section class="sales-container">
    <div class="sales-form">
      <h2>Sales Form</h2>
        <form>
          <v-text-field
            v-model="employeeName"
            label="Employee's Name"
          ></v-text-field>
          <autocomplete></autocomplete>

          <v-text-field
            v-model="clientName"
            label="Client's Name"
          ></v-text-field>
          <v-text-field
            v-model="address"
            label="Address"
          ></v-text-field>
          <v-text-field
            v-model="phoneNumber"
            label="Phone Number"
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="E-mail"
          ></v-text-field>
          <h3>Products to be picked</h3>
          <v-row class="my-row">
            <v-text-field
              v-model="productId"
              class = "product"
              label="Product Id"
            ></v-text-field>
            <v-text-field
              v-model="quantity"
              class = "product"
              label="Quantity"
            ></v-text-field>
          </v-row>
          <v-row class="my-row">
            <v-text-field
              v-model="productId2"
              class = "product"
              label="Product Id"
            ></v-text-field>
            <v-text-field
              v-model="quantity2"
              class = "product"
              label="Quantity"
            ></v-text-field>
          </v-row>
          <v-row class="my-row">
            <v-text-field
              v-model="productId3"
              class = "product"
              label="Product Id"
            ></v-text-field>
            <v-text-field
              v-model="quantity3"
              class = "product"
              label="Quantity"
            ></v-text-field>
          </v-row>
          <v-btn class="mr-4 my-btn" @click="submit">
            Generate Fulfillment Order
          </v-btn>
          <v-btn @click="clear" class="my-btn"> clear </v-btn>
        </form>
    </div>
  </section>
</template>
<script>
import Controller from "@/mixins/controller";
import autocomplete from "../components/Autocomplete";

class Sales extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      employeeName: "",
      clientName: "",
      address: "",
      phoneNumber: "",
      email: "",
      productId: 0,
      quantity: 0,
      productId2: 0,
      quantity2: 0,
      productId3: 0,
      quantity3: 0,
    };
    this.components = {
      autocomplete,
    };
  }

  submit() {
    const newSale = { 
      'employeeName': this.employeeName,
      'clientName': this.clientName,
      'address': this.address,
      'phoneNumber': this.phoneNumber ,
      'email': this.email,
      'productId': this.productId,
      'quantity': this.quantity,
      'productId2': this.productId2,
      'quantity2': this.quantity2,
      'productId3': this.productId3,
      'quantity3': this.quantity2,
    }
    this.$store.dispatch("submitSalesForm", newSale);
    alert("The product has been saved, you can see it in the customers page")
    this.clear()
  }
  clear() {
    this.employeeName = ""
    this.clientName =  ""
    this.address = ""
    this.phoneNumber = ""
    this.email = ""
    this.productId = 0
    this.quantity = 0
    this.productId2 = 0
    this.quantity2 = 0
    this.productId3 = 0
    this.quantity3 = 0
  }
}
export default new Sales("Sales");
</script>
<style scoped>
h2 {
  text-align: center;
}
h3 {
  text-align: left;
  font-size: 22px;
  margin-top: 25px;
  font-weight: bold;
}
.sales-container {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.my-btn {
  margin-top: 40px;
  margin-bottom: 50px;
}
.my-row{
  display: inline;
  flex-direction: row;
}
.product{
  display: inline-block;
  width:40%;
  margin-left: 10px;
  margin-right:10px;
}
</style>
