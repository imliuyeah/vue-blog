<template>
    <ul class="article">
      <li class="article-list" v-for="items in list" :key="items.id">
        <h2 class="article-title">{{items.title}}</h2>
        <span class="article-date el-icon-date">发表日期 {{items.date}}</span>
        <div class="article-content">
          <p>{{items.abstract}}</p>
        </div>
        <span :to="'article/'+items.id" 
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
      axios.get('/article.json')
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

<style lang="scss" scoped>

  @import '../../assets/styles/varibles.scss';

  .article {
    text-align: center;
    .article-list {
      position: relative;
      height: 250px;
      padding: 10px 20px;
      margin-bottom: 10px;
      border-radius: 6px;
      box-shadow: $home-shadow;
      .article-title {
        font-weight: 800;
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
        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
