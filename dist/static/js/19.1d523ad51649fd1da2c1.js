webpackJsonp([19],{C7cZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gvrZ"),i=a("XYb/"),r=a("CCn6"),o=a("yclV");function s(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function n(i,r){try{var o=e[i](r),s=o.value}catch(t){return void a(t)}if(!o.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})}}var c,u,l,d=(c={name:"achievement",data:function(){return{cn:0,id:"",organizationId:"",rows:8,page:1,totalPage:1,totalRow:1,listData:[],text:[],yearList:[],sortList:[]}},components:{headTop:n.a,sideMenu:i.a},created:function(){},mounted:function(){this.cn=Object(o.a)("inCN"),this.initData()},computed:{},methods:{initData:function(){var t=this;return s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.id=t.$route.query.id,t.organizationId=t.$route.query.organizationId,t.page=1,t.getData();case 4:case"end":return e.stop()}},e,t)}))()},toSciDetail:function(t,e){this.$router.push({path:"/science/detail",query:{id:t,organizationId:e}})},handleCurrentChange:function(t){this.page=t,this.getData()},getData:function(){var t=this;return s(regeneratorRuntime.mark(function e(){var a,n,i,o,s,c,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.c)(t.cn,t.page,t.rows,t.organizationId,t.id);case 2:for(a=e.sent,t.listData=a.data.list,t.totalPage=a.data.totalPage,t.totalRow=a.data.totalRow,n=[],i=0;i<t.listData.length;i++)n[i]=t.listData[i].year;for(o=[],s=0;s<n.length;s++)-1===o.indexOf(n[s])&&o.push(n[s]);for(o.sort(function(t,e){return e-t}),t.yearList=o,c=[],i=0;i<o.length;i++){for(u=[],l=0;l<t.listData.length;l++)o[i]==t.listData[l].year&&u.push(t.listData[l]);c.push(u)}t.sortList=c;case 15:case"end":return e.stop()}},e,t)}))()}}},l=function(){},(u="created")in c?Object.defineProperty(c,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[u]=l,c),f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m_bg"},[a("head-top",{attrs:{webActive:"achievement",title:"科研成果"}}),t._v(" "),a("div",{staticClass:"webAchiBg"},[a("side-menu",{attrs:{webTitle:"科研成果",webActive:"期刊论文"}}),t._v(" "),a("div",{staticClass:"webAchiList"},[a("div",{staticClass:"mAchiList"},t._l(t.yearList,function(e,n){return a("div",{key:n,staticClass:"mpaperBox"},[a("h2",{staticClass:"yearTit f16 fb"},[t._v(t._s(e)+"年")]),t._v(" "),t._l(t.sortList[n],function(e,n){return a("div",{key:n,staticClass:"mpaperItem",on:{click:function(a){return t.toSciDetail(e.id,e.organizationId)}}},[a("div",{staticClass:"mppName"},[t._v(t._s(n+1)+". "+t._s(e.contentTitle))])])})],2)}),0),t._v(" "),a("div",{staticClass:"tc",staticStyle:{margin:"0 auto"}},[a("el-pagination",{attrs:{layout:"prev, pager, next","page-count":t.totalPage},on:{"current-change":t.handleCurrentChange}})],1)])],1)],1)},staticRenderFns:[]};var h=a("VU/8")(d,f,!1,function(t){a("OYKj")},null,null);e.default=h.exports},OYKj:function(t,e){}});
//# sourceMappingURL=19.1d523ad51649fd1da2c1.js.map