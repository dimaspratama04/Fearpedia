<script>
// Components
// import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Checkout",
  // components: {
  //   CardProduct,
  // },

  data() {
    return {
      checkoutedProducts: [],
    };
  },

  mounted() {
    const data = localStorage.getItem("checkoutedProducts");
    if (data) {
      this.checkoutedProducts = JSON.parse(data);
    }
  },

  methods: {
    clearCheckout() {
      localStorage.removeItem("checkoutedProducts");
      this.checkoutedProducts = [];
    },

    removeProduct(product) {
      let checkouted = JSON.parse(localStorage.getItem("checkoutedProducts")) || [];

      checkouted = checkouted.filter((item) => item.id !== product.id);

      localStorage.setItem("checkoutedProducts", JSON.stringify(checkouted));

      this.checkoutedProducts = checkouted;
    },

    submitCheckout() {
      const checkoutData = JSON.stringify(this.checkoutedProducts);
      console.log(checkoutData);
    },
  },
};
</script>

<template>
  <div class="category">
    <!-- List checkouted product -->
    <h1 class="text-black">Checkouted product</h1>
    <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
      <div v-if="checkoutedProducts.length === 0">
        <p>No item checked out.</p>
      </div>

      <div v-for="product in checkoutedProducts" :key="product.id">
        <div v-for="(product, index) in checkoutedProducts" :key="product.id" class="checkout-item">
          <div class="checkout-product d-flex justify-content-between align-items-centerr">
            <div class="product-info d-flex mt-5">
              <div class="ms-2">
                <h5>{{ product.name }}</h5>
                <p>Kategori: {{ product.category }}</p>
                <p>Rating: {{ product.rating.rate }} ({{ product.rating.count }})</p>
              </div>
            </div>
            <div class="product-price text-danger fw-bold">${{ product.price }}</div>
          </div>
          <div class="d-flex justify-content-end">
            <button @click="removeProduct(product, index)" class="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="checkoutedProducts.length !== 0">
      <button @click="clearCheckout" class="btn btn-danger mt-3">Kosongkan Keranjang</button>
      <button @click="submitCheckout" class="btn btn-danger mt-3">checkout</button>
    </div>
  </div>
</template>

<style scoped>
.checkout-item {
  margin-bottom: 15px; /* Menambahkan gap antar produk */
  padding: 10px;
  border-radius: 8px;
  background-color: #b0adad; /* Atur warna latar belakang jika diinginkan */
}

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
