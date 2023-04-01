<template >
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Shop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </a>
            <ul class="dropdown-menu">
              <li
                v-for="category in categories"
                :key="category"
                @click="setCategorySearch(category)"
              >
                <a class="dropdown-item" href="#">{{ category }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Navbar",
  props: {},
  methods: {
    ...mapActions(["localGetCategories", "setCategorySearch", "getCachedData"]),
  },
  computed: {
    ...mapState(["categories"]),
  },
  created() {
    this.getCachedData(res=>res);
    if (this.categories?.length < 1) {
      this.localGetCategories();
    }
  },
};
</script>