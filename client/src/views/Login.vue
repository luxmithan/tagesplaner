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
        <v-form
          ref="form"
        >
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
<script>
import axios from 'axios';
export default {
  name: 'Login',
  data: () => ({
    loginData: {
      username: '',
      password: ''
    },
    //Validation rules
    generalRules: [
      v => !!v || "Bitte Feld ausfüllen"
    ],
    errorMsg: '',
  }),
  created () {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push('/myGoals');
    }
  },
  methods: {
    //Checks if input is valid
    validate () {
      if (this.$refs.form.validate()) {
        this.login()
      }
    },
    //Login function
    async login() {
      try {
        let data = await axios.post('/api/user/login', this.loginData)
          .then(response => response.data);
        let token = data.token;
        let user = data.user;
        this.$store.dispatch('login', { token, user });
        this.$router.push('/myGoals');
      } catch (error) {
        this.errorMsg = error.response.data.msg;
      }
    },
  }
};
</script>