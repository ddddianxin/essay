<template>
    <div class="bg">
        <head-top webActive="科研成果" webChildActive="技术转移转化"></head-top>
        <div class="teamBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="科研成果" webActive="技术转移转化"></side-menu>
                    <div class="sciList">
                        <div>
                            <div class="newsSort">
                                <span class="active">分类一</span>
                                <span>分类二</span>
                                <span>分类三</span>
                                <span>分类四</span>
                            </div>
                            <div class="tecPanel">
                                <div class="tecItem" v-for="(item,index) in list" :key="index">
                                    <img src="../../images/banner2.png">
                                    <div class="tecInfo">
                                        <h3 class="wto">的范德萨范德萨范德萨</h3>
                                        <p class="plain">的范德萨范德萨发地方的范德萨范德萨发第三方第三方发的苟富贵</p>
                                        <p class="date">2020年5月28日</p>
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
                list:[
                    {
                        title:'科研项目名称断绝后路是克己复礼手机号',
                        name:'张小婷',
                        type:'某某类型',
                        apply:'2020年7月',
                        get:'2020年7月',
                    },
                    {
                        title:'科研项目名称号',
                        name:'张小婷',
                        type:'某某类型',
                        apply:'2020年7月',
                        get:'2020年7月',
                    },
                    {
                        title:'科研项目名称号和杜鹃花科时间',
                        name:'张小婷',
                        type:'某某类型豆腐块',
                        apply:'2020年7月',
                        get:'2020年7月',
                    },
                    {
                        title:'科研项目名称断绝后路是克己复礼手机号',
                        name:'张小婷',
                        type:'某某类型',
                        apply:'2020年7月',
                        get:'2020年7月',
                    },
                    {
                        title:'科研项目名称号',
                        name:'张小婷',
                        type:'某某类型',
                        apply:'2020年7月',
                        get:'2020年7月',
                    },
                    {
                        title:'科研项目名称号和杜鹃花科时间',
                        name:'张小婷',
                        type:'某某类型豆腐块',
                        apply:'2020年7月',
                        get:'2020年7月',
                    }
                    
                ],
                
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
    .sciList{
        width:780px;
        padding-left:30px;
        min-height: 850px;
        display: flex;
        flex-wrap: wrap;
        align-content:space-between;
    }

    
    .newsSort{
       border-bottom:2px solid #ddd;
   }
   .newsSort span{
       font-size:16px;
       color:#666;
       line-height: 50px;
       padding:0 20px;
       text-align: center;
   }
   .newsSort span:hover{
       color:#152b59;
   }
   .newsSort span.active{
       font-weight: bold;
       color:#152b59;
   }

   .tecPanel{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
   }
   .tecItem{
       display: flex;
       flex-wrap: nowrap;
       justify-content: space-between;
       width:350px;
       margin-top:25px;
   }
   .tecItem img{
       width:100px;
       height:100px;
       object-fit:cover;
   }
   .tecInfo{
       width:230px;
   }
   .tecInfo h3{
       font-size:16px;
       font-weight: bold;
       color:#333;
      padding:5px 0;
   }
    .tecInfo h3:hover{
        color:#152b59;
        font-weight: bold;
        cursor:pointer;
        text-decoration: underline;
    }
   .tecInfo .plain{
       overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        font-size:14px;
        line-height: 20px;
        color:#666;
   }
   .tecInfo .date{
       font-size:14px;
        color:#999;
   }
    

</style>
