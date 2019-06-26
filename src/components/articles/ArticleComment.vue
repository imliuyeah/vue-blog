<template>
  <div class="comment">
    <ul class="comment-list">
      <li class="comment-list-item" v-for="(items, index) in list" :key="items.username" >
        <div class="commentator">
          <div class="comment-header">
            <span class="avator">
              <img class="avator-img" src="../../images/info.jpg">
            </span>
            <div class="info">
              <span class="info-name">{{items.username}}</span>
              <span class="info-time">{{items.time}}</span>
            </div>
          </div>
          <p class="comment-detail">
            {{items.content}}
          </p>
          <div class="comment-footer">
            <span class="comment-floor">#{{ index + 1 }}</span>
            <i class="iconfont">&#xe600;</i>
            <span class="comment-like">赞</span>
            <i class="iconfont">&#xe602;</i>
            <span class="comment-reply">回复</span>
          </div>
        </div>
        <ul v-if="items.reply" class="children">
          <li>
            <div class="commentator">
              <div class="comment-header">
                <span class="avator">
                  <img class="avator-img" src="../../images/info.jpg">
                </span>
                <div class="info">
                  <span class="info-name">{{items.reply.username}}</span>
                  <span class="info-time">{{items.reply.time}}</span>
                </div>
              </div>
              <p class="comment-detail">
                {{items.reply.content}}
              </p>
              <div class="comment-footer">
                <i class="iconfont">&#xe600;</i>
                <span class="comment-like">赞</span>
                <i class="iconfont">&#xe602;</i>
                <span class="comment-reply">回复</span>
              </div>
            </div>
          </li>
          <!-- <article-comment :list="items.reply"></article-comment> -->
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArticleComment',
  data(){
    return {
      list: []
    }
  },
  mounted(){
    this.getComment()
  },
  methods: {
    getComment(){
      this.$http.get('comment.json')
                .then(this.getCommentSucc)
    },
    getCommentSucc(res){
      res = res.data
      if(res.ret && res.data){
        this.list = res.data
      }
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
</style>
