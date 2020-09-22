<template>
  <v-lazy :v-model="lazyData" :options="{threshold: .8}" transition="fade-transition">
    <div class="ads">
      <v-layout row>
        <v-flex>
          <p class="mb-5" style="font-size: 10pt">Publicidade</p>
          <a class="mt-3" :href="fontData.url">
            <div class="mb-n2" v-html="fontData.image"></div>
          </a>
        </v-flex>
      </v-layout>
    </div>
  </v-lazy>
</template>

<script>
export default {
  props: ["fontData", "lazyData"],
  name: "AdsBanners",
};
</script>
<style scoped>

</style>