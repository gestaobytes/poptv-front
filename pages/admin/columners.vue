<template>
  <div style="width: 100%">
    <!-- cabeçalho com titulo e pesquisa -->
    <title-page-search :titlePage="titlePage" @clickSubmit="submitFS()" nameFS="q" />
    <button-add @add="reset(), dialog = !dialog" />

    <!-- exibição dos dados em tabela -->
    <custom-table :headTH="tableHead" :registers="registersOfTable">
      <tr v-for="data in registersOfTable" :key="data.id" slot="registers-table">
        <td width="250px">{{ data.user }}</td>
        <td>{{ data.blog }}</td>
        <td width="400px" class="text-right">
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
            <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
              <select-autocomplete-form label="Colunista*" v-model="dataOfTable.user_id" :itemsData="users" />
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
              <select-autocomplete-form label="Coluna|Blog*" v-model="dataOfTable.blog_id" :itemsData="blogs" />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <text-field-form label="Descrição*" v-model="dataOfTable.description" />
            </v-col>
             <v-col cols="12" xs="12" sm="6" md="3">
              <text-field-form label="Facebook*" v-model="dataOfTable.facebook" />
            </v-col>
             <v-col cols="12" xs="12" sm="6" md="3">
              <text-field-form label="Twitter*" v-model="dataOfTable.twitter" />
            </v-col>
             <v-col cols="12" xs="12" sm="6" md="3">
              <text-field-form label="Google*" v-model="dataOfTable.google" />
            </v-col>
             <v-col cols="12" xs="12" sm="6" md="3">
              <text-field-form label="Linkedin*" v-model="dataOfTable.linkedin" />
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
        :total-visible="paginate"
        circle
      ></v-pagination>
    </div>

    <!-- <pagination :currentPage="page" v-if="paginate > 1" :tamanho="paginate"></pagination> -->
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

export default {
  mixins: [crud],
  layout: "restrict",

  components: {
    "button-add": ButtonAdd,
    "button-edit": ButtonEdit,
    "button-delete": ButtonDelete,
    "modal-light": ModalLight,
    "title-page-search": TitlePageSearch,
    "custom-table": CustomTable,
    "text-field-form": TextFieldForm,
    "select-autocomplete-form": SelectAutocompleteForm,
  },

  data: function () {
    return {
      pageApi: "columners",
      titleModal: "CADASTRAR COLUNISTAS",
      titlePage: "COLUNISTAS",
      users: [],
      blogs: [],
      tableHead: ["COLUNISTA", "BLOG|COLUNA"],
    };
  },

  methods: {
    loadUser() {
      const url = `${baseApiUrlAdmin}/users/cb`;
      axios.get(url).then((res) => {
        this.users = res.data.map((user) => {
          return { value: user.id, text: user.name };
        });
      });
    },

    loadBlogs() {
      const url = `${baseApiUrlAdmin}/blogs/cb`;
      axios.get(url).then((res) => {
        this.blogs = res.data.map((blog) => {
          return {
            value: blog.id,
            text: blog.titleCategory + " - " + blog.title,
          };
        });
      });
    },
  },

  mounted() {
    this.loadUser();
    this.loadBlogs();
  },
};
</script>
