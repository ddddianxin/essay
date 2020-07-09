<template>
    <header id='head_top'>
        <div id="mHead">
            <div class="wapTop">
                <div class="mLfBtn">
                    <img src="../../images/menu.png">
                    <span>首页</span>
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
    width:px2rem(200);
    padding-left:px2rem(40);
}
.mLfBtn img{
    width:px2rem(40);
    height: px2rem(40);
    padding-top:px2rem(26);
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
    width:px2rem(550);
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
