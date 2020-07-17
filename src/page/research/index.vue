<template>
    <div class="bg">
        <head-top webActive="centerIntro"></head-top>
        <div class="resBg">
            <h3>研究方向</h3>
            <img src="../../images/whiteLine.png">
            <div class="resTopItem">
                <img src="../../images/star.png">
                <span>仿生触觉与柔性传感</span>
            </div>
            <div class="resTopItem">
                <img src="../../images/star.png">
                <span>微流控与体外诊断</span>
            </div>
            <div class="resTopItem">
                <img src="../../images/star.png">
                <span>微流控与体外诊断</span>
            </div>
            <div class="resTopItem">
                <img src="../../images/star.png">
                <span>微流控与体外诊断</span>
            </div>
            <div class="resTopItem">
                <img src="../../images/star.png">
                <span>微流控与体外诊断</span>
            </div>
        </div>
        
        <div class="ctBg">
            <div class="container">
                <img class="mt30" src="../../images/resPic.png">
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import {getStore} from '../../config/mUtils'
    export default {
        name: 'news',
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
    .resBg{
        height:525px;
        background: url('../../images/sciBg.png') no-repeat;
        background-size:100% 100%;
        text-align: center;
    }
    .resBg h3{
        text-align: center;
        font-size:30px;
        font-weight: bold;
        color:#fff;
        padding:80px 0 15px 0;
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
    

</style>
