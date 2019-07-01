<template>
  <div class="article">
    <div class="detail">
      <h3 class="detail-title">风筝</h3>
      <div class="detail-meta">
        <span class="el-icon-date">
          2019-06-23 19:20:20
        </span>
        <span class="el-icon-view">
          阅读 10
        </span>
        <span class="el-icon-s-comment">
          评论 {{this.comment.length}}
        </span>
        <span class="el-icon-star-on">
          赞 {{this.like}}
        </span>
      </div>
      <div class="detail-body">
        <p>北京的冬季，地上还有积雪，灰黑色的秃树枝丫叉于晴朗的天空中，而远处有一二风筝浮动，在我是一种惊异和悲哀。</p>
        <p>北京的冬季，地上还有积雪，灰黑色的秃树枝丫叉于晴朗的天空中，而远处有一二风筝浮动，在我是一种惊异和悲哀。</p>
        <p>故乡的风筝时节，是春二月，倘听到沙沙的风轮声，仰头便能看见一个淡墨色的蟹风筝或嫩蓝色的蜈蚣风筝。还有寂寞的瓦片风筝，没有风轮，又放得很低，伶仃地显出憔悴可怜的模样。但此时地上的杨柳已经发芽，早的山桃也多吐蕾，和孩子们的天上的点缀相照应，打成一片春日的温和。我现在在哪里呢？四面都还是严冬的肃杀，而久经诀别的故乡的久经逝去的春天，却就在这天空中荡漾了。</p>
      </div>
      <div class="article-like">
        <el-button type="danger" 
                   class="article-like" 
                   @click="likeArticle">
          {{isLiked ? "取消" : "点赞" }}
        </el-button>
      </div>
    </div>
    <div class="comment">
      <el-input type="textarea" 
                placeholder="说点什么吧~" 
                v-model="textarea"
                :autosize="{ minRows: 3, maxRows: 4}">
      </el-input>
      <span type="info" 
            class="add-comment"
            @click="addComment">
        发表评论
      </span>
    </div>
    <article-comment></article-comment>
  </div>
</template>

<script>
import ArticleComment from './ArticleComment.vue'
import { getCookie, checkLogin } from '../../util/util.js';

export default {
  components: {
    ArticleComment
  },
  data(){
    return {
      like: 0,
      comment: [],
      textarea: '',
      isLiked: false
    }
  },
  methods: {
    likeArticle(){
      if(checkLogin()){
        if(!this.isLiked){
          this.like ++
          this.isLiked = true
        }else{
          this.like --
          this.isLiked = false
        }
      }
    },
    addComment(){
      if(checkLogin()){
        alert('发表成功')
      }
    }
  }
}
</script>

<style scoped>
  .article {
    padding: 20px 20px 60px 20px;
  }
  .detail-title {
    margin: 25px 0;
    font-size: 28px;
    font-weight: 700;
  }
  .article-like {
    margin: 10px 0;
    text-align: center;
  }
  .detail-meta {
    padding-bottom: 3px;
    border-bottom: 1px solid #ddd;
    font-size: 12px;
    color: #969696;
  }
  .detail-meta span {
    padding-right: 6px;
  }
  .detail-body {
    padding-top: 10px;
    font-size: 16px;
    line-height: 30px;
    text-indent: 2em;
  }
  .comment {
    position: relative;
    padding: 0 10px 45px 10px;
  }
  .add-comment {
    position: absolute;
    right: 30px;
    bottom: 0px;
    display: block;
    padding: 5px 8px;
    border-radius: 5px;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    background: #515a6e;
    color: #fff;
    opacity: .8;
    cursor: pointer;
  }
</style>
