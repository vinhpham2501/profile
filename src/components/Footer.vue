<template>
  <footer class="footer">
    <div class="container-xl footer-inner">
      <div class="footer-left">
        <span class="brand">Portfolio</span>
        <span class="copy">© {{ year }} Phạm Trường Vinh. All rights reserved.</span>
      </div>
      <div class="footer-right">
        <a href="https://www.instagram.com/phamzinh/" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/PhamVinh2501/" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
        <a href="https://www.tiktok.com/@zinh.250106" class="social-icon" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
        <a href="#home" class="scroll-top" aria-label="Back to top"><i class="fas fa-arrow-up"></i></a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #0f1b2e;
  border-top: 1px solid rgba(148, 163, 184, 0.3);
  padding: 1.25rem 0;
  margin-top: 3rem;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}
.footer-left {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.brand {
  font-weight: 700;
}
.copy {
  font-size: 0.85rem;
  color: #94a3b8;
}
.footer-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.scroll-top {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cyan);
  color: #0f172a;
  text-decoration: none;
  box-shadow: 0 0 20px rgba(0,255,255,.5);
  transition: transform .2s ease, box-shadow .2s ease;
}
.scroll-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 28px rgba(0,255,255,.8);
}
@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-right {
    align-self: stretch;
    justify-content: space-between;
  }
}
</style>
