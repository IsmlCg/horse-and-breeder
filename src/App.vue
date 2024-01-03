<template>
  <!-- ========== MAIN CONTENT ========== -->
  <title>demo</title>
  <main id="content" role="main">
    <div id="app">
      <NavBar />
      <router-view />
      <AppFooter />
    </div>
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
</template> 
<script>
// import router from "./components/router/index.js";
import NavBar from "./components/views/NavBar";
import AppFooter from "./components/views/AppFooter";
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";

export default {
  name: "App",
  components: { NavBar, AppFooter },
  setup() {
    const siteData = reactive({
      title: "Horse and Breeder",
      description: "Horse and Breeder",
    });
    useHead({
      meta: [
        {
          name: "description",
          content: computed(() => siteData.description),
        },
      ],
      title: computed(() => siteData.title),
      link: [
        {
          href: "/favicon.ico",
          rel: "shortcut icon",
        },
      ],
    });
  },
};
</script>