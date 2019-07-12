<template>
  <transition name="fade">
    <div class="wrapper" v-show="showLoginPage">
      <div class="login">
        <span class="login-title">登录</span>
        <i class="login-close el-icon-close" 
           title="关闭"
           @click="handleCloseLogin">
        </i>
        <div class="login-input">
          <el-input v-model="username" 
                    placeholder="请输入账号:admin"
                    class="login-input-box">
          </el-input>
          <el-input v-model="password" 
                    placeholder="请输入密码:123"
                    show-password
                    class="login-input-box">
          </el-input>
          <button class="login-btn" 
                  @click="handleToLogin">
            登录
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import { setCookie, getCookie } from '../../util/util.js'
import { mapState } from 'vuex'

export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleCloseLogin(){
      this.$store.commit("closeLoginPage")
    },
    handleToLogin(){
      if(this.username == ''){
        this.alertLogin('请输入账号') 
      }else if(this.password == ''){
        this.alertLogin('请输入密码')
      }else{
        this.toLogin()
      }
    },
    toLogin(){
      const loginParam = {
        username: this.username,
        password: this.password
      }
      axios.post('/login', loginParam)
           .then(res => {
             if(res.data.code == 200){
               const data = res.data
               const exdays = 1000 * 60 * 60 * 24 * 7;
               setCookie('session', data.session, exdays) 
               const userInfo = {
                 nick: data.nick,
                 uid: data.uid
               }
               window.localStorage.userInfo = JSON.stringify(userInfo);
               this.successLogin()
               this.$store.commit("closeLoginPage")
               this.$store.commit("changeLoginState", true)
               this.$store.commit("updateUserInfo", userInfo)
               this.username = this.password = ''
             }else{
               this.failedLogin()
             }
           })
    },
    successLogin(){
      this.$message.success({
          message: '登录成功！',
          duration: 2000
      });
    },
    failedLogin(){
      this.$message.error({
          message:'登录失败！账号或密码错误',
          duration: 2000
      });
    },
    alertLogin(msg){
      this.$message.warning({
          message: msg,
          duration: 2000
      });
    }
  },
  computed: {
    ...mapState(['showLoginPage'])
  }
}
</script>

<style lang="scss" scoped>

  @import '../../assets/styles/varibles.scss';

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity .4s ease;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    .login {
      position: relative;
      padding: 20px;
      width: 300px;
      background-color: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      .login-title {
        display: block;
        margin-bottom: 25px;
        font-size: 20px;
        font-weight: 600;
      }
      .login-close {
        position: absolute;
        right: 10px;
        top: 18px;
        font-size: 20px;
        cursor: pointer;
      }
      .login-input-box {
        margin-bottom: 15px;
      }
      .login-btn {
        width: 100%;
        height: 35px;
        margin-top: 20px; 
        color: #fff;
        background-color: $theme-color;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
</style>
