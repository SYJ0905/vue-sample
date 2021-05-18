import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import {
  ValidationObserver, ValidationProvider, extend, configure,
} from 'vee-validate';
import { email, regex } from 'vee-validate/dist/rules';
import Loading from 'vue-loading-overlay';
import VueSweetalert2 from 'vue-sweetalert2';
import OverlayScrollbars from 'overlayscrollbars';
import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue';
// import VueGtag from 'vue-gtag';
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
Vue.component('ValidationObserver', ValidationObserver);
Vue.filter('currency', currencyFilter);

configure({
  classes: {
    invalid: 'form_input_is_invalid',
  },
});

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value),
    };
  },
  message: '請輸入正確{_field_}',
  computesRequired: true,
});

extend('regex', {
  ...regex,
  message: '請輸入正確密碼格式',
});

extend('email', {
  ...email,
  message: '請輸入正確 Email',
});

Vue.config.productionTip = false;

OverlayScrollbars(document.body, {
  nativeScrollbarsOverlaid: {
    initialize: false,
  },
});

// Vue.use(VueGtag, {
//   config: { id: 'G-xxxxxxx' },
// }, router);

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
