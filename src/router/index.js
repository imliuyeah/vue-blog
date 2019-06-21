import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Article from '../components/Article.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: { default: Header, Sidebar: Sidebar, Article:Article }
    }
  ]
})
export default router