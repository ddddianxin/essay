webpackJsonp([7],{G5ND:function(t,e,n){t.exports=n.p+"static/img/mCtIntro.ec33a7b.png"},"l3s+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("gvrZ"),r=n("CCn6"),i=n("yclV"),o=n("ux7m");function s(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,i){try{var o=e[r](i),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})}}var c,l,u,d=(c={name:"team",data:function(){return{cn:0,id:"",totalPage:1,totalRow:1,organizationId:"",scrollY:0,page:1,rows:10,noData:!1,loadingText:"加载中...",scrollH:300,listData:[]}},components:{headTop:a.a,Scroll:o.a},created:function(){},beforeMount:function(t){var e=document.documentElement.clientHeight||document.body.clientHeight;this.scrollH=e-90-120-102},mounted:function(){this.cn=Object(i.a)("inCN"),this.initData()},computed:{},methods:{initData:function(){this.id=this.$route.query.id,this.organizationId=this.$route.query.organizationId,this.page=1,this.getData()},toDetail:function(t,e){this.$router.push({path:"/recruit/detail",query:{id:t,organizationId:e}})},getData:function(){var t=this;return s(regeneratorRuntime.mark(function e(){var n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.c)(t.cn,t.page,t.rows,t.organizationId,t.id);case 2:n=e.sent,0!=(a=n.data.list).length&&a.length==t.rows?(t.noData=!1,t.page++,t.listData=a,t.loadingText="上拉加载更多"):(t.page++,t.listData=a,t.noData=!0,t.loadingText="");case 5:case"end":return e.stop()}},e,t)}))()},getmoredata:function(){var t=this;return s(regeneratorRuntime.mark(function e(){var n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.loadingText||"上拉加载更多"==t.loadingText){e.next=2;break}return e.abrupt("return",!1);case 2:return t.loadingText="加载中...",e.next=5,Object(r.c)(t.cn,t.page,t.rows,t.organizationId,t.id);case 5:if(n=e.sent,a=n.data.list,t.loadingText="",0!=a.length){e.next=11;break}return t.loadingText="已加载全部",e.abrupt("return",!1);case 11:t.page++,t.listData=t.listData.concat(a),t.loadingText="上拉加载更多";case 14:case"end":return e.stop()}},e,t)}))()}}},u=function(){},(l="created")in c?Object.defineProperty(c,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):c[l]=u,c),g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("head-top",{attrs:{webActive:"recruit",title:"人才招聘"}}),t._v(" "),a("div",{staticClass:"webRecBg"},[a("img",{staticClass:"bgTop",attrs:{src:n("G5ND")}}),t._v(" "),a("div",{staticClass:"webRecList"},[a("scroll",{staticClass:"wrapper",style:"height:"+t.scrollH+"px;",attrs:{data:t.listData,listenScroll:!0,pulldown:!0,pullup:!0},on:{pulldown:t.getData,scrollToEnd:t.getmoredata}},[a("div",t._l(t.listData,function(e,n){return a("div",{key:n,staticClass:"mrecList",on:{click:function(n){return t.toDetail(e.id.item.organizationId)}}},[a("div",{staticClass:"mrecInfo"},[a("div",{staticClass:"mrecName"},[t._v(t._s(e.contentTitle))]),t._v(" "),a("div",[a("span",{staticClass:"mrecSalary"},[t._v(t._s(e.contentSubtitle))]),t._v(" "),a("span",{staticClass:"mrecExp"},[t._v(t._s(e.remark))])]),t._v(" "),a("p",[t._v("岗位简介：")]),t._v(" "),a("div",{staticClass:"mrecText"},[t._v(t._s(e.plainText))])])])}),0),t._v(" "),a("div",{staticClass:"loading-wrapper"})])],1)])],1)},staticRenderFns:[]};var p=n("VU/8")(d,g,!1,function(t){n("u5XM")},null,null);e.default=p.exports},u5XM:function(t,e){}});
//# sourceMappingURL=7.dbc5cc3d189911e438af.js.map