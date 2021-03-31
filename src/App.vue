<template>
  <div id="app" ref="theApp">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/UI/Header.vue";
import TheFooter from "./components/UI/Footer.vue";

export default {
  name: "App",
  components: {
    TheHeader,
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
