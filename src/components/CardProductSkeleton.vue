<script>
export default {
  name: "CardProductSkeleton",
};
</script>

<template>
  <b-card>
    <b-skeleton-img width="190px" height="250px"></b-skeleton-img>
    <div class="skeleton-body h-25 mt-2">
      <b-skeleton animation="wave" width="50%"></b-skeleton>
      <b-skeleton animation="wave" width="85%"></b-skeleton>
      <b-skeleton animation="wave" width="70%"></b-skeleton>
    </div>
  </b-card>
</template>
