import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Category from "../views/Category.vue";

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
];

const router = new VueRouter({
  routes,
});

export default router;
