<template>
    <div class="bg">
        <head-top webActive="news"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="teamBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="新闻动态" webActive="中心动态"></side-menu>
                    <div class="sciNList" v-if="listData.length ==0">
                        <h2 class="f16">暂无数据</h2>
                    </div>
                    <div class="sciNList" v-else>
                        <div>
                            <div class="topPanel" @click="toNewsDetail(listData[0].id)">
                                <div class="tPimg">
                                    <img :src="listData[0].mainPic">
                                </div>
                                <div class="tPinfo">
                                    <h4 class="wto">{{listData[0].contentTitle}}</h4>
                                    <p class="plain">{{listData[0].plainText}}</p>
                                    <p class="date">{{listData[0].publishTime}}</p>
                                </div>
                                <div class="tPsign">
                                    <span>置顶</span>
                                </div>
                            </div>
                            <div class="sciNItem" v-for="(item,index) in listData" :key="index" @click="toNewsDetail(item.id)">    
                                <div class="sciNInfo">
                                    <h4 class="wto">{{item.contentTitle}}</h4>
                                    <p class="wto">{{item.plainText}}</p>    
                                </div>         
                                <div class="sciNdate">{{item.publishTime}}</div>
                                <div class="sciNimg">
                                    <img :src="item.mainPic">
                                </div>
                            </div>
                        </div>
                        <div class="tc" style="margin:0 auto;">
                            <el-pagination
                                layout="prev, pager, next"
                                :page-count="totalPage"
                                @current-change="handleCurrentChange">
                            </el-pagination>
                        </div>
                    </div>
                </div>
                <!-- <div class="cenBox">
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
                    <div class="cenList">
                        <div class="cenItem" v-for="(item,index) in listData.slice(1)" :key="index">
                            <div class="cenInfo">
                                <h4>{{item.contentTitle}}</h4>
                                <p>{{item.plainText}}</p>
                            </div>
                            <div class="date">{{item.publishTime.slice(0,10)}}</div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import sideMenu from '../../components/common/sideMenu'
    import {getStore} from '../../config/mUtils'
    import {mapState} from 'vuex'
    import {contentPage} from '../../service/api'
    export default {
        name: 'news',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                rows:9,
                page:1,
                totalPage:1,
                totalRow:1,
                listData:[]
                
            }
        },
        components:{
            headTop,sideMenu
        },
        mounted(){
            this.cn = getStore("inCN");
            // 获取首页产品
            this.initData();
            if(document.body.clientWidth<=1024){
                
            }
            
        },
        computed:{
            ...mapState([
               'host','inCN'
           ])
        },
        methods:{
            async initData(){
                this.id = this.$route.query.id;
                this.organizationId = this.$route.query.organizationId;
                this.page = 1;
                this.getData();
            },
            toNewsDetail(id){
                this.$router.push({path:'/news/detail',query:{id:id,organizationId:this.organizationId}});
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getData();
                //console.log(`当前页: ${val}`);
            },
            async getData(){
                var res = await contentPage(
                    this.cn,
                    this.page,
                    this.rows,
                    this.organizationId,
                    this.id
                );
                this.listData = res.data.list;
                this.totalPage = res.data.totalPage;
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
        display:block;
    }
    .teamBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    .cenBox{
        width:1024px;
    }
    .cenBox h3{
       margin:30px 0 0 0;
       color:#152b59;
       font-weight: bold;
       font-size: 25px;
    }
    .cenBox .h3BLine{
       width:70px;
       height: 3px;
       display: inline-block;
       background-color: #152b59;
       
   }
   .cenList{
       margin-top:15px;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
   }
   .cenItem{
       width:500px;
       padding:15px 0;
       display: flex;
       flex-wrap: nowrap;
       justify-content: space-between;
       border-top:1px solid #d0d0d0;
   }
   .cenItem .date{
       width:100px;
       color:#152b59;
       text-align: right;
       line-height: 70px;
   }
   .cenInfo{
       width:382px;
   }
   .cenInfo h4{
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
   .cenInfo h4:hover{
       cursor:pointer;
       color:#152b59;
       text-decoration: underline;
   }
   .cenInfo p{
       line-height: 20px;
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        color:#666;
        height: 40px;
   }
   .cenInfo span{
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
