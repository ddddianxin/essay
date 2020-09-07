<template>
    <div class="m_bg">
        <head-top webActive="experiment" title="中心概况"></head-top>
        <div class="m_us_banner">
            <el-carousel class="m_us_bannerBox" indicator-position="" :interval="4500" :height='bannerHeight'>
                <el-carousel-item v-for="(item,index) in bannerInfo" :key="index" >
                    <div @click="toBannerJump(item.isExternalLink,item.contentId,item.jumpLink)">
                        <img class="m_us_banner_img" :src="item.imgurl">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="m_us_ctBg">
            <div class="container">
                <div class="m_us_ctBox">
                    <div v-for="(item,index) in list" :key="index">
                        <h3>{{item.contentTitle}}</h3>
                        <div class="tc pl15 pr15"><img class="w" src="../../images/ctTitLine.png"></div>
                        <div class="m_us_ctText" v-html="item.contentHtml"></div>
                        <div class="picShow">
                            <img :src="item.mainPic">
                        </div>
                    </div>
                    <!-- <div class="ctVideo">
                        <video-player  class="video-player vjs-custom-skin"
                            ref="videoPlayer" 
                            :playsinline="true" 
                            :options="playerOptions"
                        ></video-player>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    import { videoPlayer } from 'vue-video-player'
    import {getStore} from '../../config/mUtils'
    import {content,banner} from '../../service/api'
    export default {
        name: 'news',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                bannerHeight:'613px',
                bannerInfo:[],
                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: "http://t.cn/A6yivmCw" //url地址
                    }],
                    poster: require('../../images/banner2.png'), //你的封面地址
                    // width: document.documentElement.clientWidth, //播放器宽度
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                },
                list:''
                
            }
        },
        components:{
            headTop,videoPlayer
        },
        mounted(){
            this.cn = getStore("inCN");
            this.initData();
            if(document.body.clientWidth<=1024){
                this.bannerHeight = '218px';
            }
        },
        computed:{
        },
        methods:{
            async initData(){
                this.id = this.$route.query.id;
                this.organizationId = this.$route.query.organizationId;
                var res = await content(this.cn,this.id,this.organizationId);
                this.list = res.data.list;

                var res2 = await banner(1,this.cn,this.isPc,'introduction');
                this.bannerInfo = res2.data;
            },
            toBannerJump(isExternalLink,contentId,jumpLink){
                // 当isExternalLink=0时，无需跳转任何页面
                // 当isExternalLink=1时，跳转到详情页，查询/cms/content/queryDetailContent?id=contentId
                // 当isExternalLink=2时，跳转到外部链接，即jumpLink指定的链接
                if(isExternalLink==2){
                    var arr = jumpLink.match(/http/g);
                    if(!arr){
                        jumpLink = 'http://'+jumpLink;
                    }
                    window.open(jumpLink,"_blank");
                }else if(isExternalLink==1){
                    this.$router.push({path:'/home/bannerdetail',query:{id:contentId,organizationId:this.organizationId}});
                }else{

                }

            }

        },
        created(){


        }, 
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .m_bg{
        background-color:#fff;
    }
    .m_us_ctBg{
        padding-bottom:35px;
    }
    .m_us_ctBox{
        width:100%;
    }
    .m_us_ctBox h3{
       margin:px2rem(40) 0;
       color:#152b59;
       font-size: px2rem(46);
       font-weight: normal;
       text-align: center;
    }
    .m_us_ctBox h4{
        text-align:center;
        font-size:px2rem(40);
        color:#152b59;
        font-weight:bold;
        
    }
    .m_us_ctText{
        color:#666;
        font-size:px2rem(32);
        line-height: px2rem(60);
        margin:px2rem(30) 0 px2rem(40) 0;
        padding:0 px2rem(40);
    }
    .ctVideo{
        border-radius: px2rem(40);
        overflow: hidden;
        margin:0 px2rem(40);
    }
    .video-js .vjs-icon-placeholder {
        width: 100%;
        height: 100%;
        display: block;
    }
    .picShow{
        padding:px2rem(30);
        display:block;
    }   
    .picShow img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }    
    // banner
    .m_us_banner{
        height:px2rem(400);
        margin-top:px2rem(180);
        position: relative;
   }
   .m_us_banner_img{
       height:px2rem(400);
       width:100%;
       object-fit: cover;
   }
   .m_us_banner .el-carousel__indicators.el-carousel__indicators--horizontal{
        right:0;
        left:initial;
    }
    .m_us_banner .el-carousel__indicators--horizontal li{
        float:right;
    }
    .m_us_banner .el-carousel__indicator--horizontal{
        padding:0 px2rem(12) px2rem(16) 0;
    }
    .m_us_banner .el-carousel__button{
        width:px2rem(20);
        height: px2rem(20);
        border-radius: px2rem(60);
    }

</style>
