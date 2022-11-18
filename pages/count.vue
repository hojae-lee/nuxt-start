<template>
  <div>
    <h1>{{ getHeader}} 페이지 입니다.</h1>
    <p>Count: {{ getCount }}</p>
    <button @click="addCount">눌러보세용.</button>
  </div>
</template>

<script>
export default {
  computed: {
    getHeader() {
      return this.$store.state.count.header;
    },
    getCount() {
      return this.$store.state.count.count;
    }
  },
  methods: {
    addCount() {
      this.$store.commit('count/addCount', 1);
    }
  }
}
</script>

<style scoped>
h1 {
  color: cornflowerblue
}
</style>