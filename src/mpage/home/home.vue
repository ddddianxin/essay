<template>
    <div class="m_bg">
        <head-top webActive="home"></head-top>
        <div id="home">
            <div class="m_banner">
                 <el-carousel class="m_bannerBox" indicator-position="" :interval="4500" :height='bannerHeight'>
                    <el-carousel-item v-for="(item,index) in bannerInfo" :key="index" >
                        <div @click="toBannerJump(item.isExternalLink,item.contentId,item.jumpLink,item.organizationId)">
                            <div class="m_coverBg">
                                <div class="m_bannerText">
                                    <h2 class="wto">{{item.bannerTitle!=''&&item.bannerTitle!=null?item.bannerTitle:item.contentTitle}}</h2>
                                </div>
                            </div>
                            <img class="m_bannerImg" :src="item.imgurl">
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="m_sciBg">
                <div class="m_sciNews">
                    <h3 class="m_h3">科研动态</h3>
                    <span class="m_h3BLine"></span>
                    <div class="m_sciBox">
                        <div class="m_sciLf">
                            <div class="m_sciLfItem" v-for="(item,index) in sciNewsData.slice(0,newsShowNum)" :key="index" @click="toNewsDetail(item.id,item.organizationId)">
                                <img :src="'http://sensing.zwin.work/'+item.mainImage">
                                <h4 style="-webkit-box-orient: vertical;">{{item.contentTitle}}</h4>
                                <p class="plain" style="-webkit-box-orient: vertical;">{{item.plainText}}</p>
                                <p>{{item.publishTime}}</p>
                            </div>
                        </div>
                        <div class="m_sciRg">
                            <h3 class="m_h3">科研成果</h3>
                            <span class="m_h3BLine"></span>
                            <div class="swiper-container m_achiContainer">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide m_sciRgItem" v-for="(item,index) in achieve" :key="index" @click="toScienceDetail(item.id,item.organizationId)">    
                                        <h4>{{item.contentTitle}}</h4>
                                        <p>{{item.publishTime}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m_hM-lf">
                <h3 class="m_h3">学术交流</h3>
                <span class="m_h3BLine"></span>
                <div class="hmLf_box">
                    <div class="swiper-container m_comContainer">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide m_hmLf_item" v-for="(item,index) in sciCommunit" :key="index" @click="toNewsDetail(item.id,item.organizationId)">    
                                <h4 style="-webkit-box-orient: vertical;">{{item.contentTitle}}</h4>
                                <p class="date" style="-webkit-box-orient: vertical;">{{item.publishTime}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m_hM-rg">
                <h3 class="m_h3">人才招聘</h3>
                <span class="m_h3BLine"></span>
                <div class="hmRg_box">
                    <div class="swiper-container m_jobContainer">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide m_hmRg_item" v-for="(item,index) in recruitData" :key="index" @click="toRecruitDetail(item.id,item.organizationId)">    
                                <h4>{{item.contentTitle}}</h4>
                                <span>岗位介绍：</span>
                                <p style="-webkit-box-orient: vertical;">{{item.plainText}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m_teamBg">
                <div class="container">
                    <div class="m_teamTit">
                        <h3 class="m_h3">科研团队</h3>
                        <span class="m_h3BLine"></span>
                    </div>
                    <div class="m_teamSwiper">
                        <div class="swiper-container m_teamContainer">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide m_teamItem" v-for="(item,index) in teamData" :key="index" @click="toTeamDetail(item.id,item.organizationId)">    
                                    <img :src="'http://sensing.zwin.work/'+item.mainImage">              
                                    <h4 class="wto">{{item.contentTitle}}</h4>
                                    <p style="-webkit-box-orient: vertical;">{{item.plainText}}</p>
                                    <div class="tc">
                                        <span class="arrow">
                                            <img src="../../images/arrow.png">
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="m_lfArrow"><img src="../../images/lfArrow.png"></div>
                            <div class="m_rgArrow"><img src="../../images/rgArrow.png"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    import Swiper from 'swiper';
    import {indexContent,banner} from '../../service/api'
    import {mapState} from 'vuex'
    import {getStore} from '../../config/mUtils'

    export default {
        name: 'home',
        data(){
            return{
                cn:0,
                isPc:1,
                newsShowNum:6,
                bannerHeight:'613px',
                bannerInfo:[],
                sciNewsData:[],
                sciCommunit:[],
                teamData:[],
                recruitData:[],
                achieve:[]
            }
        },
        components:{
            headTop
        },
        mounted(){
            this.cn = getStore("inCN");
            this.isPc = getStore("isPc");
            // 获取首页产品
            this.initData();
            if(document.body.clientWidth<=1024){
                this.bannerHeight = '218px';
                this.newsShowNum = 3;
            }
        },
        computed: {
           ...mapState([
               'host','inCN'
           ])
        },
        methods:{
            async initData(){
                var res = await banner(1,this.cn,this.isPc);
                this.bannerInfo = res.data;
                var res2 = await indexContent(this.cn,1,this.isPc);
                this.sciNewsData = res2.data.science;
                this.sciCommunit = res2.data.learning;
                this.recruitData = res2.data.recruit;
                this.teamData = res2.data.team;
                this.achieve = res2.data.achievement;
                setTimeout(function(){
                    new Swiper ('.m_achiContainer', {
                        autoplay: {
                            delay: 0,//时间 毫秒
                            disableOnInteraction: false,//用户操作之后是否停止自动轮播
                        },
                        loop: true,
                        speed:4000,
                        direction:'vertical',
                        slidesPerView : 4,
                        spaceBetween : 0,
                        slidesPerGroup : 1  
                    })

                    new Swiper ('.m_teamContainer', {
                        autoplay: {
                            delay: 3000,//时间 毫秒
                            disableOnInteraction: false,//用户操作之后是否停止自动轮播
                        },
                        loop: true,
                        navigation: {
                            nextEl: '.m_rgArrow',
                            prevEl: '.m_lfArrow',
                        },
                        speed:1000,
                        slidesPerView : 3,
                        spaceBetween : 10,
                        slidesPerGroup : 1  
                    })

                    new Swiper ('.m_comContainer', {
                        autoplay: {
                            delay: 0,//时间 毫秒
                            disableOnInteraction: false,//用户操作之后是否停止自动轮播
                        },
                        loop: true,
                        direction:'vertical',
                        speed:4000,
                        slidesPerView : 4,
                        slidesPerGroup : 1
                    })

                    new Swiper ('.m_jobContainer', {
                        autoplay: {
                            delay: 0,//时间 毫秒
                            disableOnInteraction: false,//用户操作之后是否停止自动轮播
                        },
                        loop: true,
                        direction:'vertical',
                        speed:6000,
                        slidesPerView : 2,
                        slidesPerGroup : 1
                    })
                },1000)
            },
            toScienceDetail(id,organizationId){
                this.$router.push({path:'/science/detail',query:{id:id,organizationId:organizationId}});
            },
            toNewsDetail(id,organizationId){
                this.$router.push({path:'/news/detail',query:{id:id,organizationId:organizationId}});
            },
            toTeamDetail(id,organizationId){
                this.$router.push({path:'/team/detail',query:{id:id,organizationId:organizationId}});
            },
            toRecruitDetail(id,organizationId){
                this.$router.push({path:'/recruit/detail',query:{id:id,organizationId:organizationId}});
            },
            toBannerJump(isExternalLink,contentId,jumpLink,organizationId){
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
                    this.$router.push({path:'/home/bannerdetail',query:{id:contentId,organizationId:organizationId}});
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
    @import '../../style/swiper.min.css';
   .m_banner{
        height:218px;
        margin-top:px2rem(180);
        position: relative;
   }
   .m_bannerImg{
       height:218px;
       width:100%;
       object-fit: cover;
   }
   
   .m_coverBg{
       background-color:rgba(21,43,89,.75);
       position: absolute;
       bottom:0;
        left:0;
        width:100%;
        height:26px;
        padding:0;
       z-index:10;
   }
   .m_bannerText{
       color:#fff;
       width:pxrem(720);
       padding-left:px2rem(40);
   }
   .m_bannerText h2{
       margin:0;
       font-size:px2rem(14);
       line-height:26px;
       font-weight: bold;
   }
   .m_bannerText p,.m_bannerText a{
        display: none;
    }
    .m_banner .el-carousel__indicators.el-carousel__indicators--horizontal{
        right:0;
        left:initial;
    }
    .m_banner .el-carousel__indicators--horizontal li{
        float:right;
    }
    .m_banner .el-carousel__indicator--horizontal{
        padding:0 6px 8px 0;
    }
    .m_banner .el-carousel__button{
        width:10px;
        height: 10px;
        border-radius: 30px;
    }

   /* 科研动态 */
   .m_sciBg{
       background-color:#f7f7f7;
   }
   .m_sciNews{
       width:100%;
    padding:px2rem(20) 0;
       margin:0 auto;
   }
  .m_h3{
       font-size:px2rem(32);
        padding:0 px2rem(40);
        height:px2rem(22);
       font-weight: bold;
       color:#152b59;
   }
   .m_h3BLine{
       margin-left:px2rem(40);
        width:px2rem(80);
        height: px2rem(4);
        display: inline-block;
       background-color: #152b59;
   }
   .m_sciBox{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       margin-top:0;
   }
   .m_sciRg{
       width:100%;
        height:auto;
        margin:0 px2rem(40);
        padding:px2rem(20) px2rem(40);
       background-image: linear-gradient(to bottom right, #b12b6e, #77164d);
   }
   .m_sciRg .m_h3{
       padding:0;
        margin:0;
       color:#fff;
   }
   .m_sciRg .m_h3BLine{
       background-color: #fff;
       margin:0;
   }
   .m_sciRgItem{
       color:#fff;
       font-size:px2rem(24);
        margin-top:px2rem(0);
   }
   .m_sciRgItem h4{
        overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
       line-height: px2rem(40);
        font-weight: normal;
        line-height: 22px;
        font-size:px2rem(26);
   }
   
   .m_sciRgItem p{
       color:#de97c5;
       border-bottom:1px solid #c34696;
       font-size:px2rem(24);
        padding:px2rem(4) 0 px2rem(4);
        margin-bottom:px2rem(8);
   }
   .m_sciLf{
       width:100%;
        height: px2rem(440);
        padding:0 px2rem(40);
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       align-content: space-between;
   }
   .m_sciLfItem{
       width:px2rem(215);
        height:px2rem(400);
       background-color: #fff;
   }
   .m_sciLfItem img{
       width:px2rem(215);
        height:px2rem(136);
       object-fit: cover;
   }
   .m_sciLfItem h4{
      font-size: px2rem(26);
        overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
        font-weight: normal;
        margin: 0;
        padding:0 px2rem(12);
        line-height: px2rem(38);
        color:#152b59;
        height:px2rem(76);
   }
   .m_sciLfItem .plain{
       overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
        font-weight: normal;
        line-height: px2rem(36);
        height:px2rem(110);
   }
   .m_sciLfItem p{
       color:#152b59;
       font-size: px2rem(24);
        padding:px2rem(4) px2rem(12);
   }

    /* 中心介绍 */
    .m_comContainer,.m_jobContainer,.m_achiContainer{
        height:px2rem(600);
        overflow: hidden !important;
    }
    /* 科研团队 */
    .m_teamBg{
        background-color:#f7f7f7;
        padding:px2rem(20) 0 0 0;
    }
    .m_teamTit .m_h3BLine{
        margin:0;
    }
    .m_teamTit{
        text-align: center;
        margin-bottom:px2rem(8);
    }
    .m_teamContainer{
        padding:0 px2rem(40);
    }
    .m_teamItem{
       width:px2rem(247);
        height:px2rem(320);
       background-color: #fff;
   }
   .m_teamItem img{
        width:px2rem(213);
        height:px2rem(140);
       object-fit: cover;
   }
   .m_teamItem h4{
       font-size: px2rem(28);
       font-weight: normal;
       color:#333;
       padding:0 px2rem(20);
       line-height: px2rem(40);
       color:#152b59;
   }
    .m_teamItem p{
        font-size: px2rem(24);
        overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
        color:#152b59;
        padding:0 px2rem(20);
        margin:px2rem(12) 0 px2rem(16) 0;
        height:auto;
        line-height: px2rem(34);
    }
    .m_teamItem .arrow{
       width:px2rem(34);
       height: px2rem(34);
       background-color: #152b59;
       border-radius: px2rem(60) px2rem(60) 0 0;
       display: inline-block;
       text-align: center;
      
    }
    .m_teamItem .arrow img{
       width:px2rem(28);
       height: px2rem(28);
       
    }
    .m_teamSwiper{
        width:px2rem(750);
        height: px2rem(320);
        position:relative;
        overflow: hidden;
        margin:0 0 px2rem(30) 0;
    }
    .swiper-container{
        overflow: visible;
    }
    .m_lfArrow{
        width:px2rem(80);
        height: px2rem(50);
        border:px2rem(2) solid #d0d0d0;
        position:absolute;
        bottom:px2rem(-90);
        left:px2rem(920);
        z-index:100;
    }
    .m_lfArrow img{
        width:px2rem(46);
        height: px2rem(46);
        padding:px2rem(4) 0 0 px2rem(20);
    }
    .m_rgArrow{
        width:px2rem(80);
        height: px2rem(50);
        border:px2rem(2) solid #d0d0d0;
        position:absolute;
        bottom:px2rem(-90);
        left:px2rem(1044);
        z-index:100;
    }
    .m_rgArrow img{
        width:px2rem(46);
        height: px2rem(46);
        padding:px2rem(4) 0 0 px2rem(12);
    }
    .m_rgArrow:hover,.m_lfArrow:hover{
        cursor:pointer;
        background-color: rgba(21,43,89,.1);
    }

    .m_hM-lf{
       width:auto;
       height: auto;
        margin:0 px2rem(40);
        padding:px2rem(20) px2rem(40);
        background-image: linear-gradient(to bottom right, #1f768a, #0e5363);
       color:#fff;
       overflow: hidden;
   }
   .m_hM-lf .m_h3{
       color:#fff;
       padding:0;
        margin:0;
   }
   .m_hM-lf .m_h3BLine{
       background-color: #fff;
       margin:0;
   }
   .m_hmLf_item{
       border-bottom:1px solid #3c8191;
       font-size:px2rem(24);
    margin-top:px2rem(0);
   }
   .m_hmLf_item h4{
       overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
        font-weight: bold;
       line-height: px2rem(40);
        font-weight: normal;
        line-height: 22px;
        font-size:px2rem(26);
        padding-top:px2rem(10);
   }
   .m_hmLf_item p{
       color:#96a3bb;
       font-size:px2rem(24);
        padding:px2rem(4) 0 px2rem(4);
        margin-bottom:px2rem(8);
        font-size:px2rem(24);
   }
   .m_hM-rg{
       width:auto;
       height: auto;
       margin:0 px2rem(40);
        padding:px2rem(20) px2rem(40);
       background-image: linear-gradient(to bottom right, #1f768a, #0e5363);
       color:#fff;
       overflow: hidden;
       margin-top:px2rem(30);
   }
   .m_hM-rg .m_h3{
      padding:0;
        margin:0;
       color:#fff;
   }
   .m_hM-rg .m_h3BLine{
       background-color: #fff;
       margin:0;
   }
   .m_hmRg_item{
       border-bottom:1px solid #3c8191;
       font-size:px2rem(24);
        margin-top:px2rem(0);
   }
   .m_hmRg_item h4{
       font-size:px2rem(28);
       font-weight: bold;
       text-align: center;
       margin-top:px2rem(30);
   }
   .m_hmRg_item span{
       font-size:px2rem(14);
   }
   .m_hmRg_item p{
        color:#fff;
        line-height: px2rem(40);
        font-weight: normal;
        line-height: 22px;
        padding:px2rem(4) 0 px2rem(4);
        margin-bottom:px2rem(8);
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
   }
</style>
