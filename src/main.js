import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/index.js";
import "./assets/css/template.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/theme.min.css";
import { createHead } from "@vueuse/head";

const head = createHead();
createApp(App).use(head).use(router).mount("#app");
