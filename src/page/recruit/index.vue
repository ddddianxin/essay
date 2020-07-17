<template>
    <div class="bg">
        <head-top webActive="experiment"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="expBg">
            <div class="container">
                <div class="expBox">
                    <h3>支撑载体</h3>
                    <span class="h3BLine"></span>
                    <div class="expList">
                        <div class="expItem" v-for="(item,index) in listData.slice(0,6)" :key="index">
                            <img :src="item.img">
                            <div class="expInfo">
                                <h4>{{item.title}}</h4>
                                <p>{{item.des}}</p>
                                <span>{{item.date}}</span>
                            </div>
                        </div>
                    </div>
                    <h3>实验室</h3>
                    <span class="h3BLine"></span>
                    <div class="expPanel">
                        <div class="expInbox" v-for="(item,index) in lab" :key="index">
                            <img :src="item.img">
                            <div class="expName">
                                <span class="wto">{{item.title}}</span>
                            </div>
                        </div>
                    </div>
                    <h3>仪器设备</h3>
                    <span class="h3BLine"></span>
                    <div class="expPanel">
                        <div class="expInbox" v-for="(item,index) in equipment" :key="index">
                            <img :src="item.img">
                            <div class="expName">
                                <span class="wto">{{item.title}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import {getStore} from '../../config/mUtils'
    import {detailContent} from '../../service/api'
    export default {
        name: 'news',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                listData:[
                    {
                        img:require('../../images/banner2.png'),
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日，星期一'
                    },{
                        img:require('../../images/banner2.png'),
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日，星期一'
                    },{
                        img:require('../../images/banner2.png'),
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日，星期一'
                    },{
                        img:require('../../images/banner2.png'),
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日，星期一'
                    },{
                        img:require('../../images/banner2.png'),
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日，星期一'
                    },{
                        img:require('../../images/banner2.png'),
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日，星期一'
                    }
                ],
                lab:[
                    {
                        img:require('../../images/banner2.png'),
                        title:'实验室名称',
                    },{
                        img:require('../../images/banner2.png'),
                        title:'实验室名称',
                    },{
                        img:require('../../images/banner2.png'),
                        title:'实验室名称',
                    },{
                        img:require('../../images/banner2.png'),
                        title:'实验室名称',
                    }
                ],
                equipment:[
                    {
                        img:require('../../images/banner2.png'),
                        title:'仪器设备名称',
                    },{
                        img:require('../../images/banner2.png'),
                        title:'仪器设备名称',
                    },{
                        img:require('../../images/banner2.png'),
                        title:'仪器设备名称',
                    },{
                        img:require('../../images/banner2.png'),
                        title:'仪器设备名称',
                    }
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
                var res = await detailContent(this.id, this.organizationId, this.cn);
                console.log(res);
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
    }
    .expBox{
        width:1024px;
    }
    .expBox h3{
       margin:30px 0 0 0;
       color:#152b59;
       font-weight: bold;
       font-size: 25px;
    }
    .expBox .h3BLine{
       width:70px;
       height: 3px;
       display: inline-block;
       background-color: #152b59;
       
   }
   .expList{
       margin-top:15px;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
   }
   .expItem{
       width:502px;
       margin-bottom:20px;
       display: flex;
       flex-wrap: nowrap;
       justify-content: space-between;
   }
   .expItem img{
       width:100px;
       height: 100px;
       object-fit: cover;
   }
   .expInfo{
       width:382px;
   }
   .expInfo h4{
       font-size: 16px;
       color:#333;
       font-weight: bold;
       padding:0;
       line-height: 32px;
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 1 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
   }
   .expInfo h4:hover{
       cursor:pointer;
       color:#152b59;
   }
   .expInfo p{
       line-height: 20px;
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        color:#666;
        height: 40px;
   }
   .expInfo span{
       color:#999;
       font-size:12px;
   }
   .expPanel{
       margin:20px 0;
       display:flex;
       flex-wrap:nowrap;
       justify-content: space-between;
   }
   .expInbox{
       width:213px;
       height:213px;
       position: relative;
   }
   .expInbox img{
       width:213px;
       height:213px;
       object-fit: cover;
   }
   .expName{
       position:absolute;
       bottom:0;
       left:0;
       width:213px;
       height:36px;
       line-height: 36px;
       background-color:rgba(21,43,89,.75);
       color:#fff;
       text-align-last: center;
       font-size:14px;
       font-weight: bold;
   }
   .expName span{
       display:block;
       padding:0 15px;
   }
   .expInbox:hover{
       cursor:pointer;
   }
   .expInbox:hover img{
           opacity: .8;
       }

</style>
