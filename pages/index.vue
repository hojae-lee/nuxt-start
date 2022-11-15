<template>
  <div class="app">
    <main>
      <div>
        <search-input v-model="searchKeyWord" @search="searchProducts"></search-input>
      </div>
      <ul>
        <li v-for="product in products" :key="product.id" class="item flex" @click="moveToDetailPage(product.id)">
          <img :src="product.imageUrl" :alt="product.name" class="product-image">
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="addToCart">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import SearchInput from '@/components/SearchInput.vue';
import { fetchProductsByKeyword } from '@/api'

export default {
  components: {
    SearchInput
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
    const products = response.data.map(item => {
      return {
        // item 에 있는 속성을 해쉬(키, 벨류) 값으로 넣어줌.
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      }
    });

    return { products }
  },
  data() {
    return {
      searchKeyWord: ''
    }
  },
  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`);
    },
    addToCart() {
      this.$router.push('/cart');
    },
    async searchProducts() {
      const response = await fetchProductsByKeyword(this.searchKeyWord);
      // this.products 를 정의하지 않았지만, asyncData 에서 정의했음으로 사용할 수 있음.
      this.products = response.data.map(item => {
        return{
          // item 에 있는 속성을 해쉬(키, 벨류) 값으로 넣어줌.
          ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`
        }
      });
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>