<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="product.imageUrl" :alt="product.name">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// import ProductList from '~/components/ProductList.vue';

export default {
  components: {
    // ProductList
  },
  // data() {
  //   return {
  //     products: []
  //   }
  // },
  // async created() {
  //   const response = await axios.get('http://localhost:3000/products');
  //   this.products = response.data;
  //   console.log(response);
  // },
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products');
    const products = response.data;

    return { products }
  }
}
</script>

<style>

</style>