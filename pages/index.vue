<template>
  <div>
    <v-row>
      <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">


        <router-link
          tag="a"
          class="tr-lasts-posts"
          :to="{name: 'post', params: {category: postsHighlight01.category, post: postsHighlight01.slug } }"
        >
          <div class="image-home">
            <img
              v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.md || $vuetify.breakpoint.lg  || $vuetify.breakpoint.xl"
              :src="photo+postsHighlight01.image"
            />
            <img v-else :src="thumb+postsHighlight01.image" />
          </div>
          <p class="retract-lasts-posts mb-n1 mt-3">{{postsHighlight01.retracts}}</p>
          <h1 class="title-lasts-posts-home">{{postsHighlight01.titleadapter}}</h1>
          <p class="subtitle-lasts-posts-home mt-2 mb-n1">{{postsHighlight01.subtitle}}</p>
        </router-link>



      </v-col>

      <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
        <div class="card-border mb-5 pt-4 pb-3">
          <call-title lazyData="false" :fontData="postsHighlight02" />
        </div>
        <ads-banners lazyData="false" :fontData="banner01" />
      </v-col>

      <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
        <call-title-image lazyData="false" :fontData="postsHighlight03" />
        <hr class="hr-home mt-4 mb-5" v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl" />
        <hr class="hr-home mt-n2 mb-5" v-else-if="$vuetify.breakpoint.md" />
        <hr class="hr-home mt-5 mb-5" v-if="$vuetify.breakpoint.xs" />
        <call-title-secondary
          lazyData="false"
          :fontData="postsHighlight04"
          v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg"
        />
        <call-title lazyData="false" :fontData="postsHighlight04" v-else />
      </v-col>

      <v-col v-if="$vuetify.breakpoint.xl" xl="2" cols="12" class="px-5">
        <div style="border:1px solid cyan">
          <!-- <img src="@/assets/img/banner-gb.png"  /> -->
        </div>
      </v-col>

      <v-col
        v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.xs"
        xs="12"
        xl="2"
        class="px-5"
        cols="12"
      >
        <hr class="hr-home mt-5 mb-5" v-if="$vuetify.breakpoint.xs" />
        <call-title-image lazyData="false" :fontData="postsHighlight05" />
        <hr class="hr-home mt-4 mb-5" v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl" />
        <hr class="hr-home mt-n2 mb-5" v-else-if="$vuetify.breakpoint.md" />
        <hr class="hr-home mt-5 mb-5" v-if="$vuetify.breakpoint.xs" />
        <call-title lazyData="false" :fontData="postsHighlight06" />
      </v-col>
    </v-row>








  </div>
</template>

<script>
import _banners from "@/components/_banners";
import _calls from "@/components/_calls";
import CallBoxEspecial from "@/components/public/call-box-especial";



import AdsBanners from "@/components/public/ads-banners";

import CallImageTitle from "@/components/public/call-image-title";
// import CallTitleImage from "@/components/public/call-title-image";

// import CallTitleImageSecondary from "@/components/public/call-title-image-secondary";
// import CallTitleImageTerciary from "@/components/public/call-title-image-terciary";

import CallTitle from "@/components/public/call-title";
import CallTitleSecondary from "@/components/public/call-title-secondary";
// import CallTitleTerciary from "@/components/public/call-title-terciary";

// import CallBoxEspecial from "@/components/public/call-box-especial";



export default {
  mixins: [_banners, _calls],
  layout: "public",

  components: {
    "ads-banners": AdsBanners,
    // "call-main-image-title": CallMainImageTitle,
    // "call-image-title-white": CallImageTitleWhite,
    "call-image-title": CallImageTitle,
    // "call-title-image": CallTitleImage,
    // "call-title-image-secondary": CallTitleImageSecondary,
    "call-title": CallTitle,
    "call-title-secondary": CallTitleSecondary,
  },

  data: function() {
    return {
      urlTags: "",
      photo: "https://storage.googleapis.com/ogirassol/photos/",
      thumb: "https://storage.googleapis.com/ogirassol/thumbs/"
    };
  }
};
</script>
