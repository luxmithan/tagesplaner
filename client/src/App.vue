<!--
 * Author:      Luxmithan Sukumar
 * File name:   App.vue
 * Version:     1.0
 * Description: Main view with navigationbar
 -->

<template>
  <v-app>
    <v-app-bar app color="primary" dense dark>
      <v-col align="start" justify="start">
        <v-btn v-if="isAuth" text to="/myGoals">Meine Ziele</v-btn>
        <v-btn v-if="isAuth && role === 'Lehrperson'" text to="/allGoals">Alle Ziele</v-btn>
      </v-col>
      <v-toolbar-title>Tagesplaner</v-toolbar-title>
      <v-col align="right" justify="right">
        <v-btn v-if="!isAuth" text to="/login">Login</v-btn>
        <v-btn v-if="!isAuth" text to="/register">Registrieren</v-btn>
        <v-btn v-if="isAuth" text to="/profile">{{ username }}s Profil</v-btn>
        <v-btn v-if="isAuth" v-on:click="logout" text>Logout</v-btn>
        <v-btn text href="https://github.com/luxmithan/tagesplaner" target="_blank"
          >Repository <v-icon>mdi-open-in-new</v-icon></v-btn
        >
      </v-col>
    </v-app-bar>
    <v-content class="grey lighten-3">
      <v-container text-center>
        <v-layout wrap align-center justify-center>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private isAuth = false;

  private username?: string;

  private role?: string;

  public init(): void {
    this.isAuth = this.$store.getters.isLoggedIn;
    if (this.isAuth) {
      ({ username: this.username, role: this.role } = this.$store.getters.getUser);
    }
  }

  public logout(): void {
    this.isAuth = false;
    this.$store.dispatch('logout');
    this.$router.push('/login');
  }

  mounted() {
    this.init();
  }

  updated() {
    this.init();
  }
}
</script>
