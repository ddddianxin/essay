<template>
    <div class="bg">
        <head-top webActive="科研队伍" webChildActive="支撑管理"></head-top>
        <div class="teamBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="科研队伍" webActive="支撑管理"></side-menu>
                    <div>
                        <div class="teamList">
                            <div class="teamItem" v-for="(item,index) in listData" :key="index" @click="toTeamDetail(item.id)">    
                                <img :src="item.mainPic">              
                                <h4 class="wto">{{item.contentTitle}}</h4>
                                <p>{{item.plainText}}</p>
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
        name: 'team',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                rows:12,
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
        },
        methods:{
            async initData(){
                this.id = this.$route.query.id;
                this.organizationId = this.$route.query.organizationId;
                this.page = 1;
                this.getData();
            },
            toTeamDetail(id){
                this.$router.push({path:'/team/detail',query:{id:id,organizationId:this.organizationId}});
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
    .teamBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    .teamBox{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .teamMenu{
        width:240px;
        height:850px;
        background-image: linear-gradient( #162a59, #530760);
    }
   .teamMenu h3{
       margin:30px 0 0 20px;
       color:#fff;
       font-weight: bold;
       font-size: 25px;

   }
   .teamMenu .h3BLine{
       width:70px;
       height: 3px;
       display: inline-block;
       background-color: #fff;
       margin-left: 20px;
   }
   .teamMItem{
       height: 84px;
       line-height: 84px;
   }
   .teamMItem.active{
       background-color:#fff;
   }
    .teamMItem.active span{
        color:#152b59;
    }
    .teamMItem span{
        display: block;
        color:#fff;
        font-size:16px;
        font-weight: bold;
        margin:0 20px;
        border-bottom:2px solid #5b4b7e;
    }
    .teamMItem span:hover{
        cursor:pointer;
    }
    .teamList{
        width:780px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .teamItem{
       width:240px;
       height: 306px;
       background-color: #fff;
       margin:0 0 20px 20px;
   }
   .teamItem:hover{
       cursor: pointer;
   }
   .teamItem img{
       width:240px;
       height: 140px;
       object-fit: cover;
   }
   .teamItem h4{
       font-size: 15px;
       font-weight: bold;
       color:#152b59;
       padding:5px 20px 0 20px;
   }
    .teamItem p{
        font-size: 12px;
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        color:#152b59;
        padding:0 20px;
        margin-bottom:10px;
        height:88px;
        line-height: 22px;
    }
    .teamItem .arrow{
       width:30px;
       height: 32px;
       background-color: #152b59;
       border-radius: 30px 30px 0 0;
       display: inline-block;
       text-align: center;
    }
    .teamItem .arrow img{
       width:20px;
       height: 20px;
       padding-top:6px;
    }

</style>
