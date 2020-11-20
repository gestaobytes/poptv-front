<template>
  <div style="width: 100%">
    <!-- cabeçalho com titulo e pesquisa -->
    <title-page-search :titlePage="titlePage" @clickSubmit="submitFS()" nameFS="q" />
    <button-add @add="reset(), dialog = !dialog" />

    <!-- exibição dos dados em tabela -->
    <custom-table :headTH="tableHead" :registers="registersOfTable">
      <tr v-for="data in registersOfTable" :key="data.id" slot="registers-table">
        <!-- <td>
          <v-avatar class="ma-3" @click="toggleShow(data)">
            <img :src="storageGoogle+folderStorage+data.image" v-if="data.image != '' && data.image != null" />
            <img src="@/static/notImageUser.png" v-else />
          </v-avatar>
        </td> -->

        <td>{{ data.name }} <br/> {{ data.type }}</td>
        <td>{{ data.phone }} | {{ data.cellphone }}<br />{{ data.email }}</td>

        <td>
          <v-btn-toggle
          class="ma-1"
            mandatory
            x-small
            color="blue-grey lighten-3"
            v-for="role in data.roles"
            :key="role.pivot.id"
            block
            outlined
          >
            <v-btn x-small outlined>{{role.role}}</v-btn>
            <v-btn
              class="white--text"
              color="deep-orange darken-2"
              x-small
              @click="removeRole(role.pivot.id)"
            >
              <v-icon x-small>mdi-delete</v-icon>
            </v-btn>
          </v-btn-toggle>
        </td>

        <td width="200px" class="text-right">
          <button-generic
            iconButton="mdi-shield-lock-outline"
            titleButton="FUNÇÕES"
            @actionClick="loadRoles(data.id),dialogRoles = !dialogRoles"
          />
          <button-delete @delete="remove(data)" />
          <button-edit @save="loadRegisterSelect(data),dialog = !dialog" />
        </td>
      </tr>
    </custom-table>

    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent>
        <v-card>
          <form ref="dataForm">
            <v-container grid-list-md>
              <h2 class="py-4 title" color="cyan">{{titleModal}}</h2>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    type="text"
                    name="name "
                    label="Nome*"
                    hint="3 a 100 caracteres"
                    persistent-hint
                    v-model="dataOfTable.name "
                    required
                    min="3"
                    max="100"
                    color="cyan"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md4>
                  <v-text-field
                    type="text"
                    name="phone "
                    label="Telefone*"
                    hint="3 a 100 caracteres"
                    persistent-hint
                    v-model="dataOfTable.phone "
                    required
                    min="3"
                    max="100"
                    color="cyan"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md4>
                  <v-text-field
                    type="text"
                    name="cellphone "
                    label="Celular*"
                    hint="3 a 100 caracteres"
                    persistent-hint
                    v-model="dataOfTable.cellphone "
                    required
                    min="3"
                    max="100"
                    color="cyan"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md4>
                  <v-select
                    type="text"
                    name="type"
                    label="Tipo de usuário"
                    required
                    v-model="dataOfTable.type"
                    :items="usersType"
                    color="cyan"
                  ></v-select>
                </v-flex>

                <v-flex xs12 sm6 md4>
                  <v-text-field
                    type="text"
                    name="registration "
                    label="Registro*"
                    hint="3 a 100 caracteres"
                    persistent-hint
                    v-model="dataOfTable.registration "
                    required
                    min="3"
                    max="100"
                    color="cyan"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md4>
                  <v-text-field
                    type="text"
                    name="email "
                    label="E-mail*"
                    hint="3 a 100 caracteres"
                    persistent-hint
                    v-model="dataOfTable.email "
                    required
                    min="3"
                    max="100"
                    color="cyan"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md6>
                  <v-text-field
                    type="password"
                    name="password "
                    label="Senha*"
                    hint="3 a 100 caracteres"
                    persistent-hint
                    v-model="dataOfTable.password"
                    min="3"
                    max="100"
                    color="cyan"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md6>
                  <v-radio-group v-model="dataOfTable.status" row>
                    <v-radio label="ON" value="ON"></v-radio>
                    <v-radio label="OFF" value="OFF"></v-radio>
                    <v-radio label="STANDBY" value="STANDBY"></v-radio>
                  </v-radio-group>
                </v-flex>
              </v-layout>
              <br />
              <v-divider></v-divider>
              <br />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="grey lighten-1" dark small depressed @click="dialog = false">Fechar</v-btn>
                <v-btn color="cyan" dark small depressed v-if="mode === 'save'" @click="save">Salvar</v-btn>
              </v-card-actions>
            </v-container>
          </form>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogRoles" persistent dark>
        <v-card>
          <form ref="dataForm">
            <v-container grid-list-md>
              <h2 class="py-4 title" color="cyan">{{titleModal}}</h2>
              <v-layout wrap>
                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-autocomplete
                    name="role_id"
                    label="Roles*"
                    required
                    v-model="dataOfTable.role_id"
                    :items="roles"
                    color="cyan"
                  ></v-autocomplete>

                  <!-- <v-text-field
                  type="hidden"
                  name="user_id"
                  v-model="userIdRole"
                  required
                  ></v-text-field>-->
                </v-flex>
              </v-layout>
              <br />

              <br />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="cyan" small dark @click="dialogRoles = false">Fechar</v-btn>
                <v-btn color="cyan" small dark v-if="mode === 'save'" @click="addRolesOfUser">Salvar</v-btn>
              </v-card-actions>
            </v-container>
          </form>
        </v-card>
      </v-dialog>

      <!-- <v-dialog v-model="dialogImage" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
          <form ref="dataForm">
            <v-toolbar dark color="cyan">
              <v-btn icon dark @click="dialogImage = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Imagem do</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>

            <v-layout wrap>
              <v-flex xs12 sm12 md12 class="pa-3">pensar em como colocar o crop aqui</v-flex>
            </v-layout>
          </form>
        </v-card>
      </v-dialog> -->
    <!-- <my-upload
      field="img"
      @crop-success="cropSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      langType="pt-br"
      :width="200"
      :height="200"
      :params="params"
      :headers="headers"
      img-format="png"
    ></my-upload> -->
    </v-layout>


    <div class="text-xs-center mt-5">
      <v-pagination color="cyan" v-if="paginate > 1" v-model="page" :length="paginate" :total-visible="7" circle />
    </div>

  </div>
