<template>
    <div class="bg">
        <head-top webActive="中心介绍" webChildActive="研究方向"></head-top>
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
    import headTop from '../../components/header/headTop';
    import {getStore} from '../../config/mUtils'
    import {content} from '../../service/api'
    export default {
        name: 'news',
        data(){
            return{
               cn:0,
                id:'',
                organizationId:'',
                list:'',
                titleList:[]
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
                console.log(this.titleList);
                console.log(res);
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .resBg{
        min-height:325px;//525px
        background: url('../../images/sciBg.png') no-repeat;
        background-size:100% 100%;
        text-align: center;
        padding-bottom:40px;
    }
    .resBg h3{
        text-align: center;
        font-size:30px;
        font-weight: bold;
        color:#fff;
        padding:40px 0 15px 0;
    }
    .resBg img{
        margin:10px auto;
    }
    .resTopItem{
        font-size:24px;
        color:#fff;
        padding:10px 0;
        line-height: 38px;
        display: flex;
        justify-content: center;
    }
    .resTopItem img{
        margin:0;
        padding-right:10px;
    }
   
    .ctBg{
        padding-bottom:35px;
    }
    .bgTop{
        height:528px;
        width: 100%;
        object-fit: cover;
    }
    .resText{
        font-size:16px;
        line-height: 30px;
        padding:30px 0;
    }
    

</style>
