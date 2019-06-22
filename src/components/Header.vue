<template>
  <div class="header">
    <div class="header-logo el-icon-s-flag"></div>
    <ul class="header-nav">
      <li class="header-nav-items el-icon-s-home">登录</li>
      <li class="header-nav-items el-icon-set-up">管理</li>
    </ul>
  </div>
</template>
z
<script>
export default {
  name: 'Header'

}
</script>

<style scoped>
  .header {
    width: 100%;
    height: 64px;
    margin-bottom: 10px;
    line-height: 64px;
    background: #fff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .08);
  }
  .header-logo {
    float: left;
    height: 100%;
    padding-left: 5%;
    color: #515a6e;
    line-height: 64px;
    font-size: 30px;
  }
  .header-nav {
    float: right;
    padding-right: 5%;
  }
  .header-nav-items {
    float: left;
    padding: 0 20px;
    color: #515a6e;
    line-height: 64px;
    font-size: 15px;
  }
</style>

