webpackJsonp([17],{"7Z5X":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gvrZ"),i=a("XYb/"),r=a("CCn6"),o=a("yclV"),s=a("ux7m");function c(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function n(i,r){try{var o=e[i](r),s=o.value}catch(t){return void a(t)}if(!o.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})}}var l,u,d,g=(l={name:"team",data:function(){return{cn:0,id:"",totalPage:1,totalRow:1,organizationId:"",scrollY:0,page:1,rows:10,noData:!1,loadingText:"加载中...",scrollH:300,listData:[]}},components:{headTop:n.a,sideMenu:i.a,Scroll:s.a},created:function(){},beforeMount:function(t){var e=document.documentElement.clientHeight||document.body.clientHeight;this.scrollH=e-90-30-102},mounted:function(){this.cn=Object(o.a)("inCN"),this.initData()},computed:{},methods:{initData:function(){this.id=this.$route.query.id,this.organizationId=this.$route.query.organizationId,this.page=1,this.getData()},toTeamDetail:function(t,e){this.$router.push({path:"/team/detail",query:{id:t,organizationId:e}})},getData:function(){var t=this;return c(regeneratorRuntime.mark(function e(){var a,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.c)(t.cn,t.page,t.rows,t.organizationId,t.id);case 2:a=e.sent,0!=(n=a.data.list).length&&n.length==t.rows?(t.noData=!1,t.page++,t.listData=n,t.loadingText="上拉加载更多"):(t.page++,t.listData=n,t.noData=!0,t.loadingText="");case 5:case"end":return e.stop()}},e,t)}))()},getmoredata:function(){var t=this;return c(regeneratorRuntime.mark(function e(){var a,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.loadingText||"上拉加载更多"==t.loadingText){e.next=2;break}return e.abrupt("return",!1);case 2:return t.loadingText="加载中...",e.next=5,Object(r.c)(t.cn,t.page,t.rows,t.organizationId,t.id);case 5:if(a=e.sent,n=a.data.list,t.loadingText="",0!=n.length){e.next=11;break}return t.loadingText="已加载全部",e.abrupt("return",!1);case 11:t.page++,t.listData=t.listData.concat(n),t.loadingText="上拉加载更多";case 14:case"end":return e.stop()}},e,t)}))()}}},d=function(){},(u="created")in l?Object.defineProperty(l,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):l[u]=d,l),p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m_bg"},[n("head-top",{attrs:{webActive:"team",title:"科研队伍"}}),t._v(" "),n("div",{staticClass:"webTeamBg"},[n("side-menu",{attrs:{webTitle:"科研队伍",webActive:"学生"}}),t._v(" "),n("div",{staticClass:"webTeamList"},[n("scroll",{staticClass:"wrapper",style:"height:"+t.scrollH+"px;",attrs:{data:t.listData,listenScroll:!0,pulldown:!0,pullup:!0},on:{pulldown:t.getData,scrollToEnd:t.getmoredata}},[n("div",{staticClass:"webtList"},t._l(t.listData,function(e,i){return n("div",{key:i,staticClass:"webteamItem",on:{click:function(a){return t.toTeamDetail(e.id,e.organizationId)}}},[n("img",{attrs:{src:e.mainPic}}),t._v(" "),n("h4",{staticClass:"wto"},[t._v(t._s(e.contentTitle))]),t._v(" "),n("p",{staticStyle:{"-webkit-box-orient":"vertical"}},[t._v(t._s(e.plainText))]),t._v(" "),n("div",{staticClass:"tc"},[n("span",{staticClass:"arrow"},[n("img",{attrs:{src:a("D+zN")}})])])])}),0),t._v(" "),n("div",{staticClass:"loading-wrapper"})])],1)],1)],1)},staticRenderFns:[]};var v=a("VU/8")(g,p,!1,function(t){a("WohG")},null,null);e.default=v.exports},WohG:function(t,e){}});
//# sourceMappingURL=17.fad4fc8e94b6b0014687.js.map