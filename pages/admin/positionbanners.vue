<template>
  <div style="width: 100%">
    <!-- cabeçalho com titulo e pesquisa -->
    <title-page-search :titlePage="titlePage" @clickSubmit="submitFS()" nameFS="q" />
    <button-add @add="reset(), dialog = !dialog" />

    <!-- exibição dos dados em tabela -->
    <custom-table :headTH="tableHead" :registers="registersOfTable">
      <tr v-for="data in registersOfTable" :key="data.id" slot="registers-table">
        <td width="200px">{{ data.name }}</td>
        <td>{{ data.description }}</td>
        <td width="120px" class="text-right">
          <button-delete @delete="remove(data)" />
          <br v-if="$vuetify.breakpoint.xs" />
          <button-edit @save="loadRegisterSelect(data),dialog = !dialog" />
        </td>
      </tr>
    </custom-table>

    <!-- formulário com os campos de cadastro -->
    <v-dialog v-model="dialog" persistent>
      <modal-light :title="titleModal" @close="dialog = false" @save="save">
        <v-row slot="contentForm">
          <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <text-field-form label="Nome*" v-model="dataOfTable.name" />
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <text-field-form label="Descrição*" v-model="dataOfTable.description" />
          </v-col>
        </v-row>
      </modal-light>
    </v-dialog>


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
import ModalLight from "@/components/admin/forms/modal-light.vue";

import CustomTable from "@/components/admin/views/custom-table.vue";
import TitlePageSearch from "@/components/admin/views/title-page-search.vue";

import TextFieldForm from "@/components/admin/forms/text-field-form.vue";
// import SelectAutocompleteForm from "@/components/admin/forms/select-autocomplete-form.vue";

export default {
  mixins: [crud],
  layout: "restrict",

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
      pageApi: "position-banners",
      titleModal: "CADASTRAR POSIÇÕES ANÚNCIOS",
      titlePage: "POSIÇÕES ANÚNCIOS",
      tableHead: ["POSIÇÃO", "DESCRIÇÃO"],
    };
  },
};
</script>

<style>
</style>