</template>


<script>
import crud from "@/components/admin/crud";

import { baseApiUrlAdmin, showError } from "@/global";
import axios from "axios";

// import myUpload from "vue-image-crop-upload";

import ButtonAdd from "@/components/admin/buttons/button-add.vue";
import ButtonEdit from "@/components/admin/buttons/button-edit.vue";
import ButtonDelete from "@/components/admin/buttons/button-delete.vue";
import ButtonGeneric from "@/components/admin/buttons/button-generic.vue";

import CustomTable from "@/components/admin/views/custom-table.vue";
import TitlePageSearch from "@/components/admin/views/title-page-search.vue";

// import ModalLight from "@/components/admin/forms/modal-light.vue";
// import SelectFieldForm from "@/components/admin/forms/select-field-form.vue";
// import TextFieldForm from "@/components/admin/forms/text-field-form.vue";
// import SelectAutocompleteForm from "@/components/admin/forms/select-autocomplete-form.vue";

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

    // "modal-light": ModalLight,
    // "text-field-form": TextFieldForm,
    // "select-field-form": SelectFieldForm,
    // "select-autocomplete-form": SelectAutocompleteForm,
    // "my-upload": myUpload,
  },

  data: function () {
    return {
      pageApi: "users",
      titleModal: "CADASTRAR USUÁRIOS",
      titlePage: "USUÁRIOS",
      folderStorage:"users/",
      tableHead: ["Usuário","Contatos","Papéis"],
      permissionsUser: {},
      usersType: [
        { value: "Colaborador", text: "Colaborador" },
        { value: "Leitor", text: "Leitor" },
      ],
      usersStatus: [
        { value: "ON", text: "ATIVO" },
        { value: "OFF", text: "INATIVO" },
        { value: "STANDBY", text: "STANDBY" },
      ],

      roles: [],
      userIdRole: "",
      rolesOfUser: [],
      dialogRoles: false,
      departmentStatus: [
        { value: "ON", text: "ATIVO" },
        { value: "OFF", text: "INATIVO" },
      ],


      /** image crop a partir 
      dialogImage: false,
      dialogPhoto: false,
      imageUserID: "",
      image: "",

      show: false,
      params: {
        token: "123456798",
        name: "avatar",
      },
      headers: {
        smail: "*_~",
      },
      imgDataUrl: "",
      */
    };
  },

  methods: {

    loadRoles(item) {
      const url = `${baseApiUrlAdmin}/roles/cb`;
      axios.get(url).then((res) => {
        this.roles = res.data.map((role) => {
          return {
            value: role.id,
            text: role.name,
          };
        });
      });
      this.userIdRole = item;
    },

    addRolesOfUser() {
      this.rolesOfUser = [
        { role_id: this.dataOfTable.role_id, user_id: this.userIdRole },
      ];
      this.dataOfTable = this.rolesOfUser;

      axios["post"](`${baseApiUrlAdmin}/roles/users`, this.dataOfTable).then(
        () => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
          });
          Toast.fire({
            icon: "success",
            title: "Registro salvo!",
          });
          this.loadRegistersOfTable();
          this.hideModalRoles();
        }
      );
    },

    removeRole(item) {
      this.hideModalRoles(),
        this.$swal({
          title: "Deseja excluir?",
          text: "Você não poderá reverter essa ação!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#00adbe",
          cancelButtonColor: "#ff6a00",
          confirmButtonText: "Excluir",
          cancelButtonText: "Cancelar",
          showCloseButton: true,
        }).then((result) => {
          const id = item;
          if (result.value) {
            axios.delete(`${baseApiUrlAdmin}/roles/users/${id}`).then(() => {
              this.loadRegistersOfTable();
            }),
            this.$swal({
              icon: "success",
              title: "Arquivo excluído",
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            this.$swal({
              icon: "warning",
              title: "Sem alteração.",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    },

    hideModalRoles() {
      this.reset();
      this.dialogRoles = false;
    },

    loadRegisterImageSelect(item) {
      const id = item.id;
      this.url = `${baseApiUrlAdmin}/${this.pageApi}/${id}/details`;
      axios.get(this.url).then((res) => {
        this.dataOfTable = res.data;
      });
    },


    /** crop image 

    hideModalPhoto() {
      this.dialogPhoto = false;
    },

    hideModalImage() {
      this.reset();
      this.dialogImage = false;
    },


    toggleShow(item) {
      this.show = !this.show;
      this.imageUserID = item.id;
    },

    cropSuccess(imgDataUrl) {
      const dataOfTable = { image: imgDataUrl, id: this.imageUserID };
      axios["put"](
        `${baseApiUrlAdmin}/${this.pageApi}/${this.imageUserID}/image`,
        dataOfTable
      )
        .then(() => {
          this.loadRegistersOfTable();
          this.imageUserID = "";
          this.$swal({
            icon: "success",
            title: "Imagem inserida!",
            showConfirmButton: false,
            timer: 2000,
          });
        })
        .catch(showError);
    },

    cropUploadFail(status, field) {
      this.$toasted.show("Falha na inserção da imagem", {
        type: "error",
        position: "top-right",
        icon: "error",
        duration: 2000,
      });

      console.log(status);
      console.log("field: " + field);
    },
    */

  },

  mounted() {
    this.loadRoles();
  },
};
</script>
