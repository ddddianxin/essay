webpackJsonp([53],{GbFu:function(t,e){},kVj0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("USSz"),n=a("6s0h"),s=a("CCn6"),r=a("yclV");function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function i(n,s){try{var r=e[n](s),o=r.value}catch(t){return void a(t)}if(!r.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}("next")})}}var c={name:"team",data:function(){return{cn:0,id:"",organizationId:"",rows:9,page:1,totalPage:1,totalRow:1,listData:[],sortTit:[],sortList:[]}},components:{headTop:i.a,sideMenu:n.a},mounted:function(){this.cn=Object(r.a)("inCN"),this.initData()},computed:{},methods:{initData:function(){var t=this;return o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.id=t.$route.query.id,t.organizationId=t.$route.query.organizationId,t.page=1,t.getData();case 4:case"end":return e.stop()}},e,t)}))()},toSciDetail:function(t,e){this.$router.push({path:"/science/detail",query:{id:t,organizationId:e}})},handleCurrentChange:function(t){this.page=t,this.getData()},getData:function(){var t=this;return o(regeneratorRuntime.mark(function e(){var a,i,n,r,o,c,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.c)(t.cn,t.page,t.rows,t.organizationId,t.id);case 2:for(a=e.sent,t.listData=a.data.list,t.totalPage=a.data.totalPage,t.totalRow=a.data.totalRow,i=[],n=0;n<t.listData.length;n++)i[n]=t.listData[n].typeName;for(r=[],o=0;o<i.length;o++)-1===r.indexOf(i[o])&&r.push(i[o]);for(t.sortTit=r,c=[],n=0;n<r.length;n++){for(u=[],l=0;l<t.listData.length;l++)r[n]==t.listData[l].typeName&&u.push(t.listData[l]);c.push(u)}t.sortList=c;case 14:case"end":return e.stop()}},e,t)}))()}},created:function(){}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("head-top",{attrs:{webActive:"科研成果",webChildActive:"科研项目"}}),t._v(" "),a("div",{staticClass:"teamBg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"lsideBox"},[a("side-menu",{attrs:{webTitle:"科研成果",webActive:"科研项目"}}),t._v(" "),a("div",{staticClass:"sciList"},[t._l(t.sortTit,function(e,i){return a("div",{key:i,staticClass:"sciPanel"},[a("div",{staticClass:"tit"},[t._v(t._s(e))]),t._v(" "),t._m(0,!0),t._v(" "),t._l(t.sortList[i],function(i,n){return a("div",{key:n,staticClass:"sciIt",on:{click:function(a){return t.toSciDetail(i.id,e.organizationId)}}},[a("div",{staticClass:"pjIndex"},[t._v(t._s(n+1))]),t._v(" "),a("div",{staticClass:"pjTypeTit"},[t._v(t._s(i.contentSubtitle))]),t._v(" "),a("div",{staticClass:"pjTypeName"},[t._v(t._s(i.typeName))]),t._v(" "),a("div",{staticClass:"pjName"},[t._v(t._s(i.contentTitle))]),t._v(" "),a("div",{staticClass:"pjRespon"},[t._v(t._s(i.author))])])})],2)}),t._v(" "),a("div",{staticClass:"tc",staticStyle:{margin:"0 auto"}},[a("el-pagination",{attrs:{layout:"prev, pager, next","page-count":t.totalPage},on:{"current-change":t.handleCurrentChange}})],1)],2)],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sciIt sciNav"},[e("div",{staticClass:"pjIndex"},[this._v("序号")]),this._v(" "),e("div",{staticClass:"pjType"},[this._v("项目类别")]),this._v(" "),e("div",{staticClass:"pjName"},[this._v("项目名称")]),this._v(" "),e("div",{staticClass:"pjRespon"},[this._v("项目负责人")])])}]};var l=a("VU/8")(c,u,!1,function(t){a("GbFu")},null,null);e.default=l.exports}});
//# sourceMappingURL=53.da7c0374139bd3dd7f47.js.map