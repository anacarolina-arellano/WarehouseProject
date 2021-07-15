//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of the cart button
<template>
<!-- <router-link :to="{  }">{{ name }}</router-link>-->
    <router-link :to="{name}">
        <v-btn class="my-cart-button">
            <v-icon
            dark
            left
            >
            mdi-arrow-left
            </v-icon>My Cart
        </v-btn>
    </router-link>
    
</template>
<script>

    import Controller from '@/mixins/controller'
    
    class MyCartController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Shopping Cart'
            }
        }
    }

    export default new MyCartController('CartButton');

</script>
<style scoped>
.my-cart-button{
    width: 100%;
    display: inline-block;
}
</style>