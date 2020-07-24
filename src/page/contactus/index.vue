<template>
    <div class="bg">
        <head-top webActive="centerIntro"></head-top>
        <img class="bgTop" src="../../images/ctIntro.png">
        <div class="ctBg">
            <div class="container">
                <div class="ctBox">
                    <div v-for="(item,index) in list" :key="index">
                        <h3>{{item.contentTitle}}</h3>
                        <div class="tc"><img src="../../images/ctTitLine.png"></div>
                        <div class="ctText" v-html="item.contentHtml"></div>
                   </div>
                    <div class="ctVideo">
                        <video-player  class="video-player vjs-custom-skin"
                            ref="videoPlayer" 
                            :playsinline="true" 
                            :options="playerOptions"
                        ></video-player>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import { videoPlayer } from 'vue-video-player';
    import {getStore} from '../../config/mUtils';
    import {content} from '../../service/api'
    export default {
        name: 'news',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
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
                        src: "https://v.qq.com/x/page/f3112hlbbxl.html" //url地址
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
            // 获取首页产品
            this.initData();
            if(document.body.clientWidth<=1024){
                
            }
            
        },
        computed:{
        },
        methods:{
            async initData(){
                this.id = this.$route.query.id;
                this.organizationId = this.$route.query.organizationId;
                var res = await content(this.cn,this.id,this.organizationId);
                this.list = res.data;
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .ctBg{
        padding-bottom:35px;
    }
    .bgTop{
        height:528px;
        width: 100%;
        object-fit: cover;
    }
    .ctBox{
        width:1024px;
    }
    .ctBox h3{
       margin:30px 0 0 0;
       color:#152b59;
       font-weight: bold;
       font-size: 30px;
       text-align: center;
       line-height: 40px;
       margin-bottom:15px;
    }
    .ctText{
        color:#666;
        font-size:16px;
        line-height: 30px;
        margin:20px 0 35px 0;
    }
    .ctVideo{
        border-radius: 40px;
        overflow: hidden;
    }
    .video-js .vjs-icon-placeholder {
        width: 100%;
        height: 100%;
        display: block;
    }
        

</style>
