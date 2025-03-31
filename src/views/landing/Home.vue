<template>
  <div class="home">
    <section class="hero-section">
      <div class="content-container">
        <div class="fs-1 fw-bold">{{ $t('landing.home.hero.title') }}</div>
        <div v-html="$t('landing.home.hero.desc')" class="fst-italic fs-3 pt-5 pb-5"></div>

        <a class="scroll-arrow pt-5" href="#main-section">
          <span class="carousel-control-next-icon down-icon" aria-hidden="true"></span>
        </a>
      </div>
    </section>

    <section class="main-section" id="main-section">
      <div class="content-container">
        <div class="fs-4 fw-bold">{{ $t('landing.home.content.brandingChallenge.title') }}</div>
        <div class="challenge-container">
          <div class="list-container">
            <ul>
              <li>{{ $t('landing.home.content.brandingChallenge.challenge-1') }}</li>
              <li>{{ $t('landing.home.content.brandingChallenge.challenge-2') }}</li>
              <li>{{ $t('landing.home.content.brandingChallenge.challenge-3') }}</li>
              <li>{{ $t('landing.home.content.brandingChallenge.challenge-4') }}</li>
              <li>{{ $t('landing.home.content.brandingChallenge.challenge-5') }}</li>
            </ul>
            <div class="">{{ $t('landing.home.content.brandingChallenge.desc') }}</div>
            <div class="fw-bold">{{ $t('landing.home.content.brandingChallenge.solution') }}</div>
          </div>
          <div>
            <img src="/src/assets/mockupfb-300x300.webp" alt="FB">
          </div>
        </div>
      </div>

      <div class="content-container">
        <div class="fs-4 fw-bold text-center">{{ $t('landing.home.content.benefit.title') }}</div>
        <div class="benefit-card-container">
          <div class="card card-animation">
            <div class="card-body">
              <div class="card-title">{{ $t('landing.home.content.benefit.benefit-1.title') }}</div>
              <div class="card-text">{{ $t('landing.home.content.benefit.benefit-1.desc') }}</div>
            </div>
          </div>
          <div class="card card-animation">
            <div class="card-body">
              <div class="card-title">{{ $t('landing.home.content.benefit.benefit-2.title') }}</div>
              <div class="card-text">{{ $t('landing.home.content.benefit.benefit-2.desc') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-container">
        <div class="fs-4 fw-bold text-center">{{ $t('landing.home.content.reason.title') }}</div>
        <div class="reason-card-container">
          <div class="card card-animation">
            <div class="card-body">
              <div class="card-title">{{ $t('landing.home.content.reason.reason-1.title') }}</div>
              <div class="card-text">{{ $t('landing.home.content.reason.reason-1.desc') }}</div>
            </div>
          </div>
          <div class="card card-animation">
            <div class="card-body">
              <div class="card-title">{{ $t('landing.home.content.reason.reason-2.title') }}</div>
              <div class="card-text">{{ $t('landing.home.content.reason.reason-2.desc') }}</div>
            </div>
          </div>
          <div class="card card-animation">
            <div class="card-body">
              <div class="card-title">{{ $t('landing.home.content.reason.reason-3.title') }}</div>
              <div class="card-text">{{ $t('landing.home.content.reason.reason-3.desc') }}</div>
            </div>
          </div>
          <div class="card card-animation">
            <div class="card-body">
              <div class="card-title">{{ $t('landing.home.content.reason.reason-4.title') }}</div>
              <div class="card-text">{{ $t('landing.home.content.reason.reason-4.desc') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-container">
        <div class="fs-4 fw-bold">{{ $t('landing.home.content.curriculum.title') }}</div>
        <div class="curriculum-card-container">
          <div class="card" id="chapter1">
            <div class="card-header fw-bold p-3">{{ $t('landing.home.content.curriculum.chapter-1.title') }}</div>
            <div class="card-body px-4 py-1">
              <div class="list-group list-group-flush">
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-1.point-1') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-1.point-2') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-1.point-3') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-1.point-4') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-1.point-5') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-1.point-6') }}</div>
              </div>
            </div>
          </div>
          <div class="card" id="chapter2">
            <div class="card-header fw-bold p-3">{{ $t('landing.home.content.curriculum.chapter-2.title') }}</div>
            <div class="card-body px-4 py-1">
              <div class="list-group list-group-flush">
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-2.point-1') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-2.point-2') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-2.point-3') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-2.point-4') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-2.point-5') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-2.point-6') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-2.point-7') }}</div>
              </div>
            </div>
          </div>
          <div class="card" id="chapter3">
            <div class="card-header fw-bold p-3">{{ $t('landing.home.content.curriculum.chapter-3.title') }}</div>
            <div class="card-body px-4 py-1">
              <div class="list-group list-group-flush">
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-3.point-1') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-3.point-2') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-3.point-3') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-3.point-4') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-3.point-5') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-3.point-6') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-3.point-7') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-3.point-8') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-3.point-9') }}</div>
              </div>
            </div>
          </div>
          <div class="card" id="chapter4">
            <div class="card-header fw-bold p-3">{{ $t('landing.home.content.curriculum.chapter-4.title') }}</div>
            <div class="card-body px-4 py-1">
              <div class="list-group list-group-flush">
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-1') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-2') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-3') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-4') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-5') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-6') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-7') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-8') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-9') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-10') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-4.point-11') }}</div>
              </div>
            </div>
          </div>
          <div class="card" id="chapter5">
            <div class="card-header fw-bold p-3">{{ $t('landing.home.content.curriculum.chapter-5.title') }}</div>
            <div class="card-body px-4 py-1">
              <div class="list-group list-group-flush">
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-5.point-1') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-5.point-2') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-5.point-3') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-5.point-4') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-5.point-5') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-5.point-6') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-5.point-7') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-5.point-8') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-5.point-9') }}</div>
                <div class="list-group-item">{{ $t('landing.home.content.curriculum.chapter-5.point-10') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-container">
        <div class="fs-4 fw-bold text-center">{{ $t('landing.home.content.gallery.title') }}</div>
        <div class="gallery-container">
          <div class="video-container">
            <div id="video-slider" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators mx-0 indicator">
                <button type="button" data-bs-target="#video-slider" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#video-slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#video-slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/cK6qyvu7WhI" title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/1Lo1oSQW6oc" title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/QCzpop6URR0" title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev nav-button" type="button" data-bs-target="#video-slider"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon prev" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next nav-button" type="button" data-bs-target="#video-slider"
                data-bs-slide="next">
                <span class="carousel-control-next-icon next" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="content-container">
        <div class="fs-4 fw-bold text-center">{{ $t('landing.home.content.testimonial.title') }}</div>
        <div class="testimonial-list">
          <div class="testimonial">
            <div class="fst-italic pb-3">"{{ $t('landing.home.content.testimonial.testimonial-1.desc') }}"</div>
            <div class="fw-bold">{{ $t('landing.home.content.testimonial.testimonial-1.name') }}</div>
          </div>
          <div class="testimonial">
            <div class="fst-italic pb-3">"{{ $t('landing.home.content.testimonial.testimonial-2.desc') }}"</div>
            <div class="fw-bold">{{ $t('landing.home.content.testimonial.testimonial-2.name') }}</div>
          </div>
          <div class="testimonial">
            <div class="fst-italic pb-3">"{{ $t('landing.home.content.testimonial.testimonial-3.desc') }}"</div>
            <div class="fw-bold">{{ $t('landing.home.content.testimonial.testimonial-3.name') }}</div>
          </div>
          <div class="testimonial">
            <div class="fst-italic pb-3">"{{ $t('landing.home.content.testimonial.testimonial-4.desc') }}"</div>
            <div class="fw-bold">{{ $t('landing.home.content.testimonial.testimonial-4.name') }}</div>
          </div>
          <div class="testimonial">
            <div class="fst-italic pb-3">"{{ $t('landing.home.content.testimonial.testimonial-5.desc') }}"</div>
            <div class="fw-bold">{{ $t('landing.home.content.testimonial.testimonial-5.name') }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@keyframes appear {
  from {
    opacity: 0;
    scale: 0.5;
  }

  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes bobble {
  0% {
    transform: scale(1.05) rotate(0deg);
  }

  25% {
    transform: scale(1.05) rotate(2deg);
  }

  50% {
    transform: scale(1.05) rotate(-2deg);
  }

  75% {
    transform: scale(1.05) rotate(1deg);
  }

  100% {
    transform: scale(1.05) rotate(0deg);
  }
}

.home {

  .content-container {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px;
    gap: 20px;
  }

  .hero-section {
    text-align: center;
    height: 90vh;
    padding: 120px 0 64px 0;

    .scroll-arrow {
      width: fit-content;
      align-self: center;

      .down-icon {
        transform: rotate(90deg);
      }
    }
  }

  .main-section {
    background-color: #FDF7E5;
    margin: 0 -16px;

    .card-animation {
      animation: appear linear;
      animation-timeline: view();
      animation-range: entry 0% cover 40%;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }

    .card-animation:hover {
      transform: scale(1.05);
      animation: bobble 0.5s forwards;
    }

    .challenge-container {
      display: flex;
      gap: 20%;

      .list-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }

    .benefit-card-container {
      display: flex;
      justify-content: center;
      gap: 60px;

      .card {
        width: 500px;
      }
    }

    .reason-card-container {
      display: flex;
      justify-content: center;
      gap: 20px;

      .card {
        width: 300px;
      }
    }

    .curriculum-card-container {
      display: flex;
      flex-direction: column;
      gap: 35px;

      .card {
        scroll-margin-top: 100px;

        .card-header {
          background-color: #FFD95B;
        }
      }
    }

    .video-container {
      display: flex;
      flex-direction: column;
      justify-self: center;
      width: 600px;

      .indicator {
        width: fit-content;
        transform: translateX(-50%);
        left: 50%;
      }

      .nav-button {
        background-color: #FFB74D;
        height: fit-content;
        width: fit-content;
        align-self: center;
        margin: 12px;
        padding: 6px;
        border-radius: 12px;
        opacity: 85%;
      }
    }
  }

  .testimonial-section {
    text-align: center;

    .testimonial-list {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .testimonial {
        background: #fff;
        padding: 32px;
        border: 1px solid #eaeaea;
        border-radius: 12px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      }


      .testimonial:hover {
        transform: scale(1.05);
        animation: bobble 0.5s forwards;
      }
    }
  }
}
</style>
