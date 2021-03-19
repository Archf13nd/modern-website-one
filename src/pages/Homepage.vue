<template>
  <the-hero></the-hero>
  <the-about></the-about>
</template>
<script>
import TheHero from "../components/homepage/Hero.vue";
import TheAbout from "../components/homepage/About.vue";
export default {
  components: {
    TheHero,
    TheAbout,
  },
};
</script>
<style lang="scss" scoped></style>
