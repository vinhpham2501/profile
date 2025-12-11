<template>
  <section id="services" class="services">
    <div class="container-xl">
      <h2 class="section-title text-center mb-4">My <span class="highlight">services</span></h2>
      <div class="row g-4 justify-content-center">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="service-card">
            <div class="icon"><i class="fas fa-code"></i></div>
            <h3>UI/UX Design</h3>
            <p>
              Tôi cung cấp dịch vụ thiết kế UI/UX chuyên nghiệp, tập trung vào trải nghiệm
              người dùng trực quan, thẩm mỹ và chức năng. Thiết kế mang lại hiệu quả cho
              sản phẩm và mục tiêu kinh doanh.
            </p>
            <button class="btn-primary" @click="goContact">Contact me</button>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="service-card">
            <div class="icon"><i class="fas fa-palette"></i></div>
            <h3>Graphic Design</h3>
            <p>
              Thiết kế đồ họa sáng tạo: logo, banner, ấn phẩm số. Đảm bảo tính nhất quán
              thương hiệu và truyền tải thông điệp hiệu quả trên nhiều nền tảng.
            </p>
            <button class="btn-primary" @click="goContact">Contact me</button>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="service-card">
            <div class="icon"><i class="fas fa-laptop-code"></i></div>
            <h3>Frontend Dev</h3>
            <p>
              Phát triển giao diện web hiện đại bằng HTML, CSS, JavaScript và Vue. Tối ưu
              hiệu năng, responsive, SEO và trải nghiệm người dùng mượt mà.
            </p>
            <button class="btn-primary" @click="goContact">Contact me</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goContact = () => {
  router.push({ name: 'contact' })
}
</script>

<style scoped>
.services { padding: 80px 0; }
.section-title { font-size: 42px; font-weight: 800; }
.service-card {
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(0, 255, 200, .25);
  border-radius: 16px;
  padding: 24px;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0,0,0,.15);
}
.service-card .icon {
  font-size: 36px;
  margin-bottom: 12px;
  background: linear-gradient(90deg,#14ffe9,#00e1ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.service-card h3 { font-weight: 700; margin-bottom: 10px; }
.service-card p { opacity: .85; min-height: 96px; }
.service-card .btn-primary { margin-top: 10px; }
</style>
