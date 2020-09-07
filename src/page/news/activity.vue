<template>
    <div class="bg">
        <head-top webActive="新闻动态" webChildActive="中心动态"></head-top>
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
                            <div class="topPanel" v-if="topVal" @click="toNewsDetail(topVal.id,topVal.organizationId)">
                                <div class="tPimg">
                                    <img :src="topVal.mainPic">
                                </div>
                                <div class="tPinfo">
                                    <h4 class="wto">{{topVal.contentTitle}}</h4>
                                    <p class="plain" style="-webkit-box-orient: vertical;">{{topVal.plainText}}</p>
                                    <p class="date">{{topVal.publishTime}}</p>
                                </div>
                                <div class="tPsign">
                                    <span>{{topVal.attributeTypeName}}</span>
                                </div>
                            </div>
                            <div class="sciNItem" v-for="(item,index) in listData" :key="index" @click="toNewsDetail(item.id,item.organizationId)">    
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
                listData:[],
                topVal:''//置顶的内容
                
            }
        },
        components:{
            headTop,sideMenu
        },
        mounted(){
            this.cn = getStore("inCN");
            this.initData();
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
            toNewsDetail(id,organizationId){
                this.$router.push({path:'/news/detail',query:{id:id,organizationId:organizationId}});
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getData();
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
                if(this.page==1 && this.listData[0].attributeTypeName!=null){
                    this.topVal = this.listData[0];
                    this.listData.splice(0,1);
                }else{
                    this.topVal=''
                }
                this.totalPage = res.data.totalPage;
                this.totalRow = res.data.totalRow;
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
       color:#152b59;
       line-height: 40px;
   }
   .sciNInfo h4:hover{
       cursor:pointer;
       color:#152b59;
       text-decoration: underline;
   }
   .sciNInfo p{
       font-size:15px;
       color:#152b59;
   }
   .sciNdate{
       width:110px;
       line-height: 70px;
       text-align: center;
       color:#152b59;
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
       color:#152b59;
       font-weight: bold;
   }
   .tPinfo h4:hover{
       cursor:pointer;
       color: #152b59;
       text-decoration: underline;
   }
   .tPinfo .plain{
       font-size:14px;
       color:#152b59;
       overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
        height: 72px;
   }
   .tPinfo .date{
       font-size:13px;
       color:#152b59;
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
        background-color:#152b59;
        color:#fff;
        text-align: center;
        display: block;
        font-size:16px;
        font-weight: bold;
        float:right;
        margin-top:20px;


   }

</style>
