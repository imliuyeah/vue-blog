import Vue from 'vue'
import router from './router/index.js'
import App from './App.vue'
import { Icon, Menu, Submenu, MenuItem, MenuItemGroup, Row, Col, Button } from 'element-ui'

import './assets/styles/iconfont.css'

Vue.component(Icon.name, Icon)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)


new Vue({
    el: '#app',
    router,
    render: c => c(App)
})