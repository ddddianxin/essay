<template>
    <div class="bg">
        <head-top webActive="experiment" title="研究方向"></head-top>
        <div class="resBg">
            <h3>{{list.contentTitle}}</h3>
            <img src="../../images/whiteLine.png">
            <div class="resTopItem" v-for="(item,index) in titleList" :key="index">
                <img src="../../images/star.png">
                <span>{{item}}</span>
            </div>
        </div>
        
        <div class="ctBg">
            <div class="container">
               <div class="resText" v-html="list.contentHtml"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    import {getStore} from '../../config/mUtils'
    import {content} from '../../service/api'
    export default {
        name: 'news',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                titleList:[],
                list:''
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
                var res = await content(this.cn,this.id,this.organizationId);
                this.list = res.data.list[0];
                this.titleList = res.data.list[0].contentSubtitle.split("###");
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .resBg{
        height:px2rem(300);
        margin-top:px2rem(180);
        background: url('../../images/sciBg.png') no-repeat;
        background-size:100% 100%;
        text-align: center;
        padding-bottom:px2rem(40);
    }
    .resBg h3{
        text-align: center;
        font-size:16px;
        font-weight: bold;
        color:#fff;
        padding:px2rem(20) 0 0 0;
    }
    .resBg img{
        margin:0px auto;
        width:80%;
    }
    .resTopItem{
        font-size:12px;
        color:#fff;
        padding:0;
        line-height: px2rem(48);
        display: flex;
        justify-content: center;
    }
    .resTopItem img{
        margin:0;
        width:px2rem(20);
        object-fit: contain;
        padding-right:10px;
    }
    .ctBg{
        padding:15px px2rem(20) 35px px2rem(20);
    }
    .ctBg img{
        width:100%;
    }
    .resText{
        font-size:14px;
        line-height: px2rem(60);
    }
</style>
