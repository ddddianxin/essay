<template>
    <div class="bg">
        <head-top webActive="news"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="expBg">
            <div class="expBox">
                <h3>中心动态</h3>
                <span class="h3BLine"></span>
                <div class='viewShow'>
                    <img src="../../images/banner2.png">
                    <div class="ctNinfo">
                        <h4 class="wto">这里是标题的范德萨范德萨发发生的</h4>
                        <p>简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简</p>
                        <span>2020年6月15日</span>
                    </div>
                    <div class="ctNSign">
                        <span class="toTop">置顶</span>
                    </div>
                </div>
                <div class="expList">
                    <div class="expItem" v-for="(item,index) in listData" :key="index">
                        <div class="expInfo">
                            <h4>{{item.title}}</h4>
                            <p>{{item.des}}</p>
                        </div>
                        <div class="date">{{item.date}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    export default {
        name: 'news',
        data(){
            return{
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
        background-color: #fff;
    }
    .bgTop{
        margin-top:px2rem(180);
        height:px2rem(200);
        width: 100%;
        object-fit: cover;
    }
    .expBox{
        width:100%;
    }
    .expBox h3{
       font-size:px2rem(32);
        padding:0 px2rem(40);
        height:px2rem(22);
       font-weight: bold;
       color:#152b59;
    }
    .expBox .h3BLine{
      margin-left:px2rem(40);
        width:px2rem(80);
        height: px2rem(4);
        display: inline-block;
       background-color: #152b59;
   }
   .expList{
       margin-top:px2rem(20);
       display: flex;
       flex-wrap: wrap;
       padding:0 px2rem(40);
   }
   .expItem{
       width:100%;
       padding:px2rem(10) 0;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       border-top:1px solid #d0d0d0;
   }
   .expItem .date{
        font-size:px2rem(24);
       color:#999;
       text-align: right;
   }
   .expInfo{
      
   }
   .expInfo h4{
       font-size: px2rem(28);
       color:#333;
       font-weight: bold;
       padding:0;
       line-height: px2rem(60);
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
       font-size: px2rem(24);
       line-height: px2rem(40);
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        color:#666;
        height: px2rem(80);
   }
   .expInfo span{
       color:#999;
       font-size:px2rem(24);
   }

   .viewShow{
       width:100%;
       margin-top:px2rem(20);
       display: flex;
       flex-wrap: nowrap;
       justify-content: space-between;
       position:relative;
   }
   .viewShow img{
       width:px2rem(200);
       height: px2rem(156);
       padding-left:px2rem(40);
       object-fit: cover;
   }
   .ctNinfo{
       width: px2rem(510);
       height: auto;
    //    padding-left:px2rem(20);
   }
   .ctNinfo h4{
       font-size:px2rem(32);
       color:#333;
       font-weight: bold;
       padding:0 px2rem(40);
   }
   .ctNinfo p{
       line-height: px2rem(36);
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        font-size:px2rem(24);
        padding:0 px2rem(40);
   }
   .ctNinfo span{
       color:#999;
       font-size:px2rem(24);
       display: block;
       padding:0 px2rem(40);
   }
   .ctNSign{
       position:absolute;
       right:px2rem(40);
       bottom:0;
       width:px2rem(100);
       display: flex;
       flex-wrap: nowrap;
       justify-content: flex-end;
   }
   .toTop{
       color:#999;
       text-align: center;
       display: block;
       font-size:px2rem(24);
   }

</style>
