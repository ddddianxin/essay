<template>
    <div class="bg">
        <head-top webActive="科研成果" webChildActive="成果奖励"></head-top>
        <div class="awardBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="科研成果" webActive="成果奖励"></side-menu>
                    <div>
                        <div  class="awardList">
                            <div class="awardItem" v-for="(item,index) in listData" :key="index" @click="toSciDetail(item.id)">    
                                <img :src="item.mainPic">              
                                <h4 class="">{{item.contentTitle}}</h4>
                                <div class="tc">
                                    <span class="arrow">
                                        <img src="../../images/arrow.png">
                                    </span>
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
        name: 'award',
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
            toSciDetail(id){
                this.$router.push({path:'/science/detail',query:{id:id,organizationId:this.organizationId}});
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
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .awardBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    .awardBox{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .awardMenu{
        width:240px;
        height:850px;
        background-image: linear-gradient( #162a59, #530760);
    }
   .awardMenu h3{
       margin:30px 0 0 20px;
       color:#fff;
       font-weight: bold;
       font-size: 25px;

   }
   .awardMenu .h3BLine{
       width:70px;
       height: 3px;
       display: inline-block;
       background-color: #fff;
       margin-left: 20px;
   }
   .awardMItem{
       height: 84px;
       line-height: 84px;
   }
   .awardMItem.active{
       background-color:#fff;
   }
    .awardMItem.active span{
        color:#152b59;
    }
    .awardMItem span{
        display: block;
        color:#fff;
        font-size:16px;
        font-weight: bold;
        margin:0 20px;
        border-bottom:2px solid #5b4b7e;
    }
    .awardMItem span:hover{
        cursor:pointer;
    }
    .awardList{
        width:780px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .awardItem{
      width:240px;
       height: 410px;
       background-color: #fff;
       margin:0 0 20px 20px;
   }
   .awardItem:hover{
       cursor: pointer;
   }
   .awardItem img{
       width:240px;
       height: 316px;
       object-fit: cover;
   }
   .awardItem h4{
       font-size: 15px;
       font-weight: bold;
       color:#152b59;
       padding:2px 20px 5px 20px;
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
   }
    
    .awardItem .arrow{
       width:30px;
       height: 32px;
       background-color: #152b59;
       border-radius: 30px 30px 0 0;
       display: inline-block;
       text-align: center;
    }
    .awardItem .arrow img{
       width:20px;
       height: 20px;
       padding-top:6px;
    }
    

</style>
