<template>
  <div>
    <section class="main-section">
      <div class="content-container">
        <div class="fs-2 fw-bold">{{ $t('landing.aboutUs.title') }}</div>
        <div class="about-us-container">
          <div class="list-container">
            <div class="fs-5">{{ $t('landing.aboutUs.desc') }}</div>
            <ul>
              <li class="fs-5">{{ $t('landing.aboutUs.point-1') }}</li>
              <li class="fs-5">{{ $t('landing.aboutUs.point-2') }}</li>
              <li class="fs-5">{{ $t('landing.aboutUs.point-3') }}</li>
              <li class="fs-5">{{ $t('landing.aboutUs.point-4') }}</li>
              <li class="fs-5">{{ $t('landing.aboutUs.point-5') }}</li>
            </ul>
          </div>
          <div>
            <img src="/src/assets/dz-1.png" alt="DZ">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
  gap: 20px;
}

.main-section {
  min-height: 85vh;

  .about-us-container {
    display: flex;
    gap: 20%;

    .list-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>
