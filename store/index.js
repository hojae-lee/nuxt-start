import { fetchCartItems } from "@/api";

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const state = () => ({
  cartItems: []
});

export const mutations = {
  addCartItem(state, cartItem) {
    state.cartItems.push({
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    });
  },
  setCartItmes(state, cartItems) {
    state.cartItems = cartItems;
  }
}

export const getters = {
  getCartItem(state) {
    return state.cartItems;
  }
}

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }) {
    const res = await fetchCartItems();
    commit('setCartItmes', res.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    })));
  },
  nuxtServerInit() {
    // 스토어가 생성되는 시점에 사용되는 액션
  }
}