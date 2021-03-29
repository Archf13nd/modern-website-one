<template>
  <div class="contact" ref="contact">
    <div class="contact__wrapper">
      <div class="contact__info">
        <div class="headings article__headings">
          <transition :css="false" @enter="enter">
            <h3
              v-show="animateContact"
              :style="{ transform: 'translateX(300px)' }"
              class="headings__section-title"
            >
              Let's get in touch
            </h3>
          </transition>
          <transition :css="false" @enter="enter">
            <h1
              v-show="animateContact"
              :style="{ transform: 'translateX(-300px)' }"
              class="titles headings__title"
            >
              Contact Details
            </h1>
          </transition>
          <transition :css="false" @enter="enter">
            <div
              v-show="animateContact"
              :style="{ transform: 'translateX(300px)' }"
              class="headings__underline"
            ></div>
          </transition>
        </div>
        <ul>
          <li><p>Phone: 07535158194</p></li>
          <li><p>E-mail: email@email.com</p></li>
          <li>
            <p>
              Address: Alexandria, 32 Washingtorn str, 22303
            </p>
          </li>
          <li>
            <p>
              Opening Hours:<br />Monday — Thursday 10:00 – 23:00<br />
              Friday — Sunday 10:00 – 19:00
            </p>
          </li>
        </ul>
      </div>
      <form class="contact__form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import { transitionSlide } from "../../assets/vue-mixins/transition-animation-slide.js";
export default {
  mixins: [transitionSlide],
  emits: ["contactRef"],
  props: ["animateContact"],
  mounted() {
    this.$emit("contactRef", this.$refs.contact);
  },
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 10rem;
  @include pageGrid;

  &__wrapper {
    grid-column: 2 / 3;
    display: flex;
    flex-wrap: wrap;
    margin: 0 4rem;
  }

  &__info {
    height: min-content;
    & h1 {
      font-size: 4em;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    flex: 1 0 calc(100% - 600px);

    & > * {
      font-family: $font-family-text;
      font-size: 2rem;
      padding: 2rem 1rem;
    }

    & > input {
      height: 4rem;
      margin-bottom: 5rem;
    }

    & > textarea {
      height: 30rem;
    }

    & > button {
      width: 8rem;
      height: 4rem;
      margin-top: 3rem;
      padding: 0;
      border: none;
      background: $color-primary;
      border-radius: 5px;
    }
  }
}

.contact__info {
  display: flex;
  flex-direction: column;
  flex: 0 1 400px;
  padding-right: 4rem;
  margin-bottom: 3rem;

  & > ul {
    list-style: none;
    margin-top: 4rem;
    padding: 0;
  }
}
</style>
