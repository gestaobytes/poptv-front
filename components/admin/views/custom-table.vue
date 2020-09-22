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

 <!-- 
  props: ["widthTdButtonsController", "headTH", "registers"],
 <v-simple-table class="elevation-3" dense>
    <thead>
        <th v-for="head in headTH" :key="head" :width="head[1]"><h3 class="cyan--text">{{head[0]}}</h3></th>
        <th :width="widthTdButtonsController"></th>
    </thead>
    <tbody>
      <tr v-for="data in registers" :key="data.id">
        <td v-for="i in data" :key="i.id" v-html="i"></td> 
        <td class="text-right">
          <slot name="buttonsController"></slot>
        </td>
      </tr>
    </tbody>
  </v-simple-table>-->