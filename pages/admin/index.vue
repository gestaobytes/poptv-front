<template>
  <div style="width: 100%">
    <v-card-title>
      <h1 class="display-1 font-weight-light">DASHBOARD</h1>
      <v-spacer></v-spacer>
      <p class="caption font-weight-medium mt-0 mb-n5">Dados Google [30 dias]</p>
    </v-card-title>

    <v-card class="pa-4">
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
          <v-alert color="primary" outlined>
            <v-row>
              <v-col cols="12">
                <p class="title mb-n2 mt-n5">Comportamento</p>
              </v-col>
            </v-row>
            <v-row class="title mt-n3 mb-n6">
              <v-col cols="6" class="text-center">
                <circular-progress
                  size="90"
                  :value="allAccesses.percentNewVisitor"
                  width="9"
                  :legendTop="allAccesses.news"
                  legend="Novos usuários"
                ></circular-progress>
              </v-col>
              <v-col cols="6" class="text-center">
                <circular-progress
                  size="90"
                  :value="allAccesses.percentReturnVisitor"
                  width="9"
                  :legendTop="allAccesses.return"
                  legend="Retornaram"
                ></circular-progress>
              </v-col>
            </v-row>
          </v-alert>
        </v-col>

        <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
          <v-alert color="primary" outlined>
            <v-row>
              <v-col cols="12">
                <p class="title mb-n1 mt-n5">Como acessam</p>
              </v-col>
            </v-row>

            <bar-progress
              :value="allAccesses.percentDirect"
              origem="Diretamente"
              :percent="allAccesses.percentDirect"
              :accesses="allAccesses.direct"
            ></bar-progress>
            <bar-progress
              :value="allAccesses.percentGoogle"
              origem="Google"
              :percent="allAccesses.percentGoogle"
              :accesses="allAccesses.google"
            ></bar-progress>

            <v-row>
              <v-col cols="12">
                <p class="title mb-n2">Mídias Sociais</p>
              </v-col>
            </v-row>
            <bar-progress
              :value="allAccesses.percentFacebook"
              origem="Facebook"
              :percent="allAccesses.percentFacebook"
              :accesses="allAccesses.facebook"
            ></bar-progress>
            <bar-progress
              :value="allAccesses.percentLinkedin"
              origem="Linkedin"
              :percent="allAccesses.percentLinkedin"
              :accesses="allAccesses.linkedin"
            ></bar-progress>
            <bar-progress
              :value="allAccesses.percentInstagram"
              origem="Instagram"
              :percent="allAccesses.percentInstagram"
              :accesses="allAccesses.instagram"
            ></bar-progress>
          </v-alert>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <v-alert color="orange darken-1" outlined>
            <v-row>
              <v-col cols="12">
                <p class="title mb-n1 mt-n5">Produção</p>
              </v-col>
            </v-row>

            <bar-progress-production
              origem="Total Cadastrado"
              :accesses="allAccesses.postTotal"
              :value="100"
              color="orange darken-1"
            ></bar-progress-production>

            <bar-progress-production
              origem="30 dias"
              :accesses="allAccesses.postMonth"
              :value="allAccesses.percentMonth"
            ></bar-progress-production>

            <bar-progress-production
              origem="7 dias"
              :accesses="allAccesses.postWeak"
              :value="percentWeek"
            ></bar-progress-production>

            <bar-progress-production
              origem="Hoje"
              :accesses="allAccesses.postDay"
              :value="percentDay"
            ></bar-progress-production>
          </v-alert>
        </v-col>

        <!-- <v-col xs="12" sm="6" md="4" lg="3" xl="3">
        <v-alert class="pt-8" color="primary" dark icon="mdi-web" border="top" prominent>
          <p class="title mt-n3">Acessos</p>
          <p class="headline font-weight-light mt-n5">2.458.321</p>
          <p class="caption font-weight-light mt-n5 mb-0">desde 01/01/2018</p>
        </v-alert>
        </v-col>-->
      </v-row>

      <v-row>
        <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
          <v-alert color="primary" outlined>
            <v-row>
              <v-col cols="12">
                <p class="title mb-n2 mt-n5">Páginas + acessadas</p>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr v-for="data in registersTopPages" :key="data.id" @click="openPost(data.url)">
                        <td>{{ data.url }}</td>
                        <td class="text-right" width="200px">{{data.pageViews}}</td>
                        <td width="5">
                          <v-btn
                            color="primary"
                            class="pa-0 ma-1"
                            x-small
                            outlined
                            dark
                            icon
                          >
                            <v-icon class="">mdi-play</v-icon>
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-alert>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>

import { baseApiUrlAdmin } from "@/global";
import axios from "axios";
import CircularProgress from "@/components/admin/design/circular-progress.vue";
import BarProgress from "@/components/admin/design/bar-progress.vue";
import BarProgressProduction from "@/components/admin/design/bar-progress-production.vue";

export default {
  layout: "restrict",
  components: {
    "circular-progress": CircularProgress,
    "bar-progress": BarProgress,
    "bar-progress-production": BarProgressProduction
  },
  data: function() {
    return {
      allAccesses: {},
      categoriesAccesses: {},
      maturityBanners: {},
      registersTopPages: [],
      percentWeek: "",
      percentMonth: "",
      percentDay: ""
    };
  },

  methods: {
    loadAllAccesses() {
      axios.get(`${baseApiUrlAdmin}/analytics`).then(res => {
        this.allAccesses = res.data;
        this.percentMonth =
          (this.allAccesses.postMonth / this.allAccesses.postMonth) * 100;
        this.percentWeek =
          (this.allAccesses.postWeak / this.allAccesses.postMonth) * 100;
        this.percentDay =
          (this.allAccesses.postDay / this.allAccesses.postMonth) * 100;
        this.registersTopPages = this.allAccesses.topPages;
      });
    },
    openPost(slug) {
      this.url = `http://www.poptvnews.com.br${slug}`;
      window.open(this.url);
    }
  },

  mounted() {
    this.loadAllAccesses();
  }
};
</script>