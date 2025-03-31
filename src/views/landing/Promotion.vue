<template>
  <div>
    <section>
      <div class="content-container">
        <div class="promotion-container">
          <div class="image-container px-3">
            <img src="/src/assets/allrekap-300x250.png" alt="DZ">
          </div>
          <div class="promo-container">
            <div class="fs-4 pb-4 fw-bold">{{ $t('landing.promotion.title') }}</div>
            <div class="fs-5 fw-bold">{{ $t('landing.promotion.promo.totalValue') }}</div>
            <div class="fs-3 pb-4 fw-bold">
              Rp. <del class="text-danger">{{ $t('landing.promotion.promo.value') }}</del>,-
            </div>
            <div class="fs-5 fw-bold">{{ $t('landing.promotion.promo.desc') }}</div>
            <div class="fs-3 pb-4 fw-bold">
              Rp. <span class="text-success">{{ $t('landing.promotion.promo.promoPrice') }}</span>,-
            </div>
            <div class="button-container">
              <button type="button" class="btn btn-primary w-100">{{ $t('landing.promotion.promo.applyNow') }}</button>
              <button type="button" class="btn btn-success w-100">{{ $t('landing.promotion.promo.applyWA') }}</button>
            </div>
          </div>
        </div>

        <div class="promotion-list">
          <div class="promotion">
            <div class="fw-bold">
              {{ $t('landing.promotion.product-1.name') }}
              (<span class="text-danger">{{ $t('landing.promotion.product-1.price') }}</span>)
            </div>
            <div class="pt-3">{{ $t('landing.promotion.product-1.desc') }}</div>
          </div>
          <div class="promotion">
            <div class="fw-bold">
              {{ $t('landing.promotion.product-2.name') }}
              (<span class="text-danger">{{ $t('landing.promotion.product-2.price') }}</span>)
            </div>
            <div class="pt-3">{{ $t('landing.promotion.product-2.desc') }}</div>
          </div>
          <div class="promotion">
            <div class="fw-bold">
              {{ $t('landing.promotion.product-3.name') }}
              (<span class="text-danger">{{ $t('landing.promotion.product-3.price') }}</span>)
            </div>
            <div class="pt-3">{{ $t('landing.promotion.product-3.desc') }}</div>
          </div>
          <div class="promotion">
            <div class="fw-bold">
              {{ $t('landing.promotion.product-4.name') }}
              (<span class="text-danger">{{ $t('landing.promotion.product-4.price') }}</span>)
            </div>
            <div class="pt-3">{{ $t('landing.promotion.product-4.desc') }}</div>
          </div>
          <div class="promotion">
            <div class="fw-bold">
              {{ $t('landing.promotion.product-5.name') }}
              (<span class="text-danger">{{ $t('landing.promotion.product-5.price') }}</span>)
            </div>
            <div class="pt-3">{{ $t('landing.promotion.product-5.desc') }}</div>
          </div>
          <div class="promotion">
            <div class="fw-bold">
              {{ $t('landing.promotion.product-6.name') }}
              (<span class="text-danger">{{ $t('landing.promotion.product-6.price') }}</span>)
            </div>
            <div class="pt-3">{{ $t('landing.promotion.product-6.desc') }}</div>
          </div>
          <div class="promotion">
            <div class="fw-bold">
              {{ $t('landing.promotion.product-7.name') }}
              (<span class="text-danger">{{ $t('landing.promotion.product-7.price') }}</span>)
            </div>
            <div class="pt-3">{{ $t('landing.promotion.product-7.desc') }}</div>
          </div>
          <div class="promotion">
            <div class="fw-bold">
              {{ $t('landing.promotion.product-8.name') }}
              (<span class="text-danger">{{ $t('landing.promotion.product-8.price') }}</span>)
            </div>
            <div class="pt-3">{{ $t('landing.promotion.product-8.desc') }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Promotion'
}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
  gap: 40px;
}

.promotion-container {
  display: flex;
  gap: 15%;

  .image-container {
    display: flex;
    justify-content: center;
  }

  .promo-container {
    display: flex;
    flex-direction: column;
    text-align: center;

    .button-container {
      display: flex;
      justify-content: center;
      gap: 5%;
    }
  }
}

.promotion-list {
  display: flex;
  flex-direction: column;
  gap: 32px;

  .promotion {
    background: #fff;
    padding: 32px;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .promotion:hover {
    transform: scale(1.05);
  }
}
</style>
