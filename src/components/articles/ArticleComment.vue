<template>
  <ul v-if="hasCommentList">
    <li v-for="(item, index) of commentList"  
        :key="item.id"
        :hasReply="hasReplyList(item)"
        :class="hasReply ? 'comment' : 'comment-sub'">
      <div class="comment-header">
        <div class="comment-header-avator">
          <img :src=item.fromAvatar>
        </div>
        <div class="comment-info">
          <span class="comment-info-name">{{item.fromName}}</span>
          <span class="comment-info-time">{{item.time}}</span>
        </div>
      </div>
      <div class="comment-content">
        <p>
          <span class="comment-content-target"
                v-if="!item.reply">
                @{{item.toName}}
          </span>
          {{item.content}}
        </p>
      </div>
      <div class="comment-footer">
        <span v-if="item.reply">#{{ index + 1 }}</span>
        <span :style="[ item.isLiked ? {color: '#f56c6c'} : '']"
              @click="changeLikeState(item)">
          <i class="iconfont">&#xe600;</i>
          {{item.likeNum}}
        </span>
        <span @click="showReplyBox(item)">
          <i class="iconfont">&#xe602;</i>
          回复
        </span>
      </div>
      <div :class="hasReply ? 'comment-reply-box' : 'comment-subreply-box'"
           v-show="showReplyId === item.id">
          <el-input type="textarea" 
                    :placeholder="commentObject"
                    v-model="commentContent"
                    :autosize="{ minRows: 1, maxRows: 10}"
                    autofocus>
          </el-input>
          <span class="comment-reply-btn"
                @click="pushReply(item)">添加回复</span>
      </div>
      <div class="comment-sub-list" v-if="item.reply">
        <!-- <ul class="comment-sub-list">
            <li v-for="(item, index) in item.reply" :key="index">
              <div class="comment-sub-item">
                <div class="comment-header">
                  <div class="comment-header-avator">
                    <img :src=item.fromAvatar>
                  </div>
                  <div class="comment-info">
                    <span class="comment-info-name">{{item.fromName}}</span>
                    <span class="comment-info-time">{{item.time}}</span>
                  </div>
                </div>
                <p class="comment-content">
                  <span class="comment-content-target">@{{item.toName}}</span>
                  {{item.content}}
                </p>
                <div class="comment-footer">
                  <span :style="[ item.isLiked ? {color: '#f56c6c'} : '']"
                        @click="changeLikeState(item)">
                    <i class="iconfont">&#xe600;</i>
                    {{item.likeNum}}
                  </span>
                  <span @click="addChildrenReply(item)">
                    <i class="iconfont">&#xe602;</i>
                    回复
                  </span>
                </div>
                <div class="comment-reply-box"
                    v-show="showChidrenReplyId === item.id">
                  <el-input type="textarea" 
                            placeholder="说点什么吧" 
                            v-model="childrenTextarea"
                            :autosize="{ minRows: 1, maxRows: 10}"
                            autofocus>
                  </el-input>
                  <span type="info" 
                        class="comment-reply-btn"
                        @click="pushChildrenReply(item)">
                    添加回复
                  </span>
                </div>
              </div>
            </li>
        </ul> -->
        <!-- 通过递归的形式来渲染二级回复 -->
        <article-comment :commentList="item.reply"></article-comment>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
import { getCookie, checkLogin } from '../../util/util.js';

export default {
  name: 'ArticleComment',
  props: {
    commentList: Array
  },
  data(){
    return {
      commentObject: '',
      commentContent: '',
      showReplyId: '',
      hasReply: false
    }
  },
  mounted(){
    this.hasCommentList()
  },
  methods: {
    // 判断有无父级文章评论
    hasCommentList(){
      return this.commentList > 0 ? true : false
    },
    // 判断父评论下有无子评论
    hasReplyList(item){
      if (item.reply) {
        this.hasReply = true
      } else {
        this.hasReply = false
      }
      // return item.reply
    },
    // 改变点赞的状态
    changeLikeState(item){
      if(checkLogin()){
        if(!item.isLiked){
          item.likeNum ++
          item.isLiked = true
        }else{
          item.likeNum --
          item.isLiked = false
        }
      }else{
        this.alertLogin()
      }
    },
    // 显示评论框
    showReplyBox(item){
      // checkLogin 用来验证是否已经登录
      if(!checkLogin()){
        this.alertLogin()
        return
      }
      // 判断回复框是属于哪个评论的
      if(this.showReplyId == item.id){
        this.showReplyId = ''
      }else{
        this.showReplyId = item.id
      }
      // 确定评论框中 @ 后面跟着的内容
      this.commentObject = "@" + item.fromName + " "
    },
    // 提交回复
    pushReply(item){
      const reply = {
        "id": this.addId(item.id),
        "fromName": this.$store.state.userInfo.nick,
        "fromId": this.$store.state.userInfo.uid,
        "fromAvatar": "/src/images/info.jpg",
        "toId": item.fromId,
        "toName": item.fromName,
        "time": new Date().toLocaleString('chinese',{hour12:false}),
        "content": this.commentContent,
        "likeNum": 0,
        "isLiked": false
      }
      if(item.reply !== undefined){
        item.reply.push(reply)
      }else{
        this.commentList.push(reply)
      }
      this.showReplyId = ''
      this.commentContent = ''
    },
    // 因为是根据id来判断，应该弹出哪一个评论框，所以这里让id增加，保证弹出的评论框是唯一的
    addId(id){
      let newId = id + 10
      return newId
    },
    // 用来提醒用户登录
    alertLogin(){
      this.$message.warning({
          message: '请先登录！',
          duration: 2000
      });
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/styles/mixins.scss';
@import '../../assets/styles/varibles.scss';

  .comment {
    padding: 20px 0;
    border-top: 1px solid #ddd; 
    font-size: 14px;
  }
  .comment-sub {
    padding: 10px;
    background: #f4f5f5;
  }
  .comment-header {
    position: relative;
    padding-left:40px; 
    .comment-header-avator {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .comment-info {
      height: 30px;
      line-height: 15px;
      .comment-info-name {
        display: block;
        font-size: 15px;
      }
      .comment-info-time {
        font-size: 12px;
        color: #969696;
      }
    }
  }
  .comment-content {
    height: 30px;
    word-break: break-word;
    line-height: 28px;
    .comment-content-target {
      color: #409edd;
    }
  }
  .comment-footer {
    color: #99a2aa;
    line-height: 26px;
    font-size: 12px;
    span {
      margin-right: 15px;
      cursor: pointer;
      .iconfont {
        font-size: 12px;
        margin-right: 2px;
        cursor: pointer;
      }
    }
  }
  .comment-reply-box{
    padding: 10px 10px 50px 10px;
    margin: 0 20px 10px 30px; 
    background: #f4f5f5;
    .comment-reply-btn {
      float: right;
      margin-top:10px;
      @include comment-btn
    }
  }
  .comment-subreply-box{
    padding: 10px 10px 50px 10px;
    margin: 0 20px 10px 30px; 
    border-radius: 5px;
    background: #fff;
    .comment-reply-btn {
      float: right;
      margin-top:10px;
      @include comment-btn
    }
  }
  .comment-sub-list {
    margin:0 20px 10px 20px;
  }
</style>
