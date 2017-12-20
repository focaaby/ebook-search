// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Main, Tag, Input, Button, Icon } from 'element-ui'
import App from './App'

Vue.config.productionTip = false

Vue.component(Main.name, Main)
Vue.component(Tag.name, Tag)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
