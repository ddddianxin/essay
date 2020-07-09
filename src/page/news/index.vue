<template>
    <div class="bg">
        <head-top webActive="news"></head-top>
        <img class="bgTop" src="../../images/bgTop.png">
        <div class="newsBg">
            <div class="container">
                <div class="teamBox">
                    <div class="teamMenu">
                        <h3>学术交流</h3>
                        <span class="h3BLine"></span>
                        <ul>
                            <li class="teamMItem">
                                <span>分类一</span>
                            </li>
                            <li class="teamMItem active">
                                <span>分类二</span>
                            </li>
                            <li class="teamMItem">
                                <span>分类三</span>
                            </li>
                            <li class="teamMItem">
                                <span>分类四</span>
                            </li>
                        </ul>
                    </div>
                    <div class="newsList">
                        <div class="newsItem" v-for="(item,index) in newsData" :key="index">               
                            <div class="newsInfo">
                                <h2>{{item.title}}</h2>
                                <p>{{item.des}}</p>
                            </div>
                            <div class='newsDate'>{{item.date}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/headTop';
    export default {
        name: 'news',
        data(){
            return{
                newsData:[
                    {
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    }

                ]
                
            }
        },
        components:{
            headTop
        },
        mounted(){
            // 获取首页产品
            this.initData();
            if(document.body.clientWidth<=1024){
                
            }
            
        },
        computed:{
        },
        methods:{
            async initData(){
                
            }

        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .newsBg{
        padding:36px 0;
    }
    .bgTop{
        height:205px;
        width: 100%;
        object-fit: cover;
    }
    .teamBox{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .teamMenu{
        width:240px;
        height:850px;
        background-image: linear-gradient( #162a59, #530760);
    }
   .teamMenu h3{
       margin:30px 0 0 20px;
       color:#fff;
       font-weight: bold;
       font-size: 25px;

   }
   .teamMenu .h3BLine{
       width:70px;
       height: 3px;
       display: inline-block;
       background-color: #fff;
       margin-left: 20px;
   }
   .teamMItem{
       height: 84px;
       line-height: 84px;
   }
   .teamMItem.active{
       background-color:#fff;
   }
    .teamMItem.active span{
        color:#152b59;
    }
    .teamMItem span{
        display: block;
        color:#fff;
        font-size:16px;
        font-weight: bold;
        margin:0 20px;
        border-bottom:2px solid #5b4b7e;
    }
    .teamMItem span:hover{
        cursor:pointer;
    }
    .newsList{
        width:760px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .newsItem{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        border-bottom:1px solid #ddd;
        padding:15px 0;
        
    }
    .newsInfo{
        width:646px;
    }
    .newsInfo h2{
        font-size:16px;
        font-weight: bold;
        color:#333;
        margin-bottom:5px;
        line-height: 20px;;
    }
    .newsInfo h2:hover{
        cursor:pointer;
        color:#152b59;
    }
    .newsInfo p{
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        font-size:12px;
        color:#666;
    }
    .newsDate{
        line-height: 50px;
        width:90px;
        text-align: right;
    }
    

</style>
