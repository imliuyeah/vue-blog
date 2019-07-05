<template>
  <div class="home">
    <h2 class="home-title">关于网站</h2>
    <p class="home-info">
      <ul>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
      </ul>
    </p>
    <h2 class="home-title">关于博主</h2>
    <p class="home-info">
      <ul>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
        <li>本网站是一个个人博客网站，主要分享博主的编程学习心得。</li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>

  @import '../../assets/styles/varibles.scss';

  .home {
    padding: 20px;
    background: #fff;
    box-shadow: $home-shadow;
    border-radius: 6px;
    .home-title {
      padding-bottom: 15px;
      font-weight: 800;
      font-size: 24px;
      border-bottom: 1px solid #ddd; 
    }
    .home-info {
      padding: 20px;
      line-height: 25px;
      font-size: 15px;
    }
  }
</style>
