import Vue from 'vue'
import router from './router/index.js'
import App from './App.vue'
import { Icon } from 'element-ui'
import { Button } from 'element-ui'
import{ Menu, Submenu, MenuItem, MenuItemGroup} from 'element-ui'

import './assets/styles/iconfont.css'

Vue.component(Icon.name, Icon)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Button.name, Button)

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})