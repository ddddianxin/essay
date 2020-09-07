<template>
    <div class="bg">
        <head-top webActive="科研成果" webChildActive="专利/专著"></head-top>
        <div class="teamBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="科研成果" webActive="专利/专著"></side-menu>
                    <div class="sciList">
                        <div class="sciPanel" v-for="(item,index) in sortTit" :key="index">
                            <div class="tit">{{item}}</div>
                            <div class="sciIt sciNav">
                                <div class="ptIndex">序号</div>
                                <div class="ptNumber">授权号</div>
                                <div class="ptName">专利名称</div>
                                <div class="ptAuthor">发明人</div>
                                <div class="ptType">专利类型</div>
                                <div class="ptDate">授权日期</div>
                            </div>
                            <div class="sciIt" v-for="(iitem,iindex) in sortList[index]" :key="iindex" @click="toSciDetail(iitem.id,item.organizationId)">
                                <div class="ptIndex">{{iindex+1}}</div>
                                <div class="ptNumber">{{iitem.remark}}</div>
                                <div class="ptName">{{iitem.contentTitle}}</div>
                                <div class="ptAuthor">{{iitem.author}}</div>
                                <div class="ptType">{{iitem.typeName}}</div>
                                <div class="ptDate">{{iitem.publishTime}}</div>
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
                rows:10,
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
            toSciDetail(id,organizationId){
                this.$router.push({path:'/science/detail',query:{id:id,organizationId:organizationId}});
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getData();
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
                this.sortList = newList;
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
    .ptIndex{
        width:68px;
        border-right:2px solid #999;
    }
    .ptNumber{
        width:170px;
        border-right:2px solid #999;
    }
    .ptName{
        width:240px;
        border-right:2px solid #999;
    }
    .ptName:hover{
        text-decoration: underline;
        cursor:pointer;
    }
    .ptAuthor{
        width:86px;
        border-right:2px solid #999;
    }
    .ptType{
        width:86px;
        border-right:2px solid #999;
    }
    .ptDate{
        width:100px;
        border-right:2px solid #999;
    }
    
    

</style>
