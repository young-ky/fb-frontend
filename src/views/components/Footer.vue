<template>
  <div>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-text">© 2025 Your Company. All rights reserved.</div>
        <div class="footer-links">
          <router-link class="link" to="about-us" @click="toggleMobileMenu">About Us</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    .footer-text {
      margin: 0;
      font-size: 14px;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 10px 0 0;
      display: flex;
      justify-content: center;
      gap: 15px;

      .link {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        transition: color 0.3s ease;
      }

      .link:hover {
        color: #ddd;
      }
    }
  }
}

@media (max-width: 600px) {
  .footer-links {
    flex-direction: column;
    gap: 10px;
  }
}
</style>