<template>
    <div class="bg">
        <head-top webActive="home"></head-top>
        <div id="home">
            <div class="banner">
                 <el-carousel class="bannerBox" indicator-position="" :interval="4500" :height='bannerHeight'>
                    <el-carousel-item v-for="(item,index) in bannerInfo" :key="index" >
                        <div class="coverBg">
                            <div class="bannerText">
                                <h2 class="wto">{{item.contentTitle}}</h2>
                            </div>
                        </div>
                        <img :src="host+item.imgUrl">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="sciBg">
                <div class="sciNews">
                    <h3>科研动态</h3>
                    <span class="h3BLine"></span>
                    <div class="sciBox">
                        <div class="sciLf">
                            <div class="sciLfItem" v-for="(item,index) in sciNewsData.slice(0,newsShowNum)" :key="index">
                                <img :src="host+item.mainImage">
                                <h4>{{item.contentTitle}}</h4>
                                <p>{{item.createTime.slice(0,10)}}</p>
                            </div>
                        </div>
                        <div class="sciRg">
                            <h3>科研成果</h3>
                            <span class="h3BLine"></span>
                            <div class="sciRgItem" v-for="(item,index) in sciCommunit" :key="index">
                                <h4>{{item.contentTitle}}</h4>
                                <p>{{item.createTime}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hM-lf">
                <h3>学术交流</h3>
                <span class="h3BLine"></span>
                <div class="hmLf_box">
                    <div class="hmLf_item" v-for="(item,index) in sciCommunit.slice(0,4)" :key="index">
                        <h4>{{item.contentTitle}}</h4>
                        <p>{{item.createTime}}</p>
                    </div>
                </div>
            </div>
            <div class="hM-rg">
                <h3>人才招聘</h3>
                <span class="h3BLine"></span>
                <div class="hmRg_box">
                    <div class="hmRg_item" v-for="(item,index) in recruitData.slice(0,2)" :key="index">
                        <h4>{{item.contentTitle}}</h4>
                        <span>岗位介绍：</span>
                        <p>{{item.plainText}}</p>
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
                                <div class="swiper-slide teamItem" v-for="(item,index) in teamData" :key="index">    
                                    <img :src="host+item.mainImage">              
                                    <h4 class="wto">{{item.contentTitle}}</h4>
                                    <p>{{item.plainText}}</p>
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
                bannerInfo:[
                    {
                        img:require('../../images/banner2.png'),
                        title:'一个研究相关标题',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner3.png'),
                        title:'一个研究相关标题',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    }
                ],
                sciNewsData:[
                    {
                        mainImage:require('../../images/banner2.png'),
                        contentTitle:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        createTime:'2020年6月1日'
                    }
                ],
                sciCommunit:[
                    {
                        contentTitle:'COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望,COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望,COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望',
                        createTime:'2020年6月15日，星期一',
                        url:''
                    }
                ],
                teamData:[
                    {
                        mainImage:require('../../images/banner2.png'),
                        contentTitle:'某某姓名',
                        plainText:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    }
                    
                ],
                recruitData:[
                    {
                        contentTitle:'访问学者',
                        plainText:'能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文,能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文',
                        url:''
                    }
                ]
                
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
            new Swiper ('.swiper-container', {
                loop: true,
                speed:1000,
                slidesPerView : 3,
                spaceBetween : 10,
                slidesPerGroup : 1,
                navigation: {
                    nextEl: '.rgArrow',
                    prevEl: '.lfArrow',
                },
                autoplay: {
                        delay: 3000,//时间 毫秒
                        disableOnInteraction: false,//用户操作之后是否停止自动轮播
                }
            })
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
                console.log(res.data);
                var res2 = await indexContent(this.cn,1,this.isPc);
                for(var i in res2.data){
                    if(res2.data[i].menuId == 13){
                        //科研动态
                        this.sciNewsData = res2.data[i].list;
                    }
                    if(res2.data[i].menuId == 14){
                        //学术交流
                        this.sciCommunit = res2.data[i].list;
                    }
                    if(res2.data[i].menuId == 11){
                        //人才招聘
                        this.recruitData = res2.data[i].list;
                    }
                    if(res2.data[i].menuId == 8){
                        //科研队伍
                        this.teamData = res2.data[i].list;
                    }
                    
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
        height:218px;
        margin-top:px2rem(180);
        position: relative;
   }
   .banner img{
       height:218px;
       width:100%;
       object-fit: cover;
   }
   
   .coverBg{
       background-color:rgba(21,43,89,.75);
       position: absolute;
       bottom:0;
        left:0;
        width:100%;
        height:26px;
        padding:0;
       z-index:10;
   }
   .bannerText{
       color:#fff;
       width:pxrem(720);
       padding-left:px2rem(40);
   }
   .bannerText h2{
       margin:0;
       font-size:px2rem(14);
       line-height:26px;
       font-weight: bold;
   }
   .bannerText p,.bannerText a{
        display: none;
    }
    .el-carousel__indicators.el-carousel__indicators--horizontal{
        right:0;
        left:initial;
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
       width:100%;
    padding:px2rem(20) 0;
       margin:0 auto;
   }
   h3{
       font-size:px2rem(32);
        padding:0 px2rem(40);
        height:px2rem(22);
       font-weight: bold;
       color:#152b59;
   }
   .h3BLine{
       margin-left:px2rem(40);
        width:px2rem(80);
        height: px2rem(4);
        display: inline-block;
       background-color: #152b59;
   }
   .sciBox{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       margin-top:0;
   }
   .sciRg{
       width:100%;
        height:auto;
        margin:0 px2rem(40);
        padding:px2rem(20) px2rem(40);
       background-image: linear-gradient( #a5177f, #e02d81);
   }
   .sciRg h3{
       padding:0;
        margin:0;
       color:#fff;
   }
   .sciRg .h3BLine{
       background-color: #fff;
       margin:0;
   }
   .sciRgItem{
       color:#fff;
       font-size:px2rem(24);
        margin-top:px2rem(0);
   }
   .sciRgItem h4{
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
       line-height: px2rem(40);
        font-weight: normal;
        line-height: 22px;
        font-size:px2rem(26);
   }
   
   .sciRgItem p{
       color:#de97c5;
       border-bottom:1px solid #c34696;
       font-size:px2rem(24);
        padding:px2rem(4) 0 px2rem(4);
        margin-bottom:px2rem(8);
   }
   .sciLf{
       width:100%;
        height: px2rem(440);
        padding:0 px2rem(40);
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       align-content: space-between;
   }
   .sciLfItem{
       width:px2rem(215);
        height:px2rem(400);
       background-color: #fff;
   }
   .sciLfItem img{
       width:px2rem(215);
        height:px2rem(136);
       object-fit: cover;
   }
   .sciLfItem h4{
      font-size: px2rem(26);
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        font-weight: normal;
        margin: 0;
        padding:0 px2rem(12);
        line-height: px2rem(38);
        color:#333;
        height:px2rem(190);
   }
   .sciLfItem p{
       color:#666;
       font-size: px2rem(24);
        padding:px2rem(4) px2rem(12);
   }

    /* 中心介绍 */
    .centerBg{
        background-color: #f0edf1;
        padding:px2rem(20) px2rem(40);
        height:px2rem(352);
    }
    .centerIntro{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .centerIntro img{
        width:px2rem(352);
        height:px2rem(352);
    }
    .ctIntro{
        width:50%;
        height:px2rem(352);
        padding:0 0 0 px2rem(40);
        position: relative;
    }
    .ctIntro h3{
        padding:0;
    }
    .ctIntro .h3BLine{
        margin:0;
    }
    .ctText{
        padding:0;
        height:px2rem(190);
        overflow: hidden;
    }
    .ctText p{
        font-size:px2rem(24);
        line-height: px2rem(40);
        text-indent: 2em;
        color:#333;
    }
    .ctText a{
        color:#152b59;
        display: block;
        text-align: center;
        position: absolute;
        right: 0;
        width:px2rem(180);
        height: px2rem(40);
        line-height: px2rem(40);
        font-size:px2rem(24);
        bottom: 0;
        border:1px solid #152b59;
    }
    /* 科研团队 */
    .teamBg{
        background-color:#f7f7f7;
        padding:px2rem(20) 0 0 0;
    }
    .teamTit .h3BLine{
        margin:0;
    }
    .teamTit{
        text-align: center;
        margin-bottom:px2rem(8);
    }
    .teamContainer{
        padding:0 px2rem(40);
    }
    .teamItem{
       width:px2rem(247);
        height:px2rem(320);
       background-color: #fff;
   }
   .teamItem img{
        width:px2rem(213);
        height:px2rem(140);
       object-fit: cover;
   }
   .teamItem h4{
       font-size: px2rem(28);
       font-weight: normal;
       color:#333;
       padding:0 px2rem(20);
       line-height: px2rem(40);
       color:#152b59;
   }
    .teamItem p{
        font-size: px2rem(24);
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        color:#333;
        padding:0 px2rem(20);
        margin:px2rem(10) 0;
        height:auto;
        line-height: px2rem(34);
    }
    .teamItem .arrow{
       width:px2rem(34);
       height: px2rem(34);
       background-color: #152b59;
       border-radius: px2rem(60) px2rem(60) 0 0;
       display: inline-block;
       text-align: center;
      
    }
    .teamItem .arrow img{
       width:px2rem(28);
       height: px2rem(28);
       
    }
    .teamSwiper{
        width:px2rem(750);
        height: px2rem(320);
        position:relative;
        overflow: hidden;
        margin:0 0 px2rem(30) 0;
    }
    .swiper-container{
        overflow: visible;
    }
    .lfArrow{
        width:px2rem(80);
        height: px2rem(50);
        border:px2rem(2) solid #d0d0d0;
        position:absolute;
        bottom:px2rem(-90);
        left:px2rem(920);
        z-index:100;
    }
    .lfArrow img{
        width:px2rem(46);
        height: px2rem(46);
        padding:px2rem(4) 0 0 px2rem(20);
    }
    .rgArrow{
        width:px2rem(80);
        height: px2rem(50);
        border:px2rem(2) solid #d0d0d0;
        position:absolute;
        bottom:px2rem(-90);
        left:px2rem(1044);
        z-index:100;
    }
    .rgArrow img{
        width:px2rem(46);
        height: px2rem(46);
        padding:px2rem(4) 0 0 px2rem(12);
    }
    .rgArrow:hover,.lfArrow:hover{
        cursor:pointer;
        background-color: rgba(21,43,89,.1);
    }
    /* 人才招聘 */
    .recruitBg{
        background-color:#f7f7f7;
        padding:px2rem(20) 0 px2rem(20) 0;
    }
    .recruitTit{
        text-align: center;
        margin-bottom:px2rem(30);
    }
    .recruitTit .h3BLine{
        margin:0;
    }
    .recruitBox{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding:0 px2rem(40);
    }
    .recItem{
        background-color:#fff;
        width:px2rem(170);
        height: px2rem(328);
        padding:0 px2rem(20);
    }
    .recItem h4{
        font-size:px2rem(28);
        color:#152b59;
        padding: px2rem(18) 0 px2rem(10) 0;
    }
    .recItem h5{
        font-size:px2rem(24);
        color:#333;
        font-weight: bold;
        line-height: px2rem(28);
        padding-bottom:px2rem(10);
    }
    .recItem p{
        font-size: px2rem(24);
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        color:#333;
        margin-bottom:10px;
        height:auto;
        line-height: px2rem(32);
    }
    .recItem  .arrow{
       width:px2rem(34);
       height: px2rem(34);
       background-color: #152b59;
       border-radius: px2rem(60) px2rem(60) 0 0;
       display: inline-block;
       text-align: center;
      
    }
    .recItem .arrow img{
       width:px2rem(28);
       height: px2rem(28);
       
    }
    .hM-lf{
       width:auto;
       height: auto;
        margin:0 px2rem(40);
        padding:px2rem(20) px2rem(40);
       background-image: linear-gradient( #152c5a, #2d559d);
       color:#fff;
       overflow: hidden;
   }
   .hM-lf h3{
       color:#fff;
       padding:0;
        margin:0;
   }
   .hM-lf .h3BLine{
       background-color: #fff;
       margin:0;
   }
   .hmLf_item{
       border-bottom:1px solid #4f699b;
       font-size:px2rem(24);
    margin-top:px2rem(0);
   }
   .hmLf_item h4{
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        font-weight: bold;
       line-height: px2rem(40);
        font-weight: normal;
        line-height: 22px;
        font-size:px2rem(26);
        padding-top:px2rem(10);
   }
   .hmLf_item p{
       color:#96a3bb;
       font-size:px2rem(24);
        padding:px2rem(4) 0 px2rem(4);
        margin-bottom:px2rem(8);
        font-size:px2rem(24);
   }
   .hM-rg{
       width:auto;
       height: auto;
       margin:0 px2rem(40);
        padding:px2rem(20) px2rem(40);
       background-image: linear-gradient( #152c5a, #2d559d);
       background-image: linear-gradient( #152c5a, #2d559d);
       color:#fff;
       overflow: hidden;
       margin-top:px2rem(30);
   }
   .hM-rg h3{
      padding:0;
        margin:0;
       color:#fff;
   }
   .hM-rg .h3BLine{
       background-color: #fff;
       margin:0;
   }
   .hmRg_item{
       border-bottom:1px solid #4f699b;
       font-size:px2rem(24);
        margin-top:px2rem(0);
   }
   .hmRg_item h4{
       font-size:px2rem(36);
       font-weight: bold;
       text-align: center;
       margin-top:px2rem(30);
   }
   .hmRg_item span{
       font-size:px2rem(14);
   }
   .hmRg_item p{
       color:#fff;
       line-height: px2rem(40);
        font-weight: normal;
        line-height: 22px;
        padding:px2rem(4) 0 px2rem(4);
        margin-bottom:px2rem(8);
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
   }
</style>
