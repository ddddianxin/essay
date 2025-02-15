import Vue from 'vue';
import { post, fetch, patch, put, del } from './getData'
import { getStore } from '../config/mUtils'
import { mapState, mapMutations, mapActions } from 'vuex'

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$del = del;



//const _baseUrl=process.env.API_URL;//这里我在项目配置文件里面设置了相对路径
//const baseUrl = 'http://juice666.gz2vip.idcfengye.com';
const baseUrl = 'http://sensing.zwin.work';

//首页菜单
export const menuList = (chineseOrEnglish, organizationId) => post(baseUrl + '/cms/menu/queryMenuList', {
    chineseOrEnglish,
    organizationId
});


//banner
export const banner = (organizationId, chineseOrEnglish, isPc, bannerType) => post(baseUrl + '/cms/banner/queryBannerList', {
    organizationId,
    chineseOrEnglish,
    isPc,
    bannerType
});

//查询某菜单下的所有内容（不分页）
export const content = (chineseOrEnglish, menuId, organizationId) => post(baseUrl + '/cms/content/queryContentApi', {
    chineseOrEnglish,
    menuId,
    organizationId
});

//查询某菜单下的所有内容（分页）/关键词搜索（分页）
export const contentPage = (chineseOrEnglish, pageNumber, pageSize, organizationId, menuId, contentType) => post(baseUrl + '/cms/content/queryContentPageApi', {
    chineseOrEnglish,
    pageNumber,
    pageSize,
    organizationId,
    menuId,
    contentType
});


//根据id查看内容详情
export const detailContent = (id, organizationId, chineseOrEnglish) => post(baseUrl + '/cms/content/queryDetailContent', {
    id,
    organizationId,
    chineseOrEnglish
});


// 首页请求主体部分内容
export const indexContent = (chineseOrEnglish, organizationId, isPc) => post(baseUrl + '/cms/content/querySensingIndex', {
    chineseOrEnglish,
    organizationId,
    isPc
});
//export const indexContent = () => fetch('../static/index.json');

// 退出登录
//export const signout = () => fetch(baseUrl + '/outLogin');

//字典常数
export const dictionary = (type_key, psn) => post(baseUrl + '/api/common/getDictionaryByPkey', {
    type_key,
    psn
});

//全局搜索keyWords必填,pageNumber页码（非必填）,pageSize同rows（非必填）
export const globalSearchContent = (keyWords, pageNumber, pageSize) => post(baseUrl + '/cms/content/globalSearchContent', {
    keyWords,
    pageNumber,
    pageSize
});

//请求头部和底部信息专用
export const queryMenuAndHeaderFooter = (chineseOrEnglish, organizationId) => post(baseUrl + '/cms/menu/queryMenuAndHeaderFooter', {
    chineseOrEnglish,
    organizationId
});