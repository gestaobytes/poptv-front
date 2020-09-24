<template>
  <div id="app">
    <v-app id="inspire">
      <v-card style="background-color:#a80017">
        <v-row>
          <v-col cols="12">
            <v-layout class="container">
              <router-link tag="a" to="index">
                <img src="@/static/logo.jpg" style="width:200px" class="mt-n6 mb-n8" />
              </router-link>
              <v-spacer></v-spacer>

              <div
                class="social-media-top"
                v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg  || $vuetify.breakpoint.xl"
              >
                <v-btn
                  href="https://www.facebook.com/Jornalpoptvnews"
                  outlined
                  fab
                  x-small
                  color="white"
                  class="ml-2"
                >
                  <v-icon small class="mt-0">fab fa-facebook-f</v-icon>
                </v-btn>
                <v-btn
                  href="https://twitter.com/poptvnews"
                  outlined
                  fab
                  x-small
                  color="white"
                  class="ml-2"
                >
                  <v-icon small class="mt-0">fab fa-twitter</v-icon>
                </v-btn>
              </div>
            </v-layout>
          </v-col>
        </v-row>

        <v-app-bar dense>
          <v-layout class="container">
            <v-tabs show-arrows>
              <v-tabs-slider></v-tabs-slider>
              <v-tab router to="/giralogin">.</v-tab>
              <v-tab router to="index">Home</v-tab>
              <!-- <v-tab
                v-for="(item, i) in menuCategories"
                :key="i"
                :to="{name: 'category', params: {category: item.slug } }"
              >{{item.title}}</v-tab>-->
            </v-tabs>
          </v-layout>
        </v-app-bar>
      </v-card>

      <v-navigation-drawer v-model="drawer" absolute temporary class="pt-7 pl-3 pr-4">
        <img src="@/static/logo.jpg" class="mt-n2" />
        <v-row class="my-5">
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <form ref="submitFormMenu" :action="actionSearch" method="GET">
              <v-text-field
                outlined
                dense
                type="text"
                name="q"
                label="Pesquisar no site"
                required
                min="5"
                max="50"
                color="blue"
                class="mb-0"
                append-icon="fa fa-search"
                @click:append="relatedTextMenuSearch()"
              ></v-text-field>
            </form>

            <v-list-item-group color="primary">
              <router-link tag="a" class="tr-lasts-posts" :to="{name: 'index' }">
                <v-list-item>Home</v-list-item>
              </router-link>
              <router-link
                tag="a"
                class="tr-lasts-posts"
                v-for="(item, i) in menuCategories"
                :key="i"
                :to="{name: 'category', params: {category: item.slug } }"
              >
                <v-list-item>{{item.title}}</v-list-item>
              </router-link>
            </v-list-item-group>
          </v-col>
        </v-row>
      </v-navigation-drawer>

      <v-main>
        <v-row>
          <v-col cols="12">
            <nuxt />
          </v-col>
        </v-row>
      </v-main>

      <v-footer style="background-color: #a80017">
        <v-row>
          <v-col cols="12" xl="12">
            <v-layout class="container">
              <v-row>
                <v-col
                  cols="12"
                  xs="12"
                  sm="5"
                  md="5"
                  lg="5"
                  xl="5"
                  style="color:white; font-size:0.9em; font-weight:300"
                >
                  Editor Geral
                  <br />Raimundo Batista Lira
                  <br />DRT/GO 01280JP
                  <br />Copyright © 2019. PopTV News
                  <br />Todos os direitos reservados.
                </v-col>
                <v-col
                  cols="12"
                  xs="12"
                  sm="5"
                  md="5"
                  lg="5"
                  xl="5"
                  style="color:white; font-size:0.9em; font-weight:300"
                >
                  <v-icon small>fab fa-email</v-icon>oknewstvweb@gmail.com
                  <br />
                  <v-icon small>fab fa-cellphone</v-icon>(62) 98560 5450
                  <br />
                  <v-icon small>fab fa-whatsapp</v-icon>(61) 98144 0178
                </v-col>

                <v-col cols="12" xs="12" sm="2" md="2" lg="2" xl="2" style="text-align:right">
                  <v-spacer></v-spacer>
                  <v-btn
                    href="https://www.facebook.com/Jornalpoptvnews"
                    outlined
                    fab
                    x-small
                    color="white"
                    class="ml-2"
                  >
                    <v-icon small class="mt-0">fab fa-facebook-f</v-icon>
                  </v-btn>
                  <v-btn
                    href="https://twitter.com/poptvnews"
                    outlined
                    fab
                    x-small
                    color="white"
                    class="ml-2"
                  >
                    <v-icon small class="mt-0">fab fa-twitter</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-layout>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xl="12">
            <v-layout class="container">
              <v-row>
                <v-col cols="12" xl="12">
                  Os artigos e/ou assinadas, não representam necessariamente, a opinião do site e são de responsabilidade 
                  de seus autores (sem vínculos empregatícios e nem da cumpriedade de horário de trabalho).
                </v-col>
              </v-row>
            </v-layout>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },

  computed: {},

  methods: {


    actionSearch() {},
    menuCategories() {}
  },

  mounted() {}
};
</script>

<style>
</style>
