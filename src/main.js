// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueI18n from 'vue-i18n'
import LangCn from '../static/i18n/cn'
import LangEn from '../static/i18n/en'

Vue.config.productionTip = false;
Vue.use(VueI18n);

// 引入mock
require('./mock/mock.js')
/*---------使用语言包-----------*/
const i18n = new VueI18n({
  locale: 'CN',    // 语言标识
  messages: {
    'CN': LangCn,   // 中文语言包
    'EN': LangEn    // 英文语言包
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
