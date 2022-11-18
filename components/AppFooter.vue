<template>
  <footer>
    <nuxt-link class="logo" to="/">Footer</nuxt-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  footer {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
  }
  .logo {
    font-weight: 900;
  }
  .logo:visited {
    color: inherit;
  }
</style>