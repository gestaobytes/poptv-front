<template>
  <router-link
    tag="a"
    class="tr-lasts-posts"
    :fontData="fontData"
    :to="{name: 'category-slug', params: {category: fontData.slugCategory, slug: fontData.slug  } }"
  >
    <div style="background:">
      <p class="retract-lasts-posts mb-1 white--text">{{fontData.retracts}}</p>
      <div class="image-home">
        <v-lazy :v-model="lazyData" :options="{threshold: .1}" transition="fade-transition">
          <img :src="storageGoogle+folderStorage+fontData.image" />
        </v-lazy>
      </div>
      <h1 class="title-lasts-posts-secondary-home white--text">{{fontData.titleadapter}}</h1>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["fontData", "lazyData"],
  data: function () {
    return {
      storageGoogle: "https://storage.googleapis.com/poptvnews/",
      folderStorage: "thumbs/",
    };
  },
  name: "CallImageTitleWhite",
};
</script>