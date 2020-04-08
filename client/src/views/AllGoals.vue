<!--
 * Author:      Luxmithan Sukumar
 * File name:   AllGoals.vue
 * Version:     1.0
 * Description: View for logged in teachers
 -->

<template>
  <v-card width="80%">
    <v-toolbar color="primary" dark flat>
      <v-col>
        <v-btn text icon @click="changeDate(-1)">
          <v-icon>mdi-arrow-left-bold</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-toolbar-title>{{ dateFormatted }}</v-toolbar-title>
      </v-col>
      <v-col>
        <v-btn v-if="deviation<0" text icon @click="changeDate(1)">
          <v-icon>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-col>
    </v-toolbar>
    <!-- Filters for displayed goal entries-->
    <v-toolbar>
      <v-col>
        <v-text-field
          class="mr-2"
          v-model="searchName"
          outlined
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Namenssuche"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select
          class="mr-2"
          v-model="filterGrade"
          outlined
          clearable
          hide-details
          :items="grades"
          prepend-inner-icon="mdi-magnify"
          label="Klasse"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="filterFinished"
          outlined
          clearable
          hide-details
          :items="status"
          prepend-inner-icon="mdi-magnify"
          label="Status"
        ></v-select>
      </v-col>
    </v-toolbar>
    <v-divider></v-divider>
    <!-- Displays all filtered goals if exists-->
    <v-expansion-panels v-if="filteredGoals.length" v-model="panel" multiple focusable>
      <v-expansion-panel v-for="(item, index) in filteredGoals" :key="index">
        <v-expansion-panel-header>
          <v-col>{{ item.grade }} {{ item.userfull }}:</v-col>
          <v-col>{{ item.goal }}</v-col>
          <p v-if="!item.finished" class="error--text">Nicht Fertig</p>
          <p v-else class="success--text">Fertig</p>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="mt-3">
          {{ item.description }}
          <v-alert
            class="mt-2"
            v-if="item.comment"
            dense
            text
            type="info"
            width="96%"
          >{{ item.comment }}</v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-progress-linear v-if="loading" class="pa-1" indeterminate></v-progress-linear>
    <!-- If there are no goals-->
    <v-toolbar v-if="!filteredGoals.length && !loading">Keine Einträge gefunden.</v-toolbar>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "AllGoals",
  data: () => ({
    loading: true,
    dateFormatted: "",
    deviation: 0,
    allGoals: [],
    panel: [],
    searchName: "",
    filterGrade: "",
    grades: ["in17", "in18", "in19"],
    filterFinished: "",
    status: ["Nicht Fertig", "Fertig"]
  }),
  created() {
    if (this.$store.getters.getUser.role !== "Lehrperson") {
      this.$router.push("/myGoals");
    }
    this.init();
  },
  methods: {
    //Gets all goals
    async init() {
      this.changeDate(0);
      this.allGoals = await axios
        .get(`/api/goal/getAll`)
        .then(results => results.data)
        .catch(err => console.log(err));
      this.loading = false;
    },
    //Changes date of presented goals
    changeDate(change) {
      this.panel = [];
      this.deviation += change;
      var today = new Date();
      var dateChoosen = today.setDate(today.getDate() + this.deviation);
      this.dateFormatted = this.formatDate(dateChoosen);
    },
    //Formats date in presentable format
    formatDate(dateString) {
      var d = new Date(dateString);
      var year = d.getFullYear();
      var month = "" + (d.getMonth() + 1);
      var day = "" + d.getDate();
      if (month.length < 2) {
        month = "0" + month;
      }
      if (day.length < 2) {
        day = "0" + day;
      }
      return [year, month, day].join("-");
    }
  },
  computed: {
    //Filters presented goals
    filteredGoals() {
      let allFilteredGoals = this.allGoals;
      //Filter for date
      allFilteredGoals = allFilteredGoals.filter(
        goal =>
          goal.date == this.dateFormatted &&
          goal.userfull.toLowerCase().indexOf(this.searchName.toLowerCase()) >
            -1
      );
      //Grade filter
      if (this.filterGrade) {
        allFilteredGoals = allFilteredGoals.filter(
          goal => goal.grade == this.filterGrade
        );
      }
      //Status filter
      if (this.filterFinished == "Nicht Fertig") {
        allFilteredGoals = allFilteredGoals.filter(goal => goal.finished == 0);
      }
      if (this.filterFinished == "Fertig") {
        allFilteredGoals = allFilteredGoals.filter(goal => goal.finished == 1);
      }
      //returns goals after filtering
      return allFilteredGoals;
    }
  }
};
</script>