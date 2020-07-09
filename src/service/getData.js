import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import '../main'
import {getStore} from "../config/mUtils";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;
axios.defaults.timeout = 5000;

// /**
//  * 封装get方法
//  * @param url
//  * @param params
//  * @returns {Promise}
//  */
export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
        url = url.indexOf('?')=='-1'?url+'?i_='+(new Date()).getTime():url+'&_='+(new Date()).getTime();
        axios.get(url,{
            params:params
        })
            .then(response => {
                // if(response.data.code === 200){
                // }else{
                // }
                resolve(response.data);

            })
            .catch(err => {
				resolve(err.response.data);
                reject(err.response.data);
                let message = '请求失败！请检查网络';
                //错误返回
                if(err.response)message=err.response.data.message;
                // Toast(message)
            })
    })
}

// /**
//  * 封装post请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */ JSON.stringify(data)

export function post(url,data = {}){
	return new Promise((resolve,reject) => {
		axios.post(url,qs.stringify(data))
			.then(response => {
				// if(response.data.code === 200){
				// }else{
				// }
				resolve(response.data);

			},err => {
				resolve(err.response);
				reject(err);
				let message = '请求失败！请检查网络';
				if(err.response)message=err.response.data.message;
				console.log(message);



			})
	})
}

// /**
//  * 封装patch请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

export function patch(url,data = {}){
	return new Promise((resolve,reject) => {
		axios.patch(url,qs.stringify(data))
			.then(response => {
                // if(response.data.code === 200){
                // }else{
                // }
                resolve(response.data);
			},err => {
				resolve(err.response.data);
				reject(err);
				let message = '请求失败！请检查网络';
				if(err.response)message=err.response.data.message;
				// Toast(message)
			})
	})
}

// /**
//  * 封装put请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

export function put(url,data = {}){
	return new Promise((resolve,reject) => {
		axios.put(url,qs.stringify(data))
			.then(response => {
                // if(response.data.code === 200){
                // }else{
                // }
                resolve(response.data);
			},err => {
				resolve(err.response.data);
				reject(err);
				let message = '请求失败！请检查网络';
				if(err.response)message=err.response.data.message;
				// Toast(message)
			})
	})
}

export function del(url,data = {}){
	return new Promise((resolve,reject) => {
		axios.delete(url,qs.stringify(data))
			.then(response => {
				if(response.data.code === 200){
					resolve(response.data);
				}else{
					// Toast(response.data.msg)
				}
			},err => {
				resolve(err.response.data);
				reject(err);
				let message = '请求失败！请检查网络';
				if(err.response)message=err.response.data.message;
				// Toast(message)
			})
	})
}
