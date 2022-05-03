import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import Login from "../views/2.vue"
import aa from "../views/3.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/admin",
      name: "admin",
      component: import("../views/admin.vue"),
    },
    {
      path: "/",
      redirect: "/home"
    },
  ]
})

export default router
