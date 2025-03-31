<template>
  <nav class="navbar sidenav" data-mdb-sidenav-init data-mdb-right="true">
    <div class="logo">
      <router-link to="home"><img src="@/assets/FB.png" alt="Logo" /></router-link>
    </div>

    <!-- Desktop Menu -->
    <div class="menu-container">
      <div v-if="$route.name !== 'Home'" class="menu-item desktop-menu">
        <router-link class="link" to="home">Home</router-link>
      </div>
      <div class="menu-item desktop-menu">
        <router-link class="link" to="promotion">Promotion</router-link>
      </div>
      <div class="menu-item desktop-menu">
        <router-link class="link" to="faq">FAQ</router-link>
      </div>
      <div v-if="$route.name === 'Home'" class="menu-item menu-dropdown desktop-menu">
        <a class="link" href="#">Course Chapters</a>
        <div class="dropdown-content">
          <a class="link item" href="#chapter1">Chapter 1</a>
          <a class="link item" href="#chapter2">Chapter 2</a>
          <a class="link item" href="#chapter3">Chapter 3</a>
          <a class="link item" href="#chapter4">Chapter 4</a>
          <a class="link item" href="#chapter5">Chapter 5</a>
        </div>
      </div>
      <div class="menu-item desktop-menu">
        <router-link class="link" to="about-us">About Us</router-link>
      </div>
      <div class="menu-item flag-dropdown">
        <img :src="flagUrl(currentLocale)" alt="flag" class="flag-icon" />
        <div class="flag-dropdown-content">
          <div v-for="lang in langs" :key="lang.code" :class="{ active: currentLocale === lang.code }"
            @click="changeLocale(lang.code)" class="flag-dropdown-item">
            <img :src="flagUrl(lang.code)" alt="flag" class="flag-icon" />
          </div>
        </div>
      </div>

      <div class="hamburger-menu-container">
        <div class="hamburger-menu" ref="hamburgerMenu" @click="toggleMobileMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" v-if="isMobileMenuOpen" ref="mobileMenu">
      <div v-if="$route.name !== 'Home'" class="mobile-menu-item">
        <router-link class="link" to="home" @click="toggleMobileMenu">Home</router-link>
      </div>
      <div class="mobile-menu-item">
        <router-link class="link" to="promotion" @click="toggleMobileMenu">Promotion</router-link>
      </div>
      <div class="mobile-menu-item">
        <router-link class="link" to="faq" @click="toggleMobileMenu">FAQ</router-link>
      </div>
      <div v-if="$route.name === 'Home'" class="mobile-menu-item dropstart">
        <a type="button" class="link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Course Chapters
        </a>
        <div class="dropdown-menu">
          <a class="link item" href="#chapter1" @click="toggleMobileMenu">Chapter 1</a>
          <a class="link item" href="#chapter2" @click="toggleMobileMenu">Chapter 2</a>
          <a class="link item" href="#chapter3" @click="toggleMobileMenu">Chapter 3</a>
          <a class="link item" href="#chapter4" @click="toggleMobileMenu">Chapter 4</a>
          <a class="link item" href="#chapter5" @click="toggleMobileMenu">Chapter 5</a>
        </div>
      </div>
      <div class="mobile-menu-item">
        <router-link class="link" to="about-us" @click="toggleMobileMenu">About Us</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      currentLocale: this.$i18n.locale,
      langs: [
        { code: 'id' },
        { code: 'en' }
      ],
      isMobileMenuOpen: false
    }
  },
  methods: {
    changeLocale(lang) {
      this.currentLocale = lang
      this.$i18n.locale = lang
    },
    flagUrl(lang) {
      return `/images/${lang}.svg`
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    handleClickOutside(event) {
      if (!this.isMobileMenuOpen) {
        return
      }

      const mobileMenu = this.$refs.mobileMenu
      const hamburgerMenu = this.$refs.hamburgerMenu

      if (mobileMenu && hamburgerMenu && !mobileMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        this.isMobileMenuOpen = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: #FFB74D;
  padding: 10px 60px;
  user-select: none;
  z-index: 100;

  .logo {
    img {
      display: flex;
      align-items: center;
      height: 50px;
    }
  }

  .menu-container {
    display: flex;

    .menu-item {
      position: relative;
      margin: 0 10px;

      .link {
        text-decoration: none;
        padding: 10px 15px;
        display: block;
      }

      .link:hover {
        background-color: #FF9800;
        border-radius: 6px;
      }

      .router-link-active {
        background-color: #FF9800;
        border-radius: 6px;
      }
    }

    .dropdown-content {
      display: none;
      position: absolute;
      width: 100%;
      box-sizing: border-box;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      border-radius: 6px;

      .item {
        margin: 6px;
      }
    }

    .menu-dropdown:hover .dropdown-content {
      background-color: #FFB74D;
      display: block;
    }

    .flag-icon {
      width: 35px;
      height: 35px;
      object-fit: cover;
      vertical-align: middle;
      border-radius: 100%;
    }

    .flag-dropdown {
      display: flex;
      align-items: center;
    }

    .flag-dropdown-content {
      display: none;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      box-sizing: border-box;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      border-radius: 100px;

      .flag-dropdown-item {
        padding: 6px;
        align-self: center;
        border-radius: 50%;
      }

      .flag-dropdown-item:hover {
        background-color: #FF9800;
      }
    }

    .flag-dropdown:hover .flag-dropdown-content {
      background-color: #FFB74D;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      padding: 5px 6px;
    }
  }

  // Hamburger menu icon (hidden on desktop)
  .hamburger-menu-container {
    display: none;
    align-items: center;

    .hamburger-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 25px;
      cursor: pointer;

      .bar {
        height: 4px;
        width: 100%;
        background-color: #fff;
        border-radius: 2px;
      }
    }
  }


  // Mobile menu container styling
  .mobile-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #FFB74D;
    padding: 5px 10px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 100;
    max-width: 45vh;
    height: 100vh;
    text-align: center;

    .mobile-menu-item {
      margin: 10px 0;

      .link {
        text-decoration: none;
        padding: 10px 15px;
        display: block;
        color: #000;
      }

      .link:hover {
        background-color: #FF9800;
        border-radius: 6px;
      }
    }

    .dropdown-menu {
      background-color: #FFB74D;
      border-radius: 6px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);

      .item {
        margin: 0 8px;
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 10px 20px;
  }

  .desktop-menu {
    display: none !important;
  }

  .hamburger-menu-container {
    display: flex !important;
    padding-right: 50px;
  }

  .mobile-menu {
    display: flex !important;
  }

  .flag-dropdown {
    margin-right: 30px !important;
  }

  .flag-dropdown:hover .flag-dropdown-content {
    top: -30%;
    left: -160%;
    flex-direction: row !important;
  }
}
</style>