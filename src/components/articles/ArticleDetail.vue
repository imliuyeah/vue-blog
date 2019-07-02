<template>
  <div class="article">
    <div class="detail">
      <h3 class="detail-title">{{articleContent.title}}</h3>
      <div class="detail-meta">
        <span class="el-icon-date">
          {{articleContent.date}}
        </span>
        <span class="el-icon-view">
          阅读 10
        </span>
        <span class="el-icon-s-comment">
          评论 {{commentNum}}
        </span>
        <span class="el-icon-star-on">
          赞 {{articleContent.likeNum}}
        </span>
      </div>
      <div class="detail-body" v-html="articleContent.content">
        {{articleContent.content}}
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
  </div>
</template>

<script>
import ArticleComment from './ArticleComment.vue'
import { getCookie, checkLogin } from '../../util/util.js';
import axios from 'axios'
import { mapState } from 'vuex';

export default {
  props: {
    articleContent: Object,
    commentList: Array
  },
  data(){
    return {
      commentNum: 0,
      like: 0,
      textarea: '',
      isLiked: false
    }
  },
  updated(){
    this.commentLength()
  },
  methods: {
    commentLength(){
      let commentLength = this.commentList.length
      const length = this.commentList.length
      for(let i = 0; i < length; i++){
        const replyLength = this.commentList[i].reply.length
        commentLength += replyLength
      }
      return this.commentNum = commentLength
    },
    likeArticle(){
      if(checkLogin()){
        if(!this.isLiked){
          this.articleContent.likeNum ++
          this.isLiked = true
        }else{
          this.articleContent.likeNum --
          this.isLiked = false
        }
      }else{
        this.alertLogin('请先登录')
      }
    },
    addComment(){
      if(checkLogin()){
        if(!this.textarea == ''){
          const comment = {
            "id": this.commentList.length,
            "fromName": this.$store.state.userInfo.nick,
            "fromId": this.$store.state.userInfo.uid,
            "fromAvatar": "/src/images/info.jpg",
            "time": new Date().toLocaleString('chinese',{hour12:false}),
            "content": this.textarea,
            "likeNum": 0,
            "isLiked": false,
            "reply": []
          }
          this.successComment()
          this.$emit('addComment', comment)
          this.textarea = ''
        }else{
          this.alertLogin('发表评论成功')
        }
      }
      this.alertLogin('请先登录')
    },
    successComment(){
      this.$message.success({
          message: '成功发表评论！',
          duration: 2000
      });
    },
    alertLogin(msg){
      this.$message.warning({
          message: msg,
          duration: 2000
      });
    }
  }
}
</script>

<style scoped>
  .article {
    padding: 20px 0 60px 0;
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
