<template>
  <div>
    <div class="block-title-category">
      <v-row>
        <v-col cols="12">
          <v-layout class="container">
            <h5 class="ml-3 titles-sharing-tags text-uppercase">{{titleCategory}}</h5>
          </v-layout>
        </v-col>
      </v-row>
    </div>

    <v-row>
      <v-col cols="12">
        <v-layout class="container">
          <v-row>
            <v-col xs="12" sm="8" md="8" lg="8" xl="8" cols="12">
              <title-image-listed-tags lazyData="true" :fontData="registersOfTable" />
              <div class="text-xs-center mt-5">
                <v-pagination
                  color="#a80017"
                  v-if="paginate > 1"
                  v-model="page"
                  :length="paginate"
                  :total-visible="7"
                  circle
                ></v-pagination>
              </div>
            </v-col>

            <!-- divisão -->
            <v-col
              lg="2"
              xl="2"
              md="1"
              v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
              cols="12"
            >
              <div class="box"></div>
              <div class="box linha-vertical"></div>
            </v-col>

            <v-col xs="12" sm="4" md="3" lg="2" xl="2" cols="12">
              <div class="div-lasts">
                <title-icon title="As mais lidas" />
                <most-accessed lazyData="false" :fontData="mostAccessedWeek" />
              </div>

              <div class="mb-5" style="clear:both;">
                <ads-banners lazyData="false" :fontData="banner03" />
              </div>

              <title-icon title="Confira Também" />
              <title-listed-news lazyData="false" :fontData="relatedNews" />

              <div class="mb-5" style="clear:both;">
                <ads-banners lazyData="false" :fontData="banner04" />
              </div>

              <div class="mb-5" style="clear:both;"></div>
              <call-title-light lazyData="false" :fontData="allPosts01" />

              <hr class="hr-home mb-2" />
              <call-title-image-light lazyData="false" :fontData="allPosts02" />

              <hr class="hr-home mb-2" />
              <call-title-light lazyData="false" :fontData="allPosts03" />

              <hr class="hr-home mb-2" />
              <call-title-light lazyData="false" :fontData="allPosts04" />

              <hr class="hr-home mb-2" />
              <call-title-light lazyData="false" :fontData="allPosts05" />

              <hr class="hr-home mb-2" />
              <call-title-light lazyData="false" :fontData="allPosts06" />
            </v-col>
          </v-row>
        </v-layout>
      </v-col>
    </v-row>
  </div>
</template>





<script>
import axios from 'axios'
import { baseApiUrlPublic, domainApi } from '@/global'


import _banners from "@/components/_banners";
import _calls from "@/components/_calls";
import _mostAccessed from "@/components/_most-accessed";

import AdsBanners from "@/components/public/ads-banners";
import MostAccessed from "@/components/public/most-accessed";
import TitleIcon from "@/components/public/title-icon";
import TitleImageListedTags from "@/components/public/title-image-listed-tags";


export default {
  mixins: [_banners, _calls, _mostAccessed],
  layout: 'public',


  components: {
    "ads-banners": AdsBanners,
    "most-accessed": MostAccessed,
    "title-icon": TitleIcon,
    "title-image-listed-tags": TitleImageListedTags
  },

  data: function() {
    return {
      listTags: "",
      tags: "",
      categoryReceive: "",
      urlLocal: "",
      relatedNews: "",
      registersOfTable: [],
      titleCategory: "",
      /** register for pagination */
      page: 1,
      currentPage: 1,
      nextPage: 1,
      count: 0,
      limit: 0,
      paginate: 0,
      qtdRegisters: 0
    };
  },

  methods: {
    loadPostsCategory() {
      axios.get(`${this.url}?page=${this.page}`).then(res => {
        this.titleCategory = res.data.data[0].category;
        this.registersOfTable = res.data.data;
        this.count = res.data.total;
        this.limit = res.data.per_page;
        this.paginate = Math.ceil(res.data.total / res.data.per_page);
        this.qtdRegisters = 0;
      });
    }
  },

  watch: {
    page() {
      this.loadPostsCategory();
    },
    $route() {
      this.url = `${baseApiUrlPublic}/${this.$route.params.category}`;
      this.urlLocal = `${baseApiUrlPublic}/${this.$route.params.category}`;
      this.loadPostsCategory();
    }
  },

  mounted() {
    this.url = `${baseApiUrlPublic}/${this.$route.params.category}`;
    this.urlLocal = `${domainApi}/${this.$route.params.category}`;
    this.categoryReceive = this.$route.params.category;
    this.loadPostsCategory();
  },

  metaInfo() {
    return {
      title: this.titleCategory,
      titleTemplate: "%s - Pop TV News"
    };
  }
};
</script>
