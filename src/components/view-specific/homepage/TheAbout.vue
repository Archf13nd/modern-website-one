<script setup>
import cardIMG1 from "@/assets/images/man-in-labcoat.jpg?format=jpg&height=564&width=349&quality=80"
import cardIMG2 from "@/assets/images/microscope.jpg?format=jpg&height=564&width=349&quality=70"
import cardIMG3 from "@/assets/images/math-work.jpg?format=jpg&height=564&width=349&quality=70"
import buildingImg from "@/assets/images/building.jpg?format=jpg&height=1024&width=944&quality=15"
</script>

<template>
  <div class="about" ref="about">
    <the-type-box :animate="animateAbout">
      <template v-slot:h3>
        About
      </template>
      <template v-slot:h1>
        From thought to reality
      </template>
      <template v-slot:p-highlight>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        esse ipsam debitis dolores impedit inventore aut adipisci nobis,
        pariatur
      </template>

      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium esse
      ipsam debitis dolores impedit inventore aut adipisci nobis, pariatur
      optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dignissimos debitis laboriosam numquam. Alias ex consectetur mollitia
      necessitatibus maxime voluptatem inventore quos corrupti incidunt
      molestias? Dolore exercitationem sunt magni minus eveniet?
    </the-type-box>

    <div class="cards" ref="cardsRef">
      <transition :css="false" @enter="enter">
        <div v-show="animateCards || smallScreenTrue" :style="{ transform: `translateX(-${startDistance}px)` }"
          class="cards__card cards__card--1">
          <div class="cards__img">
            <img :src="cardIMG1" alt="">
          </div>
          <h1>Scientists</h1>
        </div>
      </transition>

      <transition :css="false" @enter="enter">
        <div v-show="animateCards || smallScreenTrue" :style="{ transform: `translateY(-${startDistance}px)` }"
          class="cards__card cards__card--2">
          <div class="cards__img">
            <img :src="cardIMG2" alt="">
          </div>
          <h1>Microbiology</h1>
        </div>
      </transition>

      <transition :css="false" @enter="enter">
        <div v-show="animateCards || smallScreenTrue" :style="{ transform: `translateX(${startDistance}px)` }"
          class="cards__card cards__card--3">
          <div class="cards__img">
            <img :src="cardIMG3" alt="">
          </div>
          <h1>Math!</h1>
        </div>
      </transition>
    </div>

    <div class="outro">
      <div class="outro-text outro-text--1" ref="outroOne">
        <div class="headings">
          <transition :css="false" @enter="enter">
            <h3 v-show="animateOutro || smallScreenTrue" :style="{ transform: `translateX(${startDistance}px)` }"
              class="headings__section-title">
              Advantages
            </h3>
          </transition>
          <transition :css="false" @enter="enter">
            <h2 v-show="animateOutro || smallScreenTrue" :style="{ transform: `translateX(-${startDistance}px)` }"
              class="headings__title">
              Working on exclusive projects
            </h2>
          </transition>
          <transition :css="false" @enter="enter">
            <div v-show="animateOutro || smallScreenTrue" :style="{ transform: `translateX(${startDistance}px)` }"
              class="headings__underline"></div>
          </transition>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, vel
          ipsum ea dolor cum sint consectetur rerum ipsa voluptas excepturi,
          odit magni! Labore quidem vero, aut totam, at repudiandae dignissimos
          dolorem odio vel facere veritatis.
        </p>
        <a href="#" class="button button--outro-text">View More</a>
      </div>
      <div class="outro-text outro-text--2" :style="{ backgroundImage: `url(${buildingImg})` }">
        <div class="headings">
          <h3 class="headings__section-title">Advantages</h3>
          <h2 class="headings__title">Working on exclusive projects</h2>
          <div class="headings__underline"></div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, vel
          ipsum ea dolor cum sint consectetur rerum ipsa voluptas excepturi,
          odit magni! Labore quidem vero, aut totam, at repudiandae dignissimos
          dolorem odio vel facere veritatis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TheTypeBox from "@/components/base/BaseTypeBox.vue";
