webpackJsonp([45],{"+PHq":function(t,e){},X6d5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("CCn6"),n=(i("yclV"),i("USSz")),r=i("NYxO"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};function c(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,i){return function s(n,r){try{var o=e[n](r),c=o.value}catch(t){return void i(t)}if(!o.done)return Promise.resolve(c).then(function(t){s("next",t)},function(t){s("throw",t)});t(c)}("next")})}}var a={name:"home",data:function(){return{product:[],sort:[{children:{}}],active:0,activeShow:!1,categoryId:"",titleName:""}},components:{headTop:n.a},mounted:function(){this.initData()},computed:{},methods:o({},Object(r.b)(["initCart"]),{initData:function(){var t=this;return c(regeneratorRuntime.mark(function e(){var i,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.E)();case 2:for(t.product=e.sent,i=0;i<t.product.length;i++)t.$set(t.product[i],"showPicIndex",0);return t.categoryId="",t.titleName="",e.next=8,Object(s.h)();case 8:n=e.sent,t.sort=n;case 10:case"end":return e.stop()}},e,t)}))()},selectPic:function(t,e){this.$set(this.product[t],"showPicIndex",e)},outPic:function(t,e){},showGoodDetail:function(t){},addCart:function(t,e){var i=this;return c(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.e)(t,e,1);case 2:(r=n.sent)&&(i.$message({message:r.msg,type:12e3==r.status?"success":"warning"}),i.initCart());case 4:case"end":return n.stop()}},n,i)}))()},toCollect:function(t){var e=this;return c(regeneratorRuntime.mark(function i(){var n;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!e.product[t].isCollect){i.next=4;break}e.$message({message:"您已收藏过该产品",type:"info"}),i.next=11;break;case 4:return console.log("index:"+t),console.log(e.product[t].goods_id),console.log(e.product[t].specifications_id),i.next=9,Object(s.b)(e.product[t].goods_id,e.product[t].specifications_id);case 9:(n=i.sent)&&(e.$message({message:n.msg,type:12e3==n.status?"success":"warning"}),e.initData());case 11:case"end":return i.stop()}},i,e)}))()},toDetail:function(t,e){this.$router.push({path:"/good/detail",query:{goods_id:t,specifications_id:e}})},choice:function(t){this.active=t,this.activeShow=!0},toList:function(t,e){var i=this;return c(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i.categoryId=t,i.titleName=e,n.next=4,Object(s.i)(i.categoryId);case 4:r=n.sent,i.product=r;case 6:case"end":return n.stop()}},n,i)}))()},activeHidden:function(){this.activeShow=!1}}),created:function(){}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("head-top",{attrs:{webActive:"home"}}),t._v(" "),s("div",{attrs:{id:"home"}},[s("div",{staticClass:"sortBox",on:{mouseleave:t.activeHidden}},[s("div",{staticClass:"container sortInbox"},t._l(t.sort,function(e,i){return s("div",{key:i,class:t.active==i&&t.activeShow?"nor act":"nor",on:{mouseenter:function(e){return t.choice(i)}}},[t._v(t._s(t.sort[i].name))])}),0),t._v(" "),s("div",{staticClass:"childSort"},[s("div",{staticClass:"container"},t._l(t.sort[t.active].children,function(e,i){return s("div",{key:i,staticClass:"cld_box",on:{click:function(i){return t.toList(e.id,e.name)}}},[s("img",{staticClass:"cld_img",attrs:{src:"http://www.huaxuejia.cn/Public/"+e.pic}}),t._v(" "),s("span",[t._v(t._s(e.name))])])}),0)])]),t._v(" "),s("div",{staticClass:"container"},[t.titleName?s("div",{staticClass:"topTit"},[t._v("- "+t._s(t.titleName)+" -")]):t._e(),t._v(" "),t.titleName?s("div",{staticClass:"refresh",on:{click:function(e){return t.initData()}}},[t._v("点击恢复显示所有类别"),s("i",{staticClass:"el-icon-refresh-right ml5"})]):t._e(),t._v(" "),s("div",{staticClass:"homeBox flex f-wrap"},[0==t.product.length?s("div",{staticClass:"tc w"},[s("img",{staticClass:"mt30",attrs:{src:i("Fmb2"),height:"200",width:"200"}}),t._v(" "),s("p",{staticClass:"f16 tc mt30"},[t._v("暂无该类别相关数据")])]):t._l(t.product,function(e,i){return s("div",{key:i,staticClass:"proBox"},[s("div",{staticClass:"proFloat"},[s("div",{staticClass:"pImg",on:{click:function(i){return t.toDetail(e.goods_id,e.specifications_id)}}},[s("el-image",{staticClass:"homeProImg",attrs:{src:e.showPicIndex?e.upphotos[e.showPicIndex]:e.upphotos[0],fit:"contain"}})],1),t._v(" "),s("div",{staticClass:"proInfo"},[1!=e.upphotos.length?s("div",{staticClass:"gallery flex j-bet"},[s("div",{staticClass:"galleryPic flex j-bet"},t._l(e.upphotos.slice(0,4),function(e,n){return s("div",{key:n,staticClass:"imgStandard miniPic",on:{mouseover:function(e){return t.selectPic(i,n)},mouseout:function(e){return t.outPic(i,n)}}},[s("a",{attrs:{href:"javascript:void(0);"}},[s("img",{attrs:{src:e}})])])}),0)]):t._e(),t._v(" "),s("div",{staticClass:"proMess flex j-bet"},[e.cas?s("div",{staticClass:"proSize f12"},[t._v("CAS："+t._s(e.cas))]):s("div",{staticClass:"proSize f12"},[t._v("无CAS号")]),t._v(" "),s("div",{staticClass:"proControl flex j-bet"},[s("i",{class:e.isCollect?"el-icon-star-on proIcon active":"el-icon-star-off proIcon",on:{click:function(e){return t.toCollect(i)}}}),t._v(" "),s("i",{staticClass:"el-icon-shopping-cart-1 proIcon",on:{click:function(i){return t.addCart(e.goods_id,e.specifications_id)}}})])]),t._v(" "),s("div",{staticClass:"proTit"},[s("div",{staticClass:"proName wto",on:{click:function(i){return t.toDetail(e.goods_id,e.specifications_id)}}},[t._v(t._s(e.goods_name))]),t._v(" "),s("div",{staticClass:"proBuy flex j-bet tc"},[s("div",{staticClass:"colorPrice price w"},[t._v(t._s(e.unit_price)),s("span",{staticClass:"f14"},[t._v("/"+t._s(e.supply_unit))])])])])])])])})],2)])])],1)},staticRenderFns:[]};var l=i("VU/8")(a,u,!1,function(t){i("+PHq")},"data-v-0736f1b8",null);e.default=l.exports}});
//# sourceMappingURL=45.cfbf0c26926871693337.js.map