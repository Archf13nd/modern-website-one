<template>
  <section class="blog-article">
    <h1 class="blog-article__title">{{ blog.title }}</h1>
    <div class="blog-article__info">
      <p>
        By
        <span
          ><a class="link">{{ blog.author }}</a></span
        >
      </p>
      <p>
        In
        <span
          ><a class="link">{{ blog.category }}</a></span
        >
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
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt=""
      />
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
    this.$emit("lastVisitedBlog", this.blog);
  },
  updated() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 4rem;
  font-size: 2.5em;
}

p {
  margin-top: 2rem;
}

.blog-article {
  --color-border: rgba(0, 0, 0, 0.253);
  width: 100%;
  padding-right: 5rem;

  &__title {
    font-size: 4em;
  }

  &__info {
    display: flex;
    & > p + p {
      margin-left: 2rem;
    }
  }
}

.quote {
  font-size: 1.5em;
  padding: 4rem;
  margin: 3rem 0;
  border-bottom: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);

  & p {
    margin: 0;
    padding: 0;
    color: $color-primary;
    font-style: italic;
  }
}

.author {
  display: flex;
  align-items: center;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 4rem 0;
  margin: 3rem 0 0 0;
  & > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 3rem 0 0;
  }

  & > p {
    color: $color-primary;
    font-size: 4em;
    font-weight: bold;
    transition: $transition-default;
    margin: 0;

    &:hover {
      color: $color-text-primary;
    }
  }
}

.blog-navigation {
  display: flex;
  justify-content: space-between;

  &--next,
  &--prev {
    padding: 4rem 0;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    transition: $transition-default;

    & h4 {
      color: $color-primary;
      width: min-content;
      font-size: 1.7em;
      margin: 0.5rem 0;
    }

    & a {
      display: block;
      color: $color-black;
      font-size: 2em;
      font-weight: bold;
      max-width: 30rem;
      text-transform: uppercase;

      &:hover {
        color: $color-primary;
      }
    }

    &:hover {
      color: $color-primary;
    }
  }
  &--next {
    & > .arrow {
      margin-left: 2rem;
    }
    & h4 {
      margin-left: auto;
    }
    & a {
      text-align: end;
    }
  }

  &--prev {
    & > .arrow {
      margin-right: 2rem;
    }
  }
}

img {
  margin: 2rem 2rem 0 0;
  width: 75%;
  height: auto;
  border-radius: 5px;
}

.float {
  float: left;
}
</style>
