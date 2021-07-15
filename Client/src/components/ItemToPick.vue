//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of the card that contains all the information of each product that needs to be picked
<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-container class="my-container">
      <v-row dense>
        <v-col cols="12">
          <v-card
            class="my-card"
          >
            <v-card-title class="text-h5">
                Item's name: {{itemsName}}
            </v-card-title>

            <v-card-subtitle>
                Quantity: {{quantity}}
            </v-card-subtitle>
            <v-card-subtitle>
                Location: {{itemsLocation}}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn>
                Pick
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
    import Controller from '@/mixins/controller'

    class ItemToPick extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.props = {
                itemsName : String,
                quantity: String,
                itemsLocation: String,
            }
        }
    }

    export default new ItemToPick('itemToPick');
</script>
<style scoped>
.my-card{
    background-color: #ffd79b;
}
.my-container{
    background-color: whitesmoke;
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>