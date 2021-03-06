# 基于Vue的单页面个人博客
## 介绍
  一个纯前端的单页个人博客项目  

  由于没有后台系统支持，目前博客项目采用的都是 mock 数据
  
## 在线预览地址
http://116.62.190.72:8081/#/

## 效果图

### 首页

![index](./images/home.png)

### 文章

![article](./images/article.png)

### 文章详情

![detail](./images/articleDetail.png)

### 评论

![comment](./images/comment.png)

### 登录

![login](./images/login.png)

### 注销

![logout](./images/logout.png)

### 屏幕小于800像素时适配

![mobile](./images/mobile.png)

![mobile](./images/mobile2.png)
  
## 技术栈
 + Vue.js：基础框架
 + Vuex：公共状态管理
 + vue-router：路由配置
 + axios：发起Ajax请求
 + Mockjs：主要用于拦截Ajax请求
 + elemnt-ui：NavMenu、Message 等制作

 ## 目前实现的功能
 + 路由跳转
 + 文章归档
 + 文章点赞互动
 + 发表文章评论及回复评论功能
 + 登录验证及注销

## 运行
``` bash
# clone 仓库到本地
git clone https://github.com/imliuyeah/vue-blog.git

# 安装依赖
cd vue-blog
npm install

# 启动项目
npm run dev
```
## License
MIT

