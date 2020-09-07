<template>
    <div class="bg">
        <head-top webActive="联系我们" webChildActive=""></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="contactBg">
            <div class="container">
                <h3>联系我们</h3>
                <span class="h3BLine"></span>
                <div class="contactText" v-html="listData.contentHtml"></div>
                <a :href="listData.mainPic" target="_blank">
                    <img class="contactImg" :src="listData.mainPic">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import {getStore} from '../../config/mUtils'
    import {contentPage} from '../../service/api'
    export default {
        name: 'recruit',
        data(){
            return{
                cn:0,
                id:'',
                rows:4,
                page:1,
                totalPage:1,
                totalRow:1,
                organizationId:'',
                listData:[]
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
                this.page = 1;
                this.getData();
            },
            async getData(){
                var res = await contentPage(
                    this.cn,
                    this.page,
                    this.rows,
                    this.organizationId,
                    this.id
                );
                this.listData = res.data.list[0];
                this.totalPage = res.data.totalPage;
                this.totalRow = res.data.totalRow;
            }
        },
        created(){

        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .bgTop{
        height:205px;
        width: 100%;
        object-fit: cover;
        display: block;
    }
    .contactBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    h3{
       font-size: 25px;
       font-weight: bold;
       color:#152b59;
       padding:5px 0 8px;
   }
   .h3BLine{
       width:70px;
       height: 3px;
       background-color: #152b59;
       display: inline-block;
   }
   .contactText{
       color:#152b59;
       font-size:18px;
       line-height: 36px;
       margin:15px 0;
   }
    
    
</style>
