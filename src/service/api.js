import Vue from 'vue';
import {post,fetch,patch,put,del} from './getData'
import {getStore} from '../config/mUtils'

Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$del=del;

//也可以不需要
//const _baseUrl=process.env.API_URL;//这里我在项目配置文件里面设置了相对路径
//const baseUrl = 'http://www.sixmol.com/api/v1';
const baseUrl = 'http://api.sixmol.com/api/v1';

// 手机快捷登录
export const phoneLogin = (mobile,code,codeToken) => post(baseUrl+'/loginQuickSms', {
	mobile,
	code,
	codeToken
});

// 账号密码登录
export const keyLogin = (username,password) => post(baseUrl+'/doLoginloginAp', {
	username,
	password,
});

// 获取验证码
export const getCode = (mobile,verifyCode,type) => post(baseUrl+'/doPhone', {
	mobile,verifyCode,type
});


// 退出登录
export const signout = () => fetch(baseUrl+'/outLogin');

//忘记密码
export const forGetKey = (password,password2,code,codeToken) => post(baseUrl+'/forGetKey', {
	password,password2,code,codeToken
});

// 填写用户信息
export const writeUserInfo = (username,password,mobile) => post(baseUrl+'/writeUserInfo', {
	username,
	password,
	mobile
});

//获取用户信息接口
export const getUser = () => fetch(baseUrl+'/usersInfo');
// 获取用户信息
//export const getUser = () => fetch('../../static/userinfo.json', {user_id: getStore('user_id')});

//获取首页
//const homeURL = `../../static/home.json`;
export const home = () => fetch(baseUrl+'/goods');

//获取产品详细页
export const goodDetail = (specifications_id) => fetch(baseUrl+'/goodsDetail/'+ specifications_id);

export const evaluate = function() {
	return Vue.prototype.$fetch(`../../static/evaluate.json`)
};

//获取发票
export const invoice = () => fetch(baseUrl+'/getInvoiceInfo');
// export const invoice = function() {
// 	return Vue.prototype.$fetch(`../../static/invoice.json`)
// };

//添加发票
export const addInvoice = (title,type,taxnumber,address,banknumber,phone,bank,ename) => post(baseUrl+'/addInvoice', {
	title,type,taxnumber,address,banknumber,phone,bank,ename
});

//修改发票
export const editInvoice = (invoice_id,title,type,taxnumber,address,banknumber,phone,bank,ename) => post(baseUrl+'/editInvoice', {
	invoice_id,title,type,taxnumber,address,banknumber,phone,bank,ename
});

//添加或修改发票，添加发票时，invoice_id=''即可
export const addOrEditInvoice = (invoice_id,title,type,taxnumber,address,banknumber,phone,bank,ename) => post(baseUrl+'/addOrEditInvoice', {
	invoice_id,title,type,taxnumber,address,banknumber,phone,bank,ename
});

//删除发票
export const delInvoice = (invoice_id) => fetch(baseUrl+ '/delInvoice/' + invoice_id);

//修改发票展示页
export const editInvoiceShow = (invoice_id) => fetch(baseUrl+ '/editInvoiceShow/' + invoice_id);

//设为默认地址
export const defaultAddress = (address_id) => fetch(baseUrl+ '/defaultAddress/'+address_id ,);

//修改地址展示页
export const editUserAddressShow = (address_id) => fetch(baseUrl+ '/editUserAddressShow/'+ address_id);

//新建地址
export const addAddress = (address_detail,mobile,name,province,city,district) => post(baseUrl+'/addUserAddress', {
	address_detail,mobile,name,province,city,district
});

//获取我的地址
export const address = () => fetch(baseUrl+ '/getUserAddress');
// export const address = function() {
// 	return Vue.prototype.$fetch(`../../static/address.json`)
// };

//修改地址
export const editUserAddress = (address_id,address_detail,mobile,name,province,city,district) => post(baseUrl+'/editUserAddress', {
	address_id,address_detail,mobile,name,province,city,district
});


//删除地址
export const delAddress = (address_id) => fetch(baseUrl+'/delUserAddress/'+address_id);

//获取订单详情
// export const orderDetail = function() {
// 	return Vue.prototype.$fetch(`../../static/order.json`)
// };

// 个人中心里编辑地址
//export const getAddressList = (user_id) => fetch('/v1/users/'+user_id+'/addresses');

// 我的购物车
export const cartList = () => fetch(baseUrl+'/getCartInfo');

// 加入购物车
export const addToCart = (goodsId,speId,number) => post(baseUrl+'/addToCart', {
	goodsId,speId,number
});

// 删除购物车
export const delCartGoods = (cartId) => fetch(baseUrl+'/delCartGoods/'+cartId);

// 编辑购物车
export const changeCartGoodsnum = (number,cartId,isCheck) => post(baseUrl+'/changeCartGoodsnum', {
	number,cartId,isCheck
});

/***************************************************
 * 订单
 * ***************************************************/

//获取订单消息
export const getOrderInfo = (order_id) => fetch(baseUrl+'/getOrderInfo/'+order_id);

//产品详细页下单
export const submitOrderSingle = (deliverType,addressId,invoiceId,invoice,speId,goodsId,number) => post(baseUrl+'/submitOrderSingle', {
	deliverType,addressId,invoiceId,invoice,speId,goodsId,number
});

//购物车下单
export const submitOrder = (deliverType,addressId,invoiceId,invoice) => post(baseUrl+'/submitOrder', {
	deliverType,addressId,invoiceId,invoice
});

//核对订单信息
export const checkOrderInfo = (speId,number) => fetch(baseUrl+'/checkOrderInfo',{
	speId,number
});

//我的订单
export const getMyOrderList = (type,rows,page,token) => fetch(baseUrl+'/getMyOrderList',{
	type,rows,page,token
});

//取消订单
export const orderCancel = (orderId) => fetch(baseUrl+'/orderCancel/'+orderId);

//确认收货
export const orderConfirm = (order_id) => fetch(baseUrl+'/orderConfirm/'+order_id);


/***************************************************
 * 支付
 * ***************************************************/

//获取支付宝URL
export const toAlipayOrder = (orderId) => post(baseUrl+'/toAlipayOrder', {
	orderId
});

//获取微信支付二维码
export const toWxpayOrder = (orderId) => post(baseUrl+'/toWxpayOrder', {
	orderId
});

//获取微信支付H5（移动端）
export const toH5WxpayOrder = (orderId) => post(baseUrl+'/toH5WxpayOrder', {
	orderId
});

//获取微信JSAPI支付（微信内置浏览器）
// export const toJsapiWxpayOrder = (orderId) => post(baseUrl+'/toJsapiWxpayOrder', {
// 	orderId
// });
export const toJsapiWxpayOrder = (orderId) => fetch(baseUrl+'/toJsapiWxpayOrder?orderId='+orderId);

//获取openId的URL
export const getOpenIdToWx = (orderId) => fetch(baseUrl+'/getOpenIdToWx?orderId='+orderId);
//获取openId
export const getOpenId = (url) => fetch(url);

//查看微信订单支付状态
export const checkedWxOrderStatus = (outTradeNo) => fetch(baseUrl+'/checkedWxOrderStatus',{
	outTradeNo
});

//获取支付订单信息
export const getPayOrdersData = (orderId) => fetch(baseUrl+'/getPayOrdersData',{
    orderId
});

/***************************************************
 * 收藏
 * ***************************************************/

//收藏列表
export const getMyCollection = (rows,page) => fetch(baseUrl+'/getMyCollection',{
	rows,page
});

//收藏产品
export const addCollection = (goods_id,specifications_id) => post(baseUrl+'/addCollection', {
	goods_id,specifications_id
});

//删除收藏
export const delMyCollection = (collect_id) => fetch(baseUrl+'/delMyCollection/'+collect_id);

/***************************************************
 * 评论
 * ***************************************************/

//我的评论
export const myComment = () => fetch(baseUrl+'/myComment');

//发送评论
export const addComment = (content,goodsId,speId,orderId,goodsRank,photos) => post(baseUrl+'/addComment', {
	content,goodsId,speId,orderId,goodsRank,photos
});

//获取评论
export const getComment = (speId,rows,page) => fetch(baseUrl+'/getComment?speId='+speId);

//删除评论
export const delComment = (comment_id) => fetch(baseUrl+'/delComment/'+comment_id);

//图片上传
export const uploadComment = (image) => post(baseUrl+'/uploadComment', {
	image
});

/***************************************************
 * 消息
 * ***************************************************/
//我的消息
export const message = (rows,page) => fetch(baseUrl+'/message',{
	rows,page
});

//是否已读消息
export const isSee = (id,isSee) => post(baseUrl+'/isSee', {
	id,isSee
});

/***************************************************
 * 分类
 * ***************************************************/
//获取分类列表
export const category = () => fetch(baseUrl+'/getGoodsCategoryInfo');

//获取分类产品列表
export const categoryGoods = (categoryId) => fetch(baseUrl+'/getGoodsCategoryList/'+categoryId);


/***************************************************
 * 微信分享
 * ***************************************************/
export const wxjssdk = (url) => fetch('http://api.sixmol.com/static/WechatShare/jssdkStatic.php?url='+url);

//登录方法
// const loginURL = `${_baseUrl}api/admin/login`;
// export const loginApi = function(json) {
// 	return Vue.prototype.$post(loginURL,{"username":json.username,"passwd":json.password})
// };

//修改账号信息RESTful
// const editAdminUrl = `${_baseUrl}api/admin/user/info`;
// export const editAdminListApi = function (id,json) {
// 	return Vue.prototype.$put(`${editAdminUrl}/${id}`,json)
// };
