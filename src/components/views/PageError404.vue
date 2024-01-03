<template>
  <div id="content" role="main">
    <!-- Content -->
    <div class="container text-center">
      <div class="mb-4">
        h1 class="display-1" 404 h3 class="mb-1" Something went wrong p The page
        you are looking for does not exist!
      </div>
      <router-link to="/"> Go back home </router-link>
    </div>
    <!-- End Content -->
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>