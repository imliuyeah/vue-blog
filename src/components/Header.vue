<template>
  <div class="header">
    <div class="header-title">
      <h1>MyBlog</h1>  
    </div>
    <ul class="header-func">
      <li class="header-func-items el-icon-user-solid">登录</li>
    </ul>
    <div class="header-dropdown" @click.prevent="handleClick">
      <i class="el-icon-s-operation"></i>
      <transition name="fade">
        <div class="dropdown-nav" v-show="show">
          <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose"
            background-color="#515a6e"
            text-color="#fff"
            active-text-color="#ffd04b"
            router>
            <el-menu-item 
             v-for="(item, index) in nav" 
             :index="item.path" 
             :key="index">
              <i :class="item.class"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </el-menu>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      show: false,
      nav:[
        {title: '首页', path: '/', class: 'el-icon-s-home'},
        {title: '文章', path: '/article', class: 'el-icon-s-order'},
        {title: '归档', path: '/archive', class: 'el-icon-s-grid'},
        {title: '关于', path: '/about', class: 'el-icon-info'}
      ]
    }
  },
   methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(){
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    height: 64px;
    margin-bottom: 10px;
    line-height: 64px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .08);
  }
  .header-title {
    float: left;
    height: 100%;
    padding-left: 5%;
    line-height: 64px;
    font-size: 18px;
  }
  .header-func {
    float: right;
    padding-right: 5%;
  }
  .header-func-items {
    float: left;
    padding: 0 20px;
    line-height: 64px;
    font-size: 15px;
  }
  .header-dropdown {
    float: right;
    position: relative;
    padding-right: 20px;
    text-align: center;
    cursor: pointer;
  }
  .el-icon-s-operation {
    font-size: 25px;
    line-height: 64px;
    color: #fff;
  }
  .dropdown-nav {
    z-index: -1;
    position: fixed;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 200px;
    padding-top: 64px; 
    background: #515a6e;
    opacity: .95;
  }
  .dropdown-item {
    font-size: 16px;
  }
  .el-menu-vertical {
    border: 0px;
  }
  .fade-enter,
  .fade-leave-to {
    transform: translateX(220px);
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: transform .4s ease;
  } 
  @media screen and (max-width: 800px){
    .header {
      position: fixed;
      top: 0;
      z-index: 20;
      background: #515a6e;
      color: #fff;
    }
    .header-func {
      display: none;
    }
  }
  @media screen and (min-width: 800px){
    .header {
      background: #fff;
      color: #515a6e;
    }
    .header-dropdown {
      display: none;
    }
  }
</style>

