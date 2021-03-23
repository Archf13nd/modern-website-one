<template>
  <article class="article">
    <div class="headings article__headings">
      <transition :css="false" @enter="enter($event, 300)">
        <h3 v-if="animateTrue" class="headings__section-title">
          <slot class="happy" name="h3"></slot>
        </h3>
      </transition>
      <transition :css="false" @enter="enter($event, -300)">
        <h1 v-if="animateTrue" class="titles headings__title">
          <slot name="h1"></slot>
        </h1>
      </transition>
      <transition :css="false" @enter="enter($event, 300)">
        <div v-if="animateTrue" class="headings__underline"></div>
      </transition>
    </div>
    <div class="article__paragraphs">
      <p>
        <slot></slot>
      </p>
    </div>
  </article>
</template>

<script>
import { transitionSlide } from "../../vue-mixins/transition-animation-slide";
export default {
  props: ["animate"],
  mixins: [transitionSlide],
  computed: {
    animateTrue() {
      return this.animate;
    },
  },
};
</script>

<style lang="scss" scoped></style>
