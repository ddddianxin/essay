<template>
    <div class="bg">
        <head-top webActive="home" webChildActive=""></head-top>
        <div id="home">
            <div class="banner">
                 <el-carousel class="bannerBox" indicator-position="" :interval="4500" :height='bannerHeight'>
                    <el-carousel-item v-for="(item,index) in bannerInfo" :key="index">
                        <div class="coverBg" @click="toBannerJump(item.isExternalLink,item.contentId,item.jumpLink,item.organizationId)">
                            <div class="bannerText" style="-webkit-box-orient: vertical;">
                                <h2 class="wto">{{item.bannerTitle!=''&&item.bannerTitle!=null?item.bannerTitle:item.contentTitle}}</h2>
                                <!-- <p>{{item.jumpLink}}</p> -->
                                <!-- <p>{{item.content}}</p> -->
                                <!-- <span v-show="item.isExternalLink!=0"  @click="toBannerJump(item.isExternalLink,item.contentId,item.jumpLink)">查看更多</span> -->
                            </div>
                        </div>
                        <img :src="item.imgurl">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="sciBg">
                <div class="sciNews">
                    <h3>科研动态</h3>
                    <span class="h3BLine"></span>
                    <div class="sciBox" >
                        <div class="sciLf">
                            <div class="sciLfItem" v-for="(item,index) in sciNewsData" :key="index" @click="toNewsDetail(item.id,item.organizationId)">
                                <img :src="'http://sensing.zwin.work/'+item.mainImage">
                                <h4 style="-webkit-box-orient: vertical;">{{item.contentTitle}}</h4>
                                <p class="plain" style="-webkit-box-orient: vertical;">{{item.plainText}}</p>
                                <p class="date">{{item.publishTime}}</p>
                                <div class="tc">
                                    <span class="arrow">
                                        <img src="../../images/arrow.png">
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="sciRg">
                            <h3>科研成果</h3>
                            <span class="h3BLine"></span>
                            <div class="swiper-container achiContainer">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide sciRgItem" v-for="(item,index) in achieve" :key="index" @click="toScienceDetail(item.id,item.organizationId)">
                                        <h4 style="-webkit-box-orient: vertical;">{{item.contentTitle}}</h4>
                                        <p>{{item.publishTime}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="homeMid">
                <div class="hM-lf">
                    <h3>学术交流</h3>
                    <span class="h3BLine"></span>
                    <div class="hmLf_box">
                        <div class="swiper-container comContainer">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide hmLf_item" v-for="(item,index) in sciCommunit" :key="index" @click="toNewsDetail(item.id,item.organizationId)">    
                                    <h4 style="-webkit-box-orient: vertical;">{{item.contentTitle}}</h4>
                                    <p class="date">{{item.publishTime}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hM-rg">
                    <h3>人才招聘</h3>
                    <span class="h3BLine"></span>
                    <div class="hmRg_box">
                        <div class="swiper-container jobContainer">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide hmRg_item" v-for="(item,index) in recruitData" :key="index" @click="toRecruitDetail(item.id,item.organizationId)">    
                                    <h4 class="wto">{{item.contentTitle}}</h4>
                                    <span>岗位介绍：</span>
                                    <p style="-webkit-box-orient: vertical;">{{item.plainText}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="teamBg">
                <div class="container">
                    <div class="teamTit">
                        <h3>科研团队</h3>
                        <span class="h3BLine"></span>
                    </div>
                    <div class="teamSwiper">
                        <div class="swiper-container teamContainer">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide teamItem" v-for="(item,index) in teamData" :key="index" @click="toTeamDetail(item.id,item.organizationId)">    
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
                            <div class="lfArrow"><img src="../../images/lfArrow.png"></div>
                            <div class="rgArrow"><img src="../../images/rgArrow.png"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
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
                achieve:[],
                sciCommunit:[],
                teamData:[],
                recruitData:[]
            }
        },
        components:{
            headTop
        },
        mounted(){
            this.cn = getStore("inCN");
            this.isPc = getStore("isPc");
            this.initData();
            if(document.body.clientWidth<=1024){
                this.newsShowNum = 3;
                this.teamShowNum = 4;
            }
        },
        computed:{
            ...mapState([
               'host','inCN'
           ])
        },
        methods:{
            async initData(){
                var res = await banner(1,this.cn,this.isPc);
                this.bannerInfo = res.data;
                var res2 = await indexContent(this.cn,1,this.isPc);
                this.sciNewsData = res2.data.science.slice(0,6);
                this.sciCommunit = res2.data.learning;
                this.recruitData = res2.data.recruit;
                this.teamData = res2.data.team;
                this.achieve = res2.data.achievement;
                
                setTimeout(function(){
                    new Swiper ('.achiContainer', {
                        autoplay: {
                            delay: 1000,//时间 毫秒
                            disableOnInteraction: false,//用户操作之后是否停止自动轮播
                        },
                        loop: true,
                        navigation: {
                            nextEl: '.rgArrow',
                            prevEl: '.lfArrow',
                        },
                        speed:4000,
                        direction:'vertical',
                        slidesPerView : 6,
                        spaceBetween : 0,
                        slidesPerGroup : 1  
                    })


                    new Swiper ('.teamContainer', {
                        autoplay: {
                            delay: 1000,//时间 毫秒
                            disableOnInteraction: false,//用户操作之后是否停止自动轮播
                        },
                        loop: true,
                        navigation: {
                            nextEl: '.rgArrow',
                            prevEl: '.lfArrow',
                        },
                        speed:1000,
                        slidesPerView : 4,
                        spaceBetween : 20,
                        slidesPerGroup : 1  
                    })

                    new Swiper ('.comContainer', {
                        autoplay: {
                            delay: 0,//时间 毫秒
                            disableOnInteraction: false,//用户操作之后是否停止自动轮播
                        },
                        loop: true,
                        direction:'vertical',
                        speed:4000,
                        slidesPerView : 7,
                        slidesPerGroup : 1
                    })

                    new Swiper ('.jobContainer', {
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
            toNewsDetail(id,organizationId){
                this.$router.push({path:'/news/detail',query:{id:id,organizationId:organizationId}});
            },
            toTeamDetail(id,organizationId){
                this.$router.push({path:'/team/detail',query:{id:id,organizationId:organizationId}});
            },
            toScienceDetail(id,organizationId){
                this.$router.push({path:'/science/detail',query:{id:id,organizationId:organizationId}});
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
   .banner{
       height: 613px;
       position: relative;
   }
   .banner img{
       height: 613px;
       width:100%;
       object-fit: cover;
   }
   
   .coverBg{
       background-color:rgba(21,43,89,.75);
       position: absolute;
       top:0;
       left: 0;
       z-index:10;
       height: 613px;
       width:40%;  
       padding:45px;
   }
   .bannerText{
       color:#fff;
       width:360px;
       float: right;
   }
   .bannerText h2{
       margin-top:130px;
       font-size: 30px;
       font-weight: bold;
       margin-bottom: 20px;
       line-height: 40px;
   }
   .bannerText p{
        overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 7;
-webkit-box-orient: vertical;
        font-size:13px;
   }
   .bannerText a{
       border:2px solid #fff;
       width:120px;
       height: 30px;
       line-height: 30px;
       text-align: center;
       display: block;
       margin-top:20px;
   }
   .el-carousel__indicators.el-carousel__indicators--horizontal{
        left:40%;
        bottom:30px;
        
    }
    .el-carousel__indicators--horizontal li{
        float:right;
    }
    .el-carousel__indicator--horizontal{
        padding:0 6px 8px 0;
    }
    .el-carousel__button{
        width:10px;
        height: 10px;
        border-radius: 30px;
    }

   /* 科研动态 */
   .sciBg{
       background-color:#f7f7f7;
   }
   .sciNews{
       width:1024px;
       margin:0 auto;
       padding:30px 0;
   }
   h3{
       font-size: 25px;
       font-weight: bold;
       color:#152b59;
       padding:5px 0 8px;
   }
   .h3BLine{
       width:70px;
       height: 3px;
       background-color: #152b59;
       display: inline-block;
   }
   .sciBox{
       display: flex;
       flex-wrap: nowrap;
       justify-content: space-between;
       margin-top:10px;
   }
   .sciRg{
       width:200px;
       height: 590px;
       padding:20px;
       background-image: linear-gradient(to bottom right, #b12b6e, #77164d);
   }
   .sciRg h3{
       margin-top:15px;
       color:#fff;
   }
   .sciRg .h3BLine{
       background-color: #fff;
       
   }
   .sciRgItem{
       color:#fff;
       margin-top:15px;
   }
   .sciRgItem h4{
        overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
        font-weight: bold;
        font-size: 13px;
        line-height: 22px;
   }
   .sciRgItem h4:hover{
       cursor:pointer;
       text-decoration: underline;
   }
   .sciRgItem p{
       color:#de97c5;
       font-size:12px;
       border-bottom:1px solid #c34696;
       padding:5px 0 13px;
       margin-bottom:13px;
   }
   .sciLf{
       width:764px;
       height: 630px;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       align-content: space-between;
   }
   .sciLfItem{
       width:240px;
       height: 306px;
       background-color: #fff;
   }
   .sciLfItem:hover{
       box-shadow:0 0 3px 3px #eee;
       cursor:pointer;
   }
   .sciLfItem img{
       width:240px;
       height: 140px;
       object-fit: cover;
   }
   .sciLfItem h4{
       font-size: 13px;
        overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
        font-weight: bold;
        color:#152b59;
        padding:0 20px;
        margin:5px 0 0 0;
        height:44px;
        line-height: 22px;
   }
   .sciLfItem .plain{
       color:#152b59;
       font-size: 10px;
       padding:0 20px;
       overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
        height:48px;
   }
   .sciLfItem .date{
       color:#152b59;
       font-size: 10px;
       padding:0 20px 5px 20px;

   }
   .sciLf .arrow{
       width:30px;
       height: 32px;
       background-color: #152b59;
       border-radius: 30px 30px 0 0;
       display: inline-block;
       text-align: center;
   }
   .sciLf .arrow img{
       width:20px;
       height: 20px;
       padding-top:6px;
       
   }
    /* 中心介绍 */
    .achiContainer{
        height:510px;
        overflow: hidden !important;
    }
    .comContainer,.jobContainer{
        height:400px;
        overflow: hidden !important;
    }
    .centerBg{
        background-color: #f0edf1;
        height: 516px;
        padding:15px 0;
    }
    .centerIntro{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .ctIntro{
        width:426px;
        height: 473px;
        padding-top:40px;
        position: relative;
    }
    .ctText{
        padding-top:20px;
    }
    .ctText p{
        font-size:13px;
        text-indent: 2em;
        color:#333;
    }
    .ctText a{
        width:120px;
        height: 30px;
        line-height: 30px;
        color:#152b59;
        border:2px solid #152b59;
        display: block;
        text-align: center;
        font-size:13px;
        position: absolute;
        bottom:36px;
        right: 0;
    }
    /* 科研团队 */
    .teamBg{
        background-color:#f7f7f7;
        padding:35px 0 0 0;
    }
    .teamTit{
        text-align: center;
        margin-bottom:15px;
    }
    .teamItem{
       width:240px;
       height: 306px;
       background-color: #fff;
   }
   .teamItem:hover{
       box-shadow:0 0 3px 3px #eee;
       cursor:pointer;
   }
   .teamItem img{
       width:240px;
       height: 140px;
       object-fit: cover;
   }
   .teamItem h4{
       font-size: 15px;
       font-weight: bold;
       color:#152b59;
       padding:5px 20px 0 20px;
   }
    .teamItem p{
        font-size: 12px;
        overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
        color:#152b59;
        padding:0 20px;
        margin-bottom:10px;
        height:88px;
        line-height: 22px;
    }
    .teamItem .arrow{
       width:30px;
       height: 32px;
       background-color: #152b59;
       border-radius: 30px 30px 0 0;
       display: inline-block;
       text-align: center;
    }
    .teamItem .arrow img{
       width:20px;
       height: 20px;
       padding-top:6px;
    }
    .teamSwiper{
        width:1024px;
        height: 376px;
        position:relative;
        overflow: hidden;
    }
    .swiper-container{
        overflow: visible;
    }
    .lfArrow{
        width:40px;
        height: 25px;
        border:1px solid #d0d0d0;
        position:absolute;
        bottom:-45px;
        left:460px;
        z-index:100;
    }
    .lfArrow img{
        width:23px;
        height: 23px;
        padding:2px 0 0 10px;
    }
    .rgArrow{
        width:40px;
        height: 25px;
        border:1px solid #d0d0d0;
        position:absolute;
        bottom:-45px;
        left:522px;
        z-index:100;
    }
    .rgArrow img{
        width:23px;
        height: 23px;
        padding:2px 0 0 6px;
    }
    .rgArrow:hover,.lfArrow:hover{
        cursor:pointer;
        background-color: rgba(21,43,89,.1);
    }
    /* 人才招聘 */
    .recruitBg{
        background-color:#f7f7f7;
        padding:35px 0 60px 0;
    }
    .recruitTit{
        text-align: center;
        margin-bottom:15px;
    }
    .recruitBox{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .recItem{
        background-color:#fff;
        width:254px;
        height: 258px;
        padding:0 35px;
    }
    .recItem h4{
        font-size:20px;
        color:#152b59;
        font-weight: bold;
        padding:30px 0 15px 0;
    }
    .recItem h5{
        font-size:16px;
        color:#333;
        font-weight: bold;
        line-height: 32px;
    }
    .recItem p{
        font-size: 12px;
        overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
        color:#333;
        margin-bottom:10px;
        height:115px;
        line-height: 23px;
    }
    .recItem .arrow{
       width:30px;
       height: 32px;
       background-color: #152b59;
       border-radius: 30px 30px 0 0;
       display: inline-block;
       text-align: center;
   }
   .recItem .arrow img{
       width:20px;
       height: 20px;
       padding-top:6px;  
   }
   .homeMid{
       width:1024px;
       margin:0 auto;
       display:flex;
       flex-wrap: nowrap;
       justify-content: space-between;
   }
   .hM-lf{
       width:460px;
       height: 480px;
       padding:10px 20px;
       background-image: linear-gradient(to bottom right, #1f768a, #0e5363);
       color:#fff;
       overflow: hidden;
   }
   .hM-lf h3{
       margin-top:15px;
       color:#fff;
   }
   .hM-lf .h3BLine{
       background-color: #fff;
   }
   .hmLf_item{
        border-bottom:1px solid #3c8191;
        padding:10px 0;
   }
   .hmLf_item h4{
       font-size:13px;
       overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
        font-weight: bold;
        height: 24px;
   }
   .hmLf_item h4:hover{
       cursor:pointer;
       text-decoration: underline;
   }
   .hmLf_item .plain{
       color:#96a3bb;
       font-size:12px;
       margin-top:5px;
       overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
   }
   .hmLf_item .date{
       color:#8db7c0;
       font-size:12px;
       margin-top:5px;
   }


   .hM-rg{
       width:460px;
       height: 480px;
       padding:10px 20px;
       background-image: linear-gradient(to bottom right, #1f768a, #0e5363);
       color:#fff;
       overflow: hidden;
   }
   .hM-rg h3{
       margin-top:15px;
       color:#fff;
   }
   .hM-rg .h3BLine{
       background-color: #fff;
   }
   .hmRg_item{
       border-bottom:1px solid #3c8191;
       padding:10px 0;
   }
   .hmRg_item h4{
       font-size:18px;
       font-weight: bold;
       text-align: center;
   }
   .hmRg_item h4:hover{
       cursor:pointer;
       text-decoration: underline;
   }
   .hmRg_item span{
       font-size:14px;

   }
   .hmRg_item p{
       color:#fff;
       font-size:12px;
       margin-top:5px;
       overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
   }

</style>
