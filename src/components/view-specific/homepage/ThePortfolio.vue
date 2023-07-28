<template>
  <section class="portfolio" ref="portfolio">
    <the-type-box :animate="animatePortfolio">
      <template v-slot:h3>
        Portfolio
      </template>
      <template v-slot:h1>
        Our latest projects
      </template>
      <template v-slot:p-highlight> </template>

      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium esse
      ipsam debitis dolores impedit inventore aut adipisci nobis, pariatur
      optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </the-type-box>
    <div class="gallery">
      <div class="gallery__photo">
        <img src="https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_960_720.jpg" alt="" />
      </div>
      <div class="gallery__photo">
        <img src="https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239_960_720.jpg" alt="" />
      </div>
      <div class="gallery__photo">
        <img src="https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_960_720.jpg" alt="" />
      </div>
      <div class="gallery__photo">
        <img src="https://cdn.pixabay.com/photo/2015/04/25/23/32/wormhole-739872_960_720.png" alt="" />
      </div>
      <div class="gallery__photo">
        <img src="https://cdn.pixabay.com/photo/2011/12/14/12/23/solar-system-11111_960_720.jpg" alt="" />
      </div>
      <div class="gallery__photo">
        <img src="https://cdn.pixabay.com/photo/2017/12/23/19/53/lost-places-3035877__340.jpg" alt="" />
      </div>
    </div>
    <a class="button button--portfolio">View more</a>
  </section>
</template>

<script>
import TheTypeBox from "@/components/base/BaseTypeBox.vue";
export default {
  props: ["animatePortfolio"],
  components: {
    TheTypeBox,
  },
  mounted() {
    this.$emit("portfolioRef", this.$refs.portfolio);
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  padding-top: $section-padding-top;
  @include pageGrid;
}

.gallery {
  grid-column: 1 / 4;
  margin: 10rem 3rem;
  display: grid;
  justify-content: center;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, 32%);

  &__photo {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #000;

    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    &>img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

.article {
  grid-column: 2 / 3;
}

.button--portfolio {
  grid-column: 2 / 3;
  border: 3px solid $color-primary;
  color: $color-primary;
  margin-top: -2.5rem;

  &:hover {
    background: $color-primary;
    color: $color-black;
  }
}
</style>
