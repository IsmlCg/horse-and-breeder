<template>
  <!-- ========== MAIN CONTENT ========== -->
  <div id="content" role="main">
    <!-- Content -->
    <div class="container text-center">
      <div class="mb-4">
        <h1 class="display-1">404</h1>
        <h3 class="mb-1">Something went wrong</h3>
        <p>The page you are looking for does not exist!</p>
      </div>
      <router-link to="/"> Go back home </router-link>
    </div>
    <!-- End Content -->
  </div>
  <!-- ========== END MAIN CONTENT ========== -->
</template>
<script>
export default {
  name: "NotFound",
};
</script>