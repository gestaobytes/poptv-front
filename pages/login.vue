<template>
  <v-main>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs9 sm6 md4 lg3 xl2>
          <v-card class="elevation-8" style="text-align:center">
            <img
              class="ma-5 mb-2"
              style="width: 100%; max-width: 200px;"
              src="@/static/verticalLogoGB.svg"
              alt="Gestão Bytes"
            />

            <v-card-text>
              <v-form>

                <v-flex xs12 sm12 md12>
                  <v-text-field
                    type="email"
                    name="email"
                    v-model="user.email"
                    label="Email"
                    color="blue-grey darken-2"
                    outlined
                    dense
                    v-on:keyup.enter="signin"
                  />
                </v-flex>

                <v-flex xs12 sm12 md12>
                  <v-text-field
                    type="password"
                    name="password"
                    v-model="user.password"
                    label="Senha"
                    color="blue-grey darken-2"
                    v-on:keyup.enter="signin"
                    outlined
                    dense
                  />
                </v-flex>

                <v-btn color="cyan darken-2" block dark @click="signin">Entrar</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import axios from "axios";

export default {
  layout: "login",
  data: function() {
    return {
      showSignup: false,
      user: {}
    };
  },
  methods: {
    signin() {
      axios
        .post(`${baseApiUrl}/auth/signin`, this.user)
        .then(res => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ path: "/admin" });
        })
        .catch(showError);
    },
    signup() {
      axios
        .post(`${baseApiUrl}/auth/signup`, this.user)
        .then(() => {
          this.$toasted.global.register();
          this.user = {};
          this.showSignup = false;
        })
        .catch(showError);
    }
  }
};
</script>
