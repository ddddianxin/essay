<template>
    <div class="bg">
        <head-top webActive="首页" webChildActive=""></head-top>
        <div class="newsBg">
            <div class="container">
                <h2 class="newsH2">{{val.contentTitle}}</h2>
                <div class="newsSource">
                    <span>{{val.createTime}}</span>
                </div>
                <div class="newsText">
                    <img class="textImg" :src="val.mainPic">
                    <div v-html="val.contentHtml"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import {getStore} from '../../config/mUtils'
    import {detailContent} from '../../service/api'
    export default {
        name: 'team',
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
            // 获取首页产品
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
                console.log(res.data);
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
        color:#152b59;
    }
    .newsSource{
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        font-size:16px;
        border-bottom:2px solid #a9a9a9;
        color:#152b59;
    }
    .newsText{
        font-size:16px;
        padding:35px 80px;
        color:#152b59;
        line-height: 36px;
    }
    .textImg{
        width:340px;
        height:260px;
        object-fit: cover;
        float:left;
        margin:0 20px 15px 0;
    }

</style>
