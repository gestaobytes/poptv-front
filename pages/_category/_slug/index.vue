<template>
  <div>
    <div class="block-title-category">
      <v-row>
        <v-col cols="12">
          <v-layout class="container">
            <h5 class="ml-3 titles-sharing-tags text-uppercase">{{article.category}}</h5>
          </v-layout>
        </v-col>
      </v-row>
    </div>

    <v-row>
      <v-col cols="12">
        <v-layout class="container">
          <v-row>
            <v-col xs="12" sm="8" md="8" lg="8" xl="8" cols="12">
              <div class="posts-articles">
                <h5 class="retracts">{{article.retracts}}</h5>
                <h1 class="display-1 font-weight-medium">{{article.titleadapter}}</h1>

                <h2 class="headline mt-3">{{article.subtitle}}</h2>

                <!-- <h5 class="title-sharing mt-4 mb-4">
                  <button-sharing :urlLocal="urlComplete" socialMedia="facebook" />
                  <button-sharing
                    :urlLocal="urlComplete"
                    :title="article.title"
                    :subtitle="article.subtitle"
                    socialMedia="twitter"
                  />
                  <button-sharing :urlLocal="urlComplete" socialMedia="whatsapp" />
                </h5>-->

                <div
                  class="mt-5 mb-5 pa-5"
                  style="background-color: #eee"
                  justify="center"
                  v-if="article.image"
                >
                  <div class="image-post" justify="center">
                    <span class="credit">{{ article.image_credit }}</span>
                    <br v-if="article.image_credit" />
                    <img v-if="!$vuetify.breakpoint.xs" :src="photo+article.image" />
                    <img v-else :src="thumb+article.image" />
                    <br v-if="article.image_subtitle" />
                    <span v-if="article.image_subtitle" class="legend">{{ article.image_subtitle }}</span>
                  </div>
                </div>

                <div>
                  <div class="video-container" v-html="article.text"></div>
                  <div class="mb-5 mt-5">
                    <table>
                      <tr>
                        <td
                          v-for="reaction in reactions"
                          :key="reaction.id"
                          class="td-reactions"
                          @click="pollReactionPost(reaction.id)"
                        >
                          <v-tooltip top>
                            <template v-slot:activator="{ on }">
                              <span v-html="reaction.emoction" v-on="on"></span>
                            </template>
                            <span>{{reaction.slug}}</span>
                          </v-tooltip>

                          <b v-for="reactionpost in reactionPost" :key="reactionpost.id">
                            <span v-if="reaction.id === reactionpost.reaction_id">
                              <b class="quant-votes">{{reactionpost.votes}}</b>
                              <br />
                              <b>votos</b>
                            </span>
                          </b>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div class="mb-5">
                    <h5 class="title-sharing">
                      <!-- <button-sharing :urlLocal="urlComplete" socialMedia="facebook" />
                      <button-sharing
                        :urlLocal="urlComplete"
                        :title="article.title"
                        :subtitle="article.subtitle"
                        socialMedia="twitter"
                      />
                      <button-sharing :urlLocal="urlComplete" socialMedia="whatsapp" />-->
                    </h5>
                  </div>
                </div>
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

    <div class="container">
      <v-row>
        <v-col
          class="px-5"
          xs="12"
          sm="6"
          md="3"
          lg="3"
          xl="2"
          cols="12"
          v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
        >
          <ads-banners lazyData="false" :fontData="banner01" />
        </v-col>

        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <call-main-image-title lazyData="false" :fontData="allPosts01" />
        </v-col>

        <!-- size SM -->
        <v-col
          class="px-5"
          xs="12"
          sm="6"
          md="3"
          lg="3"
          xl="2"
          cols="12"
          v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
        >
          <ads-banners lazyData="false" :fontData="banner01" />
        </v-col>
        <!--  -->
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <ads-banners lazyData="false" :fontData="banner02" />
        </v-col>

        <v-col v-if="$vuetify.breakpoint.xl" xl="2" cols="12" class="px-5">
          <hr class="hr-home mt-5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image lazyData="false" :fontData="allPosts02" />
        </v-col>

        <v-col v-if="$vuetify.breakpoint.xl" xl="2" cols="12" class="px-5">
          <hr class="hr-home mt-5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image lazyData="false" :fontData="allPosts03" />
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts04" />
        </v-col>

        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts05" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts06" />
        </v-col>

        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <ads-banners lazyData="false" :fontData="banner03" />
        </v-col>

        <v-col
          class="px-5"
          xs="12"
          sm="6"
          md="3"
          lg="3"
          xl="2"
          cols="12"
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.xl"
        >
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts07" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts08" />
        </v-col>
        <v-col
          class="px-5"
          xs="12"
          sm="6"
          md="3"
          lg="3"
          xl="2"
          cols="12"
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.xl"
        >
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts09" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts10" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>





<script>
import axios from "axios";
import { baseApiUrlPublic } from "@/global";

