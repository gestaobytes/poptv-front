<template>
  <div>

    <div class="container">
      <v-row>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
          <ads-banners lazyData="false" :fontData="banner01" />
        </v-col>

        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <call-main-image-title lazyData="false" :fontData="allPosts01" />
        </v-col>

        <!-- size SM -->
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12" v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
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




    <v-row class="mt-5" style="background:#a80017">
      <v-col cols="12">
        <div class="container">
          <v-row>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight01" />
            </v-col>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight02" />
            </v-col>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight03" />
            </v-col>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight04" />
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
              <call-image-title-white lazyData="false" :fontData="postsHighlight05" />
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
              <call-image-title-white lazyData="false" :fontData="postsHighlight06" />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <div class="container">
      <v-row class="mt-5">
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-terciary lazyData="false" :fontData="allPosts11" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts12" />
          <div class="mt-5">
            <ads-banners lazyData="false" :fontData="banner03" />
          </div>
        </v-col>

        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts13" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts14" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts15" />
        </v-col>

        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts16" />
          <div class="card-border mb-7 mt-7 pt-4 pb-3">
            <call-title lazyData="false" :fontData="allPosts17" />
          </div>
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts18" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts19" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts20" />
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts21" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts22" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts23" />
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <ads-banners lazyData="false" :fontData="banner04" />
        </v-col>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts24" />

          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts25" />
        </v-col>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts26" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts27" />
        </v-col>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <ads-banners lazyData="false" :fontData="banner05" />
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.xl"
          xs="12"
          sm="6"
          xl="2"
          cols="12"
          class="px-5"
        >
          <call-image-title lazyData="false" :fontData="allPosts28" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts29" />
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.xl"
          xs="12"
          sm="6"
          xl="2"
          cols="12"
          class="px-5"
        >
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts30" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts31" />
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts32" />
        </v-col>

        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image-secondary lazyData="false" :fontData="allPosts33" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts34" />
        </v-col>

        <v-col
          class="px-5"
          xs="12"
          sm="6"
          md="3"
          lg="3"
          xl="2"
          cols="12"
        >
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts35" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts36" />
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image-secondary lazyData="false" :fontData="allPosts37" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts38" />
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts39" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts40" />
        </v-col>
      </v-row>
    </div>


    
    <div class="container">
      <v-row>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
          <ads-banners lazyData="false" :fontData="banner01" />
        </v-col>

        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <call-main-image-title lazyData="false" :fontData="allPosts41" />
        </v-col>

        <!-- size SM -->
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12" v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
          <ads-banners lazyData="false" :fontData="banner01" />
        </v-col>
        <!--  -->
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <ads-banners lazyData="false" :fontData="banner02" />
        </v-col>

        <v-col v-if="$vuetify.breakpoint.xl" xl="2" cols="12" class="px-5">
          <hr class="hr-home mt-5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image lazyData="false" :fontData="allPosts42" />
        </v-col>

        <v-col v-if="$vuetify.breakpoint.xl" xl="2" cols="12" class="px-5">
          <hr class="hr-home mt-5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image lazyData="false" :fontData="allPosts43" />
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts44" />
        </v-col>

        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts45" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts46" />
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
          <call-image-title lazyData="false" :fontData="allPosts47" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts48" />
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
          <call-image-title lazyData="false" :fontData="allPosts49" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts50" />
        </v-col>
      </v-row>
    </div>

    <v-row class="mt-5" style="background:#a80017">
      <v-col cols="12">
        <div class="container">
          <v-row>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight07" />
            </v-col>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight08" />
            </v-col>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight09" />
            </v-col>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight10" />
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
              <call-image-title-white lazyData="false" :fontData="postsHighlight11" />
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
              <call-image-title-white lazyData="false" :fontData="postsHighlight12" />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <div class="container">
      <v-row class="mt-5">
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-terciary lazyData="false" :fontData="allPosts51" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts52" />
          <div class="mt-5">
            <ads-banners lazyData="false" :fontData="banner03" />
          </div>
        </v-col>

        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts53" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts54" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts55" />
        </v-col>

        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts56" />
          <div class="card-border mb-7 mt-7 pt-4 pb-3">
            <call-title lazyData="false" :fontData="allPosts57" />
          </div>
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts58" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts59" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts60" />
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts61" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts62" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts63" />
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <ads-banners lazyData="false" :fontData="banner04" />
        </v-col>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts64" />

          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts65" />
        </v-col>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts66" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts67" />
        </v-col>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <ads-banners lazyData="false" :fontData="banner05" />
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.xl"
          xs="12"
          sm="6"
          xl="2"
          cols="12"
          class="px-5"
        >
          <call-image-title lazyData="false" :fontData="allPosts68" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts69" />
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.xl"
          xs="12"
          sm="6"
          xl="2"
          cols="12"
          class="px-5"
        >
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts70" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts71" />
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts72" />
        </v-col>

        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image-secondary lazyData="false" :fontData="allPosts73" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts74" />
        </v-col>

        <v-col
          class="px-5"
          xs="12"
          sm="6"
          md="3"
          lg="3"
          xl="2"
          cols="12"
        >
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts75" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts76" />
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image-secondary lazyData="false" :fontData="allPosts77" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts78" />
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts79" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts80" />
        </v-col>
      </v-row>
    </div>


    
    <div class="container">
      <v-row>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
          <ads-banners lazyData="false" :fontData="banner01" />
        </v-col>

        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <call-main-image-title lazyData="false" :fontData="allPosts81" />
        </v-col>

        <!-- size SM -->
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12" v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
          <ads-banners lazyData="false" :fontData="banner01" />
        </v-col>
        <!--  -->
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <ads-banners lazyData="false" :fontData="banner02" />
        </v-col>

        <v-col v-if="$vuetify.breakpoint.xl" xl="2" cols="12" class="px-5">
          <hr class="hr-home mt-5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image lazyData="false" :fontData="allPosts82" />
        </v-col>

        <v-col v-if="$vuetify.breakpoint.xl" xl="2" cols="12" class="px-5">
          <hr class="hr-home mt-5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image lazyData="false" :fontData="allPosts83" />
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts84" />
        </v-col>

        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts85" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts86" />
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
          <call-image-title lazyData="false" :fontData="allPosts87" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts88" />
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
          <call-image-title lazyData="false" :fontData="allPosts89" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts90" />
        </v-col>
      </v-row>
    </div>

    <v-row class="mt-5" style="background:#a80017">
      <v-col cols="12">
        <div class="container">
          <v-row>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight07" />
            </v-col>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight08" />
            </v-col>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight09" />
            </v-col>
            <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
              <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
              <call-image-title-white lazyData="false" :fontData="postsHighlight10" />
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
              <call-image-title-white lazyData="false" :fontData="postsHighlight11" />
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
              <call-image-title-white lazyData="false" :fontData="postsHighlight12" />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <div class="container">
      <v-row class="mt-5">
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-terciary lazyData="false" :fontData="allPosts91" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts92" />
          <div class="mt-5">
            <ads-banners lazyData="false" :fontData="banner03" />
          </div>
        </v-col>

        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts93" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts94" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts95" />
        </v-col>

        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts96" />
          <div class="card-border mb-7 mt-7 pt-4 pb-3">
            <call-title lazyData="false" :fontData="allPosts97" />
          </div>
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts98" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts99" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts100" />
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts101" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts102" />
          <hr class="hr-home mt-6 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts103" />
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <ads-banners lazyData="false" :fontData="banner04" />
        </v-col>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts104" />

          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts105" />
        </v-col>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts106" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts107" />
        </v-col>
        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <ads-banners lazyData="false" :fontData="banner05" />
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.xl"
          xs="12"
          sm="6"
          xl="2"
          cols="12"
          class="px-5"
        >
          <call-image-title lazyData="false" :fontData="allPosts108" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts109" />
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.xl"
          xs="12"
          sm="6"
          xl="2"
          cols="12"
          class="px-5"
        >
          <hr class="hr-home mt-n1 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts110" />
          <hr class="hr-home mt-4 mb-4" />
          <call-title-terciary lazyData="false" :fontData="allPosts111" />
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col xs="12" sm="12" md="6" lg="6" xl="4" cols="12" class="px-5">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts112" />
        </v-col>

        <v-col class="px-5" xs="12" sm="6" md="3" lg="3" xl="2" cols="12">
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image-secondary lazyData="false" :fontData="allPosts113" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts114" />
        </v-col>

        <v-col
          class="px-5"
          xs="12"
          sm="6"
          md="3"
          lg="3"
          xl="2"
          cols="12"
        >
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts115" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts116" />
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-title-image-secondary lazyData="false" :fontData="allPosts117" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts118" />
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
          <hr class="hr-home mt-n5 mb-5" v-if="$vuetify.breakpoint.xs" />
          <call-image-title lazyData="false" :fontData="allPosts119" />
          <hr class="hr-home mt-7 mb-6" />
          <call-title-terciary lazyData="false" :fontData="allPosts120" />
        </v-col>
      </v-row>
    </div>






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
