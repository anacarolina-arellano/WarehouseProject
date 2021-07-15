/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import Customer from '@/routes/Customer.vue'
import InventoryManager from '@/routes/InventoryManager.vue'
import Sales from '@/routes/Sales.vue'
import ShippingPicker from '@/routes/ShippingPicker.vue'
import ShoppingCart from '@/routes/ShoppingCart.vue'


export default new Router({
    routes: [
        { path:"/",      name:"Home",  component: Home, props: { name: "Warehouse"} },
        { path:"/customer", name:"Customer", component: Customer },
        { path:"/inventorymanager", name:"Inventory Manager", component: InventoryManager },
        { path:"/sales", name:"Sales", component: Sales },
        { path:"/shippingpicker", name:"Shipping Picker", component: ShippingPicker },
        { path:"/shoppingcart", name:"Shopping Cart", component: ShoppingCart }
    ]
});