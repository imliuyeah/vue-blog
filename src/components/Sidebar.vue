<template>
  <div class="sidebar">
    <span class="sidebar-logo">生生</span>
    <div class="sidebar-menu">
      <el-menu
        :default-active="$route.path"
        @open="handleOpen"
        @close="handleClose"
        background-color="#515a6e"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-s-order"></i>
          <span slot="title">文章</span>
        </el-menu-item>
        <el-menu-item index="/classify">
          <i class="el-icon-s-grid"></i>
          <span slot="title">分类</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <i class="el-icon-s-custom"></i>
          <span slot="title">关于</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="sidebar-info" ref="wrapper">
      <div class="sidebar-info-img">
        <img src="../images/info.jpg" alt="info">
      </div>
      <p class="sidebar-description">大自然的搬运工</p>
      <ul class="siderbar-comm">
        <li class="siderbar-comm-item">
          <a class="siderbar-comm-link" href="https://github.com/imliuyeah" alt="github">
            <i class="iconfont">&#xe718;</i>
          </a>
        </li>
        <li class="siderbar-comm-item">
          <a class="siderbar-comm-link" href="https://github.com/imliuyeah" alt="github">
            <i class="iconfont">&#xe75a;</i>
          </a>
        </li>
        <li class="siderbar-comm-item">
          <a class="siderbar-comm-link" href="https://github.com/imliuyeah" alt="github">
            <i class="iconfont">&#xe727;</i>
          </a>
        </li>
        <li class="siderbar-comm-item">
          <a class="siderbar-comm-link" href="https://github.com/imliuyeah" alt="github">
            <i class="iconfont">&#xe6bb;</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 800px){
  .sidebar {
    float: left;
    width: 250px;
  }
}
@media screen and (max-width: 800px){
  .sidebar {
    display: none;
  }
}
  .sidebar-logo{
    display: block;
    margin-bottom: 8px;
    line-height: 80px;
    text-align: center;
    font-size: 26px;
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
