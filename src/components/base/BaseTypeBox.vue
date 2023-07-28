<template>
  <article class="article">
    <div class="headings article__headings">
      <transition
        :css="false"
        @enter="enter"
        :style="{ transform: `translateX(${startDistance}px)` }"
      >
        <h3
          v-if="animateTrue || smallScreenTrue"
          class="headings__section-title"
        >
          <slot class="happy" name="h3"></slot>
        </h3>
      </transition>
      <transition
        :css="false"
        @enter="enter"
        :style="{ transform: `translateX(-${startDistance}px)` }"
      >
        <h1
          v-if="animateTrue || smallScreenTrue"
          class="titles headings__title"
        >
          <slot name="h1"></slot>
        </h1>
      </transition>
      <transition
        :css="false"
        @enter="enter"
        :style="{ transform: `translateX(${startDistance}px)` }"
      >
        <div
          v-if="animateTrue || smallScreenTrue"
          class="headings__underline"
        ></div>
      </transition>
    </div>
    <div class="article__paragraphs">
      <p class="paragraph-highlight">
        <slot name="p-highlight"></slot>
      </p>
      <p>
        <slot></slot>
      </p>
    </div>
  </article>
</template>

<script>
import { transitionSlide } from "../../assets/vue-mixins/transition-animation-slide";
export default {
  props: ["animate"],
  mixins: [transitionSlide],
  computed: {
    smallScreenTrue() {
      return window.screen.width > 1200 ? false : true;
    },
    startDistance() {
      return window.screen.width > 1200 ? 300 : 0;
    },
    animateTrue() {
      return this.animate;
    },
  },
};
</script>

<style lang="scss" scoped>
// Helpers
.paragraph-highlight {
  color: $color-black;
  font-weight: 600;
  margin-bottom: 2rem;
}
.article {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  &__headings {
    padding: 0 2rem 0 2rem;
    @media screen and (min-width: 800px) {
      padding: 0 2rem 0 5rem;
    }
    margin-top: 3rem;
    flex: 1 1 40%;
  }
  &__paragraphs {
    flex: 1 1 60%;
    padding: 2rem;
  }
}
</style>
