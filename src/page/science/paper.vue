<template>
    <div class="bg">
        <head-top webActive="科研成果" webChildActive="期刊论文"></head-top>
        <div class="teamBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="科研成果" webActive="期刊论文"></side-menu>
                    <div class="sciList">
                        <div class="sciBox" v-for="(item,index) in yearList" :key="index">
                            <h2 class="yearTit f16 fb">{{item}}年</h2>
                            <div class="sciItem" v-for="(iitem,iindex) in listData" :key="iindex" @click="toSciDetail(iitem.id)">
                                <div class="ppName" v-if="iitem.year==item">{{iitem.contentTitle}}</div>
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
                rows:20,
                page:1,
                totalPage:1,
                totalRow:1,
                listData:[],
                text:[
                    {
                        contentTitle:'dfsfsdff',
                        year:2020
                    },
                    {
                        contentTitle:'dsfsdff',
                        year:2020
                    },
                    {
                        contentTitle:'dfsfdff',
                        year:2020
                    },
                    {
                        contentTitle:'多个地方郭德纲电饭锅',
                        year:2019
                    },
                    {
                        contentTitle:'郭德纲电饭锅',
                        year:2019
                    },
                    {
                        contentTitle:'是非得失方顺丰电饭锅',
                        year:2018
                    },
                    {
                        contentTitle:'是发的发的是发风格饭锅',
                        year:2018
                    }
                ],
                yearList:[]
                
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

                var arrYear=[];
                for(var i =0 ; i < this.listData.length ; i++){
                    arrYear[i]=this.listData[i].year;
                }

                //去除数组相同值
                let hash=[];
                for (let i = 0; i < arrYear.length; i++) {
                    if(hash.indexOf(arrYear[i]) === -1){
                        hash.push(arrYear[i]);
                    }
                }
                //年份排序
                hash.sort(function(a,b){
                    return b-a;
                })

                this.yearList = hash;
               
                
            },
            
            

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
        padding-left:75px;
        min-height: 850px;
        display: block;
        color:#152b59;
    }
    .sciList .yearTit{
        font-weight: bold;
        color:#152b59;
    }
    .sciBox{
        margin-bottom:50px;
    }
    .sciItem{
        width:100%;
        margin-bottom:5px;
    }
    .sciNav .ppName{
        font-size:18px;
        text-align:center;
        color:#152b59;
    }
    .ppName{
        width:100%;
        font-size:15px;
        display:block;
    }
    .ppName:hover{
        color:#b12b6e;
        cursor:pointer;
    }
    
    

</style>
