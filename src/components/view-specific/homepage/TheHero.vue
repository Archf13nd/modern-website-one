<template>
  <div class="hero">
    <div class="hero__text">
      <h1 class="hero__title">We build the future</h1>
      <h2 class="hero__title hero__title--sub">Idea - solution - results</h2>
      <a class="button hero__button">Discover</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: calc(100vh - #{$height-header});
  background: center/cover no-repeat url("@/assets/img/Hero.jpg");

  display: grid;
  place-items: center;

  &__title {
    text-transform: uppercase;
    font-size: clamp(4vw, 4rem, 6vw);
    color: $color-white;

    &--sub {
      text-transform: capitalize;

      font-size: clamp(1vw, 3rem, 3vw);

      text-align: center;
    }
  }

  &__button {
    // By setting top and bottom margin here it automatically adjusts the transform translate when hovering over button
    --marginY: 5rem;
    margin-top: var(--marginY);
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.5);
    color: $color-black;

    &:hover {
      transform: translateY(calc(var(--marginY) * -0.05));
      box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
