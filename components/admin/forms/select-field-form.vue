<template>
  <v-select
    v-bind:value="value"
    @input="$emit('input', $event)"
    :items="itemsData"
    :label="label"
    required
    color="amber lighten-1"
  />



  <!-- <v-text-field


  <v-text-field
    v-bind:value="value"
    @input="$emit('input', $event)"
    :type="defineType"
    :label="label"
    color="red"
  ></v-text-field>



    :min="min"
    :max="max"
    :hint="hint"
    persistent-hint
    mask="###.###.###-##"
    outlined
    :value="value"
    v-bind="$attrs"
    v-on:input="$emit('input', $event.target.value)"
    :name="name"
    :required="defineRequired"
  />-->
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["label", "value","itemsData"],
  computed: {
    defineRequired: function () {
      return this.required || "false";
    },
  },
  name: "SelectFieldForm",
};
</script>