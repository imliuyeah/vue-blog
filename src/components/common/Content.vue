<template>
  <div class="content">
    <keep-alive>
      <router-view></router-view> 
    </keep-alive>
  </div>
</template>

<script>
export default {
  name:'Content'
}
</script>

<style lang="scss" scoped>

  @import '../../assets/styles/varibles.scss';

  .content {
    position: relative;
    flex:1 1 auto;
    margin-bottom: 30px; 
    background: #fff;
    border-radius: 6px;
    box-shadow: $home-shadow;
  }
  @media screen and (max-width: 800px){
    .content {
      padding: 74px 20px 20px 20px; 
    }
  }
</style>
