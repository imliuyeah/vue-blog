<template>
    <ul class="article-list">
      <li class="article-list-items" v-for="items in list" :key="items.id">
        <h2 class="article-title">{{items.title}}</h2>
        <span class="article-date el-icon-date">发表日期 {{items.date}}</span>
        <div class="article-content">
          <p class="article-desc">{{items.abstract}}</p>
        </div>
        <span 
         :to="'article/'+items.id" 
         class="article-detail"
         @click="goArticleDetail(items.id)">
         阅读更多 >>
        </span>
      </li>
    </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ArticleList',
  data(){
    return {
      list: []
    }
  },
  mounted(){
    this.getArticleList()
  },
  methods: {
    getArticleList(){
      axios.get('article.json')
           .then(this.getArticleSucc)
    },
     getArticleSucc(res){
      res = res.data
      if(res.code == 200 && res.data){
        this.list = res.data
      }
    },
    goArticleDetail(id){
      this.$router.push("/article/" + id)
    }
  }
}
</script>

<style scoped>
  .article-list {
    text-align: center;
  }
  .article-list-items {
    position: relative;
    height: 250px;
    padding: 10px 20px;
    margin-bottom: 10px;
    border-radius: 6px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .08);
  }
  .article-title {
    line-height: 58px;
    font-size: 26px;
  }
  .article-date {
    line-height: 20px;
    color: #888;
  }
  .article-content {
    overflow: hidden;
    height: 100px;
    padding: 20px 0 0 0;
    font-size: 16px;
    line-height: 20px;
  }
  .article-detail {
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
    cursor: pointer;
  }
  .article-more:hover {
    opacity: 1;
  }
</style>
