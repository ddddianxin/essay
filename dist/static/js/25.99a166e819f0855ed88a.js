webpackJsonp([25],{"52Fr":function(t,s){},jyTM:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("CCn6"),a=e("NYxO"),n=e("gvrZ"),r=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};function c(t){return function(){var s=t.apply(this,arguments);return new Promise(function(t,e){return function i(a,n){try{var r=s[a](n),c=r.value}catch(t){return void e(t)}if(!r.done)return Promise.resolve(c).then(function(t){i("next",t)},function(t){i("throw",t)});t(c)}("next")})}}var o={name:"mGoodDetail",data:function(){return{goodId:"",specifications_id:"",info:{spe_data:[],buyNum:[]},choiceDrawer:!1,specSelIndex:0,form:{goodId:"",specId:"",num:1},evaluate:[],total:""}},components:{mheadTop:n.a},mounted:function(){this.initData()},computed:r({},Object(a.d)(["userInfo","choosedAddress","addressId","cartList","cartLength"])),methods:r({},Object(a.b)(["getUserInfo","initCart"]),Object(a.c)(["CHOOSE_ADDRESS"]),{initData:function(){var t=this;return c(regeneratorRuntime.mark(function s(){var e,a;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t.specifications_id=t.$route.query.specifications_id,s.next=3,Object(i.D)(t.specifications_id);case 3:return e=s.sent,t.goodId=e.goods_id,t.info=e,t.form.num=t.info.buyNum[0],t.calculate(),s.next=10,Object(i.w)(t.info.spec_id,"","");case 10:a=s.sent,t.evaluate=a,t.getAddress();case 13:case"end":return s.stop()}},s,t)}))()},buyNow:function(){this.userInfo&&this.userInfo.user_id?this.$router.push({path:"/order/confirm",query:{goodsId:this.goodId,speId:this.info.spec_id,number:this.form.num,type:1}}):this.$message({message:"请先登录",type:"warning"})},addCart:function(){var t=this;return c(regeneratorRuntime.mark(function s(){var e;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(i.e)(t.goodId,t.info.spec_id,t.form.num);case 2:(e=s.sent)&&(t.$message({message:e.msg,type:12e3==e.status?"success":"warning"}),t.initCart());case 4:case"end":return s.stop()}},s,t)}))()},numberChange:function(t){this.info.spe_data[0].unit_price;for(var s=0,e=0;e<this.info.buyNum.length;e++)t>=this.info.buyNum[e]&&s++;this.specSelIndex=s-1,this.calculate()},calculate:function(){var t=this.info.spe_data[this.specSelIndex].unit_price,s=this.form.num;this.total=(parseInt(s)*parseInt(100*parseFloat(t))/100).toFixed(2)},selAddress:function(){this.userInfo&&this.userInfo.user_id?this.$router.push({path:"/order/address",query:{speId:this.specifications_id}}):this.$message({message:"请先登录",type:"warning"})},toCollect:function(){var t=this;return c(regeneratorRuntime.mark(function s(){var e;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!t.info.isCollect){s.next=4;break}t.$confirm("你确定要取消该收藏吗?","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(c(regeneratorRuntime.mark(function s(){var e;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(i.q)(t.info.collectId);case 2:12e3==(e=s.sent).status?(t.$message({message:e.msg,type:"success"}),t.info.isCollect=!1):t.$message({message:e.msg,type:"warning"});case 4:case"end":return s.stop()}},s,t)}))).catch(function(){}),s.next=8;break;case 4:return s.next=6,Object(i.b)(t.info.goods_id,t.info.spec_id);case 6:(e=s.sent)&&(t.$message({message:e.msg,type:12e3==e.status?"success":"warning"}),t.initData());case 8:case"end":return s.stop()}},s,t)}))()},toEvaluate:function(t){this.$router.push({path:"/good/evaluate",query:{spec_id:t}})},putOnDrawer:function(){this.choiceDrawer=!0},getAddress:function(){var t=this;return c(regeneratorRuntime.mark(function s(){var e,a;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t.addressId){s.next=5;break}return s.next=3,Object(i.f)();case 3:if(12007!=(e=s.sent).status)for(a=0;a<e.length;a++)1==e[a].is_default&&t.CHOOSE_ADDRESS(e[a],e[a].add_id);case 5:case"end":return s.stop()}},s,t)}))()}}),created:function(){}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mBg"},[e("mhead-top",{attrs:{titleHead:"logo",lfIcon:"el-icon-arrow-left icon",lfUrl:"back",rgIcon:"el-icon-shopping-cart-1 icon",rgUrl:"/cart/cart"}}),t._v(" "),e("div",{},[t.info.list_pic_url&&0!=t.info.list_pic_url.length?e("div",{staticClass:"m-Swiper"},[e("el-carousel",{attrs:{trigger:"click"}},t._l(t.info.list_pic_url,function(t,s){return e("el-carousel-item",{key:s},[e("el-image",{staticClass:"m-Simg",attrs:{src:t,fit:"contain"}})],1)}),1)],1):t._e(),t._v(" "),e("div",{staticClass:"m-PInfo"},[e("h1",{staticClass:"cname"},[t._v(t._s(t.info.good_name))]),t._v(" "),e("p",{staticClass:"ename"},[t._v(t._s(t.info.good_english_name))]),t._v(" "),""!=t.info.cas?e("p",{staticClass:"cas"},[t._v("CAS号："+t._s(t.info.cas))]):t._e(),t._v(" "),e("div",{staticClass:"mPrice"},t._l(t.info.spe_data,function(s,i){return e("div",{key:i,staticClass:"mPrice-it"},[e("div",{staticClass:"mPrice-top"},[e("span",{staticClass:"mPrice-type"},[t._v(t._s(t.info.price_type))]),t._v(" "),e("span",[t._v(t._s(s.unit_price)),e("span",{staticClass:"mP-unit"},[t._v("/"+t._s(t.info.supply_unit))])])]),t._v(" "),e("div",{staticClass:"mPrice-foot"},[t._v(t._s(s.price_name)),e("span",[t._v(t._s(t.info.supply_unit))])])])}),0)]),t._v(" "),e("div",{staticClass:"m-PSend"},[e("div",{staticClass:"m-d-line bbGray",on:{click:function(s){return t.putOnDrawer()}}},[e("div",{staticClass:"m-d-lf"},[t._v("已选")]),t._v(" "),e("div",{staticClass:"m-d-rg wto"},[t._v(t._s(t.info.spec_name)+t._s(t.info.spec_unit)+"，购买"+t._s(t.form.num)+t._s(t.info.supply_unit))]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right icon"})]),t._v(" "),e("el-drawer",{staticClass:"g-drawer",attrs:{title:"选择规格",visible:t.choiceDrawer,direction:"btt"},on:{"update:visible":function(s){t.choiceDrawer=s}}},[e("div",{staticClass:"choiceBox"},[e("div",{staticClass:"c-coi-top flex f-nowrap"},[t.info.list_pic_url&&0!=t.info.list_pic_url.length?e("div",{staticClass:"c-coi-pic"},[e("el-image",{staticClass:"c-eImg",attrs:{src:t.info.list_pic_url[0],fit:"cover","preview-src-list":t.info.list_pic_url}})],1):t._e(),t._v(" "),e("div",{staticClass:"c-coi-rg"},[e("div",{staticClass:"c-coi-price flex f-nowrap"},t._l(t.info.spe_data,function(s,i){return e("div",{key:i,class:t.specSelIndex==i?"c-oi-item active":"c-oi-item"},[e("span",{staticClass:"c-oi-p"},[t._v(t._s(t.info.price_type)+t._s(s.unit_price)),e("label",[t._v("/"+t._s(t.info.supply_unit))])]),t._v(" "),e("span",[t._v(t._s(s.price_name)+t._s(t.info.supply_unit))])])}),0),t._v(" "),e("div",{staticClass:"c-coi-stroage"},[t._v("库存："+t._s(t.info.storage)+t._s(t.info.supply_unit))])])]),t._v(" "),e("div",{staticClass:"c-coi-mid"},[e("h1",[t._v("规格")]),t._v(" "),e("div",{staticClass:"c-coi-size"},[e("el-row",[e("el-button",{attrs:{size:"mini",type:"primary"}},[t._v(t._s(t.info.spec_name)+t._s(t.info.spec_unit))])],1)],1)]),t._v(" "),e("div",{staticClass:"flex f-nowrap j-bet mt5"},[e("div",[e("h1",[t._v("数量")]),t._v(" "),e("div",{staticClass:"c-coi-num"},[e("el-input-number",{attrs:{size:"mini",min:t.info.buyNum[0],max:parseInt(t.info.storage)},on:{change:t.numberChange},model:{value:t.form.num,callback:function(s){t.$set(t.form,"num",s)},expression:"form.num"}})],1)]),t._v(" "),e("div",{staticClass:"c-coi-cout"},[e("span",{staticClass:"color9 mr5"},[t._v("共")]),t._v(t._s(t.form.num)),e("span",{staticClass:"color9 ml5 mr10"},[t._v(t._s(t.info.supply_unit))]),t._v(t._s(t.info.price_type)+t._s(t.total)+"\n                            ")])]),t._v(" "),e("div",{staticClass:"c-coi-foot"},[e("div",{staticClass:"c-coi-btn"},[e("el-button",{staticClass:"f16 mD-btn",attrs:{plain:""},on:{click:t.addCart}},[t._v("加入购物车")]),t._v(" "),e("el-button",{staticClass:"f16 mD-btn",attrs:{type:"primary"},on:{click:t.buyNow}},[t._v("立即购买")])],1)])])]),t._v(" "),e("div",{staticClass:"m-d-line",on:{click:function(s){return t.selAddress()}}},[e("div",{staticClass:"m-d-lf"},[t._v("配送")]),t._v(" "),e("div",{staticClass:"m-d-rg wto"},[t._v(t._s(t.addressId?t.choosedAddress:"请选择配送地址"))]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right icon"})])],1),t._v(" "),t.evaluate[0]?e("div",{staticClass:"m-evaluate"},[e("div",{staticClass:"m-eva-top bbGray",on:{click:function(s){return t.toEvaluate(t.info.spec_id)}}},[e("div",{staticClass:"m-eva-lf"},[t._v("用户评价（"+t._s(t.evaluate.length)+"）")]),t._v(" "),e("div",{staticClass:"m-eva-rg"},[t._v("查看更多")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right icon"})]),t._v(" "),e("div",{staticClass:"m-eva-content"},[e("div",{staticClass:"m-eva-tit"},[e("span",[t._v(t._s(t.evaluate[0].nickname))]),t._v(" "),e("el-rate",{staticClass:"m-eva-star",attrs:{value:t.evaluate[0].goods_rank,disabled:""}})],1),t._v(" "),e("div",{staticClass:"m-eva-score"},[e("span",{staticClass:"color9"},[t._v(t._s(t.evaluate[0].create_time))])]),t._v(" "),e("div",{staticClass:"m-eva-content"},[t._v("\n                        "+t._s(t.evaluate[0].content)+"\n                    ")])]),t._v(" "),e("div",{staticClass:"m-eva-pic"},t._l(t.evaluate[0].photos,function(s,i){return e("div",{key:i,staticClass:"mEvaImg"},[e("el-image",{staticClass:"meImg",attrs:{src:s,fit:"fill","preview-src-list":t.evaluate[0].photos}})],1)}),0)]):t._e(),t._v(" "),e("div",{staticClass:"m-pro-detail"},[e("h1",{staticClass:"bbGray"},[t._v("商品详情")]),t._v(" "),e("div",{staticClass:"m-pro-content",domProps:{innerHTML:t._s(t.info.description)}})])]),t._v(" "),e("div",{staticClass:"m-pro-foot"},[e("div",{staticClass:"mpf"},[e("div",{staticClass:"onCollect",on:{click:t.toCollect}},[e("i",{class:t.info.isCollect?"el-icon-star-on icon":"el-icon-star-off icon"})]),t._v(" "),e("div",{staticClass:"addCart",on:{click:function(s){return t.putOnDrawer()}}},[t._v("加入购物车")]),t._v(" "),e("div",{staticClass:"buyNow",on:{click:function(s){return t.putOnDrawer()}}},[t._v("立即购买")])])])],1)},staticRenderFns:[]};var u=e("VU/8")(o,l,!1,function(t){e("52Fr")},null,null);s.default=u.exports}});
//# sourceMappingURL=25.99a166e819f0855ed88a.js.map