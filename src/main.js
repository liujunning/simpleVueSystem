// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
//require('./mock/mock.js')


//引入vuex
import store from './store/test.js';


import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import './assets/css/style.css';

Vue.use(iView);
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
