<template>
  <div style="width: 100%">
    <!-- cabeçalho com titulo e pesquisa -->
    <title-page-search :titlePage="titlePage" @clickSubmit="submitFS()" nameFS="q" />
    <button-add @add="reset(), dialog = !dialog"></button-add>

    <!-- exibição dos dados em tabela -->
    <custom-table :headTH="tableHead" :registers="registersOfTable">
      <tr v-for="data in registersOfTable" :key="data.id" slot="registers-table">
        <td width="40px">
          <div class="img-responsive" v-html="data.emoction"></div>
        </td>
        <td>{{ data.slug }}</td>
        <td width="120px" class="text-right">
          <button-delete @delete="remove(data)" />
          <button-edit @save="loadRegisterSelect(data),dialog = !dialog" />
        </td>
      </tr>
    </custom-table>

    <!-- formulário com os campos de cadastro -->
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent>
        <modal-light :title="titleModal" @close="dialog = false" @save="save">
          <v-row slot="contentForm">
            <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
              <text-field-form name="slug" label="Nome*" v-model="dataOfTable.slug" />
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
              <select-field-form label="Status*" v-model="dataOfTable.status" :itemsData="status" />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <vue-editor :editorToolbar="customToolbar" v-model="dataOfTable.emoction" required></vue-editor>
            </v-col>
          </v-row>
        </modal-light>
      </v-dialog>
    </v-layout>

    <div class="text-xs-center mt-5" v-if="paginate > 1">
      <v-pagination color="cyan" v-model="page" :length="paginate" :total-visible="7" circle></v-pagination>
    </div>

  </div>
</template>

<script>
import crud from "@/components/admin/crud";
import ButtonAdd from "@/components/admin/buttons/button-add.vue";
import ButtonEdit from "@/components/admin/buttons/button-edit.vue";
import ButtonDelete from "@/components/admin/buttons/button-delete.vue";
import ModalLight from "@/components/admin/forms/modal-light.vue";
import SelectFieldForm from "@/components/admin/forms/select-field-form.vue";
import TextFieldForm from "@/components/admin/forms/text-field-form.vue";
import CustomTable from "@/components/admin/views/custom-table.vue";
import TitlePageSearch from "@/components/admin/views/title-page-search.vue";

import { VueEditor } from "vue2-editor";

export default {
  mixins: [crud],
  layout: "restrict",

  components: {
    VueEditor,
    "button-add": ButtonAdd,
    "button-edit": ButtonEdit,
    "button-delete": ButtonDelete,
    "modal-light": ModalLight,
    "text-field-form": TextFieldForm,
    "select-field-form": SelectFieldForm,
    "custom-table": CustomTable,
    "title-page-search": TitlePageSearch,
  },

  data: function () {
    return {
      pageApi: "reactions",
      titleModal: "CADASTRAR REAÇÕES",
      titlePage: "REAÇÕES",
      status: [
        { value: "ON", text: "ON" },
        { value: "OFF", text: "OFF" },
      ],
      tableHead: ["", "DESCRIÇÃO"],
      customToolbar: ["image"],
    };
  },
};
</script>

<style>
</style>
