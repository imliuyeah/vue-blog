<template>
  <div class="content">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name:'Content'
}
</script>

<style scoped>
  .content {
    flex:1 1 auto;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .08);
  }
  @media screen and (max-width: 800px){
    .content {
      padding: 74px 20px 20px 20px; 
    }
  }
</style>
