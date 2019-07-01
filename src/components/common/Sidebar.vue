<template>
  <div class="sidebar">
    <p class="sidebar-title">Hello World</p>
    <div class="sidebar-menu">
      <el-menu :default-active="activeIndex"
               :router="router"
               class="el-menu-vertical"
               background-color="#515a6e"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item v-for="(item, index) in nav" 
                      :index="item.path" 
                      :key="index">
          <i :class="item.class"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="sidebar-info" ref="wrapper">
      <div class="sidebar-info-img">
        <img src="../../images/info.jpg" alt="info">
      </div>
      <p class="sidebar-description">大自然的搬运工</p>
      <ul class="siderbar-comm">
        <li class="siderbar-comm-item" v-for="(item, index) in comm" :key="index">
          <a class="siderbar-comm-link" :href="item.link">
            <i class="iconfont" v-html="item.icon"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
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

<style scoped>
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
    background: #515a6e;
    border-right: solid 1px #e6e6e6;
  }
  .sidebar-menu {
    margin-bottom: 8px;
  }
  .sidebar-info {
    width: 100%;
    padding: 20px 20px 40px 20px;
    background: #515a6e;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .sidebar-info-img {
    overflow: hidden;
    width: 120px;
    height: 120px;
    margin: 0 auto 40px auto;
    border-radius: 100%;
    border: 5px solid #ddd;
    text-align: center;
    opacity: .8;
  }
  .sidebar-info-img:hover {
    opacity: 1;
    border: 5px solid #ddd;
    cursor: pointer;
  }
  .sidebar-info-img img {
    vertical-align: middle;
    max-width: 100%;
  }
  .sidebar-description {
    margin-bottom: 25px;
    border-top: 2px solid #ddd;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    color: #fff;
  }
  .siderbar-comm {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
  }
  .siderbar-comm-item {
    flex: 1 1 auto;
    text-align: center;
  }
  .siderbar-comm-link {
    display: inline-block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border-radius: 50%;
    background: #eee;
    text-align: center;
  }
  .siderbar-comm-link:hover {
    opacity: .8;
  }
  .iconfont {
    text-align: center;
    font-size: 25px;
    color: #515a6e;
  }
</style>
