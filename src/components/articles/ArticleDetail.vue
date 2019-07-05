<template>
  <div class="article">
    <h3 class="article-title" v-text="articleContent.title"></h3>
    <div class="article-meta">
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
    <div class="article-body" v-html="articleContent.content"></div>
    <div class="article-like">
      <el-button type="danger" 
                 @click="likeArticle">
        {{articleContent.isLiked ? "取消" : "点赞" }}
      </el-button>
    </div>
    <div class="article-comment">
      <el-input type="textarea" 
                placeholder="说点什么吧~" 
                v-model="textarea"
                :autosize="{ minRows: 3, maxRows: 4}">
      </el-input>
      <span type="info" 
            class="article-comment-btn"
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
    }
  },
  updated(){
    this.commentLength()
  },
  methods: {
    commentLength(){
      let commentLength = this.commentList.length
      for(let i = 0; i < this.commentList.length; i++){
        const replyLength = this.commentList[i].reply.length
        commentLength += replyLength
      }
      return this.commentNum = commentLength
    },
    likeArticle(){
      if(checkLogin()){
        if(!this.articleContent.isLiked){
          this.articleContent.likeNum ++
          this.articleContent.isLiked = true
        }else{
          this.articleContent.likeNum --
          this.articleContent.isLiked = false
        }
      }else{
        this.alert('请先登录')
      }
    },
    addComment(){
      if(checkLogin()){
        if(!this.textarea == ''){
          const comment = {
            "id": this.commentList.length + 1,
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
          this.alert('请输入内容')
        }
      }else{
        this.alert('请先登录')
      }
    },
    successComment(){
      this.$message.success({
          message: '成功发表评论！',
          duration: 2000
      });
    },
    alert(msg){
      this.$message.warning({
          message: msg,
          duration: 2000
      });
    }
  }
}
</script>

<style lang="scss" scoped>

  @import '../../assets/styles/mixins.scss';
  @import '../../assets/styles/varibles.scss';

  .article {
    padding: 20px 0 60px 0;
    .article-title {
      margin: 25px 0;
      font-size: 28px;
      font-weight: 700;
    }
    .article-meta {
      padding-bottom: 3px;
      border-bottom: 1px solid #ddd;
      font-size: 12px;
      color: #969696;
      span {
        padding-right: 6px;
      }
    }
    .article-body {
      padding-top: 10px;
      font-size: 16px;
      line-height: 30px;
      text-indent: 2em;
    }
    .article-like {
      margin: 30px 0;
      text-align: center;
    }
    .article-comment {
      position: relative;
      padding: 0 10px 45px 10px;
      .article-comment-btn {
        position: absolute;
        right: 30px;
        bottom: 0px;
        @include comment-btn
      }
    }
  }
  
  


  
  
</style>
