<!--
 * Author:      Luxmithan Sukumar
 * File name:   Register.vue
 * Version:     1.0
 * Description: Registration page
 -->

<template>
  <v-col cols="12" sm="8" md="4">
    <v-card>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Registrieren</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="signupData.username"
            :rules="usernameRules"
            label="Username"
            prepend-icon="mdi-account"
            type="text"
            counter="12"
          ></v-text-field>
          <v-text-field
            v-model="signupData.firstname"
            :rules="generalRules"
            label="Vorname"
            prepend-icon="mdi-account-outline"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="signupData.lastname"
            :rules="generalRules"
            label="Nachname"
            prepend-icon="mdi-account-outline"
            type="text"
          ></v-text-field>
          <v-select
            v-model="signupData.role"
            :rules="generalRules"
            :items="roles"
            label="Rolle"
            prepend-icon="mdi-badge-account-horizontal"
          ></v-select>
          <v-select
            v-if="signupData.role === 'Lernende/r'"
            v-model="signupData.grade"
            :rules="[ gradeRules ]"
            :items="grades"
            label="Momentane Klasse"
            prepend-icon="mdi-badge-account-horizontal"
          ></v-select>
          <v-text-field
            v-if="signupData.role === 'Lehrperson'"
            v-model="signupData.masterPassword"
            :rules="generalRules"
            label="Masterpasswort"
            prepend-icon="mdi-lock-outline"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="signupData.password"
            :rules="passwordRules"
            label="Passwort"
            prepend-icon="mdi-lock"
            type="password"
            counter="20"
          ></v-text-field>
          <v-text-field
            v-model="signupData.passwordRepeat"
            :rules="[ passwordRepeatRules ]"
            label="Passwort erneut eingeben"
            prepend-icon="mdi-lock"
            type="password"
            v-on:keyup.enter="validate"
          ></v-text-field>
          <v-alert v-if="errorMsg" dense outlined type="error">{{ errorMsg }}</v-alert>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="validate">Registrieren</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    signupData: {
      username: "",
      firstname: "",
      lastname: "",
      role: "",
      grade: null,
      masterPassword: null,
      password: "",
      passwordRepeat: ""
    },
    errorMsg: "",
    roles: ["Lernende/r", "Lehrperson"],
    grades: ["in17", "in18", "in19"],
    //Validation rules
    generalRules: [v => !!v || "Bitte Feld ausfüllen"],
    usernameRules: [
      v => !!v || "Bitte Feld ausfüllen",
      v =>
        (v && v.length <= 12) ||
        "Der Username darf maximal 12 Zeichen lang sein",
      v =>
        (v && v.length >= 3) || "Der Username muss minimal 3 Zeichen lang sein"
    ],
    passwordRules: [
      v => !!v || "Bitte Feld ausfüllen",
      v =>
        (v && v.length <= 20) ||
        "Das Passwort darf maximal 20 Zeichen lang sein",
      v =>
        (v && v.length >= 6) || "Das Passwort muss minimal 6 Zeichen lang sein"
    ]
  }),
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push("/myGoals");
    }
  },
  methods: {
    masterRules() {
      if (
        this.signupData.role != "Lernende/r" &&
        !this.signupData.masterPassword
      ) {
        return "Bitte Feld ausfüllen";
      } else {
        return true;
      }
    },
    gradeRules() {
      if (this.signupData.role != "Lehrperson" && !this.signupData.grade) {
        return "Bitte Feld ausfüllen";
      } else {
        return true;
      }
    },
    passwordRepeatRules() {
      if (!this.signupData.passwordRepeat) {
        return "Bitte Feld ausfüllen";
      } else if (this.signupData.password !== this.signupData.passwordRepeat) {
        return "Die Beiden Passwörter stimmen nicht überein";
      } else {
        return true;
      }
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.signUp();
      }
    },
    //Function to sign up new user
    async signUp() {
      if (this.role == "Lehrperson") {
        this.grade = null;
      }
      if (this.role == "Lernende/r") {
        this.masterPassword = null;
      }
      try {
        let response = await axios
          .post("/api/users", this.signupData)
          .then(response => response.data);
        this.errorMsg = response.msg;
        this.$router.push("/login");
      } catch (error) {
        this.errorMsg = error.response.data.msg;
      }
    }
  }
};
</script>