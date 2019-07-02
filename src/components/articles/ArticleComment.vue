<template>
  <div class="comment" v-if="[(commentList.length = 0) ? false : true]">
    <ul class="comment-list">
      <li class="comment-list-item" v-for="(item, index) of commentList" :key="item.username" >
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
                  :style="[ item.isLiked ? {color: '#f56c6c'} : '']"
                  @click="changeLikeState(item)">
              <i class="iconfont">&#xe600;</i>
              {{item.likeNum}}
            </span>
            <span class="comment-reply"
                  @click="addReply(item)">
              <i class="iconfont">&#xe602;</i>
              回复
            </span>
          </div>
        </div>
        <ul class="children">
          <div class="reply"
               v-show="showReplyId === item.id">
            <el-input type="textarea" 
                      placeholder="说点什么吧" 
                      v-model="textarea"
                      :autosize="{ minRows: 1, maxRows: 10}"
                      autofocus>
            </el-input>
            <span type="info" 
                  class="add-comment">
              回复
            </span>
          </div>
          <li v-for="(item, index) in item.reply" :key="index">
            <div class="children-commentator">
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
                      :style="[ item.isLiked ? {color: '#f56c6c'} : '']"
                      @click="changeLikeState(item)">
                  <i class="iconfont">&#xe600;</i>
                  {{item.likeNum}}
                </span>
                <span class="comment-reply"
                      @click="addChildrenReply(item)">
                  <i class="iconfont">&#xe602;</i>
                  回复
                </span>
                <div class="reply"
                    v-show="showChidrenReplyId === item.id">
                  <el-input type="textarea" 
                            placeholder="说点什么吧" 
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 10}"
                            autofocus>
                  </el-input>
                  <span type="info" 
                        class="add-comment">
                    回复
                  </span>
                </div>
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
  props: {
    commentList: Array
  },
  data(){
    return {
      like: 0,
      list: [],
      show: false,
      textarea: '',
      reply: '',
      showReplyId: '',
      showChidrenReplyId: ''
    }
  },
  methods: {
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
    addReply(item){
      if(checkLogin()){
        if(this.showReplyId==item.id){
          this.showReplyId = ''
        }else{
          this.showReplyId = item.id
        }
      }else{
        this.alertLogin()
      }
    },
    addChildrenReply(item){
      if(checkLogin()){
        if(this.showChidrenReplyId){
          this.showChidrenReplyId = ''
        }else{
          this.showChidrenReplyId = item.id
        }
      }else{
        this.alertLogin()
      }
    },
    alertLogin(){
      this.$message.warning({
          message: '请先登录！',
          duration: 2000
      });
    }
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
    margin:0 20px 10px 30px;
  }
  .children-commentator {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    background: #f4f5f5;
  }
  .comment-to {
    color: #409edd;
  }
  .reply{
    padding: 10px 10px 50px 10px;
    margin-bottom: 10px; 
    background: #f4f5f5;
  }
  .add-comment {
    float: right;
    padding: 5px 8px;
    margin-top:10px;
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
