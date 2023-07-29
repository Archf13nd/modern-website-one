<script setup>
import img1 from "@/assets/images/epidemic.jpg?format=jpg&width=240&height=240&quality=80"
import img2 from "@/assets/images/earth-in-bulb.jpg?format=jpg&width=240&height=240&quality=80"
import img3 from "@/assets/images/crystal.jpg?format=jpg&width=240&height=240&quality=80"
import img4 from "@/assets/images/red-blood-cells.jpg?format=jpg&width=240&height=240&quality=80"
import img5 from "@/assets/images/the-periodic-table.jpg?format=jpg&width=240&height=240&quality=80"
import img6 from "@/assets/images/test-tubes.jpg?format=jpg&width=240&height=240&quality=80"
</script>

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
        <img :src="img1" alt="" />
      </div>
      <div class="gallery__photo">
        <img :src="img2" alt="" />
      </div>
      <div class="gallery__photo">
        <img :src="img3" alt="" />
      </div>
      <div class="gallery__photo">
        <img :src="img4" alt="" />
      </div>
      <div class="gallery__photo">
        <img :src="img5" alt="" />
      </div>
      <div class="gallery__photo">
        <img :src="img6" alt="" />
      </div>
    </div>

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
  width: 40%;
  margin: 10rem 3rem;
  display: grid;
  place-self: center;
  justify-content: center;
  place-items: center;
  gap: 5rem;
  grid-template-columns: repeat(3, 1fr);

  &__photo {

    position: relative;
    width: 30rem;
    height: 30rem;
    overflow: hidden;
    background: #000;
    border-radius: 2rem;



    &>img {
      width: 100%;
      height: 100%;
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
