<template>
  <v-text-field
    v-bind:value="value"
    @input="$emit('input', $event)"
    :hint="hint"
    :type="defineType"
    :label="label"
    color="amber lighten-1"
    persistent-hint
    :counter="counter"
    :rules="rules"
  />
  <!-- <v-text-field
    :min="min"
    :max="max"
    :hint="hint"
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
  props: ["type", "name", "label", "hint", "required", "min", "max", "value","counter","rules"],
  computed: {
    defineType: function () {
      return this.type || "text";
    },
    defineRequired: function () {
      return this.required || "false";
    },
    defineCounter: function () {
      return this.counter || "false";
    },
    defineRules: function () {
      return this.rules || "";
    },
  },
  name: "TextFieldForm",
};
</script>