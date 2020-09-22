<template>
  <span>
    <v-btn
      :url="urlLocal"
      :social="socialMedia"
      :href="'https://www.facebook.com/sharer.php?u='+urlLocal"
      fab
      small
      color="indigo"
      dark
      class="mr-2"
      target="_blank"
      v-if="socialMedia == 'facebook'"
    >
      <v-icon>fab fa-facebook-f</v-icon>
    </v-btn>

    <v-btn
      :url="urlLocal"
      :href="'https://twitter.com/intent/tweet?text='+title+';url='+urlLocal"
      :social="socialMedia"
      :title="title"
      :subtitle="subtitle"
      data-via="@poptvnews"
      :data-url="urlLocal"
      :data-text="subtitle"
      data-lang="pt"
      fab
      small
      color="blue"
      dark
      class="mr-2"
      target="_blank"
      v-if="socialMedia == 'twitter'"
    >
      <v-icon>fab fa-twitter</v-icon>
    </v-btn>

    <v-btn
      :url="urlLocal"
      :social="socialMedia"
      :href="'http://www.linkedin.com/shareArticle?mini=true&amp;url='+urlLocal+'&amp;title=&amp;summary=As'"
      fab
      small
      class="btn-sharing"
      target="_blank"
      v-if="socialMedia == 'linkedin'"
    >
      <v-icon>fab fa-linkedin-in</v-icon>
    </v-btn>

    <!-- :href="'https://api.whatsapp.com/send?text='+urlLocal" -->
    <v-btn
      :url="urlLocal"
      :href="'https://api.whatsapp.com/send?text='+urlLocal"
      :social="socialMedia"
      fab
      small
      color="light-green darken-3"
      dark
      class="mr-2"
      target="_blank"
      v-if="socialMedia == 'whatsapp'"
    >
      <v-icon>fab fa-whatsapp</v-icon>
    </v-btn>

    <v-btn
      :url="urlLocal"
      :title="title"
      
      :social="socialMedia"
      fab
      rel="telegram-share-btt"
      id="telegram-share-btt"
      small
      class="btn-sharing"
      target="_blank"
      v-if="socialMedia == 'telegram'"
    >
      <v-icon>fab fa-telegram</v-icon>
    </v-btn>
  </span>
</template>

<script>
export default {
  props: ["urlLocal", "socialMedia", "title", "subtitle"],
  name: "ButtonSharing",
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    //conteúdo que será compartilhado: Título da página + URL
    var conteudo = encodeURIComponent(
      document.title + " " + window.location.href
    );
    //altera a URL do botão
    document.getElementById("whatsapp-share-btt").href =
      "https://api.whatsapp.com/send?text=" + conteudo;
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var url = encodeURIComponent(window.location.href); //url
    var title = encodeURIComponent(document.title); //título
    var telegramLink =
      "https://telegram.me/share/url?url=" + url + "&text=" + title;
    document.getElementById("telegram-share-btt").href = telegramLink;
  },
  false
);
</script>
