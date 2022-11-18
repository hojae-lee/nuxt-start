<template>
  <div>
    <h1>{{ getHeader}} 페이지 입니다.</h1>
    <p>Count: {{ getCount }}</p>
    <button class="blueButton" @click="addCount">눌러보세용.</button>
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
  button {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 2px solid red;
    border-radius: 0.6em;
    color: red;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }
  button:hover,
  button:focus {
    color: #000;
    outline: 0;
  }
  .blueButton {
    border-color: blue;
    color: #fff;
    box-shadow: 0 0 40px 40px blue inset, 0 0 0 0 blue;
    transition: all 150ms ease-in-out;
  }
  .blueButton:hover {
    box-shadow: 0 0 10px 0 blue inset, 0 0 10px 4px blue;
  }
</style>