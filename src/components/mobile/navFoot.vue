<template>
    <div id='foot'>
        <div class="lfText">
            <p>版权所有：中国科学院深圳先进技术研究院</p>
            <p>深圳市南山区西丽深圳大学城学院大道1068号*****号</p>
        </div>
        <div class="contact">
            <div class="ercode">
                <img>
            </div>
            <p>联系我们</p>
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

        },
        mounted(){
            //获取用户信息
           

        },
        methods: {
            async initData(){
                var url=encodeURIComponent(location.href.split('#')[0]);
                var data = await wxjssdk(url);
                var option = {
                    title:window.location.title?window.location.title:'六摩尔直营商城 www.sixmol.com',
                    desc:'主营医药中间体、原料药、化妆品高端原料、日化清洗行业原材料，包括进出口国际贸易业务。',
                    link:window.location.href,
                    imgUrl:'http://www.huaxuejia.cn/Public/home/images/logo.jpg'
                }
                wxapi.wxRegister(data,option);

            },
            toMessage(){
                // if (this.userInfo && this.userInfo.user_id){
                //     this.$router.push({path:"/userCenter/message/message"})
                // }else{
                //     this.$message({
                //         message: '请先登录',
                //         type: 'warning'
                //     });
                // }
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
        height: px2rem(220);
        background-color:#152b59;
        z-index: 1000;
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        color:#fff;
    }
    .lfText{
        font-size:px2rem(24);
        width:px2rem(480);
        margin:px2rem(30) px2rem(40);

    }
    .contact{
        width:px2rem(120);
        font-size:px2rem(24);
        text-align: center;
        padding-top:px2rem(30);
        margin-right:px2rem(40);
    }
    .ercode{
        width:px2rem(120);
        height: px2rem(120);
        background-color:#fff;
    }
    

</style>
