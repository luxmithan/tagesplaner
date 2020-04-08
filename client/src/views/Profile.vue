<!--
 * Author:      Luxmithan Sukumar
 * File name:   Profile.vue
 * Version:     1.0
 * Description: Page for user configurations
 -->
 
<template>
  <v-col cols="12" sm="8" md="6">
    <v-card>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Profil</v-toolbar-title>
      </v-toolbar>
      <v-row v-for="(value, propertyName, index) in myProfile" :key="index" no-gutters>
        <v-col cols="4">
          <v-card tile outlined>
            <v-card-title>{{propertyName}}:</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card tile outlined>
            <v-card-title>{{value}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-form class="ma-4" ref="form">
        <v-text-field
          v-model="oldPassword"
          :rules="oldPasswordRules"
          label="Altes Password"
          prepend-icon="mdi-lock"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="newPassword"
          :rules="newPasswordRules"
          label="Neues Passwort"
          prepend-icon="mdi-lock-outline"
          type="password"
          counter="20"
        ></v-text-field>
        <v-text-field
          v-model="newPasswordRepeat"
          :rules="[ newPasswordRepeatRules ]"
          label="Nochmal neues Passwort"
          prepend-icon="mdi-lock-outline"
          type="password"
          v-on:keyup.enter="validate"
        ></v-text-field>
        <v-alert v-if="errorMsg" dense outlined type="error">{{ errorMsg }}</v-alert>
        <v-alert
          v-if="success"
          dense
          outlined
          type="success"
        >Ihr Passwort wurde erfolgreich verändert.</v-alert>
      </v-form>
      <v-btn class="ma-4" color="primary" @click="validate">Passwort ändern</v-btn>
      <v-divider></v-divider>
      <v-btn class="ma-4" color="error" @click="deleteUser">Konto löschen</v-btn>
    </v-card>
  </v-col>
</template>
<script>
import axios from "axios";
export default {
  name: "Profil",
  data: () => ({
    myId: "",
    myProfile: {
      Username: "",
      Vorname: "",
      Nachname: "",
      Rolle: ""
    },
    oldPassword: "",
    newPassword: "",
    newPasswordRepeat: "",
    errorMsg: "",
    success: false,
    oldPasswordRules: [v => !!v || "Bitte altes Password eingeben"],
    newPasswordRules: [
      v => !!v || "Bitte neues Passwort eingeben",
      v =>
        (v && v.length <= 20) ||
        "Das Passwort darf maximal 20 Zeichen lang sein",
      v =>
        (v && v.length >= 6) || "Das Passwort muss minimal 6 Zeichen lang sein"
    ]
  }),
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    }
    this.init();
  },
  methods: {
    init() {
      this.myId = this.$store.getters.getUser.id;
      this.myProfile = {
        Username: this.$store.getters.getUser.username,
        Vorname: this.$store.getters.getUser.firstname,
        Nachname: this.$store.getters.getUser.lastname,
        Rolle: this.$store.getters.getUser.role
      };
    },
    newPasswordRepeatRules() {
      if (!this.newPasswordRepeat) {
        return "Bitte neues Passwort erneut eingeben";
      }
      if (this.newPassword !== this.newPasswordRepeat) {
        return "Die neuen Passwörter stimmen nicht überein";
      } else {
        return true;
      }
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.changePassword();
      }
    },
    //Function to update passwords
    async changePassword() {
      try {
        let passwordData = {
          id: this.myId,
          password: this.oldPassword,
          newPassword: this.newPassword,
          newPasswordRepeat: this.newPasswordRepeat
        };
        let data = await axios
          .put(`/api/user/changePassword`, passwordData)
          .then(response => response.data);
        this.$refs.form.reset();
        this.success = true;
        setTimeout(() => (this.success = false), 3000);
      } catch (error) {
        this.errorMsg = error.response.data.msg;
        setTimeout(() => (this.errorMsg = false), 3000);
      }
    },
    //Function to delete logged in user
    async deleteUser() {
      if (
        confirm(
          "Sind Sie sicher, dass Sie ihr Konto inklusive alle dazugehörigen Ziele löschen wollen?"
        )
      ) {
        axios.delete(`/api/user/delete/${this.myId}`);
        this.$store.dispatch("logout");
        this.$router.push("/login");
      }
    }
  }
};
</script>