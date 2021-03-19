<template>
  <header>
    <div class="logo">LOGO</div>
    <ul class="nav">
      <li class="nav__item"><a>Home</a></li>
      <li class="nav__item"><a>About</a></li>
      <li class="nav__item"><a>Services</a></li>
      <li class="nav__item"><a>Blog</a></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: $height-header;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav {
  list-style: none;
  display: flex;
  &__item {
    margin: 1rem;
    font-weight: bold;
    transition: $transition-default;

    &:hover {
      color: $color-primary;
    }
  }
}
</style>
