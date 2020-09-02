<template>
    <div class="bg">
        <head-top webActive="recruit" title="人才招聘"></head-top>
        <div class="mDetail">
            <h2 class="mDetailTit">{{val.contentTitle}}</h2>
            <div class="mDetailRecSource">
                <div>
                    <span class="recSalary">{{val.contentSubtitle}}</span>
                    <span class="recExp">{{val.remark}}</span> 
                </div>
                <span>{{val.publishTime}}</span>
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
        name: 'news',
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
                console.log(res);
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
    .mDetailRecSource{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        font-size:px2rem(24);
        border-bottom:px2rem(4) solid #a9a9a9;
        color:#152b59;
    }
    .mDetailText{
        padding:px2rem(30) 0;
        line-height: px2rem(60);;
    }
    .recSalary{
        color:#b12b6e;
        margin-right:px2rem(30);
        font-size:px2rem(28);
    }


</style>
