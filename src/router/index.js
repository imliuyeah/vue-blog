import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Article from '../components/Article.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: { default: Article, Header: Header, Sidebar: Sidebar }
    },
    { 
      path: '/article', 
      components: { default: Article, Sidebar: Sidebar, Header: Header } 
    },
    {
      path: '/classify', 
      components: { default: Article, Sidebar: Sidebar, Header: Header } 
    },
    {
      path: '/about', 
      components: { default: About, Sidebar: Sidebar, Header: Header } 
    }
  ]
})
export default router