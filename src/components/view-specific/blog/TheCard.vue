<template>
  <div class="blog-card">
    <h1 class="blog-card__title">
      <router-link :to="`/blog/${id}`">{{ title || "The title" }}</router-link>
    </h1>
    <div class="blog-card__info">
      <p>
        By
        <span><a class="link">{{ author || "The Author" }}</a></span>
      </p>
      <p>
        In
        <span><a class="link">{{ category || "The Category" }}</a></span>
      </p>
      <p>
        Posted
        <span>{{ date || "March 30th, 2021" }}</span>
      </p>
    </div>
    <router-link :to="`/blog/${id}`"><img :src="`${img}`" alt="" /></router-link>

    <p>
      {{ contentData.paragraphs[0]["paragraph"] }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "author", "category", "date", "img", "contentData"],
  methods: {
    // scrollUp() {
    //   // console.log(document.body.scrollTop, "Scroll");
    // },
  },
};
</script>

<style lang="scss" scoped></style>
