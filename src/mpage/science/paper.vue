<template>
    <div class="m_bg">
        <head-top webActive="achievement" title="科研成果"></head-top>
        <div class="webAchiBg">
            <side-menu webTitle="科研成果" webActive="期刊论文"></side-menu>
            <div class="webAchiList">
                <div class="mAchiList">
                    <div class="mpaperBox" v-for="(item,index) in yearList" :key="index">
                        <h2 class="yearTit f16 fb">{{item}}年</h2>
                        <div class="mpaperItem" v-for="(iitem,iindex) in sortList[index]" :key="iindex" @click="toSciDetail(iitem.id,iitem.organizationId)">
                            <div class="mppName">{{iindex+1}}. {{iitem.contentTitle}}</div>
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
                rows:8,
                page:1,
                totalPage:1,
                totalRow:1,
                listData:[],
                text:[],
                yearList:[],
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

                var newList=[];
                for(var i = 0 ; i < hash.length ;i++){
                    var valList=[];
                    for(var j = 0 ; j< this.listData.length ; j++){
                        if(hash[i]==this.listData[j].year){
                            valList.push(this.listData[j]);
                        }
                    }
                    newList.push(valList);
                }
                this.sortList = newList;
            },
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
        padding-bottom:px2rem(30);
    }
    .mAchiList{
        padding:px2rem(30);
    }
    .mAchiList .yearTit{
        color:#152b59;
        font-weight: bold;
        font-size:px2rem(32);
        margin-bottom:px2rem(10);
    }
    .mpaperBox{
        margin-bottom:px2rem(40);
    }
    .mpaperItem{
        width:100%;
        margin-bottom:px2rem(10);
    }
    .mppName{
        font-size:px2rem(28);
        display:block;
        color:#152b59;
        line-height: px2rem(44);
    }
    .mppName:hover{
        color:#b12b6e;
        cursor:pointer;
    }

    

</style>
