<script>
// Modules
import axios from "axios";

// Components
import CardProduct from "@/components/CardProduct.vue";
import CardProductSkeleton from "@/components/CardProductSkeleton.vue";

export default {
  name: "Category",
  components: {
    CardProduct,
    CardProductSkeleton,
  },

  data() {
    return {
      isLoading: true,
      electronicsProduct: [],
      mensClothingProduct: [],
      womensClothingProduct: [],
      jeweleryProduct: [],
    };
  },

  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const datas = response.data;
        const sortedProducts = datas.sort((a, b) => {
          return a.id - b.id;
        });

        // Sortproduct by category
        sortedProducts.filter((product) => {
          switch (product.category) {
            case "electronics":
              this.electronicsProduct.push(product);
              break;
            case "men's clothing":
              this.mensClothingProduct.push(product);
              break;
            case "women's clothing":
              this.womensClothingProduct.push(product);
              break;
            case "jewelery":
              this.jeweleryProduct.push(product);
              break;
          }
        });

        // Set loading false
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      })

      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<template>
  <div class="category">
    <!-- Electronics product -->
    <h1 class="text-black">ELECTRONICS</h1>
    <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
      <div v-for="product in electronicsProduct" :key="product.id">
        <div v-if="isLoading">
          <CardProductSkeleton />
        </div>
        <div v-else>
          <CardProduct :productImg="product.image" :productCategory="product.category" :productTitle="product.title" :productPrice="product.price" :productRating="product.rating.rate" :productRatingSale="product.rating.count" />
        </div>
      </div>
    </div>

    <!-- Mens Clothing Product -->
    <h1 class="text-black">Mens Clothing</h1>
    <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
      <div v-for="product in mensClothingProduct" :key="product.id">
        <div v-if="isLoading">
          <CardProductSkeleton />
        </div>
        <div v-else>
          <CardProduct :productImg="product.image" :productCategory="product.category" :productTitle="product.title" :productPrice="product.price" :productRating="product.rating.rate" :productRatingSale="product.rating.count" />
        </div>
      </div>
    </div>

    <!-- Womens Clothing Product -->
    <h1 class="text-black">Womens Clothing</h1>
    <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
      <div v-for="product in womensClothingProduct" :key="product.id">
        <div v-if="isLoading">
          <CardProductSkeleton />
        </div>
        <div v-else>
          <CardProduct :productImg="product.image" :productCategory="product.category" :productTitle="product.title" :productPrice="product.price" :productRating="product.rating.rate" :productRatingSale="product.rating.count" />
        </div>
      </div>
    </div>

    <!-- Jewelery Product -->
    <h1 class="text-black">Jewelery</h1>
    <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
      <div v-for="product in jeweleryProduct" :key="product.id">
        <div v-if="isLoading">
          <CardProductSkeleton />
        </div>
        <div v-else>
          <CardProduct :productImg="product.image" :productCategory="product.category" :productTitle="product.title" :productPrice="product.price" :productRating="product.rating.rate" :productRatingSale="product.rating.count" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category {
  /* padding-top: 10vh; */
  padding: 10vh 2vh;
}

@media (min-width: 900px) {
  .category {
    padding: 10vh 5rem;
  }
}
</style>
