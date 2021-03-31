import { createWebHistory, createRouter } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import Blog from "../pages/Blog.vue";
import BlogCards from "../components/blog/BlogCards.vue";
import BlogArticle from "../components/blog/BlogArticle.vue";

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
  history: createWebHistory(),
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
