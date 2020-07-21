<template>
    <div class="bg">
        <head-top webActive="team"></head-top>
        <div class="newsBg">
            <div class="container">
                <h2 class="newsH2">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h2>
                <div class="newsSource">
                    <span>2020年04月23日</span>
                </div>
                <div class="newsText">
                    <img class="textImg" src="../../images/banner2.png">
                    弗兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是兰克打飞机克里斯防静电凯撒疯了发来的开始减肥看来都是就发甲方枯鲁杜鹃是开发
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import {getStore} from '../../config/mUtils'

    export default {
        name: 'team',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                
                
            }
        },
        components:{
            headTop
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
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .newsBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    .newsH2{
        text-align:center;
        font-size:30px;
        line-height: 40px;
        margin:20px 0 60px 0;
    }
    .newsSource{
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        font-size:16px;
        border-bottom:2px solid #a9a9a9;
    }
    .newsText{
        font-size:16px;
        padding:35px 80px;
    }
    .textImg{
        width:340px;
        height:260px;
        object-fit: cover;
        float:left;
        margin:0 20px 15px 0;
    }

</style>
