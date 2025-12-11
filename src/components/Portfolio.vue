<template>
  <section id="portfolio" class="portfolio">
    <div class="container-xl">
      <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 class="section-title mb-0">
          My <span class="highlight">Projects</span>
        </h2>
        <button class="btn-outline" type="button" @click="viewAllProjects">
          Xem tất cả dự án
        </button>
      </div>
      <p class="text-center mb-4">
        Một số dự án tiêu biểu trong quá trình học tập và làm việc của tôi.
      </p>

      <div v-if="loading" class="text-center py-5">Đang tải dự án...</div>

      <div v-else class="row g-4">
        <div
          v-for="project in projects.slice(0, 3)"
          :key="project.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <article class="project-card" @click="selectProject(project)">
            <div class="project-image-wrapper">
              <img :src="project.image" :alt="project.title" class="project-image" />
              <span v-if="project.featured" class="badge-featured">Featured</span>
            </div>
            <div class="project-body">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">
                {{ project.description }}
              </p>
              <ul class="project-meta">
                <li v-if="project.role"><i class="fas fa-user"></i> Vai trò: {{ project.role }}</li>
                <li v-if="project.teamSize"><i class="fas fa-users"></i> Team: {{ project.teamSize }} người</li>
                <li v-if="project.startDate || project.endDate">
                  <i class="fas fa-calendar"></i>
                  Thời gian:
                  <span v-if="project.startDate">{{ project.startDate }}</span>
                  <span v-if="project.startDate && project.endDate"> - </span>
                  <span v-if="project.endDate">{{ project.endDate }}</span>
                </li>
              </ul>
              <div class="project-techs" v-if="project.techs?.length">
                <span
                  v-for="tech in project.techs"
                  :key="tech"
                  class="tech-pill"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="project-actions mt-2">
                <button
                  class="btn-text"
                  type="button"
                  @click.stop="openProjectLink(project)"
                >
                  Chi tiết <i class="fas fa-arrow-right ms-1"></i>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div v-if="selected" class="project-detail mt-5">
        <div class="detail-header d-flex flex-wrap justify-content-between gap-3 align-items-center">
          <div>
            <h3 class="detail-title">{{ selected.title }}</h3>
            <p class="detail-sub">Thông tin chi tiết dự án</p>
          </div>
          <button class="btn-outline" type="button" @click="selected = null">
            Đóng chi tiết
          </button>
        </div>

        <div class="row mt-3 g-4 align-items-start">
          <div class="col-12 col-lg-6">
            <img :src="selected.image" :alt="selected.title" class="detail-image" />
          </div>
          <div class="col-12 col-lg-6">
            <p class="mb-3">{{ selected.description }}</p>
            <ul class="detail-list">
              <li v-if="selected.role"><strong>Vai trò:</strong> {{ selected.role }}</li>
              <li v-if="selected.teamSize"><strong>Số lượng thành viên:</strong> {{ selected.teamSize }} người</li>
              <li v-if="selected.startDate || selected.endDate">
                <strong>Thời gian thực hiện:</strong>
                <span v-if="selected.startDate">{{ selected.startDate }}</span>
                <span v-if="selected.startDate && selected.endDate"> - </span>
                <span v-if="selected.endDate">{{ selected.endDate }}</span>
              </li>
              <li v-if="selected.responsibilities?.length">
                <strong>Nhiệm vụ chính:</strong>
                <ul>
                  <li v-for="item in selected.responsibilities" :key="item">{{ item }}</li>
                </ul>
              </li>
            </ul>
            <div class="project-techs mt-2" v-if="selected.techs?.length">
              <span
                v-for="tech in selected.techs"
                :key="tech"
                class="tech-pill"
              >
                {{ tech }}
              </span>
            </div>
            <a
              v-if="selected.link"
              class="btn-primary mt-3 d-inline-block"
              :href="selected.link"
              target="_blank"
            >
              Xem sản phẩm
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { fetchProjects, type Project } from '../api'

const projects = ref<Project[]>([])
const loading = ref(true)
const selected = ref<Project | null>(null)
const router = useRouter()

onMounted(async () => {
  try {
    projects.value = await fetchProjects()
  } finally {
    loading.value = false
  }
})

const selectProject = (project: Project) => {
  selected.value = project
}

const openProjectLink = (project: Project) => {
  if (project.link) {
    window.open(project.link, '_blank')
  } else {
    selectProject(project)
  }
}

const viewAllProjects = () => {
  router.push({ name: 'projects-all' })
}
</script>

<style scoped>
.portfolio { padding: 80px 0; }
.project-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 255, 200, 0.25);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.project-image-wrapper { position: relative; overflow: hidden; }
.project-image {
  width: 100%;
  height: 210px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.project-card:hover .project-image { transform: scale(1.05); }
.badge-featured {
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(90deg, #14ffe9, #00e1ff);
  color: #000;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 600;
}
.project-body { padding: 16px 18px 18px; }
.project-title { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
.project-description { font-size: 14px; opacity: 0.85; margin-bottom: 8px; }
.project-meta { list-style: none; padding: 0; margin: 0 0 8px; font-size: 13px; opacity: 0.9; }
.project-meta li { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.project-meta i { color: #00e1ff; }
.project-techs { display: flex; flex-wrap: wrap; gap: 6px; }
.tech-pill {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(0, 255, 200, 0.35);
}
.project-actions { display: flex; justify-content: space-between; align-items: center; }
.btn-outline {
  border-radius: 999px;
  border: 1px solid rgba(0, 255, 200, 0.7);
  padding: 6px 14px;
  font-size: 14px;
  background: transparent;
  color: #fff;
}
.btn-text {
  background: none;
  border: none;
  color: #00e1ff;
  font-size: 14px;
}
.project-detail {
  margin-top: 32px;
  padding: 24px 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(0, 255, 200, 0.25);
}
.detail-title { font-size: 24px; font-weight: 800; }
.detail-sub { opacity: 0.8; }
.detail-image {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
}
.detail-list { list-style: none; padding-left: 0; margin-bottom: 0; }
.detail-list > li { margin-bottom: 8px; }
.detail-list ul { margin: 4px 0 0 18px; }
@media (max-width: 768px) {
  .project-image { height: 200px; }
}
</style>
