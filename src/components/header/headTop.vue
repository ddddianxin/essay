<template>
    <header id='head_top'>
        <div class="container webTop">
            <div class="search">
                <span class="searchTit">English</span>
                <div class="searchBox">
                    <input value="" placeholder="">
                    <button>搜索</button>
                </div>
            </div>
            <div class="nav">
                <div class="logo">
                    <router-link to="/home">
                        <img src="../../images/logo.png">
                    </router-link>
                </div>
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
                                <li>科研动态</li>
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
                        <router-link to="">科研成果</router-link>
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
            ...mapState([
                'userInfo','cartList','login'
            ])
        },
        methods:{
            ...mapMutations([
                'OUT_LOGIN'
            ]),
            ...mapActions([
                'getUserInfo','initCart'
            ])
            
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
    width:126px;
    height: 102px;
}
.logo img{
    width:126px;
    height: 102px;
}
.nav{
    display:flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 102px;
}
.menu{
    width:814px;
    height: 102px;
    line-height: 102px;
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
.newsBtn{
    position: relative;
}
.childItem{
    display: none;
    position:absolute;
    top:102px;
    right:-35px;
    background-color: #f2eeee;
    width:140px;
    height:auto;
}
.childItem li{
    height:58px;
    line-height: 58px;
    text-align: center;
    font-size: 17px;
    color:#555;
    font-weight: bold;
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
    top:40px;
}
.newsBtn:hover{
    .childItem{
        display:block;
    }
    .menuArrow{
        transform:rotate(90deg);
    }

}


</style>
