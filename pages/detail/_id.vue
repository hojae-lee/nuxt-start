<template>
  <div>
    <h1>상세 페이지</h1>
  </div>
</template>

<script>
export default {
  // _id.vue 라는 패턴을 사용하면, _id 로 연동되서 들어옴. _ 가 라우터의 파라미터이고 id 는 값으로 인식합니다.
  created() {
    console.log(this.$route)
  }
}
</script>

<style>

</style>