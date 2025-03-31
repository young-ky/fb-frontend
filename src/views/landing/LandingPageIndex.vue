<template>
  <div class="landing-page">
    <NavBar />

    <div class="content-container">
      <router-view />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from '@/views/components/NavBar.vue'
import FooterComponent from '@/views/components/Footer.vue'

export default {
  name: 'LandingPageIndex',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  margin: 16px;
}
</style>
