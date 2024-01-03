// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import HorseDetail from "../views/HorseDetail.vue";
import RegisterHorse from "../views/RegisterHorse";
import NotFound from "../views/PageError404";
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
  // Catch-all route for 404 Not Found
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "horse and breeder";
  next();
});

export default router;
