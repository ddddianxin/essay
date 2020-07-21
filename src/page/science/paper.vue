<template>
    <div class="bg">
        <head-top webActive="team"></head-top>
        <div class="teamBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="科研成果" webActive="期刊论文"></side-menu>
                    <div class="sciList">
                        <div>
                            <div class="sciItem sciNav">
                                <div class="ppName">论文名称</div>
                                <div class="ppAuthor">论文作者</div>
                                <div class="ppPeriodical">发表期刊名称</div>
                                <div class="ppTime">发表年月</div>
                                <div class="ppSort">学科分类</div>
                            </div>
                            <div class="sciItem" v-for="(item,index) in listData" :key="index" @click="toSciDetail(item.id)">
                                <div class="ppName">{{item.contentTitle}}</div>
                                <div class="ppAuthor">{{item.author}}</div>
                                <div class="ppPeriodical">《期刊名-未接入数据》</div>
                                <div class="ppTime">{{item.publishTime}}</div>
                                <div class="ppSort">{{item.typeName}}</div>
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
                listData:[],
                
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
    .sciList{
        width:780px;
        padding-left:20px;
        min-height: 850px;
        display: flex;
        flex-wrap: wrap;
        align-content:space-between;
    }
    .sciItem{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-bottom:30px;
    }
    .sciNav .ppName,.sciNav .ppAuthor,.sciNav .ppPeriodical,.sciNav .ppTime,.sciNav .ppSort{
        font-size:18px;
        text-align:center;
        color:#152b59;
    }
    .ppName{
        width:260px;
        font-size:15px;
        padding:0 20px;
    }
    .ppAuthor{
        width:100px;
        font-size:15px;
        text-align: center;
    }
    .ppPeriodical{
        width:200px;
        font-size:15px;
        text-align: center;
        padding:0 20px;
    }
    .ppTime{
        width:120px;
        font-size:15px;
        text-align: center;
    }
    .ppSort{
        width:100px;
        font-size:15px;
        text-align: center;
    }
    

</style>
