<template>
  <div class="detail">
    文章详情
    <router-link :to="'/article/'" class="article-return">返回</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .article-return {
    position: absolute;
    right: 30px;
    bottom: 20px;
    display: block;
    padding: 5px 8px;
    border-radius: 5px;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    background: #515a6e;
    color: #fff;
    opacity: .8;
  }
</style>
