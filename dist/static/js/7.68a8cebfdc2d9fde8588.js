webpackJsonp([7],{"7rsh":function(t,n,e){t.exports=e.p+"static/img/banner2.4a4cab2.png"},"E+bK":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("USSz"),a=e("iqGf"),r=e("yclV"),o=e("CCn6");var s={name:"news",data:function(){return{cn:0,isPc:1,id:"",organizationId:"",playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"",src:"https://v.qq.com/x/page/f3112hlbbxl.html"}],poster:e("7rsh"),notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}},list:"",bannerHeight:"613px",bannerInfo:[]}},components:{headTop:i.a,videoPlayer:a.videoPlayer},mounted:function(){this.cn=Object(r.a)("inCN"),this.isPc=Object(r.a)("isPc"),this.initData()},computed:{},methods:{initData:function(){var t,n=this;return(t=regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.id=n.$route.query.id,n.organizationId=n.$route.query.organizationId,t.next=4,Object(o.b)(n.cn,n.id,n.organizationId);case 4:return e=t.sent,n.list=e.data.list,t.next=8,Object(o.a)(1,n.cn,n.isPc,"introduction");case 8:i=t.sent,n.bannerInfo=i.data;case 10:case"end":return t.stop()}},t,n)}),function(){var n=t.apply(this,arguments);return new Promise(function(t,e){return function i(a,r){try{var o=n[a](r),s=o.value}catch(t){return void e(t)}if(!o.done)return Promise.resolve(s).then(function(t){i("next",t)},function(t){i("throw",t)});t(s)}("next")})})()},toBannerJump:function(t,n,e){2==t?(e.match(/http/g)||(e="http://"+e),window.open(e,"_blank")):1==t&&this.$router.push({path:"/home/bannerdetail",query:{id:n,organizationId:this.organizationId}})}},created:function(){}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg"},[e("head-top",{attrs:{webActive:"中心介绍",webChildActive:"中心概论"}}),t._v(" "),e("div",{staticClass:"introBanner"},[e("el-carousel",{staticClass:"bannerBox",attrs:{"indicator-position":"",interval:4500,height:t.bannerHeight}},t._l(t.bannerInfo,function(n,i){return e("el-carousel-item",{key:i},[e("div",{on:{click:function(e){return t.toBannerJump(n.isExternalLink,n.contentId,n.jumpLink)}}},[e("img",{attrs:{src:n.imgurl}})])])}),1)],1),t._v(" "),e("div",{staticClass:"aboutus_ctBg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"aboutus_ctBox"},t._l(t.list,function(n,i){return e("div",{key:i},[e("h3",[t._v(t._s(n.contentTitle))]),t._v(" "),t._m(0,!0),t._v(" "),e("div",{staticClass:"ctText",domProps:{innerHTML:t._s(n.contentHtml)}}),t._v(" "),e("img",{staticClass:"picShow",attrs:{src:n.mainPic}})])}),0)])])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tc"},[n("img",{attrs:{src:e("hNpu")}})])}]};var u=e("VU/8")(s,c,!1,function(t){e("zxcd")},null,null);n.default=u.exports},zxcd:function(t,n){}});
//# sourceMappingURL=7.68a8cebfdc2d9fde8588.js.map