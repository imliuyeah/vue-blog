<template>
  <div class="wrapper">
    <article-detail :articleContent="articleContent"
                    :commentList="commentList"
                    @addComment="handlePushComment">
    </article-detail>
    <article-comment :commentList="commentList"
                     @addReply="handlePushComment">
    </article-comment>
  </div>
</template>

<script>
import ArticleDetail from './ArticleDetail.vue'
import ArticleComment from './ArticleComment.vue'
import axios from 'axios'

export default {
  components: {
    ArticleDetail,
    ArticleComment
  },
  data(){
    return {
      articleContent: {},
      commentList: []
    }
  },
  mounted(){
    this.getArticleAndComment()
  },
  watch: {
    "$route"(to, from){
      let params = this.$route.params
      let path = '/article/' + params.id
      if(params && to.path == path){
        this.getArticleAndComment()
      }
    }
  },
  methods: {
    // 请求文章内容和评论列表，然后再把得到的内容传递给相应的子组件
    getArticleAndComment(){
      const that = this
      const id = this.$route.params.id
      axios.all([
        axios.get('/article.json'),
        axios.get('/comment' + id + '.json') 
      ])
      .then(
        axios.spread(function(article, comment){
          if(article.status == 200){
            // 根据当前页面的文章id，找到对应的文章数据，并把数据传入子组件
            function findMatchId(item){
              return item.id == id
            }
            that.articleContent = article.data.data.find(findMatchId)
          }
          if(comment.status == 200){
            that.commentList = comment.data.data
          }
        })
      )
    },
    handlePushComment(comment){
      this.commentList.push(comment)
    }
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 800px){
    .wrapper {
      padding: 0 50px;
    } 
  }
  @media screen and (max-width: 800px){
    .wrapper {
      padding: 0 10px;
    } 
  }
</style>
