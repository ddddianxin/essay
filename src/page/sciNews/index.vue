<template>
    <div class="bg">
        <head-top webActive="news"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="expBg">
            <div class="container">
                <div class="expBox">
                    <h3>科研动态</h3>
                    <span class="h3BLine"></span>
                    <div class="expList">
                        <div class="expItem" v-for="(item,index) in listData.slice(0,6)" :key="index">
                            <div class="time">
                                <span class="date">{{item.publishTime.slice(5,7)}}月{{item.publishTime.slice(8,10)}}日</span>
                                <p class="year">{{item.publishTime.slice(0,4)}}</p>
                            </div>
                            <div class="expInfo">
                                <h4>{{item.contentTitle}}</h4>
                                <p>{{item.plainText}}</p>
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
    import {content,detailContent} from '../../service/api'
    import {getStore} from '../../config/mUtils'
    export default {
        name: 'news',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                listData:[
                    {
                        contentTitle:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        plainText:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        publishTime:'6月15日',
                        year:'2020'
                    },
                    {
                        contentTitle:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        plainText:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        publishTime:'6月15日',
                        year:'2020'
                    },
                    {
                        contentTitle:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        plainText:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        publishTime:'6月15日',
                        year:'2020'
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
   .time{
       width:100px;
       height: 100px;
       background-color: #e1e1e1;
   }
   .date{
       color:#152b59;
       font-weight: bold;
       font-size:18px;
       display: block;
       text-align: center;
       margin-top:25px;
   }
   .year{
       font-size:14px;
       text-align: right;
       padding:0 15px;
       color:#777;
       margin-top:6px;
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
   

</style>
