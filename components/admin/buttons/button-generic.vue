<template>
  <v-btn
    class="my-1 pa-n7 mr-2"
    color="green"
    fab
    x-small
    outlined
    dark
    @click="$emit('actionClick')"
    v-if="!$vuetify.breakpoint.xs"
    :icon="iconButton"
  >
    <v-icon class="my-n3 pa-n7">{{iconButton}}</v-icon>
  </v-btn>
  <v-btn class="my-1 mr-2 pa-n7" color="green" x-small block outlined dark @click="$emit('actionClick')" :title="titleButton" v-else>{{titleButton}}</v-btn>
</template>

<script>
export default {
  props: ["iconButton","titleButton"],
  name: "ButtonGeneric",
};
</script>
