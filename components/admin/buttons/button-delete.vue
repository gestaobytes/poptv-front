<template>
  <v-btn class="my-1 mr-2 pa-n5" color="deep-orange darken-2" fab x-small outlined dark @click="$emit('delete')" v-if="!$vuetify.breakpoint.xs">
    <v-icon class="my-n3 pa-n5" x-small>mdi-delete</v-icon>
  </v-btn>
  <v-btn class="my-1 mr-2 pa-n5" color="deep-orange darken-2" x-small outlined dark @click="$emit('delete')" v-else>EXCLUIR</v-btn>
</template>

<script>
export default {
  name: "ButtonDelete",
};
</script>
