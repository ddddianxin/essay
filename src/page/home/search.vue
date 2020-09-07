<template>
    <div class="bg">
        <head-top webActive="home" webChildActive="" @toSearch="getVal" :searchVal="keywords"></head-top>
        <img class="searbgTop" src="../../images/bgTop.png">
        <div class="sciNBg">
            <div class="container">
                <div class="lsideBox">
                    <div class="searNList">
                        <div class="mb15">
                            <div class="searNItem" v-for="(item,index) in listData" :key="index" @click="toDetail(item.id,item.organizationId)">    
                                <div class="searNInfo">
                                    <h4 class="wto">{{item.contentTitle}}</h4>
                                    <p class="wto">{{item.plainText}}</p>    
                                </div>         
                                <div class="searNdate">{{item.publishTime}}</div>
                                <div class="searNimg">
                                    <img :src="item.mainImage?'http://sensing.zwin.work/'+item.mainImage:require('../../images/default.jpg')">
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
    import {globalSearchContent} from '../../service/api'
    import {getStore} from '../../config/mUtils'
    export default {
        name: 'scinews',
        data(){
            return{
                cn:0,
                id:'',
                rows:10,
                page:1,
                totalPage:1,//总页码数
                organizationId:'',
                listData:[],
                keywords:''
                
            }
        },
        components:{
            headTop
        },
        watch:{
    $route(n,o){
        if(n.fullPath !== o.fullPath){ //监听路由参数是否变化
           this.getData()  //methods中封装的加载数据函数
        }
    }
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
            toDetail(id,organizationId){
                this.$router.push({path:'/home/bannerdetail',query:{id:id,organizationId:organizationId}});
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getData();
            },
            getVal(val){
                this.keywords = val;
            },
            async getData(){
                this.keywords = this.$route.query.val;
                var res = await globalSearchContent(
                    this.keywords,//this.keywords
                    this.page,
                    this.rows
                );
                this.listData = res.data;
                this.totalPage = res.totalPage;
            }
        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .searbgTop{
        height:205px;
        width: 100%;
        object-fit: cover;
        display: block;
    }
    .sciNBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
   
   .searNList{
        width:100%;
        min-height: 850px;
        display: flex;
        flex-wrap: wrap;
        align-content:space-between;
    }
    .searNItem{
       display:flex;
       flex-wrap: nowrap;
       justify-content: space-between;
       padding-top:8px;
       border-bottom:1px solid #ddd;
   }
   .searNInfo{
       width:809px;
   }
   .searNInfo h4{
       font-size:16px;
       font-weight: bold;
       color:#152b59;
       line-height: 40px;
   }
   .searNInfo h4:hover{
       cursor:pointer;
       color:#152b59;
       text-decoration: underline;
   }
   .searNInfo p{
       font-size:15px;
       color:#152b59;
   }
   .searNdate{
       width:110px;
       line-height: 70px;
       text-align: center;
       color:#152b59;
   }
   .searNimg{
       width:105px;
   }
   .searNimg img{
       width:105px;
       height: 70px;
       object-fit: cover;
   }

   
   

</style>
