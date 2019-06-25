<template>
  <div class="home">
    我是主页
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .home {
    margin-left: 260px;
    line-height: 24px;
  }
  @media screen and (max-width: 800px){
  .home {
    width: 100%;
    padding: 74px 20px 20px 20px; 
    margin-left: 0px;
  }
}
</style>
