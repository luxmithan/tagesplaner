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
        <v-btn v-if="deviation < 0" text icon @click="changeDate(1)">
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
          <v-alert class="mt-2" v-if="item.comment" dense text type="info" width="96%">{{
            item.comment
          }}</v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-progress-linear v-if="loading" class="pa-1" indeterminate></v-progress-linear>
    <!-- If there are no goals-->
    <v-toolbar v-if="!filteredGoals.length && !loading">Keine Einträge gefunden.</v-toolbar>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

import { formatDate, GoalParent } from './goalFuncs';

interface Goal extends GoalParent {
  id: number;
  comment: string | null;
  date: string;
  userFK: number;
  finished: number;
  userfull: string;
  grade: string | null;
}

@Component
export default class AllGoals extends Vue {
  private loading = true;

  private dateFormatted = '';

  private deviation = 0;

  private allGoals = [];

  private panel?: number[];

  private searchName = '';

  private filterGrade = '';

  private filterFinished = '';

  private grades: string[] = ['in17', 'in18', 'in19'];

  private status = ['Nicht Fertig', 'Fertig'];

  // Gets all goals
  public async init(): Promise<void> {
    this.changeDate(0);
    this.allGoals = await axios
      .get('/api/goals')
      .then((results) => results.data)
      .catch((err) => console.log(err));
    this.loading = false;
  }

  // Changes date of presented goals
  changeDate(change: number): void {
    this.panel = [];
    this.deviation += change;
    const today: Date = new Date();
    const dateChoosen: number = today.setDate(today.getDate() + this.deviation);
    this.dateFormatted = formatDate(dateChoosen);
  }

  created(): void {
    if (this.$store.getters.getUser.role !== 'Lehrperson') {
      this.$router.push('/myGoals');
    }
    this.init();
  }

  // Filters presented goals
  get filteredGoals(): Goal[] {
    let allFilteredGoals: Goal[] = this.allGoals;
    // Filter for date
    allFilteredGoals = allFilteredGoals.filter(
      (goal: Goal) =>
        goal.date === this.dateFormatted &&
        goal.userfull.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1
    );
    // Grade filter
    if (this.filterGrade) {
      allFilteredGoals = allFilteredGoals.filter((goal: Goal) => goal.grade === this.filterGrade);
    }
    // Status filter
    if (this.filterFinished) {
      allFilteredGoals = allFilteredGoals.filter(
        (goal: Goal) => goal.finished === this.status.indexOf(this.filterFinished)
      );
    }
    // returns goals after filtering
    return allFilteredGoals;
  }
}
</script>
