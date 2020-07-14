<template>
    <div class="bg">
        <head-top webActive="home"></head-top>
        <div id="home">
            <div class="banner">
                 <el-carousel class="bannerBox" indicator-position="" :interval="4500" :height='bannerHeight'>
                    <el-carousel-item v-for="(item,index) in bannerInfo" :key="index" >
                        <div class="coverBg">
                            <div class="bannerText">
                                <h2 class="wto">{{item.title}}</h2>
                                <p>{{item.description}}</p>
                                <router-link :to="item.url">查看更多</router-link>
                            </div>
                        </div>
                        <img :src="item.img">
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
                                <img :src="item.img">
                                <h4>{{item.title}}</h4>
                                <p>{{item.date}}</p>
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
                            <div class="sciRgItem" v-for="(item,index) in sciCommunit" :key="index">
                                <h4>{{item.title}}</h4>
                                <p>{{item.date}}</p>
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
                        <div class="hmLf_item" v-for="(item,index) in sciCommunit.slice(0,4)" :key="index">
                            <h4>{{item.title}}</h4>
                            <p>{{item.date}}</p>
                        </div>
                    </div>
                </div>
                <div class="hM-rg">
                    <h3>人才招聘</h3>
                    <span class="h3BLine"></span>
                    <div class="hmRg_box">
                        <div class="hmRg_item" v-for="(item,index) in recruitData.slice(0,2)" :key="index">
                            <h4>{{item.title}}</h4>
                            <span>岗位介绍：</span>
                            <p>{{item.des}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="centerBg">
                <div class="container centerIntro">
                    <img src="../../images/centerIntro.jpg">
                    <div class="ctIntro">
                        <h3>中心介绍</h3>
                        <span class="h3BLine"></span>
                        <div class="ctText">
                            <p>能发快递今飞凯达数据库服大佬就是都看了放假的上飞机的抗裂砂浆付贷款老是假放得开了上飞机的开始放假看到了书法家李德生科技</p>
                            <p>今飞凯达水力发电是否考虑的健身房困了就睡犯了大忌是浪费极度空灵上飞机的间极乐空间离开家打发时间开具我kin模拟开接口分开搭建方式付款的健身房里的水就反垄断收缴罚款利健康觉得绿色放假的看来是呢分类多少积分理科生</p>
                            <p>今飞凯达水力发电是否考虑的健身房困了就睡犯了大忌是浪费极度空灵上飞机的极乐空间离开家</p>
                            <router-link to=''>了解更多</router-link>
                        </div>
                    </div>
                </div>
            </div> -->
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
                                    <img :src="item.img">              
                                    <h4 class="wto">{{item.name}}</h4>
                                    <p>{{item.description}}</p>
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
            <!-- <div class="recruitBg">
                <div class="container">
                    <div class="recruitTit">
                        <h3>人才招聘</h3>
                        <span class="h3BLine"></span>
                    </div>
                    <div class="recruitBox">
                        <div class="recItem" v-for="(item,index) in recruitData" :key="index">
                            <h4>{{item.title}}</h4>
                            <h5>岗位简介</h5>
                            <p>{{item.des}}</p>
                            <div class="tc">
                                <span class="arrow">
                                    <img src="../../images/arrow.png">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import Swiper from 'swiper';
    import {indexContent} from '../../service/api'

    export default {
        name: 'home',
        data(){
            return{
                newsShowNum:6,
                bannerHeight:'613px',
                carouselArr:[
                    require('../../images/banner2.png'),
                    require('../../images/banner3.png')
                ],
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
                        img:require('../../images/banner2.png'),
                        title:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020年6月1日'
                    },
                    {
                        img:require('../../images/banner2.png'),
                        title:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020年6月1日'
                    },
                    {
                        img:require('../../images/banner2.png'),
                        title:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020年6月1日'
                    },
                    {
                        img:require('../../images/banner2.png'),
                        title:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020年6月1日'
                    },
                    {
                        img:require('../../images/banner2.png'),
                        title:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020年6月1日'
                    },
                    {
                        img:require('../../images/banner2.png'),
                        title:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020年6月1日'
                    }
                ],
                sciCommunit:[
                    {
                        title:'COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望,COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望,COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望',
                        date:'2020年6月15日，星期一',
                        url:''
                    },
                    {
                        title:'COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望,COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望,COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望',
                        date:'2020年6月15日，星期一',
                        url:''
                    },{
                        title:'COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望,COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望,COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望',
                        date:'2020年6月15日，星期一',
                        url:''
                    },{
                        title:'COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望,COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望,COVID-19大流行及以后的工厂解决方案：历史回顾和未来展望',
                        date:'2020年6月15日，星期一',
                        url:''
                    },
                ],
                teamData:[
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    
                ],
                recruitData:[
                    {
                        title:'访问学者',
                        des:'能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文,能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文',
                        url:''
                    },
                    {
                        title:'访问学者',
                        des:'能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文,能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文',
                        url:''
                    },
                    {
                        title:'访问学者',
                        des:'能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文,能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文，能流畅的阅读和书写英文',
                        url:''
                    },
                ]
                
            }
        },
        components:{
            headTop
        },
        mounted(){
            // 获取首页产品
            this.initData();
            if(document.body.clientWidth<=1024){
                this.bannerHeight = '218px';
                this.newsShowNum = 3;
                this.teamShowNum = 4;
            }
            new Swiper ('.swiper-container', {
                loop: true,
                speed:1000,
                slidesPerView : 4,
                spaceBetween : 20,
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
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 7 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
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
       background-image: linear-gradient( #a5177f, #e02d81);
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
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        font-weight: bold;
        font-size: 12px;
        line-height: 22px;
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
   .sciLfItem img{
       width:240px;
       height: 140px;
       object-fit: cover;
   }
   .sciLfItem h4{
       font-size: 13px;
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        font-weight: bold;
        color:#333;
        padding:0 20px;
        margin:5px 0;
        height:88px;
        /* font-family: 'PingFang SC'; */
        line-height: 22px;

   }
   .sciLfItem p{
       color:#666;
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
   .teamItem img{
       width:240px;
       height: 140px;
       object-fit: cover;
   }
   .teamItem h4{
       font-size: 15px;
       font-weight: bold;
       color:#333;
       padding:5px 20px 0 20px;
   }
    .teamItem p{
        font-size: 12px;
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        color:#333;
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
        height: 360px;
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
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
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
       background-image: linear-gradient( #152c5a, #2d559d);
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
       border-bottom:1px solid #4f699b;
       padding:10px 0;
   }
   .hmLf_item h4{
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        font-weight: bold;
        height: 48px;
   }
   .hmLf_item p{
       color:#96a3bb;
       font-size:12px;
       margin-top:5px;
   }


   .hM-rg{
       width:460px;
       height: 480px;
       padding:10px 20px;
       background-image: linear-gradient( #152c5a, #2d559d);
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
       border-bottom:1px solid #4f699b;
       padding:10px 0;
   }
   .hmRg_item h4{
       font-size:18px;
       font-weight: bold;
       text-align: center;
   }
   .hmRg_item span{
       font-size:14px;

   }
   .hmRg_item p{
       color:#fff;
       font-size:12px;
       margin-top:5px;
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
   }

</style>
