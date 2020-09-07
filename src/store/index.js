import Vue from 'vue'
import Vuex from 'vuex'
import { setStore, getStore } from '../config/mUtils'

Vue.use(Vuex)

const IN_CN = 'IN_CN'
const IN_EN = 'IN_EN'

const store = new Vuex.Store({
    state: {
        inCN: 0,
        host: 'http://juice666.gz2vip.idcfengye.com/',
    },
    getters: {

    },
    mutations: {
        // 记录
        [IN_CN](state) {
            state.inCN = 0;
            setStore('inCN', 0);
        },
        [IN_EN](state) {
            state.inCN = 1;
            setStore('inCN', 1);
        }
    },
    actions: {

    }
})

export default store