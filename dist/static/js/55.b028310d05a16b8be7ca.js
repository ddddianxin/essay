webpackJsonp([55],{"293k":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("gvrZ"),i=n("CCn6"),r=n("yclV");var o={name:"experiment",data:function(){return{cn:0,id:"",organizationId:"",val:""}},components:{headTop:a.a},mounted:function(){this.cn=Object(r.a)("inCN"),this.initData()},computed:{},methods:{initData:function(){var t,e=this;return(t=regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.id=e.$route.query.id,e.organizationId=e.$route.query.organizationId,t.next=4,Object(i.d)(e.id,e.organizationId,e.cn);case 4:n=t.sent,e.val=n.data.list[0];case 6:case"end":return t.stop()}},t,e)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(i,r){try{var o=e[i](r),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})})()}},created:function(){}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m_bg"},[n("head-top",{attrs:{webActive:"home"}}),t._v(" "),n("div",{staticClass:"mDetail"},[n("h2",{staticClass:"mDetailTit"},[t._v(t._s(t.val.contentTitle))]),t._v(" "),n("div",{staticClass:"mDetailSource"},[n("span",[t._v(t._s(t.val.publishTime))]),t._v(" "),t.val.author?n("span",{staticClass:"ml10"},[t._v("作者："+t._s(t.val.author))]):t._e()]),t._v(" "),n("div",{staticClass:"mDetailText",domProps:{innerHTML:t._s(t.val.contentHtml)}})])],1)},staticRenderFns:[]};var c=n("VU/8")(o,s,!1,function(t){n("gckc")},null,null);e.default=c.exports},gckc:function(t,e){}});
//# sourceMappingURL=55.b028310d05a16b8be7ca.js.map