<template>
  <div style="width: 100%">
    <!-- cabeçalho com titulo e pesquisa -->
    <title-page-search :titlePage="titlePage" @clickSubmit="submitFS()" nameFS="q" />
    <button-add @add="reset(), dialog = !dialog" />

    <!-- exibição dos dados em tabela -->
    <custom-table :headTH="tableHead" :registers="registersOfTable">
      <tr v-for="data in registersOfTable" :key="data.id" slot="registers-table">
        <td width="200px">{{ data.title }}</td>
        <td width="120px" class="text-right">
          <button-delete @delete="remove(data)" />
          <br v-if="$vuetify.breakpoint.xs" />
          <button-edit @save="loadRegisterSelect(data),dialog = !dialog" />
        </td>
      </tr>
    </custom-table>

    <!-- formulário com os campos de cadastro -->
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent>
        <modal-light :title="titleModal" @close="dialog = false" @save="save">
          <v-row slot="contentForm">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <text-field-form label="Nome*" v-model="dataOfTable.title" />
            </v-col>
          </v-row>
        </modal-light>
      </v-dialog>
    </v-layout>

    <div class="text-xs-center mt-5">
      <v-pagination
        color="cyan"
        v-if="paginate > 1"
        v-model="page"
        :length="paginate"
        :total-visible="7"
        circle
      ></v-pagination>
    </div>

  </div>
</template>

<script>
import crud from "@/components/admin/crud";

import ButtonAdd from "@/components/admin/buttons/button-add.vue";
import ButtonEdit from "@/components/admin/buttons/button-edit.vue";
import ButtonDelete from "@/components/admin/buttons/button-delete.vue";
import CustomTable from "@/components/admin/views/custom-table.vue";

import ModalLight from "@/components/admin/forms/modal-light.vue";
import TextFieldForm from "@/components/admin/forms/text-field-form.vue";
import TitlePageSearch from "@/components/admin/views/title-page-search.vue";

export default {
  mixins: [crud],
  layout:  "restrict",

  components: {
    "button-add": ButtonAdd,
    "button-edit": ButtonEdit,
    "button-delete": ButtonDelete,
    "modal-light": ModalLight,
    "text-field-form": TextFieldForm,
    // "select-autocomplete-form": SelectAutocompleteForm,
    "custom-table": CustomTable,
    "title-page-search": TitlePageSearch,
  },

  data: function () {
    return {
      pageApi: "positions",
      titleModal: "CADASTRAR POSIÇÕES",
      titlePage: "POSIÇÕES",
      tableHead: ["NOME"],
    };
  },
};
</script>

<style>
</style>
