/**
 * Author:      Luxmithan Sukumar
 * File name:   index.ts
 * Version:     1.0
 * Description: Router configurations for Tagesplaner
 */

import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import AllGoals from '../views/AllGoals.vue';
import Login from '../views/Login.vue';
import MyGoals from '../views/MyGoals.vue';
import Profile from '../views/Profile.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/myGoals',
    name: 'myGoals',
    component: MyGoals,
  },
  {
    path: '/allGoals',
    name: 'allGoals',
    component: AllGoals,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  // user goes to "Login" on any other path
  {
    path: '*',
    name: 'other',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
