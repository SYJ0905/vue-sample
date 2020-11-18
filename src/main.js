import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import { ValidationProvider } from 'vee-validate';
import Loading from 'vue-loading-overlay';
import VueSweetalert2 from 'vue-sweetalert2';
import draggable from 'vuedraggable';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(Loading);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.component('Draggable', draggable);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
