<template >
  <nav class="navbar navbar-expand-lg">
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
              <li>
                <a class="dropdown-item" href="#" @click="setCategorySearch('')"
                  >All products</a
                >
              </li>
              <hr />
              <li
                v-for="category in categories"
                :key="category"
                @click="setCategorySearch(category)"
              >
                <a class="dropdown-item" href="#">{{ category }}</a>
                <hr />
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
  methods: {
    ...mapActions(["localGetCategories", "setCategorySearch", "getCachedData"]),
  },
  computed: {
    ...mapState(["categories"]),
  },
  created() {
    this.getCachedData((res) => res);
    if (this.categories?.length < 1) {
      this.localGetCategories();
    }
  },
};
</script>
<style lang="css">
hr {
  margin: 0px !important;
}
.navbar {
  font-size: 1.2rem;
  background-color: rgb(248, 135, 135) !important;
}
.navbar a {
  color: white;
}
.navbar a:hover {
  color: white;
  font-weight: bold;
}
.navbar a:focus {
  color: white;
}
.dropdown-item {
  color: rgb(248, 135, 135) !important;
}
.dropdown-item:focus {
  background: white !important;
}
.dropdown-item {
  padding: 1rem !important;
}
.dropdown-menu {
  padding: 0px !important;
}
.navbar-toggler-icon {
  color: white !important;
}
</style>
