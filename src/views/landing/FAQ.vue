<template>
  <div>
    <section class="main-section">
      <div class="content-container">
        <div class="fs-2 fw-bold">{{ $t('landing.faq.title') }}</div>

        <div>
          <div class="accordion" id="accordionFAQ">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <div class="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {{ $t('landing.faq.faq-1.question') }}
                </div>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionFAQ">
                <div class="accordion-body fs-5">
                  <div>{{ $t('landing.faq.faq-1.answer-1') }}</div>
                  <br>
                  <div>{{ $t('landing.faq.faq-1.answer-2') }}</div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <div class="accordion-button fw-bold fs-5 collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  {{ $t('landing.faq.faq-2.question') }}
                </div>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionFAQ">
                <div class="accordion-body fs-5">
                  <div>{{ $t('landing.faq.faq-2.answer-1') }}</div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <div class="accordion-button fw-bold fs-5 collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  {{ $t('landing.faq.faq-3.question') }}
                </div>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionFAQ">
                <div class="accordion-body fs-5">
                  <div>{{ $t('landing.faq.faq-3.answer-1') }}</div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <div class="accordion-button fw-bold fs-5 collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  {{ $t('landing.faq.faq-4.question') }}
                </div>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionFAQ">
                <div class="accordion-body fs-5">
                  <div>{{ $t('landing.faq.faq-4.answer-1') }}</div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <div class="accordion-button fw-bold fs-5 collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  {{ $t('landing.faq.faq-5.question') }}
                </div>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionFAQ">
                <div class="accordion-body fs-5">
                  <div>{{ $t('landing.faq.faq-5.answer-1') }}</div>
                  <br>
                  <div>{{ $t('landing.faq.faq-5.answer-2') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FAQ'
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

  .accordion-item {
    background-color: #FDF7E5;
    user-select: none;

    .accordion-button {
      background-color: #FDF7E5;
    }
  }
}
</style>
