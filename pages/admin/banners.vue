<template>
  <div style="width: 100%">
    <!-- cabeçalho com titulo e pesquisa -->
    <title-page-search :titlePage="titlePage" @clickSubmit="submitFS()" nameFS="q" />
    <button-add @add="reset(), dialog = !dialog" />

    <!-- exibição dos dados em tabela -->
    <custom-table :headTH="tableHead" :registers="registersOfTable">
      <tr v-for="data in registersOfTable" :key="data.id" slot="registers-table">
        <td>{{ data.name }}</td>
        <td width="80px">{{ data.order }}</td>
        <td width="90px">{{ data.end | dateParse('YYYY-MM-DD') | dateFormat("DD/MM/YYYY") }}</td>
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
            <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
              <text-field-form label="Nome*" v-model="dataOfTable.name" />
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
              <text-field-form type="url" label="URL*" v-model="dataOfTable.url" />
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
              <select-autocomplete-form
                label="Posição*"
                v-model="dataOfTable.positionbanner_id"
                :itemsData="positions"
                @clickAppend="reset(), dialogPosition = !dialogPosition"
              />
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
              <text-field-form type="date" label="Publicar em:" v-model="dataOfTable.start" />
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
              <text-field-form type="date" label="Finaliza em:" v-model="dataOfTable.end" />
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
              <text-field-form type="number" label="Ordem*" v-model="dataOfTable.order" />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <vue-editor :editorToolbar="customToolbar" v-model="dataOfTable.image" required></vue-editor>
            </v-col>
          </v-row>
        </modal-light>
      </v-dialog>

      <v-dialog v-model="dialogPosition" dark persistent width="90%">
        <modal-light
          title="POSIÇÃO DOS ANÚNCIOS"
          @close="dialogPosition = false"
          @save="savePosition"
        >
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
import { baseApiUrlAdmin } from "@/global";
import axios from "axios";

import ButtonAdd from "@/components/admin/buttons/button-add.vue";
import ButtonEdit from "@/components/admin/buttons/button-edit.vue";
import ButtonDelete from "@/components/admin/buttons/button-delete.vue";
import ModalLight from "@/components/admin/forms/modal-light.vue";

import CustomTable from "@/components/admin/views/custom-table.vue";
import TitlePageSearch from "@/components/admin/views/title-page-search.vue";

import TextFieldForm from "@/components/admin/forms/text-field-form.vue";
import SelectAutocompleteForm from "@/components/admin/forms/select-autocomplete-form.vue";

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
    "select-autocomplete-form": SelectAutocompleteForm,
    "custom-table": CustomTable,
    "title-page-search": TitlePageSearch,
  },

  data: function () {
    return {
      pageApi: "banners",
      titleModal: "CADASTRAR ANÚNCIOS",
      titlePage: "ANÚNCIOS",
      pageApiPosition: "position-banners",
      positions: [],
      dialogPosition: false,
      tableHead: ["DESCRIÇÃO", "ORDEM", "FIM"],

      customToolbar: ["image"],
    };
  },

  methods: {
    loadPosition() {
      axios.get().then((res) => {
        this.positions = res.data;
      });

      axios.get(`${baseApiUrlAdmin}/${this.pageApiPosition}/cb`).then((res) => {
        this.positions = res.data.map((position) => {
          return {
            value: position.id,
            text: position.name,
          };
        });
      });
    },

    savePosition() {
      axios["post"](
        `${baseApiUrlAdmin}/${this.pageApiPosition}`,
        this.dataOfTable
      ).then(() => {
        this.$toasted.show("Posição Inserida!", {
          type: "success",
          position: "top-right",
          icon: "check",
          duration: 2000,
        });
        this.loadPosition();
        this.hideModalPosition();
      });
    },

    hideModalPosition() {
      this.dialogPosition = false;
    },
  },

  mounted() {
    this.loadPosition();
  },
};
</script>
