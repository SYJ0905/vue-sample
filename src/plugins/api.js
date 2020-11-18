import Vue from 'vue';
import axios from 'axios';

const sampleRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API_PATH}`,
  headers: {

  },
});

const sampleFormRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API_PATH}`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const allRequest = [
  sampleRequest,
  sampleFormRequest,
];
allRequest.forEach((item) => {
  item.interceptors.response.use(
    (response) => response,
    (err) => {
      if (err && err.response) {
        switch (err.response.status) {
          case 401:
            Vue.swal({
              icon: 'error',
              title: '錯誤!',
              text: '未登入或無權限',
              timer: 1000,
              confirmButtonText: '關閉視窗',
            });
            break;
          case 403:
            Vue.swal({
              icon: 'error',
              title: '錯誤!',
              text: '未登入或無權限',
              timer: 1000,
              confirmButtonText: '關閉視窗',
            });
            break;
          case 404:
            Vue.swal({
              icon: 'error',
              title: '錯誤!',
              text: '找不到該頁面',
              confirmButtonText: '關閉視窗',
            });
            break;
          case 500:
            Vue.swal({
              icon: 'error',
              title: '錯誤!',
              text: '伺服器出錯，請洽技術人員',
              confirmButtonText: '關閉視窗',
            });
            break;
          case 503:
            Vue.swal({
              icon: 'error',
              title: '錯誤!',
              text: '伺服器出錯，請洽技術人員',
              confirmButtonText: '關閉視窗',
            });
            break;
          default:
        }
      } else {
        Vue.swal({
          icon: 'error',
          title: '錯誤!',
          text: '連接到服務器失敗',
          confirmButtonText: '關閉視窗',
        });
      }
      return Promise.resolve(err.response);
    },
  );
});
