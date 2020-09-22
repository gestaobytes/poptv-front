<template>
  <v-btn color="cyan" dark @click="$emit('add')" class="mb-3">
    ADICIONAR REGISTRO <v-icon class="ml-2">mdi-plus-circle</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ButtonAdd",
  titleModal: "NOVO REGISTRO"
};
</script>
