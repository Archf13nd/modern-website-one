<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
const { meta, errors, defineInputBinds } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    message: yup.string().required()
  })
})

const email = defineInputBinds('email')
const name = defineInputBinds('name')
const message = defineInputBinds('message')
</script>

<template>
  <div class="contact" ref="contact">
    <div class="contact__wrapper">
      <div class="contact__info">
        <div class="headings article__headings">
          <transition :css="false" @enter="enter">
            <h3 v-show="animateContact || smallScreenTrue" :style="{ transform: `translateX(${startDistance}px)` }"
              class="headings__section-title">
              Let's get in touch
            </h3>
          </transition>
          <transition :css="false" @enter="enter">
            <h1 v-show="animateContact || smallScreenTrue" :style="{ transform: `translateX(-${startDistance}px)` }"
              class="titles headings__title">
              Contact Details
            </h1>
          </transition>
          <transition :css="false" @enter="enter">
            <div v-show="animateContact || smallScreenTrue" :style="{ transform: `translateX(${startDistance}px)` }"
              class="headings__underline"></div>
          </transition>
        </div>
        <ul>
          <li>
            <p>Phone: 07535158194</p>
          </li>
          <li>
            <p>E-mail: email@email.com</p>
          </li>
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
      <form class="contact__form" @submit.prevent="submitForm">
        <div class="contact__field">
          <label for="input-name" class="contact__input-label">Name</label>
          <input v-bind="name" placeholder="Name" id="input-name" />
          <span class="contact__error-text" v-if="errors.name">{{ errors.name }}</span>
        </div>
        <div class="contact__field">
          <label for="input-email" class="contact__input-label">Email</label>
          <input v-bind="email" placeholder="Email" id="input-email" />
          <span class="contact__error-text" v-if="errors.email">{{ errors.email }}</span>
        </div>
        <div class="contact__field">
          <label for="input-message" class="contact__input-label">Message</label>
          <textarea v-bind="message" placeholder="Your Message" id="input-message"></textarea>
          <span class="contact__error-text" v-if="errors.message">{{ errors.message }}</span>

        </div>
        <div class="contact__submit">
          <button :disabled="!meta.valid" class="contact__submit" type="submit">Send</button>
          <span v-if="formIsSubmitted">No message sent. Demonstration purposes only. Thank you for using the form
            :)</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { transitionSlide } from "@/assets/vue-mixins/transition-animation-slide.js";

export default {
  data() {
    return {
      formIsSubmitted: false,
    }
  },
  mixins: [transitionSlide],
  emits: ["contactRef"],
  props: ["animateContact"],
  methods: {
    submitForm() {
      this.formIsSubmitted = true
    }
  },
  computed: {
    smallScreenTrue() {
      return window.screen.width > 1200 ? false : true;
    },
    startDistance() {
      return window.screen.width > 1200 ? 300 : 0;
    },
  },
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

  &__field {
    width: 100%;
    margin-bottom: 2rem;

    & label {
      font-size: 2rem;
    }

    & input {
      width: 100%;
    }

    & textarea {
      width: 100%;
    }
  }




  &__form {
    display: flex;
    flex-direction: column;
    flex: 1 0 calc(100% - 600px);
    font-family: $font-family-text;
    font-size: 2rem;

    & textarea {
      height: 30rem;
    }

    & input {
      padding: 2rem 1rem;
    }

    & button {
      width: 16rem;
      height: 6rem;
      padding: 0;
      border: none;
      background: $color-primary;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  &__submit {
    display: flex;
    align-items: center;

    &>span {
      margin-left: 4rem;
    }

    &>button {
      flex-shrink: 0;
      display: flex;
      justify-content: center;
    }
  }

  &__error-text {
    color: $c-danger;
  }
}

.contact__info {
  display: flex;
  flex-direction: column;
  flex: 0 1 400px;
  padding-right: 4rem;
  margin-bottom: 3rem;

  &>ul {
    list-style: none;
    margin-top: 4rem;
    padding: 0;
  }
}
</style>
