<template>
  <v-lazy :v-model="lazyData" :options="{threshold: .8}" transition="fade-transition">
    <router-link
      tag="a"
      class="tr-lasts-posts"
      :fontData="fontData"
      :to="{name: 'post', params: {category: `${fontData.slugCategory}`, post: `${fontData.slug}` } }"
    >
      <v-card>
        <v-img
          v-if="$vuetify.breakpoint.md"
          :src="storageGoogle+photo+fontData.image"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="230px"
        >
          <v-card-title>{{fontData.titleadapter}}</v-card-title>
        </v-img>
        <v-img
          v-else-if="$vuetify.breakpoint.sm"
          :src="storageGoogle+photo+fontData.image"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="400px"
        >
          <v-card-title>{{fontData.titleadapter}}</v-card-title>
        </v-img>
        <v-img
          v-else
          :src="storageGoogle+photo+fontData.image"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="300px"
        >
          <v-card-title>{{fontData.titleadapter}}</v-card-title>
        </v-img>
      </v-card>
    </router-link>
  </v-lazy>
</template>


<script>
export default {
  props: ["fontData", "lazyData"],
  data: function () {
    return {
      storageGoogle:"https://storage.googleapis.com/ogirassol/",
      photo: "photos/",
      thumb: "thumbs/",
    };
  },
  name: "CallmainImageTitle",
};
</script>