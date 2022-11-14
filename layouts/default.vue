<template>
  <div>
    <app-header></app-header>
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
  // created() {
  //   console.log(this.$route);
  // }
}
</script>