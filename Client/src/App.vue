<!--
<pg-app></pg-app>
@copyright (c) 2018. Scott Henshaw, Clinton Jay Ramonida, Ana Carolina Arellano. All Rights Reserved.
-->
<template>

    <main class="vue-main-rootcomponent">
        <!--Header component-->
        <myHeader></myHeader>
        <div class="content-wrapper">
            <!-- TODO:have this dynamically change and generate appropriate info for different sections -->
            <router-view></router-view>
            <!--Footer-->
            <v-footer
                color="primary lighten-1"
                padless
            >
                <v-col
                    class="primary lighten-2 py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>Built with love by Ana Carolina Arellano</strong>
                </v-col>
            </v-footer>
            <!--End of footer-->
        </div>
    </main>

</template>
<script>
    // typical Vue component controller defined and registered here
    import Controller from '@/mixins/controller'

    import myHeader  from '@/components/Header.vue'
    //App Controller class
    class AppController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
        }
    }

    // export a definition for this view
    export default new AppController('WarehouseApp', { myHeader});

</script>
<style>
    /**
    * CSS Styles for VFS Demo App
    *
    * @Copyright 2014-2015, Vancouver Film School, In cooperation with Kibble Games Inc.
    * @author: Scott Henshaw
    * @Contributor: Clinton Ramonida, Ana Carolina Arellano Alvarez
    */

    /* DEFAULTS */

    html {
        font-size: 100%;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: white;
        font-family: 'Maven Pro', Helvetica, sans-serif;
        overflow-y: scroll;
    }

    input[type=button] {
        background-color: black;
        color: white;
        font-family: 'Maven Pro', Helvetica, sans-serif;
        font-size: 17px;
        margin: 3px;
        padding: 3px 8px;
        border: 1px solid black;
    }

    input[type=button]:hover {
        background-color: gray;
    }

    input[type=button]:focus {
        background-color: #D10034;
        border: 1px solid black;
    }

    /* GRID FRAME/CONTAINER (PARENT) */
    .grid-frame {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(10, 1fr);
        grid-auto-rows: auto;
        grid-template-areas:
        "headbar headbar headbar headbar headbar headbar headbar headbar headbar headbar"
        "sidecontent thecontent thecontent thecontent thecontent thecontent thecontent thecontent thecontent thecontent"
        "footcontent footcontent footcontent footcontent footcontent footcontent footcontent footcontent footcontent footcontent" ;
        justify-items: start;
    }

    .grid-header {
        grid-area: headbar;
        z-index: 1000;
        width: 100vw;
        height: 120px;
    }

    .grid-nav {
        grid-area: navbar;
    }

    .grid-content {
        grid-area: thecontent;
        width: 100%;
       /* height: 82vh;*/
    }

    .grid-side {
        grid-area: sidecontent;
    }

    .grid-foot {
        grid-area: footcontent;
        width: 100vw;
        height: 100px;
    }

    /* GRID CONTAINER CHILD (CHILD BUT A CONTAINER) */
    .grid-frame-child {
        display: grid;
        background: #FFFFFF;
        grid-template-columns: repeat(15, 1fr);
        grid-template-rows: repeat(15, 1fr);
        height: 100%;
        width: 100%;
    }

    .grid-intro{
        grid-column: 2/9;
        grid-row: 2/3;
    }

    .grid-filter{
        grid-column: 9/15;
        grid-row: 2/3;
        text-align: end;
    }

    .grid-tile{
        grid-column: 2/15;
        grid-row: 3/15;
    }

    /* FLEX CONTAINER (PARENT) */
    .flexbox {
        display: flex;
        background-color: white;
        height: 100%;
    }

    /* FLEX ITEMS (CHILDREN) */
    .flexitem{
        align-self: center;
    }

    /* header */
    .header {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 4px 5px -5px #222;
        height: 100px;
    }

    .logo {
        background-image:url("./assets/mywh.png");
        background-size:100% 100%;
        height: 130px;
        width: 130px;
        margin-left: 1em;
        cursor: pointer;
    }

    .title {
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
    }

    .search-bar{
        color: white;
        margin-right: 5em;
        margin-top: 5em;
        cursor: pointer;
        visibility: hidden;
    }

    /* sidebar */
    .sidebar {
        flex-direction: column;
        background: #4c4c4c;
        box-shadow: inset -1px 0 2px 1px #222;
    }

    .side-item{
        margin-top: 2em;
        padding: 1em;
    }

    /* navigation bar */
    .menu{
        background: rgba(0, 0, 0, 0);
    }

    /* content */
    .content {
        flex-direction: row;
        flex-wrap: wrap;
        overflow-x: hidden;
        overflow-y: scroll; 
        justify-content: space-evenly;
        background: #FFFFFF;
    }
    .content-intro {
        font-weight:bold;
    }

    /* content form*/
    .edit-form {
        display: grid;
        grid-template-areas: ".form.";
        width: 65vw;
    }

    .edit-form-child {
        grid-area: form;
        overflow: scroll;
    }

    .formitems{
        margin: 15px 10px 15px 10px;
    }

    .description-box{
        margin: 40px 10px 40px 10px;
    }

    #review-button{
        width: 95%;
        margin: 10px;
    }



    /* Button Styles */
    .buttons {
        justify-content: center;
        align-items: center;
    }

    .btn{
        background-color: white;
        color: black;
        height: 40px;
        width: 80px;
        margin: 2px;
        border: 2px solid black;
    }

    .btn:hover {
        background-color: #555555;
        color: white;
    }



    /* Heading Styles */
    h1 {
        color: black;
    }

    h2 {
        color: black;
        font-family: 'Roboto', Helvetica, sans-serif;
        margin: 3px 0px 3px 0px;
    }

    h3{
        color: black;
        font-family: 'Raleway', Helvetica, sans-serif;
    }

    h4{
        color: black;
        font-family: 'Raleway', Helvetica, sans-serif;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .content-wrapper{
        padding: 10px 24px 24px;
    }
</style>
