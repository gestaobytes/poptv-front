<template>
    <router-link
      tag="a"
      class="tr-lasts-posts"
      :fontData="fontData"
      :to="{name: 'post', params: {category: `${fontData.slugCategory}`, post: `${fontData.slug}` } }"
    >
      <div style="background:">
        <p class="retract-lasts-posts mb-n1 mt-n2">{{fontData.retracts}}</p>
        <h1 class="title-lasts-posts">{{fontData.titleadapter}}</h1>
      </div>
    </router-link>
</template>

<script>
export default {
  props: ["fontData", "lazyData"],
  name: "CallTitle"
};
</script>



















      
