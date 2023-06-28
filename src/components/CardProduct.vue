<template>
  <div class="card p-2">
    <div class="product-img-wrapper d-flex justify-content-center">
      <img :src="productImg" alt="productImg"/>
    </div>

    <!-- Card Title and Category -->
    <div class="p-2 mt-2 bg-body-secondary h-100">
      <p class="card-category fw-thin text-uppercase">{{ productCategory }}</p>
      <p class="card-title fw-bold">{{ productTitle }}</p>
      <h4 class="card-product-price text-danger fw-bold">$ {{ productPrice }}</h4>
      <div class="card-product-cta mt-2">
        <b-icon-star-fill variant="warning"></b-icon-star-fill>
        <span class="ms-2">{{ productRating }} | Sold {{ productRatingSale }}pcs</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    productImg: String,
    productTitle: String,
    productCategory: String,
    productPrice: String,
    productRating: String,
    productRatingSale: String,
  },
};
</script>

<style scoped>
/* Card */
.card {
  width: 270px;
  height: 400px;
}

.card-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-img-wrapper img {
  width: 200px;
  height: 200px;
}

/* Phone */
@media (max-width: 768px) {
  .card {
    width: 190px;
    height: 350px;
  }
  .product-img-wrapper img {
    width: 150px;
    height: 150px;
  }
}
</style>
