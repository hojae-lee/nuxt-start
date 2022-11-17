import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.baseURL
});

function fetchProductById(id) {
  return instance.get(`/products/${id}`);
}

function fetchProductsByKeyword(keyword) {
  // axios 문법으로 아래와 같이 사용하여 쿼리 스트링으로 보낼 수 있음.
  return instance.get(`/products`, {
    params: {
      name_like: keyword
    }
  });
}

function fetchCartItems() {
  return instance.get(`/carts`);
}

function fetchProducts() {
  return instance.get(`/products`)
}

async function createCartItem(cartItem) {
  await fetchCartItems();

  return instance.post(`/carts`, cartItem);
}

export { fetchProductById, fetchProductsByKeyword, createCartItem, fetchCartItems, fetchProducts }