<template>
    <div class="m_bg">
        <head-top webActive="experiment" title="研究方向"></head-top>
        <div class="m_resTopBg" :style="{background: 'url(' + bgImg + ') no-repeat'}">
            <div class="m_resH3">{{list.contentTitle}}</div>
            <div class="m_resTopImg">
                <img src="../../images/whiteLine.png">
            </div>
            <div class="m_resTopItem" v-for="(item,index) in titleList" :key="index">
                <img src="../../images/star.png">
                <span>{{item}}</span>
            </div>
        </div>
        
        <div class="m_ctBg">
            <div class="container">
               <div class="m_resText" v-html="list.contentHtml"></div>
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
                list:'',
                bgImg:require('../../images/sciBg.png')
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
    .m_resTopBg{
        height:px2rem(300);
        margin-top:px2rem(180);
        //background: url('../../images/sciBg.png') no-repeat;
        // background-size:100% 100%;
        background-size: cover;
        text-align: center;
        padding-bottom:px2rem(40);
    }
    .m_resH3{
        text-align: center;
        display: block;
        font-size:16px;
        font-weight: bold;
        color:#fff;
        padding:px2rem(20) 0 0 0;
    }
    .m_resTopImg{
        display:block;
    }
    .m_resTopImg img{
        margin:0px auto;
        width:80%;
    }
    .m_resTopItem{
        font-size:12px;
        color:#fff;
        padding:0;
        line-height: px2rem(48);
        display: flex;
        justify-content: center;
    }
    .m_resTopItem img{
        margin:0;
        width:px2rem(20);
        object-fit: contain;
        padding-right:10px;
    }
    .m_ctBg{
        padding:15px px2rem(20) 35px px2rem(20);
    }
    .m_ctBg img{
        width:100%;
    }
    .m_resText{
        font-size:14px;
        line-height: px2rem(60);
    }
</style>
