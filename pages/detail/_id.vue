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
        <button type="button" @click="addToCart">담기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById, createCartItem } from '@/api'

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
  head() {
    return {
      title: `아이템 - ${this.product.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `이 상품은 ${this.product.name} 입니다!`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '상품 상세 페이지'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '상품의 상세 정보를 확인해보세요'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'http://placeimg.com/640/480/fashion'
        },
      ]
    }
  },
  methods: {
    async addToCart() {
      await createCartItem(this.product);
      this.$store.commit('addCartItem', this.product);
      this.$router.push('/cart');
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