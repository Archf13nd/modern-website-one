<template>
  <div class="blog-card">
    <h1 class="blog-card__title">
      <router-link :to="`/blog/${id}`">{{ title || "The title" }}</router-link>
    </h1>
    <div class="blog-card__info">
      <p>
        By
        <span
          ><a class="link">{{ author || "The Author" }}</a></span
        >
      </p>
      <p>
        In
        <span
          ><a class="link">{{ category || "The Category" }}</a></span
        >
      </p>
      <p>
        Posted
        <span>{{ date || "March 30th, 2021" }}</span>
      </p>
    </div>
    <router-link :to="`/blog/${id}`"><img :src="`${img}`" alt=""/></router-link>

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

<style lang="scss" scoped>
h3 {
  margin-top: 4rem;
  font-size: 2.5em;
}

p {
  margin-top: 2rem;
}

.blog-card {
  display: block;
  --color-border: rgba(0, 0, 0, 0.253);
  width: 100%;
  padding-top: 5rem;
  @media screen and (min-width: 800px) {
    padding-right: 5rem;
    padding-top: 0rem;
  }
  padding-bottom: 6rem;
  margin-bottom: 3rem;

  &:not(:last-child) {
    border-bottom: 1px solid $color-border-primary;
  }

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
  padding: 4rem 0;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  transition: $transition-default;

  & > .arrow {
    margin-right: 2rem;
  }

  & h4 {
    color: $color-primary;
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

img {
  margin: 2rem 2rem 0 0;
  width: 75%;
  min-width: 300px;
  height: auto;
  border-radius: 5px;
}

.float {
  float: left;
}
</style>
