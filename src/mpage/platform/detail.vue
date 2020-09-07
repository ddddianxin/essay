<template>
    <div class="m_bg">
        <head-top webActive="experiment" title="实验平台"></head-top>
        <div class="mDetail">
            <h2 class="mDetailTit">{{val.contentTitle}}</h2>
            <div class="mDetailSource">
                <span>{{val.publishTime}}</span>
                <span class="ml10" v-if="val.author">作者：{{val.author}}</span>
            </div>
            <div class="mDetailText" v-html="val.contentHtml"></div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    import {detailContent} from '../../service/api'
    import {getStore} from '../../config/mUtils'
    //var page=1
    export default {
        name: 'experiment',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                val:''
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
                var res = await detailContent(this.id,this.organizationId,this.cn);
                this.val = res.data.list[0];
            }
        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .mDetail{
        background-color:#f7f7f7;
        padding:px2rem(30);
        margin-top:px2rem(180);
    }
    .mDetailTit{
        font-size:px2rem(36);
        color:#152b59;
        text-align: center;
        margin-bottom:px2rem(40);
    }
    .mDetailSource{
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        font-size:px2rem(24);
        border-bottom:px2rem(4) solid #a9a9a9;
        color:#152b59;
    }
    .mDetailText{
        padding:px2rem(30) 0;
        line-height: px2rem(60);;
    }

</style>
