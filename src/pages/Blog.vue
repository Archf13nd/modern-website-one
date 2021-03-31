<template>
  <div class="blog">
    <router-view :blogs="blogs" @lastVisitedBlog="handleVisit"></router-view>
    <the-side-nav :recentlyVisited="recentlyVisited"></the-side-nav>
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
      recentlyVisited: [],
      totalVisited: 1,
    };
  },
  methods: {
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
.blog {
  padding-top: $section-padding-top;
  width: $width-content;
  margin: 0 auto;
  display: flex;
}

.blog-cards {
  width: 100%;
  padding-right: 5rem;
  //   background: #000;
}

.blog-card {
  padding-bottom: 3rem;
  margin-bottom: 7rem;
}

.side-nav {
  flex: 0 1 40%;
}
</style>
