<template>
    <div class="bg">
        <head-top webActive="experiment"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="expBg">
            <div class="container">
                <div class="supTit">
                    <span>创新团队</span>
                </div>
                <div class="supInfo">
                    <img src="../../images/banner2.png">
                    <div class="supText">实验室建设的内容包括：科研团队培养、实验室关联的场地建设、核心技术研发用的设备购置、核心技术研发、关键工艺的完善、科研装置和装备的研制和产业化推广等。</div>
                </div>
                <div class="supTit">
                    <span>创新载体</span>
                </div>
                <div class="supInfo">
                    <img src="../../images/banner2.png">
                    <div class="supText">实验室建设的内容包括：科研团队培养、实验室关联的场地建设、核心技术研发用的设备购置、核心技术研发、关键工艺的完善、科研装置和装备的研制和产业化推广等。</div>
                </div>
                <div class="supInfo">
                    <img src="../../images/banner2.png">
                    <div class="supText">实验室建设的内容包括：科研团队培养、实验室关联的场地建设、核心技术研发用的设备购置、核心技术研发、关键工艺的完善、科研装置和装备的研制和产业化推广等。</div>
                </div>
                <div class="supTit">
                    <span>联合实验室</span>
                </div>
                <div class="supInfo">
                    <img src="../../images/banner2.png">
                    <div class="supText">实验室建设的内容包括：科研团队培养、实验室关联的场地建设、核心技术研发用的设备购置、核心技术研发、关键工艺的完善、科研装置和装备的研制和产业化推广等。</div>
                </div>
                <div class="supInfo">
                    <img src="../../images/banner2.png">
                    <div class="supText">实验室建设的内容包括：科研团队培养、实验室关联的场地建设、核心技术研发用的设备购置、核心技术研发、关键工艺的完善、科研装置和装备的研制和产业化推广等。</div>
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
        name: 'supporter',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                
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
        margin-bottom:40px;
    }
    .supTit{
        width:100%;
        height: 50px;
        line-height: 50px;
        color:#fff;
        font-size:22px;
        background-image: linear-gradient(90deg, #162c5a, #2d559d);
        margin-bottom:25px;
    }
    .supTit span{
        margin:0 20px;
    }
    .supInfo{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-bottom:25px;
    }
    .supInfo img{
        width:333px;
        height:222px;
        object-fit: cover;
    }
    .supText{
        width:656px;
        font-size:18px;
        color:#666;
        line-height: 30px;
    }
    
</style>
