<template>
  <div class="blog" @click="closeMenu">
    <div class="menu" @click="openMenu">
      <div class="menu__bar" :class="{ 'menu--open': menuOpen }"></div>
    </div>
    <router-view :blogs="filteredBlogs" @lastVisitedBlog="handleVisit"></router-view>
    <!-- <the-side-nav :class="{ 'hide-on-small-screens': !menuOpen }" @searchInput="filter = $event"
      :recentlyVisited="recentlyVisited"></the-side-nav> -->
  </div>
</template>

<script>
// import TheSideNav from "../components/view-specific/blog/TheSideNav.vue";
import { tempBlogState } from "../assets/vue-mixins/temp-blog-state.js";
export default {
  mixins: [tempBlogState],
  components: {
    // TheSideNav,
  },
  data() {
    return {
      filter: "",
      recentlyVisited: [],
      totalVisited: 1,
      menuOpen: false,
    };
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.toLowerCase().includes(this.filter.toLowerCase());
      });
    },
  },
  methods: {
    closeMenu(e) {
      if (
        e.target.classList[0] !== "menu" &&
        e.target.classList[0] !== "menu__bar" &&
        this.menuOpen
      ) {
        console.log(e.target.classList[0]);
        this.menuOpen = false;
      }
    },
    openMenu() {
      if (!this.menuOpen) {
        this.menuOpen = true;
      }
    },
    handleVisit(e) {
      if (!this.recentlyVisited.find((item) => item.id === e.id)) {

        if (this.recentlyVisited.length >= 3) {
          this.recentlyVisited[this.totalVisited] = {
            id: e.id,
            title: e.title,
          };
        } else {
          this.recentlyVisited.push({
            id: e.id,
            title: e.title,
          });
        }
        if (this.totalVisited === 3) {
          this.totalVisited = 0;
        } else {
          this.totalVisited++;
        }
      }
    },
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 800px) {
  .hide-on-small-screens {
    display: none;
  }

  .menu {
    position: relative;
    top: 2rem;
    margin-left: auto;
    margin-right: 2rem;
    width: 5rem;
    height: 5rem;
    background: $color-primary;
    border-radius: 5px;
    cursor: pointer;

    &__bar {
      position: relative;
      top: 2.3rem;
      left: 0.75rem;
      width: 3.5rem;
      height: 0.5rem;
      background: $color-black;

      &::before {
        content: "";
        position: absolute;
        width: inherit;
        height: inherit;
        top: -1.2rem;
        background: $color-black;
      }

      &::after {
        content: "";
        position: absolute;
        width: inherit;
        height: inherit;
        top: 1.1rem;
        background: $color-black;
      }
    }
  }

  .menu--open {
    background: rgba(0, 0, 0, 0);

    &::after {
      transform: translateY(-1.1rem) rotateZ(45deg);
    }

    &::before {
      transform: translateY(1.2rem) rotateZ(-45deg);
    }
  }
}

.blog {
  @media screen and (min-width: 800px) {
    padding-top: $section-padding-top;
    padding: $section-padding-top 4rem 0 4rem;
    max-width: $width-content;
    margin: 0 auto;
    display: flex;
  }
}

.blog-cards {
  width: 100%;
  //   background: #000;
  flex: 0 0 70%;
}

.blog-card {
  padding-bottom: 3rem;
  margin-bottom: 7rem;
}

.side-nav {
  @media screen and (max-width: 800px) {
    position: absolute;
    width: 250px;
    height: min-content;
    top: 17rem;
    background: rgb(255, 255, 255);
    right: 0;
    padding: 2rem;
    padding-bottom: 5rem;
    border: 2px solid #000;
  }

  flex: 0 1 30%;
}
</style>
