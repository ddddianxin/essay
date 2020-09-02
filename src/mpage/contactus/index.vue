<template>
    <div class="bg">
        <head-top webActive="contactUs" title="联系我们"></head-top>
        <div class="ctBg">
            <div class="container">
                <div class="cmBox">
                    <div v-for="(item,index) in list" :key="index">
                        <h3 class="mcontactTit">{{item.contentTitle}}</h3>
                        <div class="tc pl15 pr15"><img class="w" src="../../images/ctTitLine.png"></div>
                        <div class="cmText" v-html="item.contentHtml"></div>
                        <div class="picShow">
                            <img :src="item.mainPic">
                        </div>
                    </div>
                </div>
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
                this.list = res.data.list;
            }

        },
        created(){


        }, 
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .bg{
        background-color:#fff;
        margin-top:px2rem(180);
    }
    .bgTop{
        height:px2rem(400);
        width: px2rem(750);
        object-fit: cover;
        margin-top:px2rem(180);
        text-align: center;
    }
    .cmBox{
        width:100%;
    }
    .mcontactTit{
       color:#152b59;
       padding:px2rem(40) 0 px2rem(30) 0;
       font-size: px2rem(36);
       font-weight: bold;
       text-align: center;
    }
    .cmText{
        color:#152b59;
        font-size:px2rem(28);
        line-height: px2rem(56);
        margin:px2rem(30) 0 px2rem(40) 0;
        padding:0 px2rem(40) 0 ;
    }
    .picShow{
        padding:px2rem(30);
        display:block;
    }   
    .picShow img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }    

</style>
