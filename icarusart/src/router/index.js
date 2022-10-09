import { createRouter, createWebHistory, scrollBehavior } from "vue-router";
import HomePage from "../views/HomePage/HomePage.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/gallery",
    name: "Gallery",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Gallery/Gallery.vue"),
  },
  {
    path: "/createCollection",
    name: "CreateCollection",
    component: () => import("../views/Collection/Collection.vue"),
  },
  {
    path: "/mint",
    name: "Mint",
    component: () => import("../views/Mint/Mint.vue"),
  },
  {
    path: "/multiCollections",
    name: "MultiCollections",
    component: () => import("../views/MultiCollections/MultiCollections.vue"),
  },
  {
    path: "/singleCollections",
    name: "SingleCollections",
    component: () => import("../views/SingleCollection/SingleCollection.vue"),
  },
  {
    path: "/personal",
    name: "Personal",
    component: () => import("../views/PersonalPage/PersonalPage.vue"),
  },
  {
    path: "/setPrice",
    name: "SetPrice",
    component: () => import("../views/SetPrice/SetPrice.vue"),
  },
  {
    path: "/collection",
    name: "Collection",
    component: () => import("../views/CollectionInfo/CollectionInfo.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile/Profile.vue"),
  },
];
var baseUrl = window.localStorage.baseUrl;
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
