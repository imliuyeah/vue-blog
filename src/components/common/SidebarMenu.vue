<template>
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
</template>

<script>
export default {
  name: 'SidebarMenu',
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
        {title: '更多', path: '/more', class: 'el-icon-info', index: "4"}
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
  .sidebar-menu {
    margin-bottom: 8px;
  }
</style>
