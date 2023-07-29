<script setup>
import magnifyingGlass from "@/assets/images/blog/magnifying-glass.jpg?format=jgp&width=20&height=20&quality=30"
</script>

<template>
  <div class="side-nav">
    <div class="search">
      <label class="search__label" for="search-bar">Search</label>
      <div class="search__bar">
        <input type="text" id="search-bar" @input="sendSearchInput" v-model="searchInput"
          placeholder="Enter Keyword Search" />
        <span>
          <div class="search__icon" :style="{ backgroundImage: `url(${magnifyingGlass})` }"></div>
        </span>

      </div>
    </div>
    <div class="line-break"></div>
    <h4>Recent</h4>
    <ul class="side-nav__list">
      <li v-for="blog in recentlyVisited" :key="blog.id">
        <router-link :to="`/blog/${blog.id}`">{{ blog.title }}</router-link>
      </li>
    </ul>
    <div class="line-break"></div>
    <h4>Recent Comments</h4>
    <div class="line-break"></div>
    <h4>Archives</h4>
    <div class="line-break"></div>
    <h4>Categories</h4>
    <div class="line-break"></div>
    <h4>Meta</h4>
  </div>
</template>

<script>
export default {
  props: ["recentlyVisited"],
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    sendSearchInput() {
      this.$emit("searchInput", this.searchInput);
    },
  },
};
</script>

<style lang="scss" scoped>
.side-nav {
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;

  &>h4 {
    font-size: 2.25em;
  }

  &__list {
    list-style-type: none;
    list-style-position: outside;
    font-size: 1.75em;
    margin: 0;
    padding: 0;

    &>li {
      margin: 2rem 0;
      font-weight: 600;
      transition: transition-default;

      &>a {
        font-size: 1em;
      }

      &:hover {
        color: $color-primary;
      }
    }
  }
}

.search {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  &__label {
    display: block;
    font-size: 1.6rem;
  }

  &__bar {
    display: flex;
  }

  &__icon {
    width: 4rem;
    height: 4rem;
    background: no-repeat center/50%;
    mix-blend-mode: intensity;
  }

  & input {
    display: block;
    height: 4rem;
    width: 100%;
  }

  &>span {
    height: 4rem;
    flex: 0 0 4rem;
    border-radius: 5px;
    display: grid;
    place-items: center;
    background: $color-primary;
    margin-left: 1rem;
    transition: $transition-default;

    &:hover {
      transform: translateY(-2px);
    }
  }
}

.line-break {
  width: 100%;
  height: 1px;
  border-bottom: 1px solid $color-border-primary;
  margin: 6rem 0;
}
</style>
