<template>
  <div style="width: 100%">
    <template>
      <div style="width: 100%">
        <!-- cabeçalho com titulo e pesquisa -->
        <title-page-search :titlePage="titlePage" @clickSubmit="submitFS()" nameFS="q" />
        <button-add @add="reset(), dialog = !dialog" />

        <!-- exibição dos dados em tabela -->
        <custom-table :registers="registersOfTable">
          <tr v-for="data in registersOfTable" :key="data.id" slot="registers-table">
            <!-- ajuste para uma TD se o dispositivo é XS ou SM -->
            <td class="py-3" v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
              <h3 class>EDITORIA:: {{ data.category }}</h3>
              <h1 class="cyan--text mb-n2">{{ data.retracts }}: {{ data.title }}</h1>
              <h1 class="grey--text">{{ data.retracts }}: {{ data.titleadapter }}</h1>
              <p>{{ data.subtitle }}</p>

              <hr class="mb-3" />
              <div style="background-color: #ccc; text-align: center" class="pa-4">
                <div v-if="data.image!='' && data.image!=null ">
                  <img :src="storageGoogle+folderStorage+data.image" width="100%" />

                  <v-btn
                    x-small
                    color="greyscale"
                    dark
                    block
                    @click="loadRegisterImageSelect(data),dialogPhoto = !dialogPhoto"
                  >Alterar imagem</v-btn>
                </div>
                <div v-else>
                  <img src="@/static/notImage.png" width="100%" />

                  <v-btn
                    x-small
                    color="green"
                    dark
                    @click="loadRegisterImageSelect(data),dialogPhoto = !dialogPhoto"
                  >Adicionar imagem</v-btn>
                </div>
              </div>

              <hr />

              <button-generic
                iconButton="mdi-play"
                titleButton="MATÉRIA"
                @actionClick="openPost(data.slugCategory, data.slug)"
              />
              <button-delete @delete="remove(data)" />
              <button-edit @save="loadRegisterSelect(data),dialog = !dialog" />
            </td>

            <!-- exibição em 3 TDs se o dispositivo é maio que MD  -->
            <td v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
              <h3 class>EDITORIA:: {{ data.category }}</h3>
              <h1 class="cyan--text mb-n2">{{ data.retracts }}: {{ data.title }}</h1>
              <h1 class="grey--text">{{ data.retracts }}: {{ data.titleadapter }}</h1>
              <p>{{ data.subtitle }}</p>
              <span class="span-accesses">{{ data.accesses }} acessos</span>
            </td>

            <td width="250px" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
              <div v-if="data.image!='' && data.image!=null ">
                <img :src="storageGoogle+folderStorage+data.image" class="img-post-panel" />
                <p>
                  <v-btn
                    x-small
                    color="greyscale"
                    dark
                    @click="loadRegisterImageSelect(data),dialogPhoto = !dialogPhoto"
                  >Alterar imagem</v-btn>
                </p>
              </div>
              <div v-else>
                <img src="@/static/notImage.png" class="img-post-panel" />
                <p>
                  <v-btn
                    x-small
                    color="green"
                    dark
                    @click="loadRegisterImageSelect(data),dialogPhoto = !dialogPhoto"
                  >Adicionar imagem</v-btn>
                </p>
              </div>
            </td>

            <td
              width="200px"
              class="text-right"
              v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
            >
              <button-generic
                iconButton="mdi-play"
                titleButton="MATÉRIA"
                @actionClick="openPost(data.slugCategory, data.slug)"
              />
              <button-delete @delete="remove(data)" />
              <button-edit @save="loadRegisterSelect(data),dialog = !dialog" />
            </td>
          </tr>
        </custom-table>

        <v-layout row justify-center>
          <!-- formulário com os campos de cadastro -->
          <v-dialog v-model="dialog" persistent>
            <modal-light :title="titleModal" @close="dialog = false" @save="save">
              <v-row slot="contentForm">
                <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
                  <select-autocomplete-form
                    label="Editoria*"
                    v-model="dataOfTable.subcategory_id"
                    :itemsData="subcategories"
                    @clickAppend="reset(), dialogSubCategory = !dialogSubCategory"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
                  <select-field-form
                    label="Posicionamento*"
                    v-model="dataOfTable.position_id"
                    :itemsData="positions"
                  />
                </v-col>

                <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
                  <text-field-form label="Retranca*" v-model="dataOfTable.retracts" />
                </v-col>

                <v-col class="column-field-destak" cols="12" xs="12" sm="5" md="5" lg="5" xl="5">
                  <text-field-form
                    hint="Após compartilhamento, não altere esse campo"
                    label="Título*"
                    v-model="dataOfTable.title"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="7" md="7" lg="7" xl="7">
                  <text-field-form
                    counter
                    :rules="rulesTitleAdapter"
                    label="Título Adaptado*"
                    v-model="dataOfTable.titleadapter"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                  <text-field-form label="Subtítulo*" v-model="dataOfTable.subtitle" />
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                  <vue-editor :editorToolbar="customToolbar" v-model="dataOfTable.text" required></vue-editor>
                </v-col>

                <v-col cols="12" xs="12" sm="6" md="5" lg="3" xl="3">
                  <text-field-form
                    hint="Separe com vírgula"
                    label="Tags*"
                    v-model="dataOfTable.tags"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="3" lg="3" xl="3">
                  <text-field-form
                    type="date"
                    label="Publicar em:*"
                    v-model="dataOfTable.date_start"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="2" lg="3" xl="3">
                  <select-field-form
                    label="Status*"
                    v-model="dataOfTable.status"
                    :itemsData="status"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="2" lg="3" xl="3">
                  <select-field-form
                    label="Restrito?*"
                    v-model="dataOfTable.will_restrict_users"
                    :itemsData="restrict"
                  />
                </v-col>
              </v-row>
            </modal-light>
          </v-dialog>

          <v-dialog v-model="dialogSubCategory" persistent dark width="90%">
            <modal-light
              title="CADASTRAR SUBCATEGORIA"
              @close="dialogSubCategory = false"
              @save="saveSubCategory"
            >
              <v-row slot="contentForm">
                <v-col cols="12" xs="12" sm="6" md="3" lg="3" xl="3">
                  <select-autocomplete-form
                    label="Editoria*"
                    v-model="dataOfTable.category_id"
                    :itemsData="categories"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="3" lg="3" xl="3">
                  <text-field-form label="Nome Subeditoria*" v-model="dataOfTable.title" />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                  <text-field-form label="Descrição*" v-model="dataOfTable.description" />
                </v-col>
              </v-row>
            </modal-light>
          </v-dialog>

          <v-dialog v-model="dialogPhoto" persistent dark width="90%">
            <modal-light title="IMAGEM PRINCIPAL" @close="dialogPhoto = false" @save="savePhoto">
              <v-row slot="contentForm">
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                  <my-upload
                    field="img"
                    @crop-success="cropSuccess"
                    @crop-upload-success="cropUploadSuccess"
                    @crop-upload-fail="cropUploadFail"
                    v-model="show"
                    langType="pt-br"
                    :width="800"
                    :height="420"
                    noCircle
                    noRotate
                    :params="params"
                    :headers="headers"
                    img-format="png"
                  />
                  <v-btn block color="blue-grey lighten-1" dark @click="toggleShow">
                    Escolher Imagem
                    <v-icon small>mdi-image</v-icon>
                  </v-btn>
                  <v-text-field type="hidden" name="image" v-model="dataOfTable.image"></v-text-field>
                  <img class="img-responsive" :src="imgDataUrl" />
                </v-col>

                <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
                  <text-field-form label="Legenda da imagem" v-model="dataOfTable.image_subtitle" />
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
                  <text-field-form label="Crédito da imagem" v-model="dataOfTable.image_credit" />
                </v-col>
              </v-row>
            </modal-light>
          </v-dialog>

          <v-dialog
            v-model="dialogImage"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
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
  </div>
