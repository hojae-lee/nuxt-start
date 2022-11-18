<template>
  <div>
    <h1>{{ this.$store.state.count.header }} 페이지 입니다.</h1>
    <p>Count: {{ this.$store.state.count.count }}</p>
    <button @click="addCount">눌러보세용.</button>
  </div>
</template>

<script>
export default {
  methods: {
    addCount() {
      this.$store.commit('count/addCount', 1);
    }
  }
}
</script>

<style>

</style>