<template>
  <div class="home container d-flex flex-wrap p-2">
    <div class="row gy-3">
      <div
        class="col-md-6 col-lg-4 col-xl-3"
        v-for="product in products"
        :key="product.image"
        v-show="product.category === categorySearch"
      >
        <Card
          :title="product.title"
          :image="product.image"
          :price="product.price"
        />
      </div>
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
    return {};
  },
  methods: {
    ...mapActions(["localGetProducts", "localGetCategories"]),
  },
  computed: {
    ...mapState(["products", "categories", "categorySearch"]),
  },
  created() {
    this.localGetProducts();
    this.localGetCategories();
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
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.card-image {
}
.card-body {
  width: fit-content;
}

.btn {
  border-radius: 0;
}

.img-thumbnail {
  border: none !important;
  height: 200px !important;
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
  box-shadow: inset 100vw 0 0 0 rgb(194, 194, 194);
  color: white;
}
</style>