import _banners from "@/components/_banners";
import _calls from "@/components/_calls";
import _mostAccessed from "@/components/_most-accessed";

import AdsBanners from "@/components/public/ads-banners";
import CallMainImageTitle from "@/components/public/call-main-image-title";
import CallImageTitle from "@/components/public/call-image-title";
import CallTitleImage from "@/components/public/call-title-image";
import CallTitleImageSecondary from "@/components/public/call-title-image-secondary";
import CallTitleImageLight from "@/components/public/call-title-image-light";
import CallTitle from "@/components/public/call-title";
import CallTitleTerciary from "@/components/public/call-title-terciary";
import CallTitleLight from "@/components/public/call-title-light";
import MostAccessed from "@/components/public/most-accessed";
import TitleIcon from "@/components/public/title-icon";
import TitleListedNews from "@/components/public/title-listed-news";

// import ButtonSharing from "@/components/public/button-sharing";

export default {
  mixins: [_banners, _calls, _mostAccessed],
  layout: "public",

  components: {
    "ads-banners": AdsBanners,
    "call-main-image-title": CallMainImageTitle,
    "call-image-title": CallImageTitle,
    "call-title-image": CallTitleImage,
    "call-title-image-secondary": CallTitleImageSecondary,
    // "call-title-image-terciary": CallTitleImageTerciary,
    "call-title-image-light": CallTitleImageLight,
    "call-title": CallTitle,
    // "call-title-secondary": CallTitleSecondary,
    "call-title-terciary": CallTitleTerciary,
    "call-title-light": CallTitleLight,
    "most-accessed": MostAccessed,
    "title-icon": TitleIcon,
    "title-listed-news": TitleListedNews
    // "call-box-especial": CallBoxEspecial,
    // "button-sharing": ButtonSharing,
    // "call-image-title-secondary": CallImageTitleSecondary,
  },

  data: function() {
    return {
      styleDivPhoto: "",
      article: {},
      reactions: [],
      reactionPost: {},
      tags: "",
      urlTags: "",
      urlComplete: "",
      relatedNews: "",
      photo: "https://storage.googleapis.com/ogirassol/photos/",
      thumb: "https://storage.googleapis.com/ogirassol/thumbs/",
      metaTags: ""
    };
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.subtitle },
        { hid: 'keywords', name: 'keywords', content: this.article.tags },
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.titleadapter },
        { hid: 'og:url', name: 'og:url', content: this.urlComplete },
        { hid: 'twitter:url', name: 'twitter:url', content: this.urlComplete },
        { hid: 'og:title', name: 'og:title', content: this.article.titleadapter },
        { hid: 'og:description', name: 'og:description', content: this.article.subtitle },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.subtitle },
        { hid: 'article:tag', name: 'article:tag', content: this.article.tags },
        { hid: 'og:image', name: 'og:image', content: this.photo + '/' + this.article.image },
        { hid: 'twitter:image', name: 'twitter:image', content: this.photo + '/' + this.article.tags }
      ]
    };
  },

  methods: {
    loadPost() {
      axios.get(`${baseApiUrlPublic}/${this.$route.params.category}/${this.$route.params.slug}`)
        .then(res => {
          this.article = res.data.article;
          var tags = res.data.tags;
          tags = tags.split(",");
          this.tags = Array.from(tags);
          this.relatedNews = res.data.relatedNews;
          this.loadReactions();
          this.urlComplete = window.location.href;
          console.log(this.article);
        });
    },

    loadReactions() {
      axios.get(`${baseApiUrlPublic}/reactions`).then(res => {
        this.reactions = res.data;
      });

      axios
        .get(`${baseApiUrlPublic}/reaction/post/${this.article.id}`)
        .then(res => {
          this.reactionPost = res.data;
        });
    },

    pollReactionPost(item) {
      axios["post"](
        `${baseApiUrlPublic}/post/${this.article.id}/reaction/${item}`
      ).then(() => {
        this.loadReactions();
      });
    },

    slugCaracter(urlTags) {
      var slug = "";
      var titleLower = urlTags.toLowerCase();
      slug = titleLower.trim();
      slug = slug.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ|&/gi, "e");
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a");
      slug = slug.replace(/i|ì|í|î|ï/gi, "i");
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o");
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u");
      slug = slug.replace(/$/gi, "");
      slug = slug.replace(/c|ç/gi, "c");
      slug = slug.replace(/n|ñ/gi, "n");
      slug = slug.replace(/đ/gi, "d");
      slug = slug.replace(/\s+/g, "-");
      return slug;
    },

    keywords() {
      const tags = this.article.tags;
      this.tags = tags.split(",");
      this.tags = tags.split(":");
      this.tags = tags.split(";");
      this.tags = tags.split("|");
      this.tags = tags.split("/");
    }
  },

  watch: {
    $route() {
      this.url = `${baseApiUrlPublic}/${this.$route.params.category}/${this.$route.params.slug}`;
      this.loadPost();
    }
  },

  mounted() {
    this.loadPost();
  }
};
</script>


<style>
</style>
