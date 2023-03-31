<template >
  <article class="card w-100 h-100 p-3">
    <img class="img-thumbnail" :src="image" alt="Product img" />
    <div class="card-body text-center mx-auto d-flex align-items-end">
      <div class="cvp">
        <p class="card-title">{{ title }}</p>
        <h6 class="card-text">{{ price }} €</h6>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
};
</script>