import Vue from 'vue'
import Vuex from 'vuex'
import {setStore, getStore} from '../config/mUtils'
import {getUser,address,signout,cartList} from '../service/api'

Vue.use(Vuex)

const RECORD_ADDRESS = 'RECORD_ADDRESS'
const ADD_CART = 'ADD_CART'
const REDUCE_CART = 'REDUCE_CART'
const INIT_BUYCART = 'INIT_BUYCART'
const CLEAR_CART = 'CLEAR_CART'
const RECORD_SHOPDETAIL = 'RECORD_SHOPDETAIL'
const RECORD_USERINFO = 'RECORD_USERINFO'
const GET_USERINFO = 'GET_USERINFO'
const CONFIRM_REMARK = 'CONFIRM_REMARK'
const CONFIRM_INVOICE = 'CONFIRM_INVOICE'
const CHOOSE_SEARCH_ADDRESS = 'CHOOSE_SEARCH_ADDRESS'
const SAVE_GEOHASH = 'SAVE_GEOHASH'
const CONFIRM_ADDRESS = 'CONFIRM_ADDRESS'
const CHOOSE_ADDRESS = 'CHOOSE_ADDRESS'
const NEED_VALIDATION = 'NEED_VALIDATION'
const SAVE_CART_ID_SIG = 'SAVE_CART_ID_SIG'
const SAVE_ORDER_PARAM = 'SAVE_ORDER_PARAM'
const CHANGE_ORDER_PARAM = 'CHANGE_ORDER_PARAM'
const ORDER_SUCCESS = 'ORDER_SUCCESS'
const SAVE_SHOPID = 'SAVE_SHOPID'
const SAVE_ORDER = 'SAVE_ORDER'
const OUT_LOGIN = 'OUT_LOGIN'
const RETSET_NAME = 'RETSET_NAME'
const SAVE_AVANDER = 'SAVE_AVANDER'
const SAVE_ADDDETAIL = 'SAVE_ADDDETAIL'
const SAVE_ADDRESS = 'SAVE_ADDRESS'
const SAVE_QUESTION = 'SAVE_QUESTION'
const ADD_ADDRESS = 'ADD_ADDRESS'
const BUY_CART = 'BUY_CART'

