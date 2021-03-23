<template>
  <div class="about" ref="about">
    <the-type-box :animate="animate">
      <template v-slot:h3>
        About
      </template>
      <template v-slot:h1>
        From thought to reality
      </template>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        esse ipsam debitis dolores impedit inventore aut adipisci nobis,
        pariatur optio.<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        debitis laboriosam numquam. Alias ex consectetur mollitia necessitatibus
        maxime voluptatem inventore quos corrupti incidunt molestias? Dolore
        exercitationem sunt magni minus eveniet?
      </p>
    </the-type-box>
    <div class="cards">
      <transition :css="false" @enter="enter($event, -300)">
        <div v-show="animate" class="cards__card cards__card--1">
          <h1>Hello</h1>
        </div>
      </transition>

      <transition :css="false" @enter="enter($event, -300, 'Y')">
        <div v-show="animate" class="cards__card cards__card--2">
          <h1>Greetings</h1>
        </div>
      </transition>

      <transition :css="false" @enter="enter($event, 300)">
        <div v-show="animate" class="cards__card cards__card--3">
          <h1>Hi</h1>
        </div>
      </transition>
    </div>
    <div class="outro">
      <div class="outro-text outro-text--1">
        <div class="headings">
          <transition :css="false" @enter="enter($event, 300)">
            <h3 v-show="animate" class="headings__section-title">
              Advantages
            </h3>
          </transition>
          <transition :css="false" @enter="enter($event, -300)">
            <h1 v-show="animate" class="headings__title">
              Working on exclusive projects
            </h1>
          </transition>
          <transition :css="false" @enter="enter($event, 300)">
            <div v-show="animate" class="headings__underline"></div>
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
      <div class="outro-text outro-text--2">
        <div class="headings">
          <h3 class="headings__section-title">Advantages</h3>
          <h1 class="headings__title">Working on exclusive projects</h1>
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
import TheTypeBox from "../UI/TypeBox.vue";
import { transitionSlide } from "../../vue-mixins/transition-animation-slide.js";
export default {
  mixins: [transitionSlide],
  props: ["animate"],
  components: {
    TheTypeBox,
  },
  data() {
    return { active: false };
  },
  methods: {},
  computed: {
    isAnimate() {
      console.log(this.animate, "Oh");
      return this.animate;
    },
  },
  mounted() {
    this.$emit("aboutRef", this.$refs.about);
  },
};
</script>

<style lang="scss" scoped>
.about {
  @media screen and (min-width: 700px) {
    position: relative;
    padding-top: $section-padding-top;
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid:
      repeat(auto-fill, minmax(0, min-content)) / minmax(0, 1fr)
      minmax(auto, 1000px)
      minmax(0, 1fr);
  }
}

.article {
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
    width: 70%;
    height: fit-content;
    margin: 5rem auto;
    padding: 10rem 5rem 5rem 5rem;
    color: $color-black;
    & > p {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }

    &--1 {
      @media screen and (min-width: 600px) {
        color: $color-white;
        background: $color-black;

        & > p {
          color: $color-white;
        }
      }
      @media screen and (min-width: 1000px) {
        position: relative;
        height: 89rem;
        z-index: 1;
        display: flex;
        flex-direction: column;
        padding: 0 0 5rem 0;
        margin: 0;
        width: calc(calc(1328 / #{$body-width}) * 100%);
        align-items: flex-start;
        justify-content: flex-end;

        & > * {
          margin-left: 21.686%;
          color: $color-white;
          width: 50.5%;
        }
      }
      @media screen and (min-width: 1500px) {
        padding-bottom: 15rem;

        & > * {
          width: 36.5%;
        }
      }
    }

    &--2 {
      @media screen and (min-width: 600px) {
        color: $color-black;
        background: center / 170% no-repeat
          url("https://cdn.pixabay.com/photo/2018/11/22/23/57/london-3833039_960_720.jpg")
          rgba(255, 145, 0, 0.644);
        background-blend-mode: screen;
      }
      @media screen and (min-width: 1000px) {
        right: 0rem;
        color: $color-black;
        width: 118rem;
        max-height: 128rem;
        min-height: 100rem;
        padding: 0 0 11rem 0;
        margin: 0;

        z-index: 2;
        -webkit-font-smoothing: antialiased;
        display: flex;
        flex-direction: column;
        height: 60vw;
        width: calc(calc(944 / #{$body-width}) * 100%);
        align-items: flex-end;
        justify-content: flex-end;
        position: absolute;
        bottom: 23rem;

        & > * {
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

.cards {
  --card-width: 349px;
  --card-spacing: 6rem;
  width: 100%;
  grid-column: 1 / 4;
  place-self: center;
  margin: 0rem 2rem 0 2rem;
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

  &__card {
    width: 349px;
    height: 564px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 3rem 0;
    & > h1 {
      color: $color-white;
      margin-bottom: 10rem;
      transition: $transition-default;

      &:hover {
        color: $color-primary;
      }
    }

    &--1 {
      background: center / 180% no-repeat
        url("https://cdn.pixabay.com/photo/2018/10/22/11/51/lava-3765142_960_720.jpg");
    }
    &--2 {
      background: center / 280% no-repeat
        url("https://cdn.pixabay.com/photo/2016/08/26/12/58/universe-1622107_960_720.jpg")
        #000;
    }
    &--3 {
      background: center / 260% no-repeat
        url("https://cdn.pixabay.com/photo/2019/05/09/16/00/fantasy-4191425_960_720.jpg")
        #000;
    }
  }
}
</style>
