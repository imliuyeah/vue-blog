import Vue from 'vue'
import Vuex from 'vuex'
import router from './router/index.js'
import App from './App.vue'
import { 
  Icon,
  Button, 
  Menu, 
  Submenu, 
  MenuItem, 
  MenuItemGroup,
  Timeline,
  TimelineItem
} from 'element-ui'

import './assets/styles/iconfont.css'

Vue.use(Vuex)

Vue.component(Icon.name, Icon)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Button.name, Button)
Vue.component(Timeline.name, Timeline)
Vue.component(TimelineItem.name, TimelineItem)

const store = new Vuex.Store({
  
})

new Vue({
    el: '#app',
    router,
    store,
    render: c => c(App)
})