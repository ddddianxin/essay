<template>
    <div class="bg">
        <head-top webActive="实验平台" webChildActive="实验室"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="expBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="实验平台" webActive="实验室"></side-menu>
                    <div class="expBox">
                        <div class="expB">
                            <div class="expPanel">
                                <div class="expInbox" v-for="(item,index) in listData" :key="index" @click="toDetail(item.id,item.organizationId)">
                                    <img :src="item.mainPic">
                                    <div class="expName">
                                        <span class="wto">{{item.contentTitle}}</span>
                                    </div>
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
    import {contentPage} from '../../service/api'
    export default {
        name: 'news',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                rows:8,
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
            this.initData(); 
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
                this.totalRow = res.data.totalRow;
                console.log(res);
            },
            toDetail(id,organizationId){
                this.$router.push({path:'/platform/detail',query:{id:id,organizationId:organizationId}});
            }


        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .expBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    .bgTop{
        height:205px;
        width: 100%;
        object-fit: cover;
        display: block;
    }
    .expBox{
        width:780px;
        padding-left:30px;
        min-height: 850px;
        display: flex;
        flex-wrap: wrap;
    }
    .expB{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width:100%;
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
       width:100%;
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
       width:100%;
       display:flex;
       flex-wrap:wrap;
       justify-content: space-between;
   }
   .expInbox{
       width:368px;
       height:270px;
       position: relative;
       margin-bottom:20px;
   }
   .expInbox img{
       width:368px;
       height:270px;
       object-fit: cover;
   }
   .expName{
       position:absolute;
       bottom:0;
       left:0;
       width:368px;
       height:42px;
       line-height: 42px;
       background-color:rgba(21,43,89,.9);
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
