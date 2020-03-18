/**
 * Author:      Luxmithan Sukumar
 * File name:   index.js
 * Version:     1.0
 * Description: Router configurations for Tagesplaner
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import MyGoals from '../views/MyGoals.vue'
import AllGoals from '../views/AllGoals.vue'
import Profile from '../views/Profile.vue'
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/myGoals",
    name: "myGoals",
    component: MyGoals
  },
  {
    path: "/allGoals",
    name: "allGoals",
    component: AllGoals
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  //user goes to "Login" on any other path
  {
    path: "*",
    name: "other",
    component: Login
  }
]

let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router