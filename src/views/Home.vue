<template>
  <div class="alert alert-danger" role="alert" v-if="showMsg">
    {{ errorMsg }}
  </div>
  <div class="home container d-flex flex-wrap p-2 my-1">
    <h5 class="my-3" v-if="categorySearch">{{ categorySearch }}</h5>
    <h5 class="my-3" v-else>All products</h5>
    <div class="row gy-3" v-show="!loading">
      <div
        class="col-md-6 col-lg-4 col-xl-3"
        v-for="product in products"
        :key="product.image"
        v-show="product.category === categorySearch || categorySearch === ''"
      >
        <Card
          :title="product.title"
          :image="product.image"
          :price="product.price"
        />
      </div>
    </div>

    <div
      class="spinner-grow text-dark loader d-flex justify-content-center"
      role="status"
      v-if="loading"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/Card.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Card,
  },
  data() {
    return { loading: true, errorMsg: "", showMsg: false };
  },
  methods: {
    ...mapActions(["localGetProducts", "localGetCategories", "getCachedData"]),
  },
  computed: {
    ...mapState(["products", "categories", "categorySearch"]),
  },
  created() {
    if (this.products?.length > 1) {
      this.getCachedData((res) => (this.loading = res));
    } else {
      this.localGetProducts(
        (res) => (this.loading = res),
        (error) => ((this.errorMsg = error), (this.showMsg = true))
      );
    }
  },
};
</script>
<style lang="css">
body {
  background: #e0e0e0;
}
.details {
  border: 1.5px solid grey;
  color: #212121;
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 10px #212121;
}

.cart {
  background-color: #212121;
  color: white;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 900;
  width: 100%;
  height: 39px;
  padding-top: 9px;
  box-shadow: 0px 5px 10px #212121;
}

.card {
  width: fit-content;
}
.card-body {
  width: fit-content;
}

.btn {
  border-radius: 0;
}

.img-thumbnail {
  border: none !important;
  height: 150px !important;
  object-fit: contain;
}

.card {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding-bottom: 10px;
  cursor: pointer;
}
.box {
  padding: 0 5px 0 5px;
}
.card:hover {
  box-shadow:  0 0 0 rgba(250, 184, 184, 0.226);
}
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
}
.home h5{
  color: rgb(248, 135, 135);
}
</style>
