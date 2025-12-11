<template>
  <section class="blog-detail">
    <div class="container-xl">
      <button class="btn-outline mb-3" type="button" @click="goBack">
        <i class="fas fa-arrow-left me-1"></i> Quay lại danh sách
      </button>

      <div v-if="loading" class="py-4">Đang tải bài viết...</div>

      <article v-else-if="post">
        <header class="mb-3">
          <span class="badge-category">{{ post.category }}</span>
          <h1 class="detail-title mt-2">{{ post.title }}</h1>
          <p class="detail-meta">
            <i class="far fa-calendar"></i>
            {{ formatDate(post.createdAt) }}
          </p>
        </header>
        <p class="detail-content">{{ post.content }}</p>
        <div v-if="post.tags.length" class="detail-tags mt-3">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="tag-pill"
          >
            #{{ tag }}
          </span>
        </div>
      </article>

      <p v-else class="mt-4">Không tìm thấy bài viết.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchBlogPost, type BlogPost } from '../api'

const route = useRoute()
const router = useRouter()

const post = ref<BlogPost | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const id = Number(route.params.id)
    post.value = await fetchBlogPost(id)
  } catch (e) {
    post.value = null
  } finally {
    loading.value = false
  }
})

const goBack = () => {
  router.push({ name: 'blog' })
}

const formatDate = (value: string) => new Date(value).toLocaleDateString('vi-VN')
</script>

<style scoped>
.blog-detail { padding: 80px 0; }
.detail-title { font-size: 28px; font-weight: 800; }
.detail-meta { font-size: 14px; opacity: 0.8; }
.detail-content { margin-top: 18px; font-size: 16px; line-height: 1.7; opacity: 0.95; }
.badge-category {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #00e1ff;
}
.detail-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag-pill {
  font-size: 13px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(0, 255, 200, 0.35);
}
.btn-outline {
  border-radius: 999px;
  border: 1px solid rgba(0, 255, 200, 0.7);
  padding: 6px 14px;
  font-size: 14px;
  background: transparent;
  color: #fff;
}
</style>
