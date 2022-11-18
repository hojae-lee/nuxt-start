<template>
  <main>
    <Nuxt />
  </main>
</template>

<script>
export default {
}
</script>

<style>
  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;

    text-align: center;
    margin: 0;
  }

  main {
    flex: 1;
    background-color: cornflowerblue;
  }
</style>