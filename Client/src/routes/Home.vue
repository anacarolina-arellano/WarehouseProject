//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of the main page
<template>

    <section class="home-container">
        <div class="home">
            <h2>Welcome to the {{ name }}</h2>
            <h2>Please select a role: </h2>
            <!--Display available roles-->
            <roles name="Customer" class="roles"> </roles>
            <roles name="Inventory Manager" class="roles"> </roles>
            <roles name="Sales" class="roles"> </roles>
            <roles name="Shipping Picker" class="roles"> </roles>
        </div>
    </section>

</template>
<script>

    import Controller from '@/mixins/controller'
    import roles from '../components/ChooseRole'
    import { mapState, mapGetters, mapActions } from "vuex";


    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.props = {
                name: String,
            }
            this.components ={
                //include component
                roles
            }
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
            this.methods = {
                ...mapActions({
                    fetchProducts: "fetchProducts",
                }),
            };            
        }
        onCreated() {
            this.loading = true;
            this.fetchProducts().then(() => (this.loading = false));
        }
    }

    export default new HomeController('pgHome');

</script>
<style scoped>
    /* Local styles for this template */
    .home-container {
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        width: 100%;
    }

    .home {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .roles{
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>
