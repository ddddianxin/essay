webpackJsonp([16],{f7rY:function(e,r){},lO31:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n("gvrZ"),o=n("CCn6");function a(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,n){return function t(o,a){try{var i=r[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){t("next",e)},function(e){t("throw",e)});e(s)}("next")})}}function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var s={name:"mInvoiceAdd",data:function(){var e;return i(e={invoice_id:"",invoiceType:"0",personForm:{invoice_id:"",title:"",address:"",phone:""},companyForm:{invoice_id:"",ename:"",taxnumber:"",address:"",phone:"",bank:"",banknumber:""},formLabelWidth:"90px"},"invoiceType","0"),i(e,"personRules",{title:[{required:!0,type:"string",message:"请输入名称",trigger:"blur"}],phone:[{required:!0,type:"string",message:"请输入手机号",trigger:"blur"}],address:[{required:!0,type:"string",message:"请填写地址",trigger:"blur"}]}),i(e,"companyRules",{ename:[{required:!0,message:"请输入公司名称",trigger:"blur"}],taxnumber:[{required:!0,message:"请输入公司税号",trigger:"blur"}],address:[{required:!0,message:"请填写开票地址",trigger:"blur"}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"}],bank:[{required:!0,message:"请输入开户银行",trigger:"blur"}],banknumber:[{required:!0,message:"请输入银行账户",trigger:"blur"}]}),e},components:{mheadTop:t.a},mounted:function(){this.initData()},computed:{},methods:{initData:function(){var e=this;return a(regeneratorRuntime.mark(function r(){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e.invoice_id=e.$route.query.invoice_id,e.invoiceType=String(e.$route.query.type),console.log("this.invoice_id:"+e.invoice_id),console.log("this.invoiceType:"+e.invoiceType),!e.invoice_id){r.next=9;break}return r.next=7,Object(o.r)(e.invoice_id);case 7:0==(n=r.sent).type?(e.companyForm.invoice_id=n.invoice_id,e.companyForm.ename=n.ename,e.companyForm.taxnumber=n.taxnumber,e.companyForm.address=n.address,e.companyForm.phone=n.phone,e.companyForm.bank=n.bank,e.companyForm.banknumber=n.banknumber):(e.personForm.invoice_id=n.invoice_id,e.personForm.title=n.title,e.personForm.address=n.address,e.personForm.phone=n.phone);case 9:case"end":return r.stop()}},r,e)}))()},submitForm:function(e,r){var n,t=this;r=r||"",this.$refs[e].validate((n=a(regeneratorRuntime.mark(function e(n){var a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=20;break}if("0"!=t.invoiceType){e.next=7;break}return e.next=4,Object(o.d)(r,"",t.invoiceType,t.companyForm.taxnumber,t.companyForm.address,t.companyForm.banknumber,t.companyForm.phone,t.companyForm.bank,t.companyForm.ename);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,Object(o.d)(r,t.personForm.title,t.invoiceType,"",t.personForm.address,"",t.personForm.phone,"","");case 9:a=e.sent;case 10:if(!a){e.next=18;break}if(t.$message({message:a.msg,type:12e3==a.status?"success":"warning"}),12e3!=a.status){e.next=18;break}return e.next=15,invoice();case 15:i=e.sent,t.calTable(i),t.dialogFormVisible=!1;case 18:e.next=22;break;case 20:return console.log("error submit!!"),e.abrupt("return",!1);case 22:case"end":return e.stop()}},e,t)})),function(e){return n.apply(this,arguments)}))},cancel:function(){this.$router.go(-1)}},created:function(){}},m={render:function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",[n("mhead-top",{attrs:{titleHead:"发票",lfIcon:"el-icon-arrow-left icon",lfUrl:"/userCenter/invoice/invoice",rgIcon:"el-icon-s-home icon",rgUrl:"/home"}}),e._v(" "),n("div",{staticClass:"mBg"},[n("div",{staticClass:"m-edit-add"},[n("div",{staticClass:"m_sel flex f-nowrap"},[n("div",{staticClass:"m_tit"},[e._v("发票类型：")]),e._v(" "),n("div",{staticClass:"m_choice"},[e._v("\n                    "+e._s(0==e.invoiceType?"企业":"个人")+"\n                ")])]),e._v(" "),"0"==e.invoiceType?n("div",[n("el-form",{ref:"companyForm",attrs:{model:e.companyForm,rules:e.companyRules,"label-position":"top"}},[n("el-form-item",{staticClass:"m-f-h",attrs:{label:"公司名称","label-width":e.formLabelWidth,prop:"ename"}},[n("el-input",{attrs:{size:"medium"},model:{value:e.companyForm.ename,callback:function(r){e.$set(e.companyForm,"ename",r)},expression:"companyForm.ename"}})],1),e._v(" "),n("el-form-item",{staticClass:"m-f-h",attrs:{label:"公司税号","label-width":e.formLabelWidth,prop:"taxnumber"}},[n("el-input",{attrs:{size:"medium"},model:{value:e.companyForm.taxnumber,callback:function(r){e.$set(e.companyForm,"taxnumber",r)},expression:"companyForm.taxnumber"}})],1),e._v(" "),n("el-form-item",{staticClass:"m-f-h",attrs:{label:"开票地址","label-width":e.formLabelWidth,prop:"address"}},[n("el-input",{attrs:{size:"medium",type:"textarea"},model:{value:e.companyForm.address,callback:function(r){e.$set(e.companyForm,"address",r)},expression:"companyForm.address"}})],1),e._v(" "),n("el-form-item",{staticClass:"m-f-h",attrs:{label:"电话号码","label-width":e.formLabelWidth,prop:"phone"}},[n("el-input",{attrs:{size:"medium"},model:{value:e.companyForm.phone,callback:function(r){e.$set(e.companyForm,"phone",r)},expression:"companyForm.phone"}})],1),e._v(" "),n("el-form-item",{staticClass:"m-f-h",attrs:{label:"开户银行","label-width":e.formLabelWidth,prop:"bank"}},[n("el-input",{attrs:{size:"medium"},model:{value:e.companyForm.bank,callback:function(r){e.$set(e.companyForm,"bank",r)},expression:"companyForm.bank"}})],1),e._v(" "),n("el-form-item",{staticClass:"m-f-h",attrs:{label:"银行账户","label-width":e.formLabelWidth,prop:"banknumber"}},[n("el-input",{attrs:{size:"medium"},model:{value:e.companyForm.banknumber,callback:function(r){e.$set(e.companyForm,"banknumber",r)},expression:"companyForm.banknumber"}})],1)],1),e._v(" "),n("div",{staticClass:"formBtn"},[n("div",{staticClass:"m-edit-btn",on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("div",{staticClass:"m-edit-btn safe",on:{click:function(r){return e.submitForm("companyForm",e.companyForm.invoice_id)}}},[e._v("保存")])])],1):n("div",[n("el-form",{ref:"personForm",attrs:{model:e.personForm,rules:e.personRules,"label-width":"90px","label-position":"top"}},[n("el-form-item",{staticClass:"m-f-h",attrs:{label:"名称","label-width":e.formLabelWidth,prop:"title"}},[n("el-input",{attrs:{size:"medium"},model:{value:e.personForm.title,callback:function(r){e.$set(e.personForm,"title",r)},expression:"personForm.title"}})],1),e._v(" "),n("el-form-item",{staticClass:"m-f-h",attrs:{label:"地址","label-width":e.formLabelWidth,prop:"address"}},[n("el-input",{attrs:{size:"medium",type:"textarea"},model:{value:e.personForm.address,callback:function(r){e.$set(e.personForm,"address",r)},expression:"personForm.address"}})],1),e._v(" "),n("el-form-item",{staticClass:"m-f-h",attrs:{label:"电话号码","label-width":e.formLabelWidth,prop:"phone"}},[n("el-input",{attrs:{size:"medium"},model:{value:e.personForm.phone,callback:function(r){e.$set(e.personForm,"phone",r)},expression:"personForm.phone"}})],1)],1),e._v(" "),n("div",{staticClass:"formBtn"},[n("div",{staticClass:"m-edit-btn",on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("div",{staticClass:"m-edit-btn safe",on:{click:function(r){return e.submitForm("personForm",e.personForm.invoice_id)}}},[e._v("保存")])])],1)])])],1)},staticRenderFns:[]};var l=n("VU/8")(s,m,!1,function(e){n("f7rY")},null,null);r.default=l.exports}});
//# sourceMappingURL=16.a7b6c508034d14b8bc79.js.map