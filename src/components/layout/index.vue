<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
  },
  mounted () {
    console.log(this.userInfo)
  }
}
</script>

<style scoped>
</style>
