<template>
  <div class="contact">
    <div class="contact__wrapper">
      <div class="contact__info">
        <div class="headings article__headings">
          <transition :css="false" @enter="enter($event, 300)">
            <h3 v-if="animateTrue" class="headings__section-title">
              Let's get in touch
            </h3>
          </transition>
          <transition :css="false" @enter="enter($event, -300)">
            <h1 v-if="animateTrue" class="titles headings__title">
              Contact Details
            </h1>
          </transition>
          <transition :css="false" @enter="enter($event, 300)">
            <div v-if="animateTrue" class="headings__underline"></div>
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
        <button class="button">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animateTrue: true,
    };
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

  &__form {
    display: flex;
    flex-direction: column;
    flex: 1 0 400px;
    padding-right: 10rem;

    & > input {
      height: 4rem;
      margin-bottom: 5rem;
    }

    & > textarea {
      height: 30rem;
    }
  }
}

.contact__info {
  display: flex;
  flex-direction: column;
  flex: 0 0 400px;
  height: 60rem;
  padding-right: 4rem;

  & > ul {
    list-style: none;
    margin-top: 4rem;
    padding: 0;
  }
}
</style>
