<!--
 * Author:      Luxmithan Sukumar
 * File name:   Login.vue
 * Version:     1.0
 * Description: Login page for Tagesplaner
 -->

<template>
  <v-col cols="12" sm="8" md="4">
    <v-card>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="loginData.username"
            :rules="generalRules"
            label="Username"
            prepend-icon="mdi-account"
          ></v-text-field>
          <v-text-field
            v-model="loginData.password"
            :rules="generalRules"
            label="Passwort"
            prepend-icon="mdi-lock"
            type="password"
            v-on:keyup.enter="validate"
          ></v-text-field>
          <v-alert v-if="errorMsg" dense outlined type="error">{{ errorMsg }}</v-alert>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="validate">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Login extends Vue {
  private loginData: object = {
    username: '',
    password: '',
  };

  // Validation rules
  private generalRules = [(v: string) => !!v || 'Bitte Feld ausfüllen'];

  private errorMsg = '';

  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push('/myGoals');
    }
  }

  // Checks if input is valid
  public validate(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.login();
    }
  }

  // Login function
  public async login(): Promise<void> {
    try {
      const data = await axios
        .post('/api/users/login', this.loginData)
        .then((response) => response.data);
      const { token, user } = data;
      this.$store.dispatch('login', { token, user });
      this.$router.push('/myGoals');
    } catch (error) {
      this.errorMsg = error.response.data.msg;
    }
  }
}
</script>
