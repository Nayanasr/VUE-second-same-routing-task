<template>
  <div class="c1">
    <div
      class="card"
      style="width: 20rem"
      v-for="product in products"
      :key="product.id"
    >
      <img
        class="card-img-top"
        :src="product.productImageURL"
        alt="Card image cap"
      />
      <div class="card-body">
        <h4 class="card-title">name: {{ product.productName }}</h4>
        <p class="card-text">price: {{ product.productPrice }}</p>
        <p class="card-text">description: {{ product.productDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style>
.c1 {
  display: flex;
  height: 8rem;
  margin-left: 10px;
  column-gap: 40px;
}
</style>