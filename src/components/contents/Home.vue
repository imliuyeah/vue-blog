<template>
  <div class="home">
    <div class="typing">
      <p class="typing-content">你好，陌生人，很高兴与你相遇。</p>
    </div>
    <div class="wrapper">
      <div class="info about">
        <h3 class="title about-title" @click="showAbout">关于我</h3>
        <i class="el-icon-arrow-down"></i>
        <transition>
          <p class="content about-content" v-show="showAboutContent">
            我叫柳烨，23岁，毕业于中南林业科技大学，曾经是一名景观设计师，现如今正在前端修炼之路上摸爬滚打。<br>
            爱好音乐、话剧，偶尔也会进行文字创作。<br>
          </p>
        </transition>
      </div>
      <div class="info why">
        <h3 class="title why-title" @click="showwhy">为什么选择前端</h3>
        <i class="el-icon-arrow-down"></i>
        <transition>
          <p class="content why-content" v-show="showWhyContent">
            2018年，我在一个小规模的景观公司任职，虽然领着一份还不错的薪水，但却总是感到迷茫；<br>
            某个风和日丽的晨间，我的boss突然提出让我制作一个公司官网，因为这个偶然的机会，我接触到了前端。<br>
            在自学的期间，我逐渐被这个行业吸引；<br>
            也许人生总该有那么一次冒险。我这么想着。<br>
            于是我毅然裸辞，开始了我的homeschool之旅。
          </p>
        </transition>
      </div>
      <div class="info dream">
        <h3 class="title dream-title" @click="showDream">我的梦想</h3>
        <i class="el-icon-arrow-down"></i>
        <transition>
          <p class="content dream-content" v-show="showDreamContent">
            梦想总是要有的，万一实现了呢？<br>
            现阶段就是找到一份心仪的工作，希望屏幕对面的你能够向我抛出橄榄枝~<br>
            而我的终极目标，是走上全栈的道路！<br>
            路漫漫其修远兮，吾将上下而求索。
          </p>
        </transition>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      showAboutContent: false,
      showWhyContent: false,
      showDreamContent: false
    }
  },
  methods: {
    showAbout(){
      this.showAboutContent = !this.showAboutContent
    },
    showwhy(){
      this.showWhyContent = !this.showWhyContent
    },
    showDream(){
      this.showDreamContent = !this.showDreamContent
    }
  }
}
</script>

<style lang="scss" scoped>

  @import '../../assets/styles/varibles.scss';
  @import '../../assets/styles/mixins.scss';

  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateY(20%)
  }
  .v-enter-active,
  .v-leave-active{
    transition: all .8s ease;
  }
  .home {
    padding: 0 20px 10px 0;
    background: #fff;
    box-shadow: $home-shadow;
    border-radius: 6px;
    .typing{
      padding: 40px 0;
      font-size: 20px;
      .typing-content{
        margin: 0 auto;
        @include typing
      }
    }
    .wrapper{
      max-height: 0;
      // padding-bottom: 80px;
      @include expend(20px, 600px);
      .info{
        padding: 20px 10px 0 10px;
        .title{
          position: relative;
          padding: 0 20px 10px 20px;
          border-bottom: 1px solid #ddd;
          font-size: 18px;
        }
        .el-icon-arrow-down {
          position: absolute;
          top: 20px;
          right: 50px;
          font-size: 20px;
        }
        .content{
          line-height: 24px;
          padding: 10px 30px;
          font-size: 14px;
        }
      }
      .about{
        @include slideIn(5s);
      }
      .why{
        @include slideIn(6s);
      }
      .dream{
        padding-bottom: 80px; 
        @include slideIn(7s);
      }
    }
  }

</style>
