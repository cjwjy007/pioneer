// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import store from './store'
import Navigator from './AppNavigator.vue'
import CustomToolbar from './components/CustomToolbar.vue';
import Cookies from 'js-cookie'

Vue.config.productionTip = false

Vue.use(VueOnsen)
Vue.component('custom-toolbar', CustomToolbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Navigator),
  store,
  beforeCreate() {
    // Shortcut for Material Design
    Vue.prototype.md = this.$ons.platform.isAndroid();
    this.$store.dispatch('auth/cookieLogin');
  }
});
