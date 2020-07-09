<template>
    <div id='webfoot'>
<!--        <div class="bg1">-->
<!--            <div class="container flex j-bet">-->
<!--                <div class="bgItem flex">-->
<!--                    <div class="bgNum">1</div>-->
<!--                    <div class="bgInfo">-->
<!--                        <h2>品质保障</h2>-->
<!--                        <p>品质护航 购物无忧</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="bgItem flex">-->
<!--                    <div class="bgNum">2</div>-->
<!--                    <div class="bgInfo">-->
<!--                        <h2></h2>-->
<!--                        <p>品质护航 购物无忧</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="bgItem flex">-->
<!--                    <div class="bgNum">3</div>-->
<!--                    <div class="bgInfo">-->
<!--                        <h2>品质保障</h2>-->
<!--                        <p>品质护航 购物无忧</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="bgItem flex">-->
<!--                    <div class="bgNum">4</div>-->
<!--                    <div class="bgInfo">-->
<!--                        <h2>品质保障</h2>-->
<!--                        <p>品质护航 购物无忧</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="bg2">
            <div class="container">
<!--                <div class="bgLink">--> 
<!--                    <a href="" target="_blank">如何注册</a>-->
<!--                    <a href="" target="_blank">交易流程</a>-->
<!--                    <a href="" target="_blank">如何购买</a>-->
<!--                    <a href="" target="_blank">如何支付</a>-->
<!--                    <a href="" target="_blank">关于我们</a>-->
<!--                    <a href="" target="_blank">联系我们</a>-->
<!--                </div>-->
                <div class="bgText">
                    <p>版权所有 ©广州萃英化学科技有限公司 <a href="http://www.beian.miit.gov.cn/" target="_blank">粤ICP备15047151号</a></p>
                    <p>地址：广州市黄埔区黄埔东路266号怡港大厦A栋606-607室、B栋708-709室</p>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script>
    import {wxjssdk} from '../../service/api';
    import wxapi from '../../service/wxapi.js';
    export default {
        name: 'foot',
    	data(){
            return{

            }
        },
        methods:{
            async initData(){
                var url=encodeURIComponent(location.href.split('#')[0]);
                var data = await wxjssdk(url);
                var option = {
                    title:window.location.title?window.location.title:'六摩尔直营商城 www.sixmol.com',
                    desc:'主营医药中间体、原料药、化妆品高端原料、日化清洗行业原材料，包括进出口国际贸易业务。',
                    link:window.location.href,
                    imgUrl:'http://www.huaxuejia.cn/Public/home/images/logo.jpg'
                }
                wxapi.wxRegister(data,option);//data是微信配置信息，option是分享要配置的内容
            }
        },
        created(){
            this.initData();
        }
    }

</script>

<style scoped>
    #webfoot{height: auto;}
    .bg1{
        background-color:#202020;
        padding:20px 0;
        margin:0 auto;
    }
    .bgNum{
        background-color:#0bb8b2;
        color:#fff;
        font-size:24px;
        font-weight: bold;
        width:42px;
        height:42px;
        border-radius: 100px;
        text-align: center;
        line-height: 42px;
    }
    .bgInfo{
        padding-left: 10px;
    }
    .bgInfo h2{
        color:#fff;
        font-size:16px;
        font-weight: bold;
    }
    .bgInfo p{
        color:#999;
    }
    .bg2{
        background-color:#111111;
        padding:20px 0;
        margin:0 auto;
        text-align: center;
    }
    .bgLink{
        margin-bottom:15px;
    }
    .bgLink a{
        color:#999;
        padding:0 15px;
    }
    .bgText{
        color:#666;
    }
    .bgText a{
        color:#0e79cc;
    }

</style>
