//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of the page
<template>

    <section class="shipping-container">
        <div class="shipping">
            <h2>Shipping Picker</h2>
            <h3>Pick List</h3>
            <itemToPick
                class="my-card"
                itemsName="Dress"
                quantity ="1"
                itemsLocation="2nd shelf"
                >
            </itemToPick>
            <itemToPick
                class="my-card"
                itemsName="Dress"
                quantity ="1"
                itemsLocation="2nd shelf"
                >
            </itemToPick>
            <h3>Shipping Info</h3>
            <div class="my-row"> 
                <h4>Client's Name: </h4>
                <p> This is a placeholder</p>
            </div>
            <div class="my-row"> 
                <h4>Address: </h4>
                <p> Placeholder text #55</p>
            </div>
            <div class="my-row"> 
                <h4>Phone: </h4>
                <p> +52 4715234567</p>
            </div>
            <v-btn
            class="my-button"
            elevation="2"
            outlined
            >Ship Order</v-btn>
        </div>
    </section>

</template>
<script>
    
    import Controller from '@/mixins/controller'
    import itemToPick from "../components/ItemToPick"

    class ShippingPicker extends Controller {
        //Shipping Picker class
        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.components ={
                //uses the component ItemToPick
                itemToPick
            }
        }
    }

    export default new ShippingPicker('ShippingPicker');

</script>
<style scoped>
h2{
    text-align: center;
}
h3{
    text-align: left;
    font-weight: bold;
    margin-bottom: 20px;
}
h4{
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;

}
.shipping-container{
    width:80%;
    margin-left: auto;
    margin-right:auto;
}
.my-button{
    margin-top:15px;
    margin-bottom: 15px;
    width: 20%;
    margin-left: auto;
    margin-right:auto;
    display: block;
}
.my-card{
    color:black;
    background-color: #ffd79b;
}
.my-row{
    flex-direction: row;
    display: flex;
}
p{
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>