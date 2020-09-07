<template>
    <div class="m_bg">
        <head-top webActive="news" title="科研队伍"></head-top>
        <div class="mDetail">
            <div class="mdesTop">
                <div class="mdesImg">
                    <img :src="val.mainPic">
                </div>
                <div class="mdesInfo">
                    <h3>{{val.contentTitle}}</h3>
                    <div class="info" v-html="this.valArr[0]"></div>
                </div>
            </div>
            <div class="mdesNav">
                <span :class="tab==1?'active':''" @click="clickTab(1)">个人简介</span>
                <span :class="tab==2?'active':''" @click="clickTab(2)">代表性项目</span>
                <span :class="tab==3?'active':''" @click="clickTab(3)">代表性成果</span>
                <span :class="tab==4?'active':''" @click="clickTab(4)">团队成员</span>
            </div>
            <div class="mdesPanel">
                <div v-if="tab==1">
                    <div v-html="this.valArr[1]"></div>
                    <div v-html="this.valArr[2]"></div>
                </div>
                <div v-if="tab==2">
                    <div v-html="this.valArr[3]"></div>
                    <div v-html="this.valArr[4]"></div>
                </div>
                <div v-if="tab==3">
                    <div v-html="this.valArr[5]"></div>
                    <div v-html="this.valArr[6]"></div>
                </div>
                <div v-if="tab==4">
                    <div v-html="this.valArr[7]"></div>
                    <div v-html="this.valArr[8]"></div>
                </div>
            </div>
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
                tab:1,
                organizationId:'',
                val:'',
                valArr:'',
                plainArr:'',
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
                this.valArr = this.val.contentHtml.split("###");
                this.plainArr = this.val.plainText.split("###");
            },
            clickTab(tabNum){
                this.tab = tabNum;
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
    .mdesTop{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .mdesImg{
        width:px2rem(200);
        height:px2rem(240);
    }
    .mdesImg img{
        width:px2rem(200);
        height:px2rem(240);
        object-fit:cover;
    }
    .mdesInfo{
        width:px2rem(590);
        color:#152b59;
        padding-left:px2rem(30);
    }
    .mdesInfo h3{
        font-size:px2rem(36);
        color:#152b59;
        margin-bottom:px2rem(30);
    }
    .mdesInfo .info{
        font-size:px2rem(28);
        line-height: px2rem(50);
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 3 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        max-height: px2rem(160);
    }
    .mdesNav{
        display:flex;
        flex-wrap: nowrap;
        margin-top:px2rem(40);
    }
    .mdesNav span{
        font-size:px2rem(24);
        color:#fff;
        padding:0 px2rem(20);
        display: inline-block;
        background-color: #152b59;
        height: px2rem(50);
        line-height:px2rem(50);
        margin-right:px2rem(20);
    }
    .mdesNav span.active{
        background-color: #fff;
        color:#152b59;
    }
    .mdesNav span:hover{
        cursor: pointer;
    }
    .mdesPanel{
        font-size:px2rem(28);
        background-color: #fff;
        padding:px2rem(40) px2rem(30);
        color:#152b59;
        line-height: px2rem(56);
    }

</style>
