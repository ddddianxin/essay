<template>
    <div class="bg">
        <head-top webActive="实验平台" webChildActive="支撑载体"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="expBg">
            <div class="container">
                <div class="lsideBox">
                    <side-menu webTitle="实验平台" webActive="支撑载体"></side-menu>
                    <div class="expList">
                        <div class="supTit">
                            <span>创新团队</span>
                        </div>
                        <div class="supInfo">
                            <div class="supText">实验室建设的内容包括：科研团队培养、实验室关联的场地建设、核心技术研发用的设备购置、核心技术研发、关键工艺的完善、科研装置和装备的研制和产业化推广等。</div>
                            <img src="../../images/labAward.jpg">
                        </div>
                        <div class="supTit">
                            <span>创新载体</span>
                        </div>
                        <div class="supInfo">
                            <div class="supText">实验室建设的内容包括：科研团队培养、实验室关联的场地建设、核心技术研发用的设备购置、核心技术研发、关键工艺的完善、科研装置和装备的研制和产业化推广等。</div>
                            <img src="../../images/labAward.jpg">
                        </div>
                        <div class="supInfo">
                            <div class="supText">实验室建设的内容包括：科研团队培养、实验室关联的场地建设、核心技术研发用的设备购置、核心技术研发、关键工艺的完善、科研装置和装备的研制和产业化推广等。</div>
                            <img src="../../images/labAward.jpg">
                        </div>
                        <div class="supTit">
                            <span>联合实验室</span>
                        </div>
                        <div class="supInfo">
                            <div class="supText">实验室建设的内容包括：科研团队培养、实验室关联的场地建设、核心技术研发用的设备购置、核心技术研发、关键工艺的完善、科研装置和装备的研制和产业化推广等。</div>
                            <img src="../../images/labAward.jpg">
                        </div>
                        <div class="supInfo">
                            <div class="supText">实验室建设的内容包括：科研团队培养、实验室关联的场地建设、核心技术研发用的设备购置、核心技术研发、关键工艺的完善、科研装置和装备的研制和产业化推广等。</div>
                            <img src="../../images/labAward.jpg">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import sideMenu from '../../components/common/sideMenu'
    import {getStore} from '../../config/mUtils'
    import {detailContent} from '../../service/api'
    export default {
        name: 'supporter',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                
            }
        },
        components:{
            headTop,sideMenu
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
                
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .expBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    .bgTop{
        height:205px;
        width: 100%;
        object-fit: cover;
        display: block;
    }
    .expList{
        width:780px;
        padding-left:30px;
        min-height: 850px;
        display: flex;
        flex-wrap: wrap;
        align-content:space-between;
    }
    .supTit{
        width:100%;
        height: 50px;
        line-height: 50px;
        color:#fff;
        font-size:22px;
        background-image: linear-gradient(45deg, #152b59, #214381);
        margin-bottom:25px;
    }
    .supTit span{
        margin:0 20px;
    }
    .supInfo{
        display:flex;
        width:780px;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-bottom:25px;
    }
    .supInfo img{
        width:300px;
        height:196px;
        object-fit: cover;
    }
    .supText{
        width:440px;
        font-size:18px;
        color:#152b59;
        line-height: 30px;
        text-indent: 40px;
    }
    
</style>