const store=new Vuex.Store({
	state:{
		latitude: '', // 当前位置纬度
		longitude: '', // 当前位置经度
		cartList: [], // 加入购物车的商品列表
		cartLength:0,//购物车长度
		shopDetail: null, //商家详情信息
		userInfo: null, //用户信息
		shopid: null,//商铺id
		remarkText: null,//可选备注内容
		inputText: '',//输入备注内容
		invoice: false,//开发票
		newAddress: [], //确认订单页新的地址
		searchAddress: null,//搜索并选择的地址
		geohash: '31.22299,121.36025',//地址geohash值
		choosedAddress: null,//选择地址
		addressId: null,//选择地址的索引值
		needValidation: null,//确认订单时是否需要验证
		cartId: null, //购物车id
		sig: null,//购物车sig
		orderParam: null,//订单的参数
		orderMessage: null, //订单返回的信息
		orderDetail: null, //订单详情
		login: false,//是否登录 默认true
		imgPath:null,//头像地址
		removeAddress:[],//移除地址
		addAddress:'',		//新增地址
		question: null,//问题详情
		cartPrice: null, //会员卡价格
	},
	getters:{

	},
	mutations:{
		// 记录当前经度纬度
		[RECORD_ADDRESS](state, {
			latitude,
			longitude
		}) {
			state.latitude = latitude;
			state.longitude = longitude;
		},

		[RECORD_SHOPDETAIL](state, detail) {
			state.shopDetail = detail;
		},
		// 加入购物车
		[ADD_CART](state, {
			goodsId,
			speId,
			number
		}) {
			let cart = state.cartList;
			let category = shop[category_id] = (shop[category_id] || {});
			let item = category[item_id] = (category[item_id] || {});
			if (item[food_id]) {
				item[food_id]['num']++;
			} else {
				item[food_id] = {
					"num" : 1,
					"id" : food_id,
					"name" : name,
					"price" : price,
					"specs" : specs,
					"packing_fee" : packing_fee,
					"sku_id" : sku_id,
					"stock" : stock
				};
			}
			state.cartList = {...cart};
			state.cartLength = state.cartList.length;
			//存入localStorage
			setStore('buyCart', state.cartList);
		},
		// 移出购物车
		[REDUCE_CART](state, {
			shopid,
			category_id,
			item_id,
			food_id,
			name,
			price,
			specs,
		}) {
			let cart = state.cartList;
			let shop = (cart[shopid] || {});
			let category = (shop[category_id] || {});
			let item = (category[item_id] || {});
			if (item && item[food_id]) {
				if (item[food_id]['num'] > 0) {
					item[food_id]['num']--;
					state.cartList = {...cart};
					//存入localStorage
					setStore('buyCart', state.cartList);
				} else {
					//商品数量为0，则清空当前商品的信息
					item[food_id] = null;
				}
			}
			state.cartLength = state.cartList.length;
		},
		//网页初始化时从本地缓存获取购物车数据
		[INIT_BUYCART](state,info) {
			state.cartList = info;
			state.cartLength = info.length;
		},
		//清空当前商品的购物车信息
		[CLEAR_CART](state, shopid) {
			state.cartList[shopid] = null;
			state.cartList = {...state.cartList};
			setStore('buyCart', state.cartList);

			state.cartLength = state.cartList.length;
		},
		// 记录用户信息
		[RECORD_USERINFO](state, info) {
			state.userInfo = info;
			state.login = true;
			setStore('user_id', info.user_id);
		},
		//获取用户信息存入vuex
		[GET_USERINFO](state, info) {
			if (state.userInfo && (state.userInfo.user_id !== info.user_id)) {
				state.login = true;
				state.userInfo = info;
				return;
			}
			if (info.status == 12007) {
				state.login = false;
			}else{
				if (info!='') {
					//state.userInfo = {...info};
					state.userInfo = info;
					state.login = true;
					setStore('user_id', info.user_id);
				} else {
					state.userInfo = null;
				}
			}
		},
		//修改用户名
		[RETSET_NAME](state,username) {
			state.userInfo = Object.assign({}, state.userInfo,{username})
		},
		//保存商铺id
		[SAVE_SHOPID](state, shopid) {
			state.shopid = shopid;
		},
		//记录订单页面用户选择的备注, 传递给订单确认页面
		[CONFIRM_REMARK](state, {
			remarkText,
			inputText
		}) {
			state.remarkText = remarkText;
			state.inputText = inputText;
		},
		//是否开发票
		[CONFIRM_INVOICE](state, invoice) {
			state.invoice = invoice;
		},
		//选择搜索的地址
		[CHOOSE_SEARCH_ADDRESS](state, place) {
			state.searchAddress = place;
		},
		//保存geohash
		[SAVE_GEOHASH](state, geohash) {
			state.geohash = geohash;

		},
		//确认订单页添加新的的地址
		[CONFIRM_ADDRESS](state, newAddress) {
			state.newAddress.push(newAddress);
		},
		//选择的地址
		[CHOOSE_ADDRESS](state, {
			address,
			add_id
		}) {
			state.choosedAddress = address;
			state.addressId = add_id;
		},
		//保存下单需要验证的返回值
		[NEED_VALIDATION](state, needValidation) {
			state.needValidation = needValidation;
		},
		//保存下单后购物id 和 sig
		[SAVE_CART_ID_SIG](state, {
			cart_id,
			sig
		}) {
			state.cart_id = cart_id;
			state.sig = sig;
		},
		//保存下单参数，用户验证页面调用
		[SAVE_ORDER_PARAM](state, orderParam) {
			state.orderParam = orderParam;
		},
		//修改下单参数
		[CHANGE_ORDER_PARAM](state, newParam) {
			state.orderParam = Object.assign({}, state.orderParam, newParam);
		},
		//下单成功，保存订单返回信息
		[ORDER_SUCCESS](state, order) {
			state.cartPrice = null;
			state.orderMessage = order;
		},
		//进入订单详情页前保存该订单信息
		[SAVE_ORDER](state, orderDetail) {
			state.orderDetail = orderDetail;
		},
		//退出登录
		[OUT_LOGIN](state) {
			state.userInfo = {};
			state.login = false;
			setStore('token', null);
		},
		//保存图片
		[SAVE_AVANDER](state, imgPath) {
			state.imgPath = imgPath;
		},
		//删除地址列表
		[SAVE_ADDRESS](state, newAddress) {
			state.removeAddress = newAddress
		},
		//添加地址name
		[SAVE_ADDDETAIL](state, addAddress){
			state.addAddress=addAddress;
		},
		//保存所选问题标题和详情
		[SAVE_QUESTION](state, question) {
			state.question = {...question};
		},
		//增加地址
		[ADD_ADDRESS](state, obj) {
			state.removeAddress = [obj, ...state.removeAddress];
		},
		//会员卡价格纪录
		[BUY_CART](state, price) {
			state.cartPrice = price;
		},


	},
	actions:{
		async getUserInfo({
			  commit,
			  state
		  }) {
			let res = await getUser();
			commit(GET_USERINFO, res);
		},
		async saveAddress({
			  commit,
			  state
		  }) {
			if(state.removeAddress.length > 0) return;
			let address = await address(state.userInfo.user_id);
			commit(SAVE_ADDRESS, address);
		},
		async initCart({
			commit,
			state
		}){
			let res = await cartList();
			commit(INIT_BUYCART, res.cartInfo || '');
		}
	}
})

export default store