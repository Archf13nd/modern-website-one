<template>
  <the-hero></the-hero>
  <the-about
    @aboutRef="aboutRef = $event"
    @cardsRef="cardsRef = $event"
    @outroRef="outroRef = $event"
    :animateAbout="animateAbout"
    :animateCards="animateCards"
    :animateOutro="animateOutro"
  ></the-about>
  <the-portfolio
    :animatePortfolio="animatePortfolio"
    @portfolioRef="portfolioRef = $event"
  ></the-portfolio>
  <the-contact-form
    @contactRef="contactRef = $event"
    :animateContact="animateContact"
  ></the-contact-form>
</template>
<script>
import TheHero from "../components/homepage/Hero.vue";
import TheAbout from "../components/homepage/About.vue";
import ThePortfolio from "../components/homepage/Portfolio.vue";
import TheContactForm from "../components/global/Contact.vue";
export default {
  data() {
    return {
      aboutRef: null,
      outroRef: null,
      cardsRef: null,
      contactRef: null,
      portfolioRef: null,
      animateAbout: false,
      animateOutro: false,
      animateCards: false,
      animatePortfolio: false,
      animateContact: false,
    };
  },
  components: {
    TheHero,
    TheAbout,
    ThePortfolio,
    TheContactForm,
  },
  mounted() {
    if (window.screenX < 1000) {
      this.animate = true;
    }

    let options = {
      root: null,
      threshold: 0.2,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        console.log(entry.target === this.aboutRef);
        if (!entry.isIntersecting) {
          return;
        }
        if (entry.target === this.aboutRef) {
          this.animateAbout = true;
          console.log(entry, "About");
        } else if (entry.target === this.cardsRef) {
          this.animateCards = true;
        } else if (entry.target === this.portfolioRef) {
          this.animatePortfolio = true;
        } else if (entry.target === this.contactRef) {
          this.animateContact = true;
          console.log("hahaha");
        } else {
          this.animateOutro = true;
        }
      });
    }, options);

    observer.observe(this.aboutRef);
    observer.observe(this.outroRef);
    observer.observe(this.cardsRef);
    observer.observe(this.portfolioRef);
    observer.observe(this.contactRef);
  },
};
</script>
<style lang="scss" scoped></style>
