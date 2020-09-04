<template>
    <div class="bg">
        <head-top webActive="科研成果" webChildActive="期刊论文"></head-top>
        <div class="paperBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="科研成果" webActive="期刊论文"></side-menu>
                    <div class="paperList">
                        <div class="paperBox" v-for="(item,index) in yearList" :key="index">
                            <h2 class="yearTit f16 fb">{{item}}年</h2>
                            <div class="paperItem" v-for="(iitem,iindex) in sortList[index]" :key="iindex" @click="toSciDetail(iitem.id,iitem.organizationId)">
                                <div class="ppName">{{iindex+1}}. {{iitem.contentTitle}}</div>
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
                text:[],
                yearList:[],
                sortList:[]
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
                console.log(newList);
                this.sortList = newList;
                
            },
            
            

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .paperBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    .paperList{
        width:780px;
        padding-left:75px;
        min-height: 850px;
        display: block;
        color:#152b59;
    }
    .paperList .yearTit{
        font-weight: bold;
        color:#152b59;
    }
    .paperBox{
        margin-bottom:50px;
    }
    .paperItem{
        width:100%;
        margin-bottom:5px;
    }
    .paperNav .ppName{
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
