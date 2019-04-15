/*
  入口JS
*/

import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import Split from './components/Split/Split.vue'
import './filters'
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'



//注册全局组件标签
Vue.component(Button.name,Button) //<mt-button>

Vue.use(VueLazyload, { 
  loading 
})

Vue.component('Split',Split)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
