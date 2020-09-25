<template>
  <div style="width: 100%">
    <!-- cabeçalho com titulo e pesquisa -->
    <title-page-search :titlePage="titlePage" @clickSubmit="submitFS()" nameFS="q" />
    <button-add @add="reset(), dialog = !dialog" />

    <!-- exibição dos dados em tabela -->
    <custom-table :headTH="tableHead" :registers="registersOfTable">
      <tr v-for="data in registersOfTable" :key="data.id" slot="registers-table">
        <td width="150px">{{ data.name }}</td>
        <td>
          <div>{{ data.label }}</div>

          <div class="mt-2 mb-2">
            <span class="mt-4 mr-2" v-for="permission in data.permissions" :key="permission.pivot.id">
              <v-btn-toggle mandatory x-small color="blue-grey lighten-3" dark block outlined>
                <v-btn x-small outlined>{{permission.name}}</v-btn>
                <v-btn
                  class="white--text"
                  color="deep-orange darken-2"
                  x-small
                  @click="removePermission(permission.pivot.id)"
                >
                  <v-icon x-small>mdi-delete</v-icon>
                </v-btn>
              </v-btn-toggle>
            </span>
          </div>
        </td>

        <td width="200px" class="text-right">
          <button-generic
            iconButton="mdi-shield-lock-outline"
            titleButton="FUNÇÕES"
            @actionClick="loadPermissions(data.id),dialogPermissions = !dialogPermissions"
          />
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
            <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
              <text-field-form label="Nome*" v-model="dataOfTable.name" />
            </v-col>
            <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
              <text-field-form label="Descrição*" v-model="dataOfTable.label" />
            </v-col>
          </v-row>
        </modal-light>
      </v-dialog>

      <v-dialog v-model="dialogPermissions" persistent>
        <modal-light :title="titleModal" @close="dialogPermissions = false" @save="addPermissionsToRoles">
          <v-row slot="contentForm">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <select-autocomplete-form
                label="Editoria*"
                v-model="dataOfTable.permission_id"
                :itemsData="permissions"
              />
            </v-col>
          </v-row>
        </modal-light>
      </v-dialog>
    </v-layout>

    <div class="text-xs-center mt-5">
      <v-pagination color="cyan" v-if="paginate > 1" v-model="page" :length="paginate" :total-visible="7" circle />
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
import ButtonGeneric from "@/components/admin/buttons/button-generic.vue";

import CustomTable from "@/components/admin/views/custom-table.vue";
import TitlePageSearch from "@/components/admin/views/title-page-search.vue";

import ModalLight from "@/components/admin/forms/modal-light.vue";
// import SelectFieldForm from "@/components/admin/forms/select-field-form.vue";
import TextFieldForm from "@/components/admin/forms/text-field-form.vue";
import SelectAutocompleteForm from "@/components/admin/forms/select-autocomplete-form.vue";

export default {
  mixins: [crud],
  layout: "restrict",

  components: {
    "button-add": ButtonAdd,
    "button-edit": ButtonEdit,
    "button-delete": ButtonDelete,
    "button-generic": ButtonGeneric,

    "custom-table": CustomTable,
    "title-page-search": TitlePageSearch,

    "modal-light": ModalLight,
    "text-field-form": TextFieldForm,
    // "select-field-form": SelectFieldForm,
    "select-autocomplete-form": SelectAutocompleteForm,
  },

  data: function() {
    return {
      pageApi: "roles",
      titleModal: "CADASTRAR PERFIS(PAPÉIS)",
      titlePage: "PERFIS",
      search: "",
      permissionsUser: {},
      tableHead: ["NOME", "DESCRIÇÃO"],
      usersStatus: [
        { value: "ON", text: "ATIVO" },
        { value: "OFF", text: "INATIVO" },
        { value: "STANDBY", text: "STANDBY" }
      ],
      permissions: [],
      roleIdPermission: "",
      permissionsOfRoles: [],
      dialogPermissions: false,
      departmentStatus: [
        { value: "ON", text: "ATIVO" },
        { value: "OFF", text: "INATIVO" }
      ]
    };
  },

  methods: {
    loadRegistersOfTable() {
      if (this.searching == true) {
        let q = this.fieldSearch;
        let dts = this.fieldDtsSearch;
        let dtf = this.fieldDtfSearch;
        var search =
          typeof q === "undefined" || q == ""
            ? ""
            : "q=" + q + "&dts=" + dts + "&dtf=" + dtf;
        this.url = `${baseApiUrlAdmin}/${this.pageApi}?${search}&page=${this.page}`;
        console.log("query: " + search);
      } else {
        this.url = `${baseApiUrlAdmin}/${this.pageApi}?page=${this.page}`;
        console.log("sem pesquisa");
      }

      axios.get(this.url).then(res => {
        this.registersOfTable = res.data.data;
        this.count = res.data.total;
        this.limit = res.data.per_page;
        this.paginate = Math.ceil(res.data.total / res.data.per_page);
        this.qtdRegisters = 0;
      });
    },

    loadRegisterSelect(item) {
      const id = item.id;
      this.url = `${baseApiUrlAdmin}/${this.pageApi}/${id}/details`;
      axios.get(this.url).then(res => {
        this.dataOfTable = res.data;
        const title = res.data.name;
        this.titleModal = title;
      });
    },

    loadPermissions(item) {
      const url = `${baseApiUrlAdmin}/permissions/cb`;
      axios.get(url).then(res => {
        this.permissions = res.data.map(permission => {
          return {
            value: permission.id,
            text: permission.name
          };
        });
      });
      this.roleIdPermission = item;
    },

    addPermissionsToRoles() {
      this.permissionsOfRoles = [
        {
          permission_id: this.dataOfTable.permission_id,
          role_id: this.roleIdPermission
        }
      ];
      this.dataOfTable = this.permissionsOfRoles;

      axios["post"](
        `${baseApiUrlAdmin}/permissions/roles`,
        this.dataOfTable
      ).then(() => {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000
        });
        Toast.fire({
          icon: "success",
          title: "Registro salvo!"
        });

        this.loadRegistersOfTable();
        this.hideModalPermissions();
      });
    },

    removePermission(item) {
      this.hideModalPermissions(),
        this.$swal({
          title: "Deseja excluir?",
          text: "Você não poderá reverter essa ação!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#00adbe",
          cancelButtonColor: "#ff6a00",
          confirmButtonText: "Excluir",
          cancelButtonText: "Cancelar",
          showCloseButton: true
        }).then(result => {
          const id = item;
          if (result.value) {
            axios
              .delete(`${baseApiUrlAdmin}/permissions/roles/${id}`)
              .then(() => {}),
              this.reset();
            this.loadRegistersOfTable();
            this.$swal({
              icon: "success",
              title: "Arquivo excluído",
              showConfirmButton: false,
              timer: 2000
            });
          } else {
            this.$swal({
              icon: "warning",
              title: "Sem alteração.",
              showConfirmButton: false,
              timer: 2000
            });
          }
        });
    },

    hideModalPermissions() {
      this.reset();
      this.dialogPermissions = false;
    }
  },

  mounted() {
    this.loadPermissions();
    this.permissionsUser = this.$store.state.user.permissions;
    console.log(this.permissionsUser);
  }
};
</script>
