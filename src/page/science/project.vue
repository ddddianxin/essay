<template>
    <div class="bg">
        <head-top webActive="科研成果" webChildActive="科研项目"></head-top>
        <div class="teamBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="科研成果" webActive="科研项目"></side-menu>
                    <div class="sciList">
                        <div class="sciPanel" v-for="(item,index) in sortTit" :key="index">
                            <div class="tit">{{item}}</div>
                            <div class="sciIt sciNav">
                                <div class="pjIndex">序号</div>
                                <div class="pjType">项目类别</div>
                                <div class="pjName">项目名称</div>
                                <div class="pjRespon">项目负责人</div>
                            </div>
                            <div class="sciIt" v-for="(iitem,iindex) in sortList[index]" :key="iindex" @click="toSciDetail(iitem.id)">
                                <div class="pjIndex">{{iindex+1}}</div>
                                <div class="pjTypeTit">{{iitem.contentSubtitle}}</div>
                                <div class="pjTypeName">{{iitem.typeName}}</div>
                                <div class="pjName" @click="toSciDetail(iitem.id)">{{iitem.contentTitle}}</div>
                                <div class="pjRespon">{{iitem.author}}</div>
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
                sortTit:[],
                sortList:[]
                
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

                var sortArr=[];
                for(var i =0 ; i < this.listData.length ; i++){
                    sortArr[i]=this.listData[i].typeName;
                }

                //去除数组相同值
                let hash=[];
                for (let i = 0; i < sortArr.length; i++) {
                    if(hash.indexOf(sortArr[i]) === -1){
                        hash.push(sortArr[i]);
                    }
                }
                console.log(hash);
                this.sortTit = hash;
                var newList=[];
                for(var i = 0 ; i < hash.length ;i++){
                    var valList=[];
                    for(var j = 0 ; j< this.listData.length ; j++){
                        if(hash[i]==this.listData[j].typeName){
                            valList.push(this.listData[j]);
                        }
                    }
                    newList.push(valList);
                }
                console.log(newList);
                this.sortList = newList;
            },
            toSciDetail(id){
                this.$router.push({path:'/science/detail',query:{id:id,organizationId:this.organizationId}});
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
        padding-left:20px;
        min-height: 850px;
    }
    .sciList .tit{
        color:#152b59;
        font-weight: bold;
        font-size:16px;
        margin-bottom:20px;
    }
    .sciPanel{
        height:auto;
        display: block;
        margin-bottom:30px;
    }
    .sciIt{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        color:#152b59;
        font-size:14px;
        text-align: center;
        min-height: 36px;
        line-height: 36px;
        border-bottom:2px solid #999;
        border-left:2px solid #999;
        align-content: center;
    }
    .sciIt:nth-child(odd){
        background-color: #e0e6f2;
    }
    .sciNav{
        background-color:#152b59 !important;
        color:#fff;
        font-size:16px;
        height: 44px;
        line-height: 44px;
        border-top:2px solid #999;
    }
    .pjIndex{
        width:68px;
        border-right:2px solid #999;
    }
    .pjType{
        width:270px;
        border-right:2px solid #999;
    }
    .pjName{
        width:260px;
        border-right:2px solid #999;
    }
    .pjName:hover{
        text-decoration: underline;
        cursor:pointer;
    }
    .pjRespon{
        width:150px;
        border-right:2px solid #999;
    }
    .pjTypeTit{
        width:100px;
        border-right:2px solid #999;
    }
    .pjTypeName{
        width:170px;
        border-right:2px solid #999;
    }
    
    

</style>
