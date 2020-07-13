<template>
    <header id='head_top'>
        <div id="mHead">
            <div class="wapTop">
                <div class="mLfBtn" @click="menuShow=!menuShow">
                    <img src="../../images/menu.png">
                    <span>{{title?title:'首页'}}</span>
                </div>
                <div class="mSearch">
                    <div class="mSearBox">
                        <i class="el-icon-search"></i>
                        <input type="text" value="搜索" placeholder="搜索">
                    </div>
                    <span>English</span>
                </div>
            </div>
            <div class="mLogo">
                <img src="../../images/mlogo.png">
            </div>
        </div>
        <div class="sideMenu" v-show="menuShow">
            <div class="sideMenuIcon" @click="menuShow=!menuShow">
                <img src="../../images/menu.png">
            </div>
            <div class="sideMList">
                <div class="sideItem" @click="menuShow=!menuShow">
                    <div class="sideBtn">
                        <router-link to="/home">首页</router-link>
                    </div>
                </div>
                <div class="sideItem">
                    <div class="sideBtn" @click="ctShow = !ctShow">
                        <span>中心介绍</span>
                        <img src="../../images/lfArrow.png" :style="ctShow?'transform:rotate(90deg);':'transform:rotate(270deg);'">
                    </div>
                    <div class="sidechild" v-show="ctShow" @click="menuShow=!menuShow">
                        <router-link to="/centerIntro/index">中心概况</router-link>
                        <router-link to="">研究方向</router-link>
                    </div>
                </div>
                <div class="sideItem">
                    <div class="sideBtn" @click="newsShow = !newsShow">
                        <span>新闻动态</span>
                        <img src="../../images/lfArrow.png" :style="newsShow?'transform:rotate(90deg);':'transform:rotate(270deg);'">
                    </div>
                    <div class="sidechild" v-show="newsShow" @click="menuShow=!menuShow">
                        <router-link to="/news/index">科研动态</router-link>
                        <router-link to="/sciExchange/index">学术交流</router-link>
                        <router-link to="/centerNews/index">中心活动</router-link>
                    </div>
                </div>
                <div class="sideItem" @click="menuShow=!menuShow">
                    <div class="sideBtn">
                        <router-link to="/team/index">科研队伍</router-link>
                    </div>
                </div>
                <div class="sideItem" @click="menuShow=!menuShow">
                    <div class="sideBtn">
                        <router-link to="/home">科研成果</router-link>
                    </div>
                </div>
                <div class="sideItem" @click="menuShow=!menuShow">
                    <div class="sideBtn">
                        <router-link to="/experiment/index">实验平台</router-link>
                    </div>
                </div>
                <div class="sideItem" @click="menuShow=!menuShow">
                    <div class="sideBtn">
                        <router-link to="/home">人才招聘</router-link>
                    </div>
                </div>
                <div class="sideItem" @click="menuShow=!menuShow">
                    <div class="sideBtn">
                        <router-link to="/home">联系我们</router-link>
                    </div>
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
                menuShow:false,
                ctShow:true,
                newsShow:true,
                menu:['home','centerIntro','news','team','achievement','experiment','recruit','contactUs'],
            }
        },
        props: ['webActive','title'],
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

.sideMenu{
    position:fixed;
    top:0;
    left:0;
    width:px2rem(380);
    height:px2rem(1334);
    z-index:1000;
    color:#fff;
}
.sideMenuIcon{
    width:px2rem(80);
    height:px2rem(90);
    padding-left:px2rem(40);
    display:block;
    background-color:rgba(21,43,89,.75);
}
.sideMenuIcon img{
    width:px2rem(40);
    height: px2rem(40);
    padding-top:px2rem(26); 
    float:left;
}
.sideMList{
    background-color:rgba(21,43,89,.75);
    height:100%;
}
.sideItem{
    padding:0 px2rem(30);
    
}
.sideBtn{
    font-size:px2rem(32);
    height:px2rem(110);
    line-height: px2rem(110);
    text-align: center;
    position: relative;
    border-bottom:2px solid rgba(255,255,255,.5);
}
.sideBtn img{
    width:px2rem(40);
    height:px2rem(40);
    position:absolute;
    right:px2rem(20);
    top:px2rem(40);
}
.sidechild{
    padding:px2rem(20) 0 0 0;
}
.sidechild a{
    height:px2rem(60);
    line-height: px2rem(60);
    display:block;
    text-align: right;
}

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

/* 手机端头部 */
#mHead{
    width:100%;
    height: px2rem(180);
    position: fixed;
    top:0;
    left:0;
    background-color:#fff;
    border-bottom:1px solid #eee;
    z-index: 1000;
}
.wapTop{
    width:px2rem(750);
    height: px2rem(90);
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.mLfBtn{
    width:px2rem(250);
    padding-left:px2rem(40);
}
.mLfBtn img{
    width:px2rem(40);
    height: px2rem(40);
    padding-top:px2rem(24);
    float:left;
}
.mLfBtn span{
    font-size: px2rem(32);
    color:#555;
    font-weight:bold;
    line-height: px2rem(90);
    padding-left:px2rem(14);
    float:left;
}
.mSearch{
    width:px2rem(500);
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    display: inline-block;
    padding-right:px2rem(40);
}
.mSearBox{
    width:px2rem(126);
    height: px2rem(46);
    border:1px solid #707070;
    border-radius: 30px;
    float:right;
    margin-top:px2rem(20)
}
.mSearch span{
    width:px2rem(120);
    font-size:px2rem(24);
    float:right;
    line-height: px2rem(90);
}
.mSearBox{
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.mSearBox i{
    font-size:px2rem(34);
    padding:px2rem(6) 0 0 px2rem(6);
    width:px2rem(26);
}
.mSearBox input{
    background-color: #fff;
    font-size: px2rem(24);
    z-index:100;
    width:px2rem(88);
}
.mLogo{
    height:px2rem(90);
    background-color: #fff;
}
.mLogo img{
    height:px2rem(80);
    width:auto;
}


</style>
