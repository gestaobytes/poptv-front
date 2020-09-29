<template>
  <v-simple-table class="elevation-3" dense>
    <thead>
      <th v-for="head in headTH" :key="head">
        <h3 class="cyan--text">{{head}}</h3>
      </th>
      <th></th>
    </thead>
    <tbody>
      <slot name="registers-table"></slot>
    </tbody>
  </v-simple-table>
</template>
<script>
export default {
  props: ["headTH"],
  name: "CustomTable"
};
</script>