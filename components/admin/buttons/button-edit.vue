<template>
  <v-btn class="my-1 mr-2 pa-n7" color="cyan" fab x-small outlined dark @click="$emit('save')" v-if="!$vuetify.breakpoint.xs">
    <v-icon class="my-n3 pa-n7" x-small>mdi-pencil</v-icon>
  </v-btn>
  <v-btn class="my-1 mr-2 pa-n7" color="blue" x-small outlined block dark @click="$emit('save')" v-else>
    EDITAR
  </v-btn>
</template>

<script>
export default {
  name: "ButtonEdit"
};
</script>
