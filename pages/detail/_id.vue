<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/api'

export default {
  // _id.vue 라는 패턴을 사용하면, _id 로 연동되서 들어옴. _ 가 라우터의 파라미터이고 id 는 값으로 인식합니다.
  // created() {
  //   console.log(this.$route)
  //   fetchProductById()
  // },
  async asyncData({ params }) {
    const response = await fetchProductById(params.id);
    const product = response.data;

    return { product }
  },
  methods: {
    async addToCart() {
      // await createCartItem(this.product)
      // this.$store.commit('addItemToCart', this.product)
      // this.$router.push('/cart')
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>