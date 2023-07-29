<template>
  <header>
    <div class="logo">Logo</div>
    <ul class="nav">
      <li class="nav__item"><router-link to="/">Home</router-link></li>
      <li class="nav__item"><router-link to="/blog">Blog</router-link></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: $height-header;
  background: $color-primary;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

a {
  font-size: 1rem;

}

.logo {
  font-size: 2em;
}

.nav {
  list-style: none;
  display: flex;

  &__item {
    margin: 1rem 2rem;
    font-weight: bold;
    transition: $transition-default;
    color: $color-black;

    &>a {
      font-size: 2em;
    }

    &:hover {
      color: $color-white;
    }
  }
}
</style>
