<template>
    <div class="bg">
        <head-top webActive="achievement" title="科研成果"></head-top>
        <div class="webAchiBg">
            <side-menu webTitle="科研成果" webActive="专利/专著"></side-menu>
            <div class="webAchiList">
                <div class="achiT">中心自成立以来，共计授权专利XX项，申请专利XX项，成果转移转化XX项。</div>
                <div class="mAchiList">
                    <div class="mAchiPanel" v-for="(item,index) in sortTit" :key="index">
                        <div class="tit">{{item}}</div>
                        <div class="mAchiIt" v-for="(iitem,iindex) in sortList[index]" :key="iindex" @click="toSciDetail(iitem.id,iitem.organizationId)">
                            <div class="mPjIndex">{{iindex+1}}</div>
                            <div class="mPjInfo">
                                <p class="mPLTit">专利名称：{{iitem.contentTitle}}</p>
                                <div class="mPLine">
                                    <div class="mPLineLf">
                                        专利类型：{{iitem.typeName}}
                                    </div>
                                    <div class="mPLineRg">
                                        授权号：{{iitem.remark}}
                                    </div>
                                </div>
                                <div class="mPLine">
                                    <div class="mPLineLf">
                                        发明人：{{iitem.author}}
                                    </div>
                                    <div class="mPLineRg">
                                        授权日期：{{iitem.publishTime}}
                                    </div>
                                </div>
                                
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
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    import sideMenu from '../../components/mobile/sideMenu'
    import {contentPage} from '../../service/api'
    import {getStore} from '../../config/mUtils'
    export default {
        name: 'achievement',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                rows:6,
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
        created(){
            
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
            toSciDetail(id,organizationId){
                this.$router.push({path:'/science/detail',query:{id:id,organizationId:organizationId}});
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
            }
        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .webAchiBg{
        margin-top:px2rem(180);
    }
    .webAchiList{
        display: block;
        background-color: #f7f7f7;
        overflow: hidden;
        padding:px2rem(30) 0;
    }
    .achiT{
        font-size:px2rem(28);
        font-weight:bold;
        color:#152b59;
        padding:0 px2rem(30);
    }
    .mAchiList{
        padding:px2rem(30);
    }
    .mAchiList .tit{
        color:#152b59;
        font-weight: bold;
        font-size:px2rem(28);
        margin-bottom:px2rem(10);
    }
    .mAchiPanel{
        height:auto;
        display: block;
        margin-bottom:px2rem(40);
        border-bottom:px2rem(4) solid #999;
    }
    .mAchiIt{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        color:#152b59;
        font-size:14px;
        text-align: center;
        min-height: 36px;
        line-height: 36px;
        border-top:2px solid #999;
        border-left:2px solid #999;
        align-content: center;
    }
    .mAchiIt:nth-child(even){
        background-color: #e0e6f2;
    }
    .mPjIndex{
        width:px2rem(60);
        border-right:px2rem(4) solid #999;
    }
    .mPjInfo{
        width:px2rem(630);
        border-right:px2rem(4) solid #999;
        text-align: left;
        line-height: px2rem(40);
        padding:px2rem(10);
    }
    .mPLTit{
        font-size:px2rem(24);
    }
    .mPLine{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        font-size:px2rem(24);
    }
    .mPLineLf{
        width:px2rem(240);
    }
    .mPLineRg{
       width:px2rem(360);
    }
    

</style>
