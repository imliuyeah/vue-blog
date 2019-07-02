import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import Home from '../components/contents/Home.vue'
import About from '../components/contents/About.vue'
import ArticleList from '../components/contents/ArticleList.vue'
import Archive from '../components/contents/Archive.vue'
import ArticleContent from '../components/articles/ArticleContent.vue'

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
      component: ArticleList
    },
    {
      path: '/article/:id',
      component: ArticleContent
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