import Vue from 'vue';
import { post, fetch, patch, put, del } from './getData'
import { getStore } from '../config/mUtils'

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$del = del;

//也可以不需要
//const _baseUrl=process.env.API_URL;//这里我在项目配置文件里面设置了相对路径
//const baseUrl = 'http://www.sixmol.com/api/v1';
const baseUrl = 'http://juice666.gz2vip.idcfengye.com';

//首页菜单
export const menuList = (chineseOrEnglish, organizationId) => post(baseUrl + '/queryMenuList', {
    chineseOrEnglish,
    organizationId
});

//banner
export const banner = (organizationId, chineseOrEnglish, isPc) => post(baseUrl + '/queryBannerList', {
    organizationId,
    chineseOrEnglish,
    isPc
});

//查询某菜单下的所有内容（不分页）
export const content = (chineseOrEnglish, menuId, organizationId) => post(baseUrl + '/queryContentApi', {
    chineseOrEnglish,
    menuId,
    organizationId
});

//查询某菜单下的所有内容（分页）/关键词搜索（分页）
export const contentPage = (chineseOrEnglish, pageNumber, pageSize, organizationId, menuId) => post(baseUrl + '/queryContentPageApi', {
    chineseOrEnglish,
    pageNumber,
    pageSize,
    organizationId,
    menuId
});

//根据id查看内容详情
export const detailContent = (id, organizationId, chineseOrEnglish) => post(baseUrl + '/queryDetailContent', {
    id,
    organizationId,
    chineseOrEnglish
});


// 首页请求主体部分内容
export const indexContent = (mobile, code, codeToken) => post(baseUrl + '/queryIndexContent', {
    chineseOrEnglish,
    organizationId,
    isPc
});


// 退出登录
export const signout = () => fetch(baseUrl + '/outLogin');