<template>
    <div class="bg">
        <head-top webActive="experiment" title="中心概况"></head-top>
        <img class="bgTop" src="../../images/ctIntro.png">
        <div class="ctBg">
            <div class="container">
                <div class="ctBox">
                    <h3>仿生触觉与智能传感研究中心</h3>
                    <h4>中心概况</h4>
                    <div class="ctText">
                        代课老师复健科多杜鹃花科拉多加湖可怜的就是看了好久疯狂的解放军队上看见好看的就是看少积分叫苏打绿发来多少叫罚款了多少解放东路收缴罚款劳动竞赛来飞机都试了代课老师复健科多少积分叫苏打绿发来多少叫罚款了多少解放东路收缴罚款劳动竞赛来飞机都试了代课老师复健科多少积分叫苏打绿发来多少叫罚款了多少解放东路收缴罚款劳动竞赛来飞机都试了代课老师复健科多少积分叫苏打绿发来多少叫罚款了多少解放东路收缴罚款劳动竞赛来飞机都试了代课老师复健科多少积分叫苏打绿发来多少叫罚款了多少解放东路收缴罚款劳动竞赛来飞机都试了代课老师复健科多少积分叫苏打绿发来多少叫罚款了多少解放东路收缴罚款劳动竞赛来飞机都试了
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
    import headTop from '../../components/mobile/headTop';
    import { videoPlayer } from 'vue-video-player'
    export default {
        name: 'news',
        data(){
            return{
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
                }
                
            }
        },
        components:{
            headTop,videoPlayer
        },
        mounted(){
            // 获取首页产品
            this.initData();
            if(document.body.clientWidth<=1024){
                
            }
            
        },
        computed:{
        },
        methods:{
            async initData(){
                
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .bg{
        background-color:#fff;
    }
    .ctBg{
        padding-bottom:35px;
    }
    .bgTop{
        height:px2rem(400);
        width: px2rem(750);
        object-fit: cover;
        margin-top:px2rem(180);
        text-align: center;
    }
    .ctBox{
        width:100%;
    }
    .ctBox h3{
       margin:px2rem(40) 0;
       color:#152b59;
       font-size: px2rem(46);
       font-weight: normal;
       text-align: center;
    }
    .ctBox h4{
        text-align:center;
        font-size:px2rem(40);
        color:#152b59;
        font-weight:bold;
        
    }
    .ctText{
        color:#666;
        font-size:px2rem(32);
        line-height: px2rem(60);
        margin:px2rem(30) 0 px2rem(40) 0;
        padding:0 px2rem(40);
        height:auto;
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
        

</style>
