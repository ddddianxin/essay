<template>
    <div class="bg">
        <head-top webActive="home" webChildActive=""></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="sciNBg">
            <div class="container">
                <div class="lsideBox">
                    <div class="sciNList">
                        <div>
                            <div class="sciNItem" v-for="(item,index) in listData" :key="index" @click="toDetail(item.id)">    
                                <div class="sciNInfo">
                                    <h4 class="wto">{{item.contentTitle}}</h4>
                                    <p class="wto">{{item.plainText}}</p>    
                                </div>         
                                <div class="sciNdate">{{item.publishTime}}</div>
                                <div class="sciNimg">
                                    <img :src="'http://sensing.zwin.work/'+item.mainImage">
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
                rows:9,
                page:1,
                totalPage:1,
                totalRow:1,
                organizationId:'',
                listData:[],
                keywords:''
                
            }
        },
        components:{
            headTop
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
                this.keywords = this.$route.query.val;
                this.page = 1;
                this.getData();
            },
            toDetail(id){
                this.$router.push({path:'/home/bannerdetail',query:{id:id,organizationId:this.organizationId}});
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getData();
                //console.log(`当前页: ${val}`);
            },
            async getData(){
                var res = await globalSearchContent(
                    '科',//this.keywords,
                    this.page,
                    this.rows
                );
                this.listData = res.data;
                this.totalPage = res.data.totalPage;
                this.totalRow = res.data.totalRow;
                console.log(this.listData);
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
        width:100%;
        min-height: 850px;
        display: flex;
        flex-wrap: wrap;
        align-content:space-between;
    }
    .sciNItem{
       display:flex;
       flex-wrap: nowrap;
       justify-content: space-between;
       padding-top:8px;
       border-bottom:1px solid #ddd;
   }
   .sciNInfo{
       width:809px;
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

   
   

</style>
