//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of the auto complete that gives the options 'in person' and 'by phone'
//used in thee sales page
<template>
  <v-card>
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col cols="12">
          <v-autocomplete
            v-model="value"
            :items="items"
            dense
            filled
            label="Method of order"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: ['In Person', 'By Phone'],
      value: 'In Person',
    }),
  }
</script>