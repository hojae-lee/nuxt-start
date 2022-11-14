import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductsByKeyword(keyword) {
  // axios 문법으로 아래와 같이 사용하여 쿼리 스트링으로 보낼 수 있음.
  return instance.get(`/products`, {
    params: {
      name_like: keyword
    }
  })
}

export { fetchProductById, fetchProductsByKeyword }