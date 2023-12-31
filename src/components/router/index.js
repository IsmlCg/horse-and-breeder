// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import HorseDetail from "../views/HorseDetail.vue";
import RegisterHorse from "../views/RegisterHorse";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/horse/:id",
    name: "HorseDetail",
    component: HorseDetail,
    props: true,
  },
  {
    path: "/register-horse/",
    name: "RegisterHorse",
    component: RegisterHorse,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
