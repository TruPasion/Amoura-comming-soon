// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/Landingpage.vue";

const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/terms",
    component: LandingPage,
  },
  {
    path: "/privacy",
    component: LandingPage,
  },
  {
    path: "/refund",
    component: LandingPage,
  },
  {
    path: "/userguide",
    component: LandingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
