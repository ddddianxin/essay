webpackJsonp([8],{"7rsh":function(t,n,e){t.exports=e.p+"static/img/banner2.4a4cab2.png"},"8eOl":function(t,n){},U5ZI:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("gvrZ"),a=e("iqGf"),r=e("yclV"),s=e("CCn6");var o={name:"news",data:function(){return{cn:0,id:"",organizationId:"",bannerHeight:"613px",bannerInfo:[],playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"",src:"http://t.cn/A6yivmCw"}],poster:e("7rsh"),notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}},list:""}},components:{headTop:i.a,videoPlayer:a.videoPlayer},mounted:function(){this.cn=Object(r.a)("inCN"),this.initData(),document.body.clientWidth<=1024&&(this.bannerHeight="218px")},computed:{},methods:{initData:function(){var t,n=this;return(t=regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.id=n.$route.query.id,n.organizationId=n.$route.query.organizationId,t.next=4,Object(s.b)(n.cn,n.id,n.organizationId);case 4:return e=t.sent,n.list=e.data.list,t.next=8,Object(s.a)(1,n.cn,n.isPc,"introduction");case 8:i=t.sent,n.bannerInfo=i.data;case 10:case"end":return t.stop()}},t,n)}),function(){var n=t.apply(this,arguments);return new Promise(function(t,e){return function i(a,r){try{var s=n[a](r),o=s.value}catch(t){return void e(t)}if(!s.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}("next")})})()},toBannerJump:function(t,n,e){2==t?(e.match(/http/g)||(e="http://"+e),window.open(e,"_blank")):1==t&&this.$router.push({path:"/home/bannerdetail",query:{id:n,organizationId:this.organizationId}})}},created:function(){}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"m_bg"},[e("head-top",{attrs:{webActive:"experiment",title:"中心概况"}}),t._v(" "),e("div",{staticClass:"m_us_banner"},[e("el-carousel",{staticClass:"m_us_bannerBox",attrs:{"indicator-position":"",interval:4500,height:t.bannerHeight}},t._l(t.bannerInfo,function(n,i){return e("el-carousel-item",{key:i},[e("div",{on:{click:function(e){return t.toBannerJump(n.isExternalLink,n.contentId,n.jumpLink)}}},[e("img",{staticClass:"m_us_banner_img",attrs:{src:n.imgurl}})])])}),1)],1),t._v(" "),e("div",{staticClass:"m_us_ctBg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"m_us_ctBox"},t._l(t.list,function(n,i){return e("div",{key:i},[e("h3",[t._v(t._s(n.contentTitle))]),t._v(" "),t._m(0,!0),t._v(" "),e("div",{staticClass:"m_us_ctText",domProps:{innerHTML:t._s(n.contentHtml)}}),t._v(" "),e("div",{staticClass:"picShow"},[e("img",{attrs:{src:n.mainPic}})])])}),0)])])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tc pl15 pr15"},[n("img",{staticClass:"w",attrs:{src:e("hNpu")}})])}]};var u=e("VU/8")(o,c,!1,function(t){e("8eOl")},null,null);n.default=u.exports}});
//# sourceMappingURL=8.dd3a3895506cab6c6822.js.map