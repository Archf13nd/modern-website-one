<template>
  <the-header></the-header>
  <the-homepage></the-homepage>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/UI/Header.vue";
import TheHomepage from "./pages/Homepage.vue";
import TheFooter from "./components/UI/Footer.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheHomepage,
    TheFooter,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 10rem;
}

// @keyframes slide-in {
//   from {
//     transform: translateX(-50rem);
//   }
//   to {
//     transform: none;
//   }
// }

// @keyframes slideLeft {
//   from {
//     transform: translateX(10rem);
//   }
//   to {
//     transform: none;
//   }
// }
</style>
