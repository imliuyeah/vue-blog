import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import Home from '../components/contents/Home.vue'
import About from '../components/contents/About.vue'
import Article from '../components/contents/Article.vue'
import Archive from '../components/contents/Archive.vue'
import ArticleDetail from '../components/articles/ArticleDetail.vue'

Vue.use(VueRouter)

axios.defaults.baseURL = '/static/mock';

const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/article',
      component: Article
    },
    {
      path: '/article/:id',
      component: ArticleDetail
    },
    {
      path: '/archive',
      component: Archive
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
export default router