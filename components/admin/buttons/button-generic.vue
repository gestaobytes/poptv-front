<template>
  <v-btn
    class="my-1 pa-n5 mr-2"
    color="green"
    fab
    x-small
    outlined
    dark
    @click="$emit('actionClick')"
    v-if="!$vuetify.breakpoint.xs"
    :icon="iconButton"
  >
    <v-icon class="my-n3 pa-n5">{{iconButton}}</v-icon>
  </v-btn>
  <v-btn class="my-1 mr-2 pa-n5" color="green" x-small outlined dark @click="$emit('actionClick')" :title="titleButton" v-else>{{titleButton}}</v-btn>
</template>

<script>
export default {
  props: ["iconButton","titleButton"],
  name: "ButtonGeneric",
};
</script>
