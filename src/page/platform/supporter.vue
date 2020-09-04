<template>
    <div class="bg">
        <head-top webActive="实验平台" webChildActive="支撑载体"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="expBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="实验平台" webActive="支撑载体"></side-menu>
                    <div class="expList">
                        <div v-for="(item,index) in sortTit" :key="index">
                            <div class="supTit">
                                <span>{{item}}</span>
                            </div>
                            <div class="supInfo" v-for="(iitem,iindex) in listData" :key="iindex" v-if="iitem.typeName==item" @click="toDetail(iitem.id,iitem.organizationId)">
                                <div class="supText">
                                    <p class="fb tit">{{iitem.contentTitle}}</p>
                                    <p>{{iitem.plainText}}</p>
                                </div>
                                <img :src="iitem.mainPic">
                            </div>
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
    import {getStore} from '../../config/mUtils'
    import {contentPage} from '../../service/api'
    export default {
        name: 'supporter',
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
                sortList:[],
                sortTit:[]
                
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

                var sortArr = [];
                for(var i=0;i<this.listData.length;i++){
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
            },
            toDetail(id,organizationId){
                this.$router.push({path:'/platform/detail',query:{id:id,organizationId:organizationId}});
            }
        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .expBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    .bgTop{
        height:205px;
        width: 100%;
        object-fit: cover;
        display: block;
    }
    .expList{
        width:780px;
        padding-left:30px;
        min-height: 850px;
    }
    .supTit{
        width:100%;
        height: 50px;
        line-height: 50px;
        color:#fff;
        font-size:22px;
        background-image: linear-gradient(45deg, #152b59, #214381);
        margin-bottom:25px;
    }
    .supTit span{
        margin:0 20px;
    }
    .supInfo{
        display:flex;
        width:780px;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-bottom:25px;
    }
    .supInfo img{
        width:300px;
        height:196px;
        object-fit: cover;
    }
    .supText{
        width:440px;
        font-size:18px;
        color:#152b59;
        line-height: 28px;
        text-indent: 40px;
        height: 200px;
        overflow: hidden;
    }
    .supText .tit:hover{
        cursor:pointer;
        text-decoration: underline;
    }
    
</style>
