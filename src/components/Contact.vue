<template>
  <section id="contact" class="contact">
    <div class="container-xl">
      <div class="contact-content">
        <div class="contact-info">
          <h2 class="section-title">Contact <span class="highlight">Me</span></h2>
          <h3>Let's work together</h3>
          <p>
            I'm glad you've visited my personal portfolio website! If you have any questions,
            suggestions, or would like to collaborate, please feel free to contact me through
            this form. I will endeavor to reply to your message as soon as possible.
          </p>
          <div class="contact-details">
            <div class="contact-item"><i class="fas fa-envelope"></i><span>vinhpham261206@gmail.com</span></div>
            <div class="contact-item"><i class="fas fa-phone"></i><span>0372886625</span></div>
          </div>
          <div class="social-icons">
            <a href="https://www.instagram.com/phamzinh/" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/PhamVinh2501/" class="social-icon"><i class="fab fa-facebook"></i></a>
            <a href="https://www.tiktok.com/@zinh.250106" class="social-icon"><i class="fab fa-tiktok"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div class="contact-form">
          <form @submit.prevent="onSubmit">
            <input v-model="form.name" type="text" name="name" placeholder="Enter Your Name" required>
            <input v-model="form.email" type="email" name="email" placeholder="Enter Your Email" required>
            <input v-model="form.subject" type="text" name="subject" placeholder="Enter Your Subject" required>
            <textarea v-model="form.message" name="message" placeholder="Enter Your Message" rows="5" required></textarea>
            <button type="submit" class="btn-primary w-100" :disabled="loading">{{ loading ? 'Sending...' : 'Submit' }}</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const loading = ref(false)

const SERVICE_ID = 'service_9xwrlyo'
const TEMPLATE_ID = 'template_e48xt7u'
const PUBLIC_KEY = 'QTRY8cjhMpvushtBo'

const onSubmit = async () => {
  try {
    loading.value = true

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      {
        publicKey: PUBLIC_KEY,
      },
    )

    alert('Gửi thành công! Mình đã nhận được email của bạn, sẽ phản hồi sớm nhất có thể.')
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (e) {
    alert('Không thể gửi email. Vui lòng kiểm tra kết nối hoặc thử lại sau.')
  } finally {
    loading.value = false
  }
}
</script>
