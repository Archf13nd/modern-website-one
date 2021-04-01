import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/routes.js";

createApp(App)
  .use(Router)
  .mount("#app");
