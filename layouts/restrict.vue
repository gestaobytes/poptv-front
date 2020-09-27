<template>
  <div id="app">
    <v-app>
      <Loading v-if="validatingToken" />
      <div v-else id="inspire">
      <!-- <div > -->
        <v-card>
          <v-app-bar dark dense>
            <v-toolbar-title>
              <a router to="dashboard">
                <img src="@/static/iconGB.svg" alt="GestãoBytes" />
              </a>
              <img src="@/static/gestaoBytes.svg" alt="Gestão Bytes" />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu v-if="user" left bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-avatar size="32px" v-if="imageUser != '' && imageUser != null">
                    <img :src="'https://storage.googleapis.com/ogirassol/users/'+imageUser"/>
                  </v-avatar>
                  <v-avatar size="32px" v-else>
                    <img src="@/static/notImageUser.png" />
                  </v-avatar>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Meus Dados</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <a @click.prevent="logout">Logout</a>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
          <v-app-bar color="cyan" dense dark>
            <v-tabs show-arrows>
              <v-tabs-slider color="deep-orange darken-2"></v-tabs-slider>
              <!-- <v-tab router to="dashboard"><span>Home</span></v-tab>
              <v-tab v-if="permissionsOfUser.includes('Usuarios') || permissionsOfUser.includes('SuperAdministrador')" router to="users"><span>Usuários</span></v-tab>
              <v-tab v-if="permissionsOfUser.includes('Roles') || permissionsOfUser.includes('SuperAdministrador')" router to="roles"><span>Funções</span></v-tab>
              <v-tab v-if="permissionsOfUser.includes('Permissions') || permissionsOfUser.includes('SuperAdministrador')" router to="permissions"><span>Permissões</span></v-tab>
              <v-tab v-if="permissionsOfUser.includes('Categories') || permissionsOfUser.includes('SuperAdministrador')" router to="categories"><span>Editorias</span> </v-tab>
              <v-tab v-if="permissionsOfUser.includes('Subcategories') || permissionsOfUser.includes('SuperAdministrador')" router to="subcategories"><span>SubEditorias</span> </v-tab>
              <v-tab v-if="permissionsOfUser.includes('Blogs') || permissionsOfUser.includes('SuperAdministrador')" router to="blogs"><span>Blogs e Colunas</span> </v-tab>
              <v-tab v-if="permissionsOfUser.includes('Positions') || permissionsOfUser.includes('SuperAdministrador')" router to="positions"><span>Posições</span> </v-tab>
              <v-tab v-if="permissionsOfUser.includes('Posts') || permissionsOfUser.includes('SuperAdministrador')" router to="posts"><span>Posts</span> </v-tab>
              <v-tab v-if="permissionsOfUser.includes('Positions') || permissionsOfUser.includes('SuperAdministrador')" router to="position-banners"><span>Posição Anúncios</span> </v-tab>
              <v-tab v-if="permissionsOfUser.includes('Banners') || permissionsOfUser.includes('SuperAdministrador')" router to="banners"><span>Anúncios</span> </v-tab>
              <v-tab v-if="permissionsOfUser.includes('Columners') || permissionsOfUser.includes('SuperAdministrador')" router to="columners"><span>Colunistas</span> </v-tab>
              <v-tab v-if="permissionsOfUser.includes('Reactions') || permissionsOfUser.includes('SuperAdministrador')" router to="reactions"><span>Reações</span> </v-tab> -->
              <v-tab router :to="{name: 'admin'}"><span>Home</span></v-tab>
              <v-tab router :to="{name: 'admin-users'}"><span>Usuários</span></v-tab>
              <v-tab router :to="{name: 'admin-roles'}"><span>Funções</span></v-tab>
              <v-tab router :to="{name: 'admin-permissions'}"><span>Permissões</span></v-tab>
              <v-tab router :to="{name: 'admin-categories'}"><span>Editorias</span> </v-tab>
              <v-tab router :to="{name: 'admin-subcategories'}"><span>SubEditorias</span> </v-tab>
              <v-tab router :to="{name: 'admin-blogs'}"><span>Blogs e Colunas</span> </v-tab>
              <v-tab router :to="{name: 'admin-positions'}"><span>Posições</span> </v-tab>
              <v-tab router :to="{name: 'admin-posts'}"><span>Posts</span> </v-tab>
              <v-tab router :to="{name: 'admin-positionbanners'}"><span>Posição Anúncios</span> </v-tab>
              <v-tab router :to="{name: 'admin-banners'}"><span>Anúncios</span> </v-tab>
              <v-tab router :to="{name: 'admin-columners'}"><span>Colunistas</span> </v-tab>
              <v-tab router :to="{name: 'admin-reactions'}"><span>Reações</span> </v-tab>
              <v-tab @click.prevent="logout" >Logout</v-tab>
              <v-tab >{{nameUser}}</v-tab>
            </v-tabs>
          </v-app-bar>
        </v-card>
        <v-main>
          <v-container fluid fill-height>
            <v-layout>
              <router-view />
            </v-layout>
          </v-container>
        </v-main>
      </div>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import Loading from "@/components/admin/design/loading";
import { mapState } from "vuex";

export default {
  components: { Loading },
  computed: mapState(["user"]),
  data: function() {
    return {
      nameUser: '',
      imageUser: '',
      validatingToken: true,
      permissionsOfUser: {}
    };
  },

  methods: {
    async validateToken() {
      this.validatingToken = true;

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        this.validatingToken = false;
        return this.$router.push({ name: "login" });
      }

      const res = await axios.post(`${baseApiUrl}/auth/validateToken`, userData);

      if (res) {
        this.$store.commit("setUser", userData);
        this.permissionsOfUser = userData.permissions;
        this.imageUser = userData.user.image;
        this.nameUser = userData.user.name;
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: "login" });
      }

      this.validatingToken = false;
    },

    logout() {
      localStorage.removeItem(userKey);
      this.$router.push({ name: "login" });
      this.$store.commit("setUser", null);
    }
  },
  created(){
    this.validateToken();
  },
  mounted() {
  }
};
</script>
