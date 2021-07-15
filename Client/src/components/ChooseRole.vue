//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of the buttons that appear in the main page. 
//They direct you to the desired page 
<template>
  <div class="text-center ">
    <v-btn
      class="ma-2 myText myBorder"
      outlined
      color="indigo"
      min-width="210px"
    >
      <!-- <router-link :to="{  }">{{ name }}</router-link>-->
      <router-link :to="{ name }">{{name}}</router-link>
    </v-btn>
  </div>
</template>

<script>
    import Controller from '@/mixins/controller'

    class RoleController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.props = {
              //needed prop
              name: String
            }
            
        }
    }

    export default new RoleController('roles');

</script>

<style>
.myText{
  color:black;
}

</style>

