<template>
  <section class="blog-cards">
    <blog-card v-for="blog in blogs" :key="blog.id" :id="blog.id" :title="blog.title" :author="blog.author"
      :category="blog.category" :date="blog.date" :img="blog.img" :contentData="blog.contentData"></blog-card>
  </section>
</template>

<script>
import BlogCard from "@/components/view-specific/blog/TheCard.vue";

export default {
  props: ["blogs"],
  components: {
    BlogCard,
  },
  data() {
    return {};
  },
};
</script>
