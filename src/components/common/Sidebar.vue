<template>
  <div class="sidebar">
    <p class="sidebar-title">Hello World</p>
    <sidebar-menu></sidebar-menu>
    <div class="sidebar-info" ref="wrapper">
      <div class="sidebar-info-img">
        <img src="../../images/info.jpg" alt="info">
      </div>
      <p class="sidebar-description">大自然的搬运工</p>
      <ul class="siderbar-contact">
        <li class="siderbar-contact-item" v-for="(item, index) in comm" :key="index">
          <a class="siderbar-contact-link" :href="item.link">
            <i class="iconfont" v-html="item.icon"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarMenu
  },
  data(){
    return {
      // 从 /article 跳转到 /article/1 时，Sidebar 这个组件会被复用，因此这时候 el-menu 的 default-active 还是之前匹配到的 /article ，
      // 而当我们刷新了页面之后，default-active 就变成了 /article/1 ，找不到匹配项，就失去了高亮 
      router: true,
      activeIndex: this.$route.path,
      nav: [
        {title: '首页', path: '/', class: 'el-icon-s-home', index: "1"},
        {title: '文章', path: '/article', class: 'el-icon-s-order', index: "2"},
        {title: '归档', path: '/archive', class: 'el-icon-s-grid', index: "3"},
        {title: '关于', path: '/about', class: 'el-icon-info', index: "4"}
      ],
      comm: [
        {link: 'https://github.com/imliuyeah', icon: '&#xe718;'},
        {link: 'https://github.com/imliuyeah', icon: '&#xe75a;'},
        {link: 'https://github.com/imliuyeah', icon: '&#xe727;'},
        {link: 'https://github.com/imliuyeah', icon: '&#xe6bb;'}
      ]
    }
  },
  methods: {
    readPath(){
      const path = this.$route.path
      this.activeIndex = path
      const index = path.lastIndexOf('\/')
      if(index != 0){
        const newPath = path.slice(0, index)
        this.activeIndex = newPath
      }
    }
  },
  watch: {
    '$route'(){
      // 每当页面路由变化时，读取当前路由地址
      this.readPath()
    }
  },
  mounted() {
    // 每当页面发生重载时，读取当前路由地址
    this.readPath()
  }
}
</script>

<style lang="scss" scoped>

  @import '../../assets/styles/varibles.scss';
  
  @media screen and (min-width: 800px){
    .sidebar {
      flex: 0 0 250px;
      margin-right: 15px;
    }
  }
  @media screen and (max-width: 800px){
    .sidebar {
      display: none;
    }
  }
  .sidebar-title{
    margin-bottom: 8px;
    line-height: 80px;
    text-align: center;
    font-size: 20px;
    color: aliceblue;
    background: $theme-color;
  }
  .sidebar-info {
    padding: 20px 20px 40px 20px;
    background: $theme-color;
    box-shadow: $home-shadow;
    .sidebar-info-img {
      overflow: hidden;
      width: 120px;
      height: 120px;
      margin: 0 auto 40px auto;
      border-radius: 100%;
      border: 5px solid #ddd;
      opacity: .8;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
      img {
        max-width: 100%;
      }
    }
    .sidebar-description {
      margin-bottom: 25px;
      border-top: 2px solid #ddd;
      text-align: center;
      font-size: 16px;
      line-height: 46px;
      color: #fff;
    }
    .siderbar-contact {
      display: flex;
      justify-content: center;
      .siderbar-contact-item {
        flex: 1 1 auto;
        text-align: center;
      }
      .siderbar-contact-link {
        display: inline-block;
        width: 35px;
        height: 35px;
        line-height: 35px;
        border-radius: 50%;
        background: #eee;
        &:hover {
          opacity: .8;
        }
        .iconfont {
          text-align: center;
          font-size: 25px;
          color: $theme-color;
        }
      }
    }
  }

 


</style>
