<!--
 * Author:      Luxmithan Sukumar
 * File name:   MyGoals.vue
 * Version:     1.0
 * Description: View for goals of logged in user
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
        <!--Shows if past date-->
        <v-btn v-if="deviation<0" text icon @click="changeDate(1)">
          <v-icon>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-col>
    </v-toolbar>
    <!--Shows if present date-->
    <div v-if="deviation===0">
      <div class="ma-4 pa-2">
        <v-btn v-if="!goalForm" color="primary" @click="goalForm=true">Ziele hinzufügen</v-btn>
        <!--Form to create goal-->
        <v-form v-else ref="create" class="justify-center">
          <template>
            <v-text-field
              outlined
              label="Ziel"
              v-model="newGoal.goal"
              :rules="goalRules"
              counter="30"
            ></v-text-field>
            <v-textarea
              outlined
              label="Beschreibung"
              v-model="newGoal.description"
              :rules="descriptionRules"
              counter="2000"
            ></v-textarea>
            <v-btn color="error" class="mr-2" @click="goalForm=false">Schliessen</v-btn>
            <v-btn color="success" @click="validateCreate">Ziel hinzufügen</v-btn>
          </template>
        </v-form>
      </div>
      <v-divider></v-divider>
    </div>
    <!--Form to update goal-->
    <v-form ref="update">
      <v-menu
        v-model="menu"
        absolute
        :close-on-content-click="false"
        :nudge-width="500"
        :position-x="350"
        :position-y="200"
      >
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-text-field
                    class="mt-1"
                    outlined
                    label="Ziel"
                    v-model="editedGoal.goal"
                    :rules="goalRules"
                    counter="30"
                  ></v-text-field>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-textarea
                  outlined
                  overflow
                  label="Beschreibung"
                  v-model="editedGoal.description"
                  :rules="descriptionRules"
                  counter="2000"
                ></v-textarea>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-textarea
                  outlined
                  overflow
                  label="Was ist gut gelaufen? Warum evtl. nicht fertig geworden?"
                  v-model="editedGoal.comment"
                  :rules="[ commentRules ]"
                  counter="255"
                ></v-textarea>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="menu = false">Abbrechen</v-btn>
            <v-btn color="primary" text @click="validateUpdate()">Speichern</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-form>
    <!-- Displays filtered goals if exists-->
    <v-expansion-panels v-if="filteredGoals.length" v-model="panel" multiple focusable>
      <v-expansion-panel v-for="(item, index) in filteredGoals" :key="index">
        <v-divider></v-divider>
        <v-expansion-panel-header>
          <v-col class="text-center ml-4">{{ item.goal }}</v-col>
        </v-expansion-panel-header>
        <!-- Displays if present day-->
        <div v-if="deviation===0" class="ma-2">
          <v-btn v-if="item.finished" outlined color="success" @click="finishGoal(item)">
            <v-icon>mdi-check</v-icon>
          </v-btn>
          <v-btn v-else outlined color="error" @click="finishGoal(item)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-btn class="ml-2 mr-2" outlined color="indigo" dark @click="editGoal(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn class="mr-2" outlined color="error" dark @click="deleteGoal(item)">
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
        </div>
        <div v-else class="ma-2">
          <p v-if="item.finished" class="success--text">Wurde fertig gemacht.</p>
          <p v-else class="error--text">Wurde nicht fertig gemacht.</p>
        </div>
        <v-expansion-panel-content @click="menu=false">
          <v-divider></v-divider>
          <div class="ma-3">{{ item.description }}</div>
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

import { formatDate, GoalParent as Goal } from './goalFuncs';

@Component
export default class MyGoals extends Vue {
  private loading = true;

  private dateFormatted = '';

  private deviation = 0;

  private myId = 0;

  private myGoals: Goal[] = [];

  private panel?: number[];

  private menu = false;

  private editedIndex = 0;

  private editedGoal: Goal = {
    goal: '',
    description: '',
    comment: '',
  };

  private goalForm = false;

  private newGoal: Goal = {
    goal: '',
    description: '',
  }

  // Validation rules
  private goalRules = [
    (v: string) => !!v || 'Bitte Name des Ziels hinzufügen',
    (v: string) => (v && v.length <= 30)
      || 'Der Name des Ziels darf maximal 30 Zeichen lang sein.',
  ]

  private descriptionRules = [
    (v: string) => !!v || 'Bitte Beschreibung des Ziels hinzufügen',
    (v: string) => (v && v.length <= 2000)
      || 'Die Beschreibung des Ziels darf maximal 2000 Zeichen lang sein.',
  ]

  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }
    this.init();
  }

  public commentRules(): boolean | string {
    if (this.editedGoal.comment && this.editedGoal.comment.length >= 255) {
      return 'Der Kommentar des Ziels darf maximal 255 Zeichen lang sein.';
    }
    return true;
  }

  // Loads goals of user
  public async init(): Promise<void> {
    this.changeDate(0);
    this.myId = this.$store.getters.getUser.id;
    this.myGoals = await axios
      .get(`/api/goals/${this.myId}`)
      .then(results => results.data)
      .catch(err => console.log(err));
    this.loading = false;
    this.newGoal = {
      goal: '',
      description: '',
      date: this.dateFormatted,
      userFK: this.myId,
    };
  }

  // Displays menu to update goal
  public editGoal(item: Goal): void {
    setTimeout(() => {
      this.menu = true;
    }, 1);
    this.editedIndex = this.myGoals.indexOf(item);
    this.editedGoal = {
      id: item.id,
      goal: item.goal,
      description: item.description,
      comment: item.comment,
    };
  }

  public validateCreate(): void {
    if ((this.$refs.create as Vue & { validate: () => boolean }).validate()) {
      this.createGoal();
    }
  }

  public validateUpdate(): void {
    if ((this.$refs.update as Vue & { validate: () => boolean }).validate()) {
      this.updateGoal();
    }
  }

  // inserts new goal
  public async createGoal(): Promise<void> {
    this.newGoal.id = await axios
      .post('/api/goals', this.newGoal)
      .then(results => results.data[0])
      .catch(err => console.log(err));
    this.myGoals.push(this.newGoal);
    this.newGoal = {
      goal: '',
      description: '',
      date: this.dateFormatted,
      userFK: this.myId,
    };
    (this.$refs.create as Vue & { resetValidation: () => void }).resetValidation();
  }

  // Updates goal
  public async updateGoal(): Promise<void> {
    axios
      .put('/api/goals', this.editedGoal)
      .then(results => results.data)
      .catch(err => console.log(err));
    Object.assign(this.myGoals[this.editedIndex], this.editedGoal);
    this.menu = false;
  }

  // Deletes goal entry
  public async deleteGoal(item: Goal): Promise<void> {
    const index: number = this.myGoals.indexOf(item);
    this.myGoals.splice(index, 1);
    axios.delete(`/api/goals/${item.id}`);
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["finishGoal"] }] */
  // Changes finished status of goal
  public async finishGoal(item: Goal): Promise<void> {
    item.finished = !item.finished ? 1 : 0;
    axios.put('/api/goals', { id: item.id, finished: item.finished });
  }

  // Changes date of presented goals
  public changeDate(change: number): void {
    this.panel = [];
    this.deviation += change;
    const today = new Date();
    const dateChoosen = today.setDate(today.getDate() + this.deviation);
    this.dateFormatted = formatDate(dateChoosen);
  }

  // Filters presented goals
  get filteredGoals() {
    let myFilteredGoals = this.myGoals;
    // Filters goals to accommodate dateFormatted
    myFilteredGoals = myFilteredGoals.filter(
      (goal: Goal) => goal.date === this.dateFormatted,
    );
    return myFilteredGoals;
  }
}
</script>
