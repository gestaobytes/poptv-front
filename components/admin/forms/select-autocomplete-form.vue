<template>
  <v-autocomplete
    v-bind:value="value"
    @input="$emit('input', $event)"
    @click:append="$emit('clickAppend', $event)"
    append-icon="mdi-plus-circle" 
    :items="itemsData"
    :label="label"
    required
    color="amber lighten-1"
  />
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["label", "value", "itemsData","clickAppend"],
  computed: {
    defineRequired: function () {
      return this.required || "false";
    },
  },
  name: "SelectAutocompleteForm",
};
</script>