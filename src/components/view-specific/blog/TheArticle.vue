<script setup>
import blankProfileIMG from "@/assets/images/blog/blank-profile-picture.png?format=png&quality=30&height=100&width=100"
</script>

<template>
  <section class="blog-article">
    <h1 class="blog-article__title">{{ blog.title }}</h1>
    <div class="blog-article__info">
      <p>
        By
        <span><a class="link">{{ blog.author }}</a></span>
      </p>
      <p>
        In
        <span><a class="link">{{ blog.category }}</a></span>
      </p>
      <p>
        Posted
        <span>{{ blog.date }}</span>
      </p>
    </div>
    <img :src="`${blog.img}`" :alt="`${blog.mgAlt}`" />
    <div class="paragraph-one">
      <h3>{{ blog.contentData.paragraphs[0]["title"] }}</h3>
      <p>
        {{ blog.contentData.paragraphs[0]["paragraph"] }}
      </p>
    </div>
    <div class="quote">
      <blockquote>
        <p>The end of the end is the beginning of the beginning</p>
      </blockquote>
    </div>
    <div class="paragraph-two">
      <h3>{{ blog.contentData.paragraphs[1]["title"] }}</h3>
      <p>
        {{ blog.contentData.paragraphs[1]["paragraph"] }}
      </p>
    </div>
    <img class="float" :src="`${blog.contentData.images[0]}`" alt="" />
    <div class="paragraph-three">
      <h3>{{ blog.contentData.paragraphs[2]["title"] }}</h3>
      <p>
        {{ blog.contentData.paragraphs[2]["paragraph"] }}
      </p>
    </div>
    <div class="paragraph-four">
      <h3>{{ blog.contentData.paragraphs[3]["title"] }}</h3>
      <p>
        {{ blog.contentData.paragraphs[3]["paragraph"] }}
      </p>
    </div>

    <div class="author">
      <img :src="blankProfileIMG" alt="Blank profile placeholder" />
      <p>{{ blog.author }}</p>
    </div>
    <div class="blog-navigation">
      <div v-if="getPreviousBlog" class="blog-navigation--prev">
        <div class="arrow">♦</div>
        <div>
          <h4>Previous</h4>
          <router-link :to="`/blog/${getPreviousBlogId}`">{{
            getPreviousBlog
          }}</router-link>
        </div>
      </div>
      <div v-else></div>
      <div v-if="getNextBlog" class="blog-navigation--next">
        <div>
          <h4>Next</h4>
          <router-link :to="`/blog/${getNextBlogId}`">{{
            getNextBlog
          }}</router-link>
        </div>
        <div class="arrow">♦</div>
      </div>
      <div v-else></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["blogs"],
  computed: {
    blog() {
      return this.blogs[+this.$route.params.id];
    },
    getPreviousBlog() {
      return +this.$route.params.id !== 0
        ? this.blogs[+this.$route.params.id - 1].title
        : null;
    },
    getPreviousBlogId() {
      return +this.$route.params.id !== 0 ? this.$route.params.id - 1 : null;
    },
    getNextBlog() {
      return +this.$route.params.id !== this.blogs.length - 1
        ? this.blogs[+this.$route.params.id + 1].title
        : null;
    },
    getNextBlogId() {
      return +this.$route.params.id !== this.blogs.length - 1
        ? +this.$route.params.id + 1
        : null;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    console.log(this.blog)
    this.$emit("lastVisitedBlog", this.blog);
  },
  updated() {
    window.scrollTo(0, 0);
    console.log(this.blog, 'bu')
    this.$emit("lastVisitedBlog", this.blog);
  }
};
</script>

<style lang="scss" scoped></style>
