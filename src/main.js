import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import { ValidationProvider } from 'vee-validate';
import Loading from 'vue-loading-overlay';
import VueSweetalert2 from 'vue-sweetalert2';
import OverlayScrollbars from 'overlayscrollbars';
import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue';
import draggable from 'vuedraggable';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import currencyFilter from './plugins/currency';

Vue.use(Loading);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);
Vue.use(OverlayScrollbarsPlugin);
Vue.component('Loading', Loading);
Vue.component('Draggable', draggable);
Vue.component('ValidationProvider', ValidationProvider);
Vue.filter('currency', currencyFilter);

Vue.config.productionTip = false;

OverlayScrollbars(document.body, {
  nativeScrollbarsOverlaid: {
    initialize: false,
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

/* 登入驗證 */
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    next();
  } else {
    next();
  }
});
