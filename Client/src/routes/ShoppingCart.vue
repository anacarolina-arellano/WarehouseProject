<template>
    <div>
        <h1>Shopping Cart</h1>

        <table class="my-table">
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            <tr class="products" v-for="product in products" :key="product.id">
                <td>{{product.name}}</td>
                <td class="quantity">
                    <v-btn class="inside-btn" @click="decreaseProductFromCart(product.id)">-</v-btn>
                    {{product.quantity}}
                    <v-btn class="inside-btn" @click="addProductToCart(product.id)">+</v-btn>
                </td>
                <td>{{product.price.toFixed(2)}}</td>
            </tr>
        </table>
        <p class="total">Total: {{total.toFixed(2)}}</p>
        <button class= "my-button" @click="checkout">Checkout</button>
        <p v-if="checkOutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                products: 'cartProducts',
                productIsInStock: 'productIsInStock',
                total: 'cartTotal'
            }),

            ...mapState({
                checkOutStatus: 'checkoutStatus'
            })
        },

        methods:{
            ...mapActions(['checkout']),
            addProductToCart(product) {
                this.$store.dispatch("addProductToCart", product);
            },
            decreaseProductFromCart(product){
                this.$store.dispatch("deleteProductFromCart", product);
            }
        }
    }
</script>
<style scoped>
h1{
    text-align: center;
}
.products{
    font-size: 22px;
}
.total{
    font-size: 24px;
    text-align: center;
}
.my-button{
    margin-top:15px;
    margin-bottom: 15px;
    width: 20%;
    margin-left: auto;
    margin-right:auto;
    display: block;
    border: solid black 0.5px;
    background-color: rgb(233, 231, 231);
}
.my-table{
    margin-top: 40px;
    margin-bottom: 40px;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
}
th{
    width:33%;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}
td{
    text-align: center;
    font-size: 22px;
    margin-top: 40px;
    margin-bottom: 40px;
}
.inside-btn{
    margin-left: 20px;
    margin-right: 20px;
    max-height:20%;
}
</style>