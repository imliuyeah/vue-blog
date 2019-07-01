<template>
  <div class="comment">
    <ul class="comment-list">
      <li class="comment-list-item" v-for="(item, index) of list" :key="item.username" >
        <div class="commentator">
          <div class="comment-header">
            <span class="avator">
              <img class="avator-img" :src=item.fromAvatar>
            </span>
            <div class="info">
              <span class="info-name">{{item.fromName}}</span>
              <span class="info-time">{{item.time}}</span>
            </div>
          </div>
          <p class="comment-detail">
            {{item.content}}
          </p>
          <div class="comment-footer">
            <span class="comment-floor">#{{ index + 1 }}</span>
            <span class="comment-like" 
                  @click="isLiked(item, isLikeComment)">
              <i class="iconfont">&#xe600;</i>
              {{item.likeNum}}
            </span>
            <span class="comment-reply">
              <i class="iconfont">&#xe602;</i>
              回复
            </span>
          </div>
        </div>
        <ul class="children">
          <li v-for="(item, index) in item.reply" :key="index">
            <div class="commentator">
              <div class="comment-header">
                <span class="avator">
                  <img class="avator-img" :src=item.fromAvatar>
                </span>
                <div class="info">
                  <span class="info-name">{{item.fromName}}</span>
                  <span class="info-time">{{item.time}}</span>
                </div>
              </div>
              <p class="comment-detail">
                <span class="comment-to">@{{item.toName}}</span>
                {{item.content}}
              </p>
              <div class="comment-footer">
                <span class="comment-like" 
                      @click="isLiked(item, isLikeReply)">
                  <i class="iconfont">&#xe600;</i>
                  {{item.likeNum}}
                </span>
                
                <span class="comment-reply">
                  <i class="iconfont">&#xe602;</i>
                  回复
                </span>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { getCookie, checkLogin } from '../../util/util.js';

export default {
  name: 'ArticleComment',
  data(){
    return {
      like: 0,
      list: [],
      isLikeComment: false,
      isLikeReply: false
    }
  },
  mounted(){
    this.getComment()
  },
  methods: {
    getComment(){
      axios.get('comment.json')
           .then(this.getCommentSucc)
    },
    getCommentSucc(res){
      res = res.data
      if(res.ret && res.data){
        this.list = res.data
      }
    },
    isLiked(item, part){
      console.log(part)
      if(checkLogin()){
        if(!this.part){
          item.likeNum ++
          this.part = true
        }else{
          item.likeNum --
          this.part = false
        }
      }
    }
    // likeComment(item){
    //   if(checkLogin()){
    //     if(!this.isLikeComment){
    //       item.likeNum ++
    //       this.isLikeComment = true
    //     }else{
    //       item.likeNum --
    //       this.isLikeComment = false
    //     }
    //   }
    // },
    // likeReply(item){
    //   if(checkLogin()){
    //     if(!this.isLikeComment){
    //       item.likeNum ++
    //       this.isLikeReply = true
    //     }else{
    //       item.likeNum --
    //       this.isLikeReply = false
    //     }
    //   }
    // }

  }
}
</script>

<style scoped>
  .comment {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #ddd; 
  }
  .comment-list {
    font-size: 14px;
  }
  .comment-list-item {
    padding-top: 10px;
    border-bottom: 1px solid #ddd; 
  }
  .comment-header {
    position: relative;
    padding-left:40px; 
  }
  .avator {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 30px;
    height: 30px;
    overflow: hidden;
  }
  .avator-img {
    width: 100%;
    height: 100%;
  }
  .info {
    height: 30px;
    line-height: 15px;
  }
  .info-name {
    display: block;
    font-size: 15px;
    color: #333;
  }
  .info-time {
    font-size: 12px;
    color: #969696;
  }
  .comment-detail {
    height: 30px;
    word-break: break-word;
    line-height: 28px;
  }
  .comment-footer {
    color: #99a2aa;
    line-height: 26px;
    font-size: 12px;
  }
  .comment-footer span {
    margin-right: 15px;
    cursor: pointer;
  }
  .iconfont {
    font-size: 12px;
    margin-right: 2px;
    cursor: pointer;
  }
  .children {
    padding: 10px 0 0 50px;
  }
  .comment-to {
    color: #409edd;
  }
</style>
