<template>
    <div id='foot'>
        <div class="fBox">
            <div :class="menuActive=='home'?'fItem active':'fItem'">
                <router-link to="/home">
                    <i class="el-icon-s-home icon" ></i>
                    <span>首页</span>
                </router-link>
            </div>
            <div :class="menuActive=='sort'?'fItem active':'fItem'">
                <router-link to="/sort/sort">
                    <i class="el-icon-menu icon"></i>
                    <span>分类</span>
                </router-link>
            </div>
            <div :class="menuActive=='cart'?'fItem active':'fItem'">
                <router-link to="/cart/cart">
                    <i class="el-icon-shopping-cart-1 icon"></i>
                    <span>购物车</span>
                </router-link>
            </div>
            <div :class="menuActive=='message'?'fItem active':'fItem'" @click="toMessage">
                <i class="el-icon-chat-dot-round icon"></i>
                <span>消息</span>
<!--                <el-badge is-dot class="item">-->
<!--                    <i class="el-icon-chat-dot-round icon"></i>-->
<!--                    <span>消息</span>-->
<!--                </el-badge>-->
            </div>
            <div :class="menuActive=='mine'?'fItem active':'fItem'">
                <router-link to="/userCenter/index/index">
                    <i class="el-icon-user icon"></i>
                    <span>我的</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    import {wxjssdk} from '../../service/api';
    import wxapi from '../../service/wxapi.js';
    export default {
        name: 'navFoot',
    	data(){
            return{
                menu:['home','sort','cart','message','mine'],
            }
        },
        props: ['menuActive'],
        computed: {
            ...mapState([
                'userInfo','login'
            ]),

        },
        mounted(){
            //获取用户信息
            this.getUserInfo();

        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
            async initData(){
                var url=encodeURIComponent(location.href.split('#')[0]);
                var data = await wxjssdk(url);
                //http://www.huaxuejia.cn/Public/home/images/logo.jpg
                var option = {
                    title:window.location.title?window.location.title:'六摩尔直营商城 www.sixmol.com',
                    desc:'主营医药中间体、原料药、化妆品高端原料、日化清洗行业原材料，包括进出口国际贸易业务。',
                    link:window.location.href,
                    imgUrl:'http://www.huaxuejia.cn/Public/home/images/logo.jpg'
                }
                wxapi.wxRegister(data,option);//data是微信配置信息，option是分享要配置的内容

            },
            toMessage(){
                if (this.userInfo && this.userInfo.user_id){
                    this.$router.push({path:"/userCenter/message/message"})
                }else{
                    this.$message({
                        message: '请先登录',
                        type: 'warning'
                    });
                }
            }
        },
        created(){
            this.initData();
        }
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    #foot{
        width:100%;
        height: px2rem(104);
        position: fixed;
        bottom:0;
        left:0;
        background-color:$colorwhite;
        border-top:1px solid #eee;
        z-index: 1000;
    }
    .fBox{
        width: 100%;
        display: flex;
        flex-wrap:nowrap;
        justify-content: space-around;
        padding-top:px2rem(10);
    }
    .fItem{
        width:px2rem(160);
        height:px2rem(104);
        font-size:px2rem(24);
        color:#666;
        text-align: center;
    }
    .fItem .icon{
        display: block;
        text-align: center;
        font-size:px2rem(46);
    }
    .fItem span{
        display: block;
    }
    .active{
        color:$default;
    }

</style>
