<template>
    <div class="bg">
        <head-top webActive="news"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="teamBg">
            <div class="container">
                <div class="lsideBox">
                    <div class="lsideMenu">
                        <h3>新闻动态</h3>
                        <span class="h3BLine"></span>
                        <ul>
                            <li class="lsideMItem">
                                <span>科研动态</span>
                            </li>
                            <li class="lsideMItem">
                                <span>学术交流</span>
                            </li>
                            <li class="lsideMItem active">
                                <span>业内动态</span>
                            </li>
                            <li class="lsideMItem">
                                <span>中心活动</span>
                            </li>
                        </ul>
                    </div>
                    <div class="sciNList">
                        <div>
                            <div class="topPanel">
                                <div class="tPimg">
                                    <img src="../../images/banner2.png">
                                </div>
                                <div class="tPinfo">
                                    <h4 class="wto">非经典款荆防颗粒设计费打大幅度发三夫发顺丰第三方的范德萨范德萨范德萨瞌睡</h4>
                                    <p class="plain">的范德萨范德萨发顺丰对方懂事发的范德萨范德萨发第三方放水电费的范德萨范德萨发顺丰对方懂事发的范德萨范德萨发第三方放水电费的范德萨范德萨发顺丰对方懂事发的范德萨范德萨发第三方放水电费的范德萨范德萨发顺丰对方懂事发的范德萨范德萨发第三方放水电费的范德萨范德萨发顺丰对方懂事发的范德萨范德萨发第三方放水电费的范德萨范德萨发顺丰对方懂事发的范德萨范德萨发第三方放水电费的范德萨范德萨发顺丰对方懂事发的范德萨范德萨发第三方放水电费第三方</p>
                                    <p class="date">2020年6月23日</p>
                                </div>
                                <div class="tPsign">
                                    <span>置顶</span>
                                </div>
                            </div>
                            <div class="sciNItem" v-for="(item,index) in listData" :key="index">    
                                <div class="sciNInfo">
                                    <h4 class="wto">功夫格斗个的风格</h4>
                                    <p class="wto">这里是简介辽阔的房间里上飞机的开始放假考虑到司法局看来都是放家里的收缴罚款禄鼎记时空裂缝健康了司法局考虑到收缴罚款</p>    
                                </div>         
                                <div class="sciNdate">2020-06-01</div>
                                <div class="sciNimg">
                                    <img src="../../images/banner2.png">
                                </div>
                            </div>
                        </div>
                        <div class="tc" style="margin:0 auto;">
                            <el-pagination
                                layout="prev, pager, next"
                                :total="50">
                            </el-pagination>
                        </div>
                    </div>
                    <!-- <div class="sciList">
                        <div class="sciItem" v-for="(item,index) in listData" :key="index">
                            <div class="sciInfo">
                                <h4>{{item.title}}</h4>
                                <p>{{item.des}}</p>
                            </div>
                            <div class="date">{{item.date}}</div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import {getStore} from '../../config/mUtils'

    export default {
        name: 'team',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                listData:[
                    {
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },{
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    },
                ]
                
            }
        },
        components:{
            headTop
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
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .bgTop{
        height:205px;
        width: 100%;
        object-fit: cover;
        display: block;
    }
    .teamBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }

   .sciNList{
        width:780px;
        min-height: 850px;
        display: flex;
        flex-wrap: wrap;
        align-content:space-between;
        padding-left:20px;
    }
    .sciNItem{
       display:flex;
       flex-wrap: nowrap;
       justify-content: space-between;
       padding-top:8px;
       border-bottom:1px solid #ddd;
   }
   .sciNInfo{
       width:565px;
   }
   .sciNInfo h4{
       font-size:16px;
       font-weight: bold;
       color:#333;
       line-height: 40px;
   }
   .sciNInfo h4:hover{
       cursor:pointer;
       color:#152b59;
       text-decoration: underline;
   }
   .sciNInfo p{
       font-size:15px;
       color:#999;
   }
   .sciNdate{
       width:110px;
       line-height: 70px;
       text-align: center;
   }
   .sciNimg{
       width:105px;
   }
   .sciNimg img{
       width:105px;
       height: 70px;
       object-fit: cover;
   }

   .topPanel{
       display: flex;
       flex-wrap: nowrap;
       justify-content: space-between;
       border-bottom:1px solid #ddd;
       padding-bottom:20px;
   }
   .tPimg{
       width:200px;
       height:140px;
   }
   .tPimg img{
       width:200px;
       height:140px;
       object-fit: cover;
   }
   .tPinfo{
       width:420px;
       padding-left:20px;
   }
   .tPinfo h4{
       font-size:16px;
       color:#333;
       font-weight: bold;
   }
   .tPinfo h4:hover{
       cursor:pointer;
       color: #152b59;
       text-decoration: underline;
   }
   .tPinfo .plain{
       font-size:14px;
       color:#666;
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 3 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        height: 72px;
   }
   .tPinfo .date{
       font-size:13px;
       color:#999;
       margin-top:15px;
   }
   .tPsign{
       width:160px;
   }
   .tPsign span{
       width:80px;
       height:40px;
       line-height: 40px;
       border-radius: 30px;
        background-color:#c3c3c3;
        color:#fff;
        text-align: center;
        display: block;
        font-size:16px;
        font-weight: bold;
        float:right;
        margin-top:20px;


   }
    

</style>
