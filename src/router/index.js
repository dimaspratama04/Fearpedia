import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Category from "../views/Category.vue";
import Checkout from "@/views/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/category",
    name: "category",
    component: Category,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
