<template>
  <nav class="navbar">
    <div class="nav-container container-xl">
      <div class="nav-brand d-flex align-items-center gap-2">
        <img src="/images/logoo.png" alt="Logo" style="height:28px;width:auto;border-radius:6px" onerror="this.style.display='none'" />
        <span class="brand-text">Portfolio</span>
      </div>
      <div class="nav-menu d-none d-md-flex">
        <RouterLink to="/" class="nav-link" active-class="active" exact>Home</RouterLink>
        <RouterLink to="/about" class="nav-link" active-class="active">About</RouterLink>
        <RouterLink to="/skills" class="nav-link" active-class="active">Skills</RouterLink>
        <RouterLink to="/services" class="nav-link" active-class="active">Services</RouterLink>
        <RouterLink to="/portfolio" class="nav-link" active-class="active">Project</RouterLink>
        <RouterLink to="/blog" class="nav-link" active-class="active">Blog</RouterLink>
        <RouterLink to="/contact" class="nav-link" active-class="active">Contact</RouterLink>
      </div>
      <button class="mobile-menu-btn d-md-none btn"><i class="fas fa-bars"></i></button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

onMounted(() => {
  // simple mobile toggle using Bootstrap utility classes
  const btn = document.querySelector('.mobile-menu-btn')
  const menu = document.querySelector('.nav-menu')
  btn?.addEventListener('click', () => menu?.classList.toggle('d-none'))
})
</script>
