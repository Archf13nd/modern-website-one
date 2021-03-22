<template>
  <div class="about" ref="about">
    <div class="intro">
      <transition :css="false" @enter="enter($event, 300)">
        <h3
          v-show="animate"
          class="about__section-title about__section-title--animate"
        >
          About
        </h3>
      </transition>
      <div class="intro__title-wrapper">
        <transition :css="false" @enter="enter($event, -300)">
          <h1 v-show="animate" class="title intro__title">
            From thought to reality
          </h1>
        </transition>
        <transition :css="false" @enter="enter($event, 300)">
          <div v-show="animate" class="underline"></div>
        </transition>
      </div>
      <div class="intro__paragraphs">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          suscipit dolorem iure quam labore est sapiente et
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          suscipit dolorem iure quam labore est sapiente et veniam a Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Sint ipsa possimus
          magnam cupiditate architecto dignissimos inventore iste fugiat libero
          numquam maiores, quas debitis! Similique eaque assumenda offici Lorem,
          ipsum.numquam maiores, quas debitis! Similique eaque assumenda offici
          Lorem, ipsum.numquam maiores, quas debitis! Similique eaque assumenda
          offici Lorem, ipsum.
        </p>
      </div>
    </div>
    <div class="cards">
      <div class="cards__card cards__card--1"><h1>Hello</h1></div>
      <div class="cards__card cards__card--2"><h1>Greetings</h1></div>
      <div class="cards__card cards__card--3"><h1>Hi</h1></div>
    </div>
    <div class="outro">
      <div class="outro-text outro-text--1">
        <transition :css="false" @enter="enter($event, 300)">
          <div v-show="animate" class="outro-text__label">Advantages</div>
        </transition>
        <div class="intro__title-wrapper">
          <transition :css="false" @enter="enter($event, -300)">
            <h1 v-show="animate" class="title outro-text__title">
              Working on exclusive projects
            </h1>
          </transition>
          <transition :css="false" @enter="enter($event, 300)">
            <div v-show="animate" class="underline"></div>
          </transition>
        </div>
        <p class="outro-text__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, vel
          ipsum ea dolor cum sint consectetur rerum ipsa voluptas excepturi,
          odit magni! Labore quidem vero, aut totam, at repudiandae dignissimos
          dolorem odio vel facere veritatis.
        </p>
        <a href="#" class="button button--outro-text">View More</a>
      </div>
      <div class="outro-text outro-text--2">
        <div class="outro-text__label">Advantages</div>
        <h1 class="title outro-text__title">Working on exclusive projects</h1>
        <p class="outro-text__paragraph">
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
export default {
  props: ["animate"],
  data() {
    return { active: false };
  },
  methods: {
    // Transition function, takes event data and the inital distance which can be positive or negative
    enter(e, initialValue) {
      // Assigns the number sign and makes initalValue an absolute value
      let numberSign = "+";
      if (initialValue < 0) {
        numberSign = "-";
        initialValue *= -1;
      }

      // Sets the timestamp to calculate the time elapsed inside animation function
      let theBeginningOfTime;

      const animateSlideIn = (time) => {
        // Sets the speed
        time *= 0.2;
        // Stores when time began
        if (!theBeginningOfTime) {
          theBeginningOfTime = time;
        }
        const timeElapsed = time - theBeginningOfTime;
        // As time passes calculatedNewValue will get closer and closer to zero. Math.min() is used to prevent transform from going over its final position
        const calculatedNewValue =
          initialValue -
          Math.min((initialValue / 100) * timeElapsed, initialValue);
        // Transforms the element
        e.style.transform = `translate(${numberSign}${calculatedNewValue}px)`;
        // BASE CASE - is 100 because we divide initialValue by 100. Once time is equal to 100 initialValue subtracts 100% of itself meaning transform translate is now 0 and element is in final position
        if (timeElapsed < 100) {
          requestAnimationFrame(animateSlideIn);
        } else {
          return;
        }
      };
      requestAnimationFrame(animateSlideIn);
    },
    afterEnter(e) {
      e.style.opacity = 1;
    },
    timeout() {
      setTimeout(() => {
        this.active = true;
      }, 100);
    },
  },
  computed: {
    isAnimate() {
      console.log(this.animate, "Oh");
      return this.animate;
    },
  },
  created() {
    this.timeout();
  },
  mounted() {
    this.$emit("aboutRef", this.$refs.about);
  },
};
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  padding-top: $section-padding-top;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid:
    repeat(auto-fill, minmax(0, min-content)) / minmax(0, 1fr)
    minmax(auto, 1000px)
    minmax(0, 1fr);

  &__section-title {
    position: absolute;
    grid-column: 2 / 3;
    top: 7rem;
    margin-bottom: 3rem;
  }
}

.intro {
  grid-column: 2 / 3;
  display: flex;
  justify-content: space-between;

  &__title-wrapper {
    position: relative;
    height: fit-content;
    width: 40%;
  }

  &__title {
    position: relative;
    width: 100%;
    height: fit-content;
    font-size: $font-size-header--lg;
    text-transform: uppercase;
    padding-right: 7rem;
  }

  &__paragraphs {
    width: calc(60%);

    & > p:first-child {
      font-weight: 600;
      margin-bottom: 4rem;
    }
  }
}

.cards {
  --card-width: 349px;
  width: calc(349px * 3 + 90px);
  place-self: center;
  grid-column: 1 / 4;
  margin-top: 13rem;
  display: flex;
  justify-content: space-between;
  z-index: 3;

  &__card {
    width: 349px;
    height: 564px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: flex-end;
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

.outro {
  color: $color-white;
  position: relative;
  width: 100%;
  margin-top: 33rem;
  grid-column: 1 / 4;

  & .outro-text {
    &--1 {
      position: relative;
      background: $color-black;
      width: 166rem;
      height: 89rem;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      color: $color-white;

      & > * {
        width: 36.5%;
        margin-left: 36rem;
      }

      & :last-child {
        margin-bottom: 15rem;
      }
    }
    &--2 {
      position: absolute;
      right: 0rem;
      bottom: 23rem;
      color: $color-black;
      width: 118rem;
      height: 128rem;
      z-index: 2;
      -webkit-font-smoothing: antialiased;

      background: center / 170% no-repeat
        url("https://cdn.pixabay.com/photo/2018/11/22/23/57/london-3833039_960_720.jpg")
        rgba(255, 145, 0, 0.644);
      background-blend-mode: screen;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      & * {
        width: 67%;
        margin-left: 14rem;
      }
      & > :last-child {
        margin-bottom: 22rem;
      }
    }

    &__label {
      font-size: $font-size-header--sm;
      margin-bottom: 2rem;
    }

    &__title {
      position: relative;
      font-size: $font-size-header--md;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 8rem;
    }

    &__paragraph {
      margin-bottom: 2rem;
      color: inherit;
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

.slide-right-title-enter-from {
  opacity: 0;
  transform: translateX(-30rem);
}
.slide-right-title-enter-active {
  transition: all 1s ease-in;
}
.slide-right-title-enter-to {
  opacity: 1;
  transform: none;
}

.slide-left-section-title-enter-from {
  opacity: 0;
  transform: translateX(30rem);
}
.slide-left-section-title-enter-active {
  transition: all 1s ease-in;
}
.slide-left-section-title-enter-to {
  opacity: 1;
  transform: none;
}

.slide-left-underline-enter-from {
  opacity: 0;
  transform: translateX(30rem);
}
.slide-left-underline-enter-active {
  transition: all 1s ease-in;
}
.slide-left-underline-enter-to {
  opacity: 1;
  transform: none;
}
</style>
