<template>
  <!-- Header -->
  <header
    class="docs-navbar navbar navbar-expand-lg navbar-end navbar-light bg-white"
  >
    <div class="container">
      <div class="js-mega-menu navbar-nav-wrap">
        <!-- Logo -->
        <router-link to="/">
          <img
            class="navbar-brand-logo"
            src="./../../assets/logo.png"
            alt="Logo"
          />
        </router-link>

        <!-- End Logo -->

        <!-- Toggle -->
        <button
          type="button"
          @click="toggleButton"
          class="navbar-toggler ms-auto"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavMenuWithMegaMenu"
          aria-label="Toggle navigation"
          aria-expanded="false"
          aria-controls="navbarNavMenuWithMegaMenu"
        >
          <span class="navbar-toggler-default">
            <i class="bi-list"></i>
          </span>
          <span class="navbar-toggler-toggled">
            <i class="bi-x"></i>
          </span>
        </button>
        <!-- End Toggle -->

        <nav
          class="navbar-nav-wrap-col collapse navbar-collapse"
          id="navbarNavMenuWithMegaMenu"
          @click="toggleButton"
        >
          <!-- Navbar -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'RegisterHorse' }" class="nav-link">
                Register horse
              </router-link>
            </li>
            <!-- Log in -->
            <li class="nav-item">
              <router-link
                :to="{ name: 'SignIn' }"
                class="btn btn-ghost-dark me-2 me-lg-0"
              >
                Log in
              </router-link>
              <a class="btn btn-dark d-lg-none" href="#">Sign up</a>
            </li>
            <!-- Sign up -->
            <li class="nav-item">
              <a class="btn btn-dark d-none d-lg-inline-block" href="#"
                >Sign up</a
              >
            </li>
            <!-- End Sign up -->
          </ul>
          <!-- End Navbar -->
        </nav>
      </div>
    </div>
  </header>
  <!-- End Header -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleButton() {
      // Toggle the visibility of the button
      var nav = document.getElementById("navbarNavMenuWithMegaMenu");
      // Toggle the nav's visibility
      if (nav.style.display == "none" || nav.style.display == "") {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }
    },
  },
};
</script>