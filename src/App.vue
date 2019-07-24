<template>
  <div>
    <home-header></home-header>
    <div class="banner">
      <home-sidebar></home-sidebar>
      <home-content></home-content>
    </div>
    <home-login></home-login>
  </div>
</template>

<script>
import HomeHeader from './components/common/Header.vue'
import HomeSidebar from './components/common/Sidebar.vue'
import HomeContent from './components/common/Content.vue'
import HomeLogin from './components/common/Login.vue'

export default {
  components: {
    HomeHeader,
    HomeSidebar,
    HomeContent,
    HomeLogin
  },
  watch:{
   '$route':function(to,from){
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style>
  @media screen and (min-width: 800px){
    .banner {
      display: flex;
      align-items: flex-start;
      height: auto;
      padding: 0 10%;
    } 
  }
  @media screen and (max-width: 800px){
    .message-box-logout {
      width: 200px;
    }
    .el-message {
      min-width: 200px;
    }
  }
  
</style>

