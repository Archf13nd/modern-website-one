<template>
  <div class="about" ref="about">
    <div class="intro">
      <div class="headings">
        <transition :css="false" @enter="enter($event, 300)">
          <h3 v-show="animate" class="headings__section-title">
            About
          </h3>
        </transition>
        <transition :css="false" @enter="enter($event, -300)">
          <h1 v-show="animate" class="titles headings__title">
            From thought to reality
          </h1>
        </transition>
        <transition :css="false" @enter="enter($event, 300)">
          <div v-show="animate" class="headings__underline"></div>
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
export default {
  props: ["animate"],
  data() {
    return { active: false };
  },
  methods: {
    // Transition function, takes event data and the inital distance which can be positive or negative
    enter(e, initialValue, axis = "X") {
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
        e.style.transform = `translate${axis}(${numberSign}${calculatedNewValue}px)`;
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
  padding: 1rem 5rem;
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

.intro {
  width: 100%;
  @media screen and (min-width: 700px) {
    grid-column: 2 / 3;
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;

    & .headings {
      width: 40%;
    }

    &__paragraphs {
      width: calc(60%);

      & > p:first-child {
        font-weight: 600;
        margin-bottom: 4rem;
      }
    }
  }
}

.outro {
  color: $color-white;
  position: relative;
  width: 100%;
  margin-top: 33rem;
  grid-column: 1 / 4;
  display: flex;
  flex-wrap: wrap-reverse;

  // @media screen and (min-width: 500px) {
  //   align-items: center;
  //   justify-content: center;
  // }
  & .outro-text {
    & > p {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }

    &--1 {
      @media screen and (min-width: 1200px) {
        position: relative;
        height: 89rem;
        z-index: 1;
        display: flex;
        flex-direction: column;
        padding-bottom: 15rem;
        width: calc(calc(1328 / #{$body-width}) * 100%);
        align-items: flex-start;
        justify-content: flex-end;

        & > * {
          margin-left: 21.686%;
          color: $color-white;
          width: 36.5%;
        }
      }
      @media screen and (min-width: 600px) {
        color: $color-white;
        padding: 5rem;
        background: $color-black;

        & > p {
          color: $color-white;
        }
      }
    }

    & > * {
    }

    &--2 {
      @media screen and (min-width: 1200px) {
        right: 0rem;
        color: $color-black;
        width: 118rem;
        max-height: 128rem;
        z-index: 2;
        -webkit-font-smoothing: antialiased;
        display: flex;
        flex-direction: column;
        height: 60vw;
        padding-bottom: 22rem;
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
      @media screen and (min-width: 600px) {
        padding: 5rem;
        color: $color-black;
        background: center / 170% no-repeat
          url("https://cdn.pixabay.com/photo/2018/11/22/23/57/london-3833039_960_720.jpg")
          rgba(255, 145, 0, 0.644);
        background-blend-mode: screen;
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
  grid-column: 1 / 4;
  place-self: center;
  margin-top: 13rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
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
