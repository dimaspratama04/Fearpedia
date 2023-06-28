<template>
  <div class="category">
    <div
      class="category-button w-100 my-3 d-flex gap-2 flex-wrap justify-content-lg-end"
    >
      <b-button pill @click="scrollToAnchorPoint('electronics')"
        >Electronics</b-button
      >
      <b-button pill @click="scrollToAnchorPoint('mensClothing')"
        >Mens Clothing</b-button
      >
      <b-button pill @click="scrollToAnchorPoint('womensClothing')"
        >Womens Clothing</b-button
      >
      <b-button pill @click="scrollToAnchorPoint('jewelery')"
        >Jewelery</b-button
      >
    </div>

    <!-- Electronics product -->
    <div
      ref="electronics"
      class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2"
    >
      <div v-for="product in electronicsProduct" :key="product.id">
        <div v-if="isLoading">
          <CardProductSkeleton />
        </div>
        <div v-else>
          <CardProduct
            :productImg="product.image"
            :productCategory="product.category"
            :productTitle="product.title"
            :productPrice="product.price"
            :productRating="product.rating.rate"
            :productRatingSale="product.rating.count"
          />
        </div>
      </div>
    </div>

    <!-- Mens Clothing Product -->
    <div
      ref="mensClothing"
      class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2"
    >
      <div v-for="product in mensClothingProduct" :key="product.id">
        <div v-if="isLoading">
          <CardProductSkeleton />
        </div>
        <div v-else>
          <CardProduct
            :productImg="product.image"
            :productCategory="product.category"
            :productTitle="product.title"
            :productPrice="product.price"
            :productRating="product.rating.rate"
            :productRatingSale="product.rating.count"
          />
        </div>
      </div>
    </div>

    <!-- Womens Clothing Product -->
    <div
      ref="womensClothing"
      class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2"
    >
      <div v-for="product in womensClothingProduct" :key="product.id">
        <div v-if="isLoading">
          <CardProductSkeleton />
        </div>
        <div v-else>
          <CardProduct
            :productImg="product.image"
            :productCategory="product.category"
            :productTitle="product.title"
            :productPrice="product.price"
            :productRating="product.rating.rate"
            :productRatingSale="product.rating.count"
          />
        </div>
      </div>
    </div>

    <!-- Jewelery Product -->
    <div
      ref="jewelery"
      class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2"
    >
      <div v-for="product in jeweleryProduct" :key="product.id">
        <div v-if="isLoading">
          <CardProductSkeleton />
        </div>
        <div v-else>
          <CardProduct
            :productImg="product.image"
            :productCategory="product.category"
            :productTitle="product.title"
            :productPrice="product.price"
            :productRating="product.rating.rate"
            :productRatingSale="product.rating.count"
          />
        </div>
      </div>
    </div>
  </div>
</template>

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

  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: "smooth" });
    },
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
              console.log(product);
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
