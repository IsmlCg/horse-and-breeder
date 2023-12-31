import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/index.js";
import "./assets/css/template.css";
createApp(App).use(router).mount("#app");
