<template>
  <section id="blog" class="blog">
    <div class="container-xl">
      <h2 class="section-title text-center mb-4">My <span class="highlight">Blog</span></h2>
      <p class="text-center mb-4">
        Chia sẻ về lập trình, công nghệ và kỹ năng mềm trong quá trình học tập và làm việc.
      </p>
      <div v-if="loading" class="text-center py-5">Đang tải dữ liệu...</div>
      <div v-else class="row g-4">
        <div
          v-for="post in posts"
          :key="post.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <article class="blog-card" @click="goDetail(post.id)">
            <header>
              <span class="blog-category">{{ post.category }}</span>
              <h3 class="blog-title">{{ post.title }}</h3>
            </header>
            <p class="blog-excerpt">{{ post.excerpt }}</p>
            <footer class="blog-footer">
              <span class="blog-date">
                <i class="far fa-calendar"></i>
                {{ formatDate(post.createdAt) }}
              </span>
              <button class="btn-text" type="button">
                Xem chi tiết <i class="fas fa-arrow-right ms-1"></i>
              </button>
            </footer>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { fetchBlogPosts, type BlogPost } from '../api'

const posts = ref<BlogPost[]>([])
const loading = ref(true)
const router = useRouter()

onMounted(async () => {
  try {
    posts.value = await fetchBlogPosts()
  } finally {
    loading.value = false
  }
})

const goDetail = (id: number) => {
  router.push({ name: 'blog-detail', params: { id } })
}

const formatDate = (value: string) => new Date(value).toLocaleDateString('vi-VN')
</script>

<style scoped>
.blog { padding: 80px 0; }
.blog-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 18px 18px 16px;
  border: 1px solid rgba(0, 255, 200, 0.25);
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.blog-category {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #00e1ff;
}
.blog-title { font-size: 18px; font-weight: 700; margin-top: 4px; }
.blog-excerpt { font-size: 14px; opacity: 0.9; margin: 10px 0 14px; }
.blog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}
.blog-date { font-size: 13px; opacity: 0.85; }
.btn-text {
  background: none;
  border: none;
  color: #00e1ff;
  font-size: 14px;
}
</style>
