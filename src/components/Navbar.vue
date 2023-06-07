<template>
  <div id="navbar" class="navbar navbar-expand-lg fixed-top bg-success w-100">
    <div class="container">
      <router-link to="/" class="navbar-brand fs-2 fw-bold text-white">Fearpedia</router-link>
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/category" class="nav-link text-white">Category</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link text-white">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link text-white">Sign in</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>
