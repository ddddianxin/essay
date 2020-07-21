<template>
    <div class="bg">
        <head-top webActive="news"></head-top>
        <div class="sciNewsBg">
            <div class="sciSearch">
                <h2>科研动态</h2>
                <div class="sSearch">
                    <div class="sSearBox">
                        <i class="el-icon-search"></i>
                        <input type="text" value="搜索" placeholder="搜索动态">
                    </div>
                </div>
            </div>
            <div class="sciNewsList">
                <div class="sciNewsItem" v-for="(item,index) in listData" :key="index">               
                    <div class="sciNewsInfo">
                        <p>{{item.contentTitle}}</p>
                    </div>
                    <div class='sciNewsDate'>{{item.publishTime}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    import {contentPage} from '../../service/api'
    import {getStore} from '../../config/mUtils'
    export default {
        name: 'news',
        data(){
            return{
                cn:0,
                id:'',
                rows:9,
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
            // 获取首页产品
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
            toNewsDetail(id){
                this.$router.push({path:'/news/detail',query:{id:id,organizationId:this.organizationId}});
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
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .sciSearch{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding:0 px2rem(40);
        background-color: #152b59;
    }
    .sciSearch h2{
        color:#fff;
        height: px2rem(80);
        line-height: px2rem(80);
        font-weight: bold;
        font-size:px2rem(32);
    }
    .sSearch{
        width:px2rem(440);
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        display: inline-block;
    }
.sSearBox{
    width:px2rem(440);
    height: px2rem(40);
    background-color: #fff;
    border:1px solid #707070;
    border-radius: 30px;
    float:right;
    margin-top:px2rem(20);
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.sSearBox i{
    font-size:px2rem(34);
    padding:px2rem(4) 0 0 px2rem(10);
    width:px2rem(40);
}
.sSearBox input{
    background-color: #fff;
    font-size: px2rem(24);
    z-index:100;
    width:px2rem(400);
    text-align: right;
    padding:0 px2rem(20);
}


    .sciNewsBg{
        margin-top:px2rem(180);
    }
    .sciNewsList{
        display: block;
        padding:0 px2rem(40);
        background-color: #fff;
    }
    .sciNewsItem{
        border-bottom:1px dashed #ddd;
        padding:px2rem(20) 0;
    }
    .sciNewsInfo{
        width:100%;
    }
    .sciNewsInfo p{
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        font-size:px2rem(24);
        color:#333;
        line-height: px2rem(40);
    }
    .sciNewsDate{
        font-size:px2rem(24);
        line-height: px2rem(40);
        width:100%;
        text-align: right;
    }
    

</style>
