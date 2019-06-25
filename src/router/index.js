import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Home from '../components/contents/Home.vue'
import About from '../components/contents/About.vue'
import Article from '../components/contents/Article.vue'
import Archive from '../components/contents/Archive.vue'
import ArticleDetail from '../components/articles/ArticleDetail.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = '/static/mock';

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