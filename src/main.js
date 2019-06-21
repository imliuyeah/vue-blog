import Vue from 'vue'
import router from './router/index.js'
import App from './App.vue'
import { Icon, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

Vue.component(Icon.name, Icon)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)


new Vue({
    el: '#app',
    router,
    render: c => c(App)
})