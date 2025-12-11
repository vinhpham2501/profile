import { createRouter, createWebHistory } from 'vue-router'

import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import BlogList from './components/BlogList.vue'
import BlogDetail from './components/BlogDetail.vue'
import ProjectsAll from './components/ProjectsAll.vue'

const routes = [
  { path: '/', name: 'home', component: Hero },
  { path: '/about', name: 'about', component: About },
  { path: '/skills', name: 'skills', component: Skills },
  { path: '/services', name: 'services', component: Services },
  { path: '/portfolio', name: 'portfolio', component: Portfolio },
  { path: '/projects', name: 'projects-all', component: ProjectsAll },
  { path: '/blog', name: 'blog', component: BlogList },
  { path: '/blog/:id', name: 'blog-detail', component: BlogDetail },
  { path: '/contact', name: 'contact', component: Contact },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
