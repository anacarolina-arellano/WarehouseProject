//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of the component that will help filtering the products
<template>
  <v-card class="my-card">
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col>
          <v-select
            v-model="value"
            :items="items"
            attach
            chips
            label="Filter"
            multiple
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
    import Controller from '@/mixins/controller'

    class FilterOptions extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
              items : ['Shoes', 'Tops', 'Bottoms', 'Swimwear'],
              value :['Shoes', 'Tops', 'Bottoms', 'Swimwear']
            }
        }
        //TODO: Actually filter products
    }

    export default new FilterOptions('FilterOptions');
</script>
<style scoped>

</style>