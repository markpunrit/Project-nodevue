// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import VueResource from 'vue-resource'
import BackHeader from '@/components/Header.vue'
import BackLogout from '@/components/Logout.vue'
import Style from '@/components/css/style.vue'
import MainChi from '@/components/Chinese/Main.vue'
import Footer from '@/components/Footer.vue'
import Admin from '@/components/admin.vue'
import MainUser from '@/components/MainUser.vue'
Vue.component('back-main', MainChi)
Vue.component('back-mainuse', MainUser)
Vue.component('back-footer', Footer)
Vue.component('back-header', BackHeader)
Vue.component('back-style', Style)
Vue.component('back-admin', Admin)
Vue.component('back-logout', BackLogout)
Vue.config.productionTip = false

Vue.use(VueResource)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
