<template>
  <div style="width: 100%">
    <!-- cabeçalho com titulo e pesquisa -->
    <title-page-search :titlePage="titlePage" @clickSubmit="submitFS()" nameFS="q" />
    <button-add @add="reset(), dialog = !dialog" />

    <!-- exibição dos dados em tabela -->
    <custom-table :headTH="tableHead" :registers="registersOfTable">
      <tr v-for="data in registersOfTable" :key="data.id" slot="registers-table">
        <td>{{ data.title }}</td>
        <td width="120px" class="text-right">
          <button-delete @delete="remove(data)" />
          <br v-if="$vuetify.breakpoint.xs" />
          <button-edit @save="loadRegisterSelect(data),dialog = !dialog" />
        </td>
      </tr>
    </custom-table>

    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent>
        <modal-light :title="titleModal" @close="dialog = false" @save="save">
          <v-row slot="contentForm">
            <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3">
              <select-field-form label="Tipo*" v-model="dataOfTable.type" :itemsData="type" />
            </v-col>
            <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3">
              <text-field-form label="Título*" v-model="dataOfTable.title" />
            </v-col>
            <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3">
              <text-field-form label="Background*" v-model="dataOfTable.topcolor" />
            </v-col>
            <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3">
              <text-field-form label="CorFonte*" v-model="dataOfTable.colorsourcetop" />
            </v-col>
            <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3">
              <select-field-form
                label="Link Topo"
                v-model="dataOfTable.linktop"
                :itemsData="linktop"
              />
            </v-col>
            <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3">
              <select-field-form
                label="Link Rodapé"
                v-model="dataOfTable.linkfooter"
                :itemsData="linkfooter"
              />
            </v-col>

            <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
              <text-field-form label="Descrição*" v-model="dataOfTable.description" />
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
import TitlePageSearch from "@/components/admin/views/title-page-search.vue";

import ModalLight from "@/components/admin/forms/modal-light.vue";
import TextFieldForm from "@/components/admin/forms/text-field-form.vue";
import SelectFieldForm from "@/components/admin/forms/select-field-form.vue";
// import SelectAutocompleteForm from "@/components/admin/forms/select-autocomplete-form.vue";


export default {
  mixins: [crud],
  layout: "restrict",

  components: {
    "button-add": ButtonAdd,
    "button-edit": ButtonEdit,
    "button-delete": ButtonDelete,
    "title-page-search": TitlePageSearch,
    "custom-table": CustomTable,
    // "select-autocomplete-form": SelectAutocompleteForm,
    "modal-light": ModalLight,
    "text-field-form": TextFieldForm,
    "select-field-form": SelectFieldForm,
    // "select-autocomplete-form": SelectAutocompleteForm,
  },

  data: function () {
    return {
      pageApi: "categories",
      titleModal: "CADASTRAR EDITORIAS",
      titlePage: "EDITORIAS",

      type: [
        { value: "E", text: "EDITORIA" },
        { value: "P", text: "PÁGINA" },
      ],
      linktop: [
        { value: "Y", text: "SIM" },
        { value: "N", text: "NÃO" },
      ],
      linkfooter: [
        { value: "Y", text: "SIM" },
        { value: "N", text: "NÃO" },
      ],

      tableHead: ["DESCRIÇÃO"],
    };
  },

};
</script>

<style>
.bg-app-geddo {
  background-color: #cfd8dc;
}
</style>



