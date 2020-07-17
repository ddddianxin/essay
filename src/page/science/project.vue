<template>
    <div class="bg">
        <head-top webActive="team"></head-top>
        <div class="teamBg">
            <div class="container">
                <div class="lsideBox">
                    <div class="lsideMenu">
                        <h3>科研队伍</h3>
                        <span class="h3BLine"></span>
                        <ul>
                            <li class="lsideMItem">
                                <span>全部</span>
                            </li>
                            <li class="lsideMItem active">
                                <span>初级职称</span>
                            </li>
                            <li class="lsideMItem">
                                <span>中级职称</span>
                            </li>
                            <li class="lsideMItem">
                                <span>高级职称</span>
                            </li>
                        </ul>
                    </div>
                    <div class="teamList">
                        <div class="teamItem" v-for="(item,index) in teamData" :key="index">    
                            <img :src="item.img">              
                            <h4 class="wto">{{item.name}}</h4>
                            <p>{{item.description}}</p>
                            <div class="tc">
                                <span class="arrow">
                                    <img src="../../images/arrow.png">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    import {getStore} from '../../config/mUtils'

    export default {
        name: 'team',
        data(){
            return{
                cn:0,
                id:'',
                organizationId:'',
                teamData:[
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    },
                    {
                        img:require('../../images/banner2.png'),
                        name:'某某姓名',
                        description:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        url:''
                    }
                ],
                
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
    .teamBg{
        background-color: #f7f7f7;
        padding:36px 0;
    }
    .teamList{
        width:780px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .teamItem{
       width:240px;
       height: 306px;
       background-color: #fff;
       margin:0 0 20px 20px;
   }
   .teamItem img{
       width:240px;
       height: 140px;
       object-fit: cover;
   }
   .teamItem h4{
       font-size: 15px;
       font-weight: bold;
       color:#333;
       padding:5px 20px 0 20px;
   }
    .teamItem p{
        font-size: 12px;
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        color:#333;
        padding:0 20px;
        margin-bottom:10px;
        height:88px;
        line-height: 22px;
    }
    .teamItem .arrow{
       width:30px;
       height: 32px;
       background-color: #152b59;
       border-radius: 30px 30px 0 0;
       display: inline-block;
       text-align: center;
    }
    .teamItem .arrow img{
       width:20px;
       height: 20px;
       padding-top:6px;
    }

</style>
