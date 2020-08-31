<template>
    <div class="bg">
        <head-top webActive="新闻动态" webChildActive="业内动态"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="teamBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="新闻动态" webActive="业内动态"></side-menu>
                    <div class="sciNList">
                        <div>
                            <div class="topPanel"  @click="toNewsDetail(listData[0].id)">
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
                            <div class="sciNItem" v-for="(item,index) in listData.slice(1)" :key="index"  @click="toNewsDetail(item.id)">    
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
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import sideMenu from '../../components/common/sideMenu'
    import {contentPage} from '../../service/api'
    import {getStore} from '../../config/mUtils'

    export default {
        name: 'team',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                rows:9,
                page:1,
                totalPage:1,
                totalRow:1,
                listData:[
                    {
                        title:'这里是标题东方季道螺蛳粉几点开始房间里的哭声',
                        des:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
                        date:'2020年6月15日'
                    }
                ]
                
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
