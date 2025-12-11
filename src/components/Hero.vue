<template>
  <section id="home" class="hero">
    <div class="container-xl">
      <div class="hero-content">
        <div class="hero-text">
          <h2 class="intro">Hello, It's Me</h2>
          <h1 class="name">Phạm Trường Vinh</h1>
          <div class="typing-container">
            <span>And I am a </span>
            <span class="typing-text">{{ typing }}</span>
            <span class="cursor">|</span>
          </div>
          <p class="description">
            I am a computer science student passionate about web development and technology innovation.
          </p>
          <div class="social-icons">
            <a href="https://www.instagram.com/phamzinh/" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/PhamVinh2501/" class="social-icon"><i class="fab fa-facebook"></i></a>
            <a href="https://www.tiktok.com/@zinh.250106" class="social-icon"><i class="fab fa-tiktok"></i></a>
            <a href="https://www.linkedin.com/in/vinh-ph%E1%BA%A1m-437184371/" class="social-icon"><i class="fab fa-linkedin"></i></a>
          </div>
          <button class="btn-primary" @click="goContact">More About Me</button>
        </div>
        <div class="hero-image">
          <div class="profile-glow">
            <div class="profile-inner">
              <div class="avatar">
                <img class="avatar-img" alt="Avatar" src="/images/avatar.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <button @click="smoothScroll('about')"><i class="fas fa-arrow-down"></i></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const typing = ref('')
const full = 'Computer Science Student'
const router = useRouter()
const smoothScroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

onMounted(() => {
  let i = 0
  const type = () => { if (i < full.length) { typing.value += full[i++]; setTimeout(type, 90) } }
  type()
})

const goContact = () => {
  router.push({ name: 'contact' })
}
</script>
