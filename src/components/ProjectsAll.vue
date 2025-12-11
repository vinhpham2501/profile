<template>
  <section class="projects-all">
    <div class="container-xl">
      <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 class="section-title mb-0">Tất cả <span class="highlight">Dự án</span></h2>
        <RouterLink class="btn-outline" :to="{ name: 'portfolio' }">
          Quay lại trang Projects
        </RouterLink>
      </div>
      <p class="text-center mb-4">
        Danh sách chi tiết các dự án tôi đã thực hiện, bao gồm mô tả, công nghệ sử dụng, vai trò và thời gian.
      </p>

      <div v-if="loading" class="text-center py-5">Đang tải dự án...</div>

      <div v-else class="row g-4">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-12 col-lg-6"
        >
          <article class="project-detail-card">
            <div class="row g-3 align-items-start">
              <div class="col-12 col-md-5">
                <img :src="project.image" :alt="project.title" class="project-image" />
              </div>
              <div class="col-12 col-md-7">
                <h3 class="project-title">
                  {{ project.title }}
                  <span v-if="project.featured" class="badge-featured">Featured</span>
                </h3>
                <p class="project-description mb-2">{{ project.description }}</p>
                <ul class="project-meta mb-2">
                  <li v-if="project.role"><strong>Vai trò:</strong> {{ project.role }}</li>
                  <li v-if="project.teamSize"><strong>Team:</strong> {{ project.teamSize }} người</li>
                  <li v-if="project.startDate || project.endDate">
                    <strong>Thời gian:</strong>
                    <span v-if="project.startDate">{{ project.startDate }}</span>
                    <span v-if="project.startDate && project.endDate"> - </span>
                    <span v-if="project.endDate">{{ project.endDate }}</span>
                  </li>
                </ul>
                <div class="project-techs mb-2" v-if="project.techs?.length">
                  <span
                    v-for="tech in project.techs"
                    :key="tech"
                    class="tech-pill"
                  >
                    {{ tech }}
                  </span>
                </div>
                <ul v-if="project.responsibilities?.length" class="responsibilities">
                  <li v-for="item in project.responsibilities" :key="item">{{ item }}</li>
                </ul>
                <a
                  v-if="project.link"
                  class="btn-primary mt-2 d-inline-block"
                  :href="project.link"
                  target="_blank"
                >
                  Xem dự án
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { fetchProjects, type Project } from '../api'

const projects = ref<Project[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    projects.value = await fetchProjects()
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.projects-all { padding: 80px 0; }
.project-detail-card {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 18px;
  border: 1px solid rgba(0, 255, 200, 0.25);
  padding: 18px 18px 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}
.project-image {
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  height: 190px;
}
.project-title { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
.badge-featured {
  font-size: 11px;
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, #14ffe9, #00e1ff);
  color: #000;
}
.project-meta { list-style: none; padding-left: 0; font-size: 13px; margin-bottom: 4px; }
.project-meta li { margin-bottom: 3px; }
.project-techs { display: flex; flex-wrap: wrap; gap: 6px; }
.tech-pill {
  font-size: 12px;
  padding: 3px 9px;
  border-radius: 999px;
  border: 1px solid rgba(0, 255, 200, 0.35);
}
.responsibilities { font-size: 13px; padding-left: 18px; margin-bottom: 0; }
@media (max-width: 768px) {
  .project-image { height: 180px; }
}
</style>
