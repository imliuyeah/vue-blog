<template>
  <div> 
    <router-view name="Sidebar"></router-view>     
    <router-view></router-view>
    <router-view name="Article"></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  *{
	box-sizing:border-box;
	-moz-box-sizing:border-box;/*兼容低版本的浏览器*/
	-webkit-box-sizing:border-box;/*为了兼容低版本的web*/
  }
  body{
    padding: 0 10%;
    font-size:12px;
    font-family:Arial,Verdana,Tahoma,"微软雅黑","黑体";
    line-height:120%;
    background:#f5f7f9;
    margin:0;
    overflow-x:hidden;/*溢出隐藏，去掉水平方向的，直接剪裁*/
  }
  p,h1,h2,h3,h4,h5,h6,ul,ol,dl,li,form,table{
    margin:0;
    padding:0;
  }
  a,img{
    border:none;/*兼容ie浏览器*/
  }
  img{
    vertical-align:middle;
    border:0;
  }
  li{
    list-style:none;
  }
  i,em{
    font-style:normal;
  }
  a{
    text-decoration:none; 
    color:#000000;
    border:0;
  }
  a:link{
    text-decoration:none; 
    color:#000000;
  }
  a:visited{
    text-decoration:none; 
    color:#000000;
  }
  a:hover{
    text-decoration:none; 
    color:#000000;
  }
  a:active{
    text-decoration:none; 
    color:#000000;
  }
  .clearfix:before,.clearfix:after{
    display:table;
    content:"";
  }
  .clearfix:after{
    clear:both;
  }
  .clearfix{
    *zoom:1;
  }
  /*兼容ie浏览器*/
  table{border-collapse:collapse;}
</style>

