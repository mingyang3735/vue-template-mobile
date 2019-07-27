<template>
  <div class="home">
    <van-button>home</van-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted () {
    this.$http.post('/post')
  }
}
</script>
