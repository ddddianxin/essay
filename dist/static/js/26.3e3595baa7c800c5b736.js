webpackJsonp([26],{"4y3T":function(e,a){},"g/Mm":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("gvrZ"),l=t("NYxO"),r=t("CCn6"),s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};function i(e){return function(){var a=e.apply(this,arguments);return new Promise(function(e,t){return function n(l,r){try{var s=a[l](r),i=s.value}catch(e){return void t(e)}if(!s.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}}var u={name:"addressWap",data:function(){return{dialogFormVisible:!1,tableData:[],form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"90px",value:[],area:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}]}},components:{mheadTop:n.a},mounted:function(){this.initData()},computed:s({},Object(l.d)(["login"])),methods:{initData:function(){var e=this;return i(regeneratorRuntime.mark(function a(){var t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(r.f)();case 2:if(!(t=a.sent)){a.next=11;break}if(12007==t.status){a.next=10;break}return a.next=7,Object(r.f)();case 7:e.tableData=a.sent,a.next=11;break;case 10:e.$message({message:t.msg,type:"warning"});case 11:case"end":return a.stop()}},a,e)}))()},editAddress:function(e){var a=this;return i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.$router.push({path:"/userCenter/address/add",query:{add_id:e}});case 1:case"end":return t.stop()}},t,a)}))()},delAddress:function(e){var a=this;return i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.$confirm("确定要删除该地址?","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(i(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.n)(e);case 2:if(!(n=t.sent)){t.next=9;break}if(a.$message({message:n.msg,type:12e3==n.status?"success":"warning"}),12e3!=n.status){t.next=9;break}return t.next=8,Object(r.f)();case 8:a.tableData=t.sent;case 9:case"end":return t.stop()}},t,a)}))).catch(i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,a)})));case 1:case"end":return t.stop()}},t,a)}))()},setDefault:function(e,a){var t=this;1==a&&this.$confirm("确定要将此条地址设为默认地址?","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(i(regeneratorRuntime.mark(function a(){var n;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(r.m)(e);case 2:if(!(n=a.sent)){a.next=9;break}if(t.$message({message:n.msg,type:12e3==n.status?"success":"warning"}),12e3!=n.status){a.next=9;break}return a.next=8,Object(r.f)();case 8:t.tableData=a.sent;case 9:case"end":return a.stop()}},a,t)}))).catch(i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.f)();case 2:t.tableData=e.sent;case 3:case"end":return e.stop()}},e,t)})))},addAddress:function(){this.tableData.length>=6?this.$message({message:"地址已达到上限，不能超过6条哦",type:"warning"}):this.$router.push({path:"/userCenter/address/add"})}},created:function(){}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("mhead-top",{attrs:{titleHead:"我的地址",lfIcon:"el-icon-arrow-left icon",lfUrl:"/userCenter/index/index",rgIcon:"el-icon-s-home icon",rgUrl:"/home"}}),e._v(" "),t("div",{staticClass:"mBg"},[0==e.tableData.length?t("div",{staticClass:"f16 color6 tc mt30"},[e._v("暂无数据")]):e._l(e.tableData,function(a,n){return t("div",{staticClass:"mu-add"},[t("div",{staticClass:"mua-top flex f-nowrap"},[t("div",{staticClass:"name"},[e._v(e._s(a.name))]),e._v(" "),t("div",{staticClass:"phone"},[e._v(e._s(a.phone))])]),e._v(" "),t("div",{staticClass:"mua-text"},[e._v(e._s(a.adddress))]),e._v(" "),t("div",{staticClass:"mua-control flex f-nowrap"},[t("div",{staticClass:"mua-default"},[t("el-switch",{attrs:{disabled:a.is_default},on:{change:function(t){return e.setDefault(a.add_id,a.is_default)}},model:{value:a.is_default,callback:function(t){e.$set(a,"is_default",t)},expression:"item.is_default"}}),e._v(" "),t("el-link",{staticClass:"ml5"},[e._v("默认地址")])],1),e._v(" "),t("div",{staticClass:"mua-btn"},[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.editAddress(a.add_id)}}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.delAddress(a.add_id)}}},[e._v("删除")])],1)])])}),e._v(" "),t("div",{staticClass:"mu-addBtn",on:{click:function(a){return e.addAddress()}}},[e._m(0)])],2)],1)},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("span",[a("i",{staticClass:"el-icon-plus el-icon--left"}),this._v("添加收货地址\n            ")])}]};var c=t("VU/8")(u,o,!1,function(e){t("4y3T")},null,null);a.default=c.exports}});
//# sourceMappingURL=26.3e3595baa7c800c5b736.js.map