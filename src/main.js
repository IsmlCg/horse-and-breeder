import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/index.js";
import "./assets/css/template.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/theme.min.css";
// main.js or main.ts
// import "bootstrap/dist/css/bootstrap.css";
// main.js or main.ts
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

createApp(App).use(router).mount("#app");

// Set favicon
const link = document.createElement("link");
link.rel = "shortcut icon";
link.href = "https://htmlstream.com/unify/favicon.ico";
document.head.appendChild(link);
