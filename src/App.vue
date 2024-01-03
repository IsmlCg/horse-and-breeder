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
export default {
  name: "App",
  components: { NavBar, AppFooter },
};
</script>
 
