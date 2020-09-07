<template>
    <div class="m_bg">
        <head-top webActive="experiment" title="实验平台"></head-top>
        <div class="webTeamBg">
            <side-menu webTitle="实验平台" webActive="支撑载体"></side-menu>
            <div class="webTeamList">
                <div class="mSupList">
                    <div v-for="(item,index) in sortTit" :key="index">
                        <div class="mSupTit">
                            <span>{{item}}</span>
                        </div>
                        <div class="mSupInfo" v-for="(iitem,iindex) in sortList[index]" :key="iindex" @click="toDetail(iitem.id,iitem.organizationId)">
                            <img :src="iitem.mainPic">
                            <div class="mSupText" style="-webkit-box-orient: vertical;">
                                <p>{{iitem.plainText}}</p>
                            </div>
                        </div>
                    </div>
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
    //var page=1
    export default {
        name: 'experiment',
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
    .webTeamBg{
        margin-top:px2rem(180);
    }
    .mSupList{
        width:100%;
    }
    .mSupTit{
        display:inline-block;
        color:#152b59;
        font-size:px2rem(28);
        font-weight:bold;
        border-bottom:px2rem(4) solid #152b59;
        padding:0 0 px2rem(10) 0;
        margin:px2rem(30) 0 0 px2rem(30);
    }
    .mSupInfo{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin:px2rem(30) px2rem(30) 0 px2rem(30);
        padding-bottom:px2rem(30);
        border-bottom:px2rem(4) dashed #ddd;
    }
    .mSupInfo img{
        width:px2rem(240);
        height:px2rem(160);
        object-fit: cover;
    }
    .mSupText{
        width:auto;
        font-size:px2rem(24);
        padding-left:px2rem(30);
        color:#152b59;
        line-height: px2rem(42);
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    .mSupText .tit:hover{
        cursor:pointer;
        text-decoration: underline;
    }
    

</style>
