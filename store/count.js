export const state = () => ({
  header: 'Count 페이지',
  count: 0
});

export const mutations = {
  addCount(state, count) {
    state.count += count;
  }
};