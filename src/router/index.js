import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import Home from '../components/contents/Home.vue'
import More from '../components/contents/More.vue'
import ArticleList from '../components/contents/ArticleList.vue'
import Archive from '../components/contents/Archive.vue'
import ArticleContent from '../components/articles/ArticleContent.vue'

Vue.use(VueRouter)

// axios.defaults.baseURL = '/static/mock';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
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
      path: '/more',
      component: More
    }
  ]
})
export default router