import { createWebHistory, createRouter } from "vue-router";

import Homepage from "../views/Homepage.vue";
import Blog from "../views/Blog.vue";
import BlogCards from "../components/view-specific/blog/TheCards.vue";
import BlogArticle from "../components/view-specific/blog/TheArticle.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    children: [
      { path: "/blog", component: BlogCards },
      { path: "/blog/:id", component: BlogArticle },
    ],
  },
];

const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
});

export default router;
