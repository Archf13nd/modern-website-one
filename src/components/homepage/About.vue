<template>
  <div class="about">
    <h3 class="about__section-title">About</h3>
    <div class="intro">
      <h1 class="title intro__title">From thought to reality</h1>
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
  </div>
</template>
<style lang="scss" scoped>
.about {
  padding-top: $section-padding-top;
  min-height: 100vh;
  display: grid;
  grid:
    repeat(auto-fill, minmax(0, min-content)) / minmax(0, 1fr) minmax(
      auto,
      1000px
    )
    minmax(0, 1fr);

  &__section-title {
    grid-column: 2 / 3;
    margin-bottom: 3rem;
  }
}

.intro {
  grid-column: 2 / 3;
  display: flex;
  justify-content: space-between;

  &__title {
    position: relative;
    width: 40%;
    height: fit-content;
    font-size: 6rem;
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

.title {
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4rem;
    height: 5px;
    width: 10rem;
    background: $color-primary;
    animation: slide-in 0.5s ease-in;
  }
}
</style>
