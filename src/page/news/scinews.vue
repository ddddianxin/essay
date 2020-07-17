<template>
    <div class="bg">
        <head-top webActive="news"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="sciNBg">
            <div class="container">
                <div class="lsideBox">
                    <div class="lsideMenu">
                        <h3>新闻动态</h3>
                        <span class="h3BLine"></span>
                        <ul>
                            <li class="lsideMItem active">
                                <span>科研动态</span>
                            </li>
                            <li class="lsideMItem">
                                <span>学术交流</span>
                            </li>
                            <li class="lsideMItem">
                                <span>业内动态</span>
                            </li>
                            <li class="lsideMItem">
                                <span>中心活动</span>
                            </li>
                        </ul>
                    </div>
                    <div class="sciNList">
                        <div>
                            <div class="sciNItem" v-for="(item,index) in listData" :key="index">    
                                <div class="sciNInfo">
                                    <h4 class="wto">3434</h4>
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
                </div>
                <!-- <div class="expBox">
                    <h3>科研动态</h3>
                    <span class="h3BLine"></span>
                    <div class="expList">
                        <div class="expItem" v-for="(item,index) in listData.slice(0,6)" :key="index" @click="toNewsDetail(item.id,item.organizationId)">
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
                </div> -->
                
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import {content,detailContent} from '../../service/api'
    import {getStore} from '../../config/mUtils'
    export default {
        name: 'scinews',
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
                //this.listData = res.data;
                console.log(res);
            },
            toNewsDetail(id,organizationId){
                this.$router.push({path:'/news/detail',query:{id:id,organizationId:organizationId}});
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
    .sciNBg{
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
       color:#666;
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

   
   

</style>
