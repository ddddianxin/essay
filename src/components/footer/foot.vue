<template>
    <div id='webfoot'>
        <div class="container foot">
            <div class="footItem">
                <h3>首页</h3>
                <router-link to="">支撑载体</router-link>
                <router-link to="">中心简介</router-link>
                <router-link to="">科研队伍</router-link>
                <router-link to="">人才招聘</router-link>
                <router-link to="">联系我们</router-link>
            </div>
            <div class="footItem">
                <h3>中心简介</h3>
                <router-link to="">中心概况</router-link>
                <router-link to="">研究方向</router-link>
                <router-link to="">介绍视频</router-link>
            </div>
            <div class="footItem">
                <h3>新闻动态</h3>
                <router-link to="">科研动态</router-link>
                <router-link to="">学术交流</router-link>
                <router-link to="">中心活动</router-link>
            </div>
            <div class="footItem">
                <h3>科研队伍</h3>
                <router-link to="">高级职称</router-link>
                <router-link to="">中级职称</router-link>
                <router-link to="">初级职称</router-link>
                <router-link to="">支撑管理</router-link>
                <router-link to="">学生</router-link>
            </div>
            <div class="footItem">
                <h3>科研成果</h3>
                <router-link to="">科研项目</router-link>
                <router-link to="">期刊论文</router-link>
                <router-link to="">专利专著</router-link>
                <router-link to="">成果奖励</router-link>
            </div>
            <div class="footItem">
                <h3>实验平台</h3>
                <router-link to="">支撑载体</router-link>
                <router-link to="">实验室</router-link>
                <router-link to="">仪器设备</router-link>
            </div>
            <div class="contact">
                <div class="erCode"><img></div>
                <p>联系我们</p>
            </div>
        </div>
        <div class="container footText">
            <span class="mr15">中国科学院深圳先进技术研究院</span>
            <span class="mr15">版权所有</span>
            <span>地址：深圳市南山区西丽深圳大学城学苑大道1068号*****号</span>
        </div>
    </div>
    
</template>

<script>
    import wxapi from '../../service/wxapi.js';
    export default {
        name: 'foot',
    	data(){
            return{

            }
        },
        methods:{
            async initData(){
                
            }
        },
        created(){
            this.initData();
        }
    }

</script>

<style scoped>
    #webfoot{
        height: auto;
        background-color:#152b59;
        padding:30px 0;
    }
    .foot{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .footItem{
        text-align: center;
        color:#fff;
        width:60px;
    }
    .footItem h3{
        font-size:13px;
        font-weight: bold;
        margin:0 0 25px 0;
    }
    .footItem a{
        font-size: 12px;
        display: block;
        color:#ddd;
    }
    .contact{
        width:100px;
        height: 100px;
    }
    .erCode{
        width:100px;
        height: 100px; 
        background-color: #fff;
    }
    .contact p{
        color:#fff;
        font-size: 12px;
        text-align: center;

    }
    .footText{
        font-size: 13px;
        font-weight: bold;
        color:#fff;
        margin-top:30px;
    }
    
</style>
