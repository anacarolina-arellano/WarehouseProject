<!--
VFS VUE Single File Component

<pg-header></pg-header>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc, Ana Carolina Arellano. All Rights Reserved.
-->
<template>

    <header class="my-header">
            <div class="logo " @click="goHome( event )"></div>
            
    </header>

</template>
<script>
    import Controller from '@/mixins/controller'

    class HeaderController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
        }

        goHome( event ) {
            // do some router magic here to actualy change the URL
            location.href = "./index.html";
        }
    }

    export default new HeaderController('myHeader');
</script>
<style>
    .title h1, .title h3 {
        float:right;
        margin-right: 2vw;
        text-align:right;
        width: 100%;
    }
</style>