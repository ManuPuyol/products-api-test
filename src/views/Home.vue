<template>
  <div class="home container d-flex flex-wrap border p-2">

 <article class='card col-12 col-md-6 col-lg-3'  v-for="image in productsList"
        :key="image.image">
    <img class="img-thumbnail" :src="image.image" :alt="image">
    <div class="card-body text-center mx-auto">
          <div class="cvp">
            <h5 class="card-title font-weight-bold">{{ image.title }}</h5>
            <p class="card-text">{{ image.price }} €</p>
          </div>
        </div>
  </article>

    <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
      <div class="card"  style="width: 18rem;"  v-for="image in productsList"
        :key="image.image">
 <img class="mx-auto img-thumbnail img-fluid" :src="image.image" :alt="image" />
  <div class="card-body">
   <div class="cvp">
            <h5 class="card-title font-weight-bold">{{ image.title }}</h5>
            <p class="card-text">{{ image.price }} €</p>
          </div>  </div>
</div>
      <div
        class="card mx-auto col-md-3 col-10 mt-5"
        v-for="image in productsList"
        :key="image.image"
      >
        <div class="card-image mx-auto">
          <img class="mx-auto img-thumbnail img-fluid" :src="image.image" :alt="image" />
        </div>

        <div class="card-body text-center mx-auto">
          <div class="cvp">
            <h5 class="card-title font-weight-bold">{{ image.title }}</h5>
            <p class="card-text">{{ image.price }} €</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      productsList: [],
    };
  },
  methods: {
    async loadData() {
      await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      })
        .then((response) => {
          console.log(response);
          this.productsList = response.data;
        })
        .catch((error) => {
          //onError(error)
        });
    },
  },
  created() {
    this.loadData();
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
  height: 200px !;
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
  height: 200px;
  object-fit: contain;
}

.card {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding-bottom: 10px;
}
</style>
