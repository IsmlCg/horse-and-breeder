// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import HorseDetail from "../views/HorseDetail.vue";
import RegisterHorse from "../views/RegisterHorse";
import NotFound from "../views/PageError404";
import SignIn from "../views/SignIn";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/horse/:id",
    name: "HorseDetail",
    component: HorseDetail,
    props: true,
  },
  {
    path: "/register-horse",
    name: "RegisterHorse",
    component: RegisterHorse,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  // Catch-all route for 404 Not Found
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    name: "NotFound",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