</template>




<script>
import crud from "@/components/admin/crud";
import { baseApiUrlAdmin, showError } from "@/global";
import myUpload from "vue-image-crop-upload";
import axios from "axios";

import { VueEditor } from "vue2-editor";

import ButtonAdd from "@/components/admin/buttons/button-add.vue";
import ButtonEdit from "@/components/admin/buttons/button-edit.vue";
import ButtonDelete from "@/components/admin/buttons/button-delete.vue";
import ButtonGeneric from "@/components/admin/buttons/button-generic.vue";

import CustomTable from "@/components/admin/views/custom-table.vue";
import TitlePageSearch from "@/components/admin/views/title-page-search.vue";

import ModalLight from "@/components/admin/forms/modal-light.vue";
import TextFieldForm from "@/components/admin/forms/text-field-form.vue";
import SelectAutocompleteForm from "@/components/admin/forms/select-autocomplete-form.vue";
import SelectFieldForm from "@/components/admin/forms/select-field-form.vue";

export default {
  mixins: [crud],
  layout:  "restrict",

  components: {
    VueEditor,
    "my-upload": myUpload,
    "button-add": ButtonAdd,
    "button-edit": ButtonEdit,
    "button-delete": ButtonDelete,
    "button-generic": ButtonGeneric,

    "title-page-search": TitlePageSearch,
    "custom-table": CustomTable,

    "modal-light": ModalLight,
    "text-field-form": TextFieldForm,
    "select-autocomplete-form": SelectAutocompleteForm,
    "select-field-form": SelectFieldForm,
  },

  data: function () {
    return {
      pageApi: "posts",
      dialogSubCategory: false,
      dialogImage: false,
      dialogPhoto: false,
      image: "",
      slug: "",
      folderStorage: "thumbs/",
      titleModal: "CADASTRAR POSTAGEM",
      titlePage: "POSTAGENS",
      subcategories: [],
      categories: [],
      category: "",
      positions: [],
      tableHead: ["Post", "Imagem"],
      search: "",
      status: ["ON", "OFF"],
      restrict: [
        { value: "s", text: "SIM" },
        { value: "N", text: "NÃO" },
      ],
      rulesTitleAdapter: [
        (min) => min.length > 72 || "Muito curto",
        (max) => max.length < 80 || "Muito Longo"
      ],

      // editorSettings: [
      //   [{ list: "ordered" }, { list: "bullet" }],
      //   ["image", "code-block"],
      // ],

      customToolbar: [
        [{ header: [false, 3] }],
        ["bold", "italic", "blockquote"],
        [{ script: "sub" }, { script: "super" }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "link", "video"],
      ],

      /** image crop a partir daqui */
      show: false,
      params: {
        token: "123456798",
        name: "avatar",
      },
      headers: {
        smail: "*_~",
      },
      imgDataUrl: "", // the datebase64 url of created image
    };
  },

  methods: {
    openPost(slugCategory, slug) {
      this.url = `../../${slugCategory}/${slug}`;
      window.open(this.url);
    },

    loadSubCategory() {
      const url = `${baseApiUrlAdmin}/subcategories/cb`;
      axios.get(url).then((res) => {
        this.subcategories = res.data.map((subcategory) => {
          return {
            value: subcategory.id,
            text: subcategory.titleCategory + " " + subcategory.title,
          };
        });
      });
    },

    loadCategory() {
      const url = `${baseApiUrlAdmin}/categories/cb`;
      axios.get(url).then((res) => {
        this.categories = res.data.map((category) => {
          return {
            value: category.id,
            text: category.title,
          };
        });
      });
    },

    loadRegisterImageSelect(item) {
      const id = item.id;
      this.url = `${baseApiUrlAdmin}/${this.pageApi}/${id}/details`;
      axios.get(this.url).then((res) => {
        this.dataOfTable = res.data;
      });
    },

    savePhoto() {
      const method = this.dataOfTable.id ? "put" : "post";
      const id = this.dataOfTable.id ? `/${this.dataOfTable.id}` : "";
      axios[method](
        `${baseApiUrlAdmin}/${this.pageApi}${id}/image`,
        this.dataOfTable
      )
        .then(() => {
          if (method == "put") {
            this.$swal({
              icon: "success",
              title: "Imagem inserida!",
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            this.$swal({
              icon: "success",
              title: "Registro Inserido!",
              showConfirmButton: false,
              timer: 2000,
            });
          }
          this.hideModalPhoto();
          this.loadRegistersOfTable();
        })
        .catch(showError);
    },

    saveSubCategory() {
      axios["post"](`${baseApiUrlAdmin}/subcategories`, this.dataOfTable).then(
        () => {
          this.$toasted.show("SubCategoria Inserida!", {
            type: "success",
            position: "top-right",
            icon: "check",
            duration: 2000,
          });
          this.loadSubCategory();
          this.hideModalSubCategory();
        }
      );
    },

    hideModalSubCategory() {
      this.dialogSubCategory = false;
    },

    hideModalPhoto() {
      this.dialogPhoto = false;
    },

    hideModalImage() {
      this.reset();
      this.dialogImage = false;
    },

    loadPosition() {
      const url = `${baseApiUrlAdmin}/positions/cb`;
      axios.get(url).then((res) => {
        this.positions = res.data.map((position) => {
          return { value: position.id, text: position.title };
        });
      });
    },

    /** crop image */
    toggleShow() {
      this.show = !this.show;
    },

    cropSuccess(imgDataUrl) {
      this.$toasted.show("Imagem selecionada", {
        type: "success",
        position: "top-right",
        icon: "check",
        duration: 2000,
      });
      this.imgDataUrl = imgDataUrl;
      this.dataOfTable.image = this.imgDataUrl;
    },

    cropUploadSuccess(jsonData, field) {
      this.$toasted.show("Imagem selecionada", {
        type: "success",
        position: "top-right",
        icon: "check",
        duration: 2000,
      });
      console.log(jsonData);
      console.log("field: " + field);
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
  },

  mounted() {
    this.loadSubCategory();
    this.loadCategory();
    this.loadPosition();
  },
};
</script>

<style>
</style>
