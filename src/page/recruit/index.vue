<template>
    <div class="bg">
        <head-top webActive="人才招聘" webChildActive=""></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="recBg">
            <div class="container">
                <div class="recList" v-for="(item,index) in listData" :key="index" @click="toDetail(item.id,item.organizationId)">
                    <div class="recImg">
                        <img :src="item.mainPic">
                    </div>
                    <div class="recInfo">
                        <div class="recName">{{item.contentTitle}}</div>
                        <div>
                            <span class="webrecSalary">{{item.contentSubtitle}}</span>
                            <span class="recExp">{{item.remark}}</span>
                        </div>
                        <p>岗位简介：</p>
                        <!-- <div class="recText" v-html="item.contentHtml"></div> -->
                        <div class="recText" style="-webkit-box-orient: vertical;">{{item.plainText}}</div>
                    </div>
                    
                </div>
                <div class="tc" style="margin:20px auto;">
                    <el-pagination
                        layout="prev, pager, next"
                        :page-count="totalPage"
                        @current-change="handleCurrentChange">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import {getStore} from '../../config/mUtils'
    import {contentPage} from '../../service/api'
    export default {
        name: 'recruit',
        data(){
            return{
                cn:0,
                id:'',
                rows:4,
                page:1,
                totalPage:1,
                totalRow:1,
                organizationId:'',
                listData:[]
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
                this.page = 1;
                this.getData();
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getData();
            },
            toDetail(id,organizationId){
                this.$router.push({path:'/recruit/detail',query:{id:id,organizationId:organizationId}});
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
    .recBg{
        background-color: #f7f7f7;
        padding:30px 0;
    }
    .recList{
        display: flex;
        flex-wrap: nowrap;
        margin-top:25px;
    }
    .recImg{
        width:260px;
        height:210px;
    }
    .recImg img{
        width:260px;
        height:210px;
        object-fit: cover;
    }
    .recInfo{
        width:730px;
        margin-left:35px;
        border-bottom:2px solid #a0a0a0;
        font-size:14px;
        color:#152b59;
    }
    .recName{
        color:#152b59;
        font-size:24px;
        font-weight: bold;
        margin:10px 0 15px 0;
    }
    .recName:hover{
        cursor:pointer;
        text-decoration: underline;
    }
    .webrecSalary{
        color:#b12b6e;
        font-size:16px;
        margin-right:15px;
    }
    .recText{
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        max-height: 125px;
    }
    
</style>
