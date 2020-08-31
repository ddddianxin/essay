<template>
    <div class="bg">
        <head-top webActive="team"></head-top>
        <div class="teamBg">
            <div class="container">
                <div class="desTop">
                    <div class="desImg">
                        <img :src="val.mainPic">
                    </div>
                    <div class="desInfo">
                        <h3>{{val.contentTitle}}</h3>
                        <p>{{val.plainText}}</p>
                    </div>
                </div>
                <div class="desNav">
                    <span class="active">个人简介</span>
                    <span>代表性项目</span>
                    <span>代表性成果</span>
                    <span>团队成员</span>
                </div>
                <div class="desPanel" v-html="val.contentHtml"></div>
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
            if(document.body.clientWidth<=1024){
                
            }
            
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
    .teamBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    .desTop{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .desImg{
        width:200px;
        height:240px;
    }
    .desImg img{
        width:200px;
        height:240px;
        object-fit:cover;
    }
    .desInfo{
        width:824px;
        padding-left:30px;
        color:#666;
    }
    .desInfo h3{
        font-size:30px;
        margin:30px 0 20px 0;
    }
    .desInfo p{
        font-size:18px;
        margin-bottom:10px;
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 7 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
    }
    .desNav{
        display:flex;
        flex-wrap: nowrap;
        margin-top:45px;
    }
    .desNav span{
        font-size:18px;
        color:#666;
        padding:0 40px;
        display: inline-block;
        background-color: #c3c3c3;
        height: 50px;
        line-height: 50px;
        margin-right:25px;
    }
    .desNav span.active{
        background-color: #fff;
    }
    .desNav span:hover{
        cursor: pointer;
        color:#152b59;
    }
    .desPanel{
        font-size:16px;
        color:#666;
        background-color: #fff;
        padding:30px 80px;
    }
    

</style>
