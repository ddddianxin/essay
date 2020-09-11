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
                        <div class="info" style="-webkit-box-orient: vertical;" v-html="this.valArr[0]"></div>
                    </div>
                </div>
                <div class="desNav">
                    <span :class="tab==1?'active':''" @click="clickTab(1)">个人简介</span>
                    <span :class="tab==2?'active':''" @click="clickTab(2)">代表性项目</span>
                    <span :class="tab==3?'active':''" @click="clickTab(3)">代表性成果</span>
                    <span v-if="plainArr[7]=='团队成员'" :class="tab==4?'active':''" @click="clickTab(4)">团队成员</span>
                </div>
                <div class="desPanel">
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
        color:#152b59;
    }
    .desInfo h3{
        font-size:28px;
        margin:30px 0 20px 0;
    }
    .desInfo .info{
        font-size:18px;
        margin-bottom:10px;
        line-height: 36px;;
        overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
    }
    .desNav{
        display:flex;
        flex-wrap: nowrap;
        margin-top:45px;
    }
    .desNav span{
        font-size:18px;
        color:#fff;
        padding:0 40px;
        display: inline-block;
        background-color: #152b59;
        height: 50px;
        line-height: 50px;
        margin-right:25px;
    }
    .desNav span.active{
        background-color: #fff;
        color:#152b59;
    }
    .desNav span:hover{
        cursor: pointer;
    }
    .desPanel{
        font-size:16px;
        background-color: #fff;
        padding:30px 80px;
        color:#152b59;
        line-height: 36px;
    }
    

</style>
