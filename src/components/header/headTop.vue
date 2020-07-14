<template>
    <header id='head_top'>
        <div class="container webTop">
            <div class="navTop">
                <div class="logo">
                    <router-link to="/home">
                        <img src="../../images/logo.png">
                    </router-link>
                </div>
                <div class="search">
                    <span class="searchTit">English</span>
                    <div class="searchBox">
                        <input value="" placeholder="">
                        <button>搜索</button>
                    </div>
                </div>
            </div>
            <div class="nav">
                
                <div class="menu">
                    <span :class="webActive=='home'?'active':''">
                        <router-link to="/home">首页</router-link>
                    </span>
                    <span :class="webActive=='centerIntro'?'active newsBtn':'newsBtn'">
                        <router-link to="/centerIntro/index">中心介绍<img class="menuArrow" src="../../images/lfArrow.png"></router-link>
                        <div class="childItem">
                            <ul>
                                <li>
                                    <router-link to="/centerIntro/index">中心概况</router-link>
                                </li>
                                <li>
                                    <router-link to="/research/index">研究方向</router-link>
                                </li>
                            </ul>
                        </div>
                    </span>
                    <span :class="webActive=='news'?'active newsBtn':'newsBtn'">
                        <router-link to="/news/index">新闻动态<img class="menuArrow" src="../../images/lfArrow.png"></router-link>
                        
                        <div class="childItem">
                            <ul>
                                <li>
                                    <router-link to="/sciNews/index">科研动态</router-link>
                                </li>
                                <li>
                                    <router-link to="/sciExchange/index">学术交流</router-link>
                                </li>
                                <li>
                                    <router-link to="/centerNews/index">中心动态</router-link>
                                </li>
                            </ul>
                        </div>
                    </span>
                    <span :class="webActive=='team'?'active':''">
                        <router-link to="/team/index">科研队伍</router-link>
                    </span>
                    <span :class="webActive=='achievement'?'active':''">
                        <router-link to="/research/index">科研成果</router-link>
                    </span>
                    <span :class="webActive=='experiment'?'active':''">
                        <router-link to="/experiment/index">实验平台</router-link>
                    </span>
                    <span :class="webActive=='recruit'?'active':''">
                        <router-link to="">人才招聘</router-link>
                    </span>
                    <span :class="webActive=='contactUs'?'active':''">
                        <router-link to="">联系我们</router-link>
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    export default {
        name: 'headTop',
        data(){
            return{
                menu:['home','centerIntro','news','team','achievement','experiment','recruit','contactUs'],
            }
        },
        props: ['webActive'],
        created(){
            //获取用户信息
            //this.getUserInfo();
        },
        beforeMount(){
            //获取用户信息
            //this.getUserInfo();
        },
        mounted(){
            
            
        },
        computed: {
           
        },
        methods:{
           
            
        }

    }

</script>

<style lang="scss">
 @import '../../style/mixin';
#head_top{
    width:100%;
    text-align: center;
    background-color: #fff;
}
.navTop{
    display:flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding:20px 0 10px 0;
}

/* 搜索 */
.search{
    margin-top:25px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
}
.searchTit{
    line-height: 30px;
    color:#666;
    font-weight: bold;
    font-size: 16px;
    padding-right: 20px;
}
.searchBox{
    width:280px;
    height: 30px;
    border:2px solid #152b59;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.searchBox input{
    width: 186px;
    text-align: left;
    font-size: 16px;
    padding:0 10px
}
.searchBox button{
    width:94px;
    color:#fff;
    background-color: #152b59;
    font-size: 14px;
}

/* nav */
.logo{
    width:533px;
    height: 90px;
}
.logo img{
    width:533px;
    height: 90px;
}
.nav{
    display:flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 50px;
}
.menu{
    width:1024px;
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.menu span{
    font-size: 17px;
    color:#555;
    font-weight: bold;
}
.menu span.active{
    color:#213662;
}
.wapTop{
    width:px2rem(750);
    height: px2rem(90);
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.childItem{
    display: none;
    position:absolute;
    top:50px;
    right:-45px;
    background-color: #f2eeee;
    width:140px;
    height:auto;
}
.childItem li{
    width:140px;
    height:58px;
    line-height: 58px;
    text-align: center;
    font-size: 17px;
    color:#555;
    font-weight:bold;
}
.childItem li a{
    display: block;
    height:58px;
    line-height: 58px;
}
.childItem li:hover{
    cursor:pointer;
    color:#fff;
    background-color: rgb(176,0,125);
}
.childItem li:hover a{
    color:#fff;
}
.menuArrow{
    width:20px;
    height:20px;
    transform:rotate(270deg);
    position: absolute;
    right:-25px;
    top:18px;
}
.newsBtn{
    position: relative;
}
.newsBtn:hover{
    .childItem{
        display:block;
        z-index: 1000;
    }
    .menuArrow{
        transform:rotate(90deg);
    }

}


</style>
