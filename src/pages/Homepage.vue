<template>
  <the-hero></the-hero>
  <the-about @aboutRef="aboutRef = $event" :animate="animate"></the-about>
</template>
<script>
import TheHero from "../components/homepage/Hero.vue";
import TheAbout from "../components/homepage/About.vue";
export default {
  data() {
    return {
      aboutRef: null,
      animate: false,
    };
  },
  components: {
    TheHero,
    TheAbout,
  },
  mounted() {
    const adjustNav = (value) => {
      this.animate = value;
    };
    const element = this.aboutRef;
    function createObserver() {
      let observer;

      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      observer = new IntersectionObserver((entry) => {
        if (entry[0].isIntersecting) {
          adjustNav(true);
          console.log(true);
        } else {
          adjustNav(false);
          console.log(false);
        }
      }, options);
      observer.observe(element);
    }
    createObserver();
  },
};
</script>
<style lang="scss" scoped></style>
