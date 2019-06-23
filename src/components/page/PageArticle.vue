<template>
  <div class="article">
    <ul class="article-list">
      <li class="article-list-items">
        <h1>我的文章</h1>
        <span>发表于</span>
        <p>我是文章的内容我是文章的内容我是文章的内容我是文章的内容我是文章的内容</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageArticle'
}
</script>

<style scoped>
  .article {
    margin-left: 260px;
    background: #fff;
    border-radius: 6px;
    text-align: center;
  }
  .article-list-items {
    height: 300px;
    margin-bottom: 10px;
    line-height: 64px;
    border-radius: 6px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .08);
  }
  @media screen and (max-width: 800px){
    .article {
      width: 100%;
      margin-left: 0px;
      padding: 74px 20px 20px 20px; 
    }
  }
</style>
