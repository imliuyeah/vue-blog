<template>
  <div class="archive">
    <el-timeline>
      <el-timeline-item v-for="(item, key) of list" :key="key">
        <div class="archive-year">{{key}}</div>
        <el-timeline-item class="archive-detail"
                          v-for="(detail, index) in item"
                          :key="index"
                          :timestamp="detail.timestamp">
          <router-link :to="'/article/' + detail.id">{{detail.title}}</router-link>
        </el-timeline-item>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Archive',
  data(){
    return {
      list: {}
    }
  },
  mounted(){
    this.getArticle()
  },
  methods: {
    getArticle(){
      axios.get('/archive.json')
           .then(this.getArticleSucc)
    },
    getArticleSucc(res){
      res = res.data
      if(res.code == 200 && res.data) {
        this.list = res.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .archive {
    padding: 20px;
    .archive-year {
      font-size: 30px;
      font-weight: 700;
      color: #000;
      padding-bottom: 25px 
    }
    .archive-detail {
      font-weight: 600;
      font-size: 15px;
      opacity: .8;
      &:hover {
        opacity: 1;
      }
    }
  }
</style>
