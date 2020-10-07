import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",

    redirect: "/goods",
  },
  {
    path: "/goods",
    name: "Goods",
    component: () => import("../views/goods/index.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/goods/detail.vue"),
  },
  {
    path: "/ratings",
    name: "Ratings",
    component: () => import("../views/ratings/index.vue"),
  },
  {
    path: "/seller",
    name: "Seller",
    component: () => import("../views/seller/index.vue"),
  },
];

const router = new VueRouter({
  routes,
  // mode: history,
});

export default router;
