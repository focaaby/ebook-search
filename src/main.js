// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Tag, Input } from 'element-ui'
import App from './App'

Vue.config.productionTip = false

Vue.component(Tag.name, Tag)
Vue.component(Input.name, Input)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