import { transitionSlide } from "@/assets/vue-mixins/transition-animation-slide.js";
export default {
  mixins: [transitionSlide],
  emits: ["aboutRef", "outroRef", "cardsRef"],
  props: ["animateAbout", "animateOutro", "animateCards"],
  components: {
    TheTypeBox,
  },
  // data() {
  //   return { active: false };
  // },
  methods: {},
  computed: {
    smallScreenTrue() {
      return window.screen.width > 1200 ? false : true;
    },
    startDistance() {
      return window.screen.width > 1200 ? 300 : 0;
    },
    isAnimate() {
      console.log(this.animate, "Oh");
      return this.animate;
    },
  },
  mounted() {
    this.$emit("aboutRef", this.$refs.about);
    this.$emit("outroRef", this.$refs.outroOne);
    this.$emit("cardsRef", this.$refs.cardsRef);
  },
};
</script>

<style lang="scss" scoped>
.about {
  @include pageGrid;
}

.cards {
  --card-width: 349px;
  --card-spacing: 6rem;
  width: 100%;
  min-height: 564px;
  grid-column: 1 / 4;
  place-self: center;

  display: flex;
  // flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  z-index: 3;

  // &:nth-child(even) {
  //   margin-left: 6rem;
  //   margin-right: 6rem;
  // }
  @media screen and (min-width: 1150px) {
    width: calc(var(--card-width) * 3 + calc(var(--card-spacing) * 2));
    flex-direction: row;
  }

  &__img {
    position: absolute;
    height: 100%;
    width: 100%;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__card {
    width: 349px;
    height: 564px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 3rem 2rem;
    color: #000;

    &>h1 {
      color: $color-white;
      margin-bottom: 10rem;
      transition: $transition-default;
      z-index: 100;
      color: inherit;
      // mix-blend-mode: exclusion;
      background: #fff;
      width: 100%;
      text-align: center;

      &:hover {
        color: $color-primary;
      }
    }

    &--1 {
      color: #000;
    }


  }
}

.article {
  margin-top: 10rem;
  grid-column: 2 / 3;
}

.outro {
  color: $color-white;
  position: relative;
  width: 100%;
  grid-column: 1 / 4;
  display: flex;
  flex-wrap: wrap-reverse;

  @media screen and (min-width: 1000px) {
    margin-top: 33rem;
  }

  & .outro-text {
    width: 90%;
    height: fit-content;
    margin: 0rem auto;

    color: $color-black;
    padding: 7rem 5rem 5rem 5rem;

    &>p {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }

    & h1 {
      font-size: 3em;
    }

    @media screen and (min-width: 1000px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 10rem 5rem 5rem 5rem;
      margin: 5rem auto;

      &>.headings>.headings__title {
        font-size: 6em;
      }
    }

    &--1 {
      @media screen and (min-width: 600px) {
        background: $color-black;

        & h2,
        & h3 {
          color: $color-white;
        }

        &>p {
          color: $color-white;
        }
      }

      @media screen and (min-width: 1000px) {
        position: relative;
        height: 89rem;
        padding: 0 0 5rem 0;
        margin: 0;
        width: calc(calc(1328 / #{$body-width}) * 100%);
        align-items: flex-start;

        &>* {
          margin-left: 21.686%;
          color: $color-white;
          width: 50.5%;
        }
      }

      @media screen and (min-width: 1500px) {
        padding-bottom: 15rem;

        &>* {
          width: 36.5%;
        }
      }
    }

    &--2 {
      @media screen and (min-width: 600px) {
        color: $color-black;
        background: center / cover no-repeat rgba(211, 192, 150, 0.897);
        background-blend-mode: screen;
      }

      @media screen and (min-width: 1000px) {
        right: 0rem;
        color: $color-black;
        width: 118rem;
        max-height: 128rem;
        height: 60vw;
        min-height: 100rem;
        padding: 0 0 11rem 0;
        margin: 0;
        z-index: 2;
        width: calc(calc(944 / #{$body-width}) * 100%);
        align-items: flex-end;
        position: absolute;
        bottom: 23rem;

        & h2,
        & h3,
        & p {
          color: $color-black;
        }

        &>* {
          width: 67%;
          margin-right: calc(33% - 14rem);
        }
      }

      @media screen and (min-width: 1500px) {
        padding-bottom: 22rem;
      }
    }
  }
}

.button--outro-text {
  background: none;
  border: 2px solid $color-primary;
  color: $color-primary;

  &:hover {
    background: $color-primary;
    color: $color-white;
  }
}
</style>
