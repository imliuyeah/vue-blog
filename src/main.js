import Vue from 'vue'
import Vuex from 'vuex'
import router from './router/index.js'
import App from './App.vue'
import { 
  Pagination,
  Icon,
  Button, 
  Menu, 
  Submenu, 
  MenuItem, 
  MenuItemGroup,
  Timeline,
  TimelineItem,
  Input,
  Message,
  MessageBox
} from 'element-ui'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import axios from 'axios'
import { getCookie } from './util/util.js'

import '../static/mock/index.js'

Vue.use(Vuex)

Vue.component(Icon.name, Icon)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Button.name, Button)
Vue.component(Timeline.name, Timeline)
Vue.component(TimelineItem.name, TimelineItem)
Vue.component(Input.name, Input)
Vue.component(Pagination.name, Pagination)

Vue.prototype.$message = Message
Vue.prototype.$messagebox = MessageBox

const store = new Vuex.Store({
  state: {
    showLoginPage: false,
    LoginState: false,
    userInfo: {
      nick: null,
      uid: null
    }
  },
  mutations: {
    // 打开登录页面
    openLoginPage(state){
      state.showLoginPage = true
    },
    // 关闭登录页面
    closeLoginPage(state){
      state.showLoginPage = false
    },
    // 根据传入的布尔值（bool）来切换是登录还是注销
    changeLoginState(state, bool){
      state.LoginState = bool
    },
    updateUserInfo(state, userInfo){
      state.userInfo = userInfo
    }
  }
})

new Vue({
    el: '#app',
    router,
    store,
    axios,
    render: c => c(App),
    beforeCreate(){
      if(getCookie('session')){
        this.$store.state.LoginState = true
        const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        this.$store.state.userInfo = userInfo
      }
    }
})
