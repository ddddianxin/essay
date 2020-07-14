<template>
    <div class="bg">
        <head-top webActive="experiment" title="研究方向"></head-top>
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
                <img src="../../images/resPic.png">
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    export default {
        name: 'news',
        data(){
            return{
                
                
            }
        },
        components:{
            headTop
        },
        mounted(){
            // 获取首页产品
            this.initData();
            if(document.body.clientWidth<=1024){
                
            }
            
        },
        computed:{
        },
        methods:{
            async initData(){
                
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .resBg{
        height:px2rem(400);
        margin-top:px2rem(180);
        background: url('../../images/sciBg.png') no-repeat;
        background-size:100% 100%;
        text-align: center;
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
</style>
