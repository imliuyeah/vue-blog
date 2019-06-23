import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import PageArticle from '../components/page/PageArticle.vue'
import PageAbout from '../components/page/PageAbout.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: { default: PageArticle, Header: Header, Sidebar: Sidebar }
    },
    { 
      path: '/article', 
      components: { default: PageArticle, Sidebar: Sidebar, Header: Header } 
    },
    {
      path: '/classify', 
      components: { default: PageArticle, Sidebar: Sidebar, Header: Header } 
    },
    {
      path: '/about', 
      components: { default: PageAbout, Sidebar: Sidebar, Header: Header } 
    }
  ]
})
export default router