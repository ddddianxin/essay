// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
import routes from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
import {routerMode} from './config/env'
import '../config/rem.js'
import 'babel-polyfill'
import axios from 'axios'
import {getStore} from './config/mUtils'
import WXConfig from 'weixin-js-sdk'

Vue.prototype.WXConfig = WXConfig;
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;

// axios.defaults.withCredentials = true;
// 默认超时设置
//axios.defaults.timeout = 50000;
//设置baseURL
//axios.defaults.baseURL = 'https://api.huaxuejia.cn/api/v1';
//设置token值
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//http request 拦截器
axios.interceptors.request.use(
    config => {
        // 获取token
        //const token = localStorage.getItem('cc_token');
        var token = getStore('token') || '';
        // 设置参数格式
        if(!config.headers['Content-Type']){
            // config.headers = {
            //   'Content-Type':'application/json',
            // };
        }
        // 添加token到headers
        if(token){
            config.headers.token = token
        }
        // 鉴权参数设置
        if(config.method === 'get'){
            //get请求下 参数在params中，其他请求在data中
            config.headers = {
              'Content-Type':'application/x-www-form-urlencoded',
                token:token
            };
            config.params = config.params || {};
            let json = JSON.parse(JSON.stringify(config.params));
            //一些参数处理
        }else{
            config.data = config.data || {};
            //一些参数处理
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        //一些统一code的返回处理
        if(response.data.code === 501){
            // 登录验证
            //做了个示例跳转项目中登录，并记录下相对路径
            router.push({
                name:'login',//从哪个页面跳转
                query:{
                    retUrl:window.location.href.split('#')[1] || '',
                    is_new_user_url:1
                }
            })
        }
        return response;
    },
    error => {
        //return Promise.reject(error)
        if (401 === error.response.status) {
            window.location = '/login';
        } else {
            return Promise.reject(error);
        }
    }
);

// Vue.config.productionTip = false
Vue.use(VueRouter);
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   store,
//   router,
//   components: { App },
//   template: '<App/>'
// })

const router = new VueRouter({
    routes,
    mode: routerMode,
    strict: process.env.NODE_ENV !== 'production',
});

new Vue({
    router,
    store,
}).$mount('#app')
