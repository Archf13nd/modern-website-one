<template>
  <div class="blog" @click="closeMenu">
    <div
      class="menu"
      @click="openMenu"
      :class="{ 'menu--open': menuOpen }"
    ></div>
    <router-view
      :blogs="filteredBlogs"
      @lastVisitedBlog="handleVisit"
    ></router-view>
    <the-side-nav
      :class="{ 'hide-on-small-screens': !menuOpen }"
      @searchInput="filter = $event"
      :recentlyVisited="recentlyVisited"
    ></the-side-nav>
  </div>
</template>

<script>
import TheSideNav from "../components/blog/SideNav.vue";
import { tempBlogState } from "../assets/vue-mixins/temp-blog-state.js";
export default {
  mixins: [tempBlogState],
  components: {
    TheSideNav,
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
    openMenu() {
      this.menuOpen = true;
    },
    closeMenu(e) {
      if (this.menuOpen && e.target.classList[0] !== "menu") {
        this.menuOpen = false;
      }
    },
    handleVisit(e) {
      if (!this.recentlyVisited.find((item) => item.id === e.id)) {
        console.log(this.recentlyVisited.length);
        console.log(this.totalVisited);
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

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .hide-on-small-screens {
    display: none;
  }

  .menu {
    position: relative;
    top: 3rem;
    margin-left: auto;
    margin-right: 2rem;
    width: 6rem;
    height: 1rem;
    background: #000;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      width: 6rem;
      height: 1rem;
      top: -2rem;
      background: #000;
    }
    &::after {
      content: "";
      position: absolute;
      width: 6rem;
      height: 1rem;
      top: 2rem;
      background: #000;
    }
  }

  .menu--open {
    &:hover {
      background: rgba(0, 0, 0, 0);
    }

    &:hover::after {
      transform: translateY(-2rem) rotateZ(45deg);
    }
    &:hover::before {
      transform: translateY(2rem) rotateZ(-45deg);
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
  padding-right: 5rem;
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
