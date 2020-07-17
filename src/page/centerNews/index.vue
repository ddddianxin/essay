<template>
    <div class="bg">
        <head-top webActive="news"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="expBg">
            <div class="container">
                <div class="expBox">
                    <h3>中心动态</h3>
                    <span class="h3BLine"></span>
                    <div class='viewShow'>
                        <img :src="listData[0].mainPic">
                        <div class="ctNinfo">
                            <h4>{{listData[0].contentTitle}}</h4>
                            <p>{{listData[0].plainText}}</p>
                            <span>{{listData[0].publishTime.slice(0,10)}}</span>
                        </div>
                        <div class="ctNSign">
                            <span class="toTop">置顶</span>
                        </div>
                    </div>
                    <div class="expList">
                        <div class="expItem" v-for="(item,index) in listData.slice(1)" :key="index">
                            <div class="expInfo">
                                <h4>{{item.contentTitle}}</h4>
                                <p>{{item.plainText}}</p>
                            </div>
                            <div class="date">{{item.publishTime.slice(0,10)}}</div>
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
    import {content} from '../../service/api'
    export default {
        name: 'news',
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
                var res = await content(this.cn,this.id,this.organizationId);
                this.listData = res.data;
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
       width:500px;
       padding:15px 0;
       display: flex;
       flex-wrap: nowrap;
       justify-content: space-between;
       border-top:1px solid #d0d0d0;
   }
   .expItem .date{
       width:100px;
       color:#152b59;
       text-align: right;
       line-height: 70px;
   }
   .expInfo{
       width:382px;
   }
   .expInfo h4{
       font-size: 16px;
       color:#333;
       font-weight: bold;
       padding:0;
       line-height: 30px;
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

   .viewShow{
       margin-top:15px;
       display: flex;
       flex-wrap: nowrap;
       justify-content: space-between;
   }
   .viewShow img{
       width:200px;
       height: 150px;
       object-fit: cover;
   }
   .ctNinfo{
       width: 690px;
       height: 150px;
       padding:0 20px;
   }
   .ctNinfo h4{
       font-size:16px;
       color:#333;
       font-weight: bold;
       margin-bottom:10px;
   }
   .ctNinfo p{
       line-height: 20px;
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 3 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
   }
   .ctNinfo span{
       margin-top:10px;
       color:#999;
       font-size:12px;
       display: block;
   }
   .ctNSign{
       width:100px;
       display: flex;
       flex-wrap: nowrap;
       justify-content: flex-end;
   }
   .toTop{
       width:84px;
       height: 40px;
       line-height:40px;
       color:#fff;
       text-align: center;
       border-radius: 30px;
       background-color:#c3c3c3;
       display: block;
       font-size:15px;
       font-weight: bold;
       margin-top:30px;
   }

</style>
