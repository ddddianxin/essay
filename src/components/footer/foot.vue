<template>
    <div id='webfoot'>
        <div class="container foot">
            <div class="footItem">
                <h3 @click="jumpTo('/home')">首页</h3>
                <router-link to="/news/scinews?id=13&organizationId=1">科研动态</router-link>
                <router-link to="/science/project?id=25&organizationId=1">科研成果</router-link>
                <router-link to="/news/exchange?id=14&organizationId=1">学术交流</router-link>
                <router-link to="/team/higher?id=20&organizationId=1">科研队伍</router-link>
                <router-link to="/recruit/index?id=11&organizationId=1">人才招聘</router-link>
                <router-link to="/contactus/index?id=12&organizationId=1">联系我们</router-link>
            </div>
            <div class="footItem">
                <h3>中心简介</h3>
                <router-link to="/introduce/aboutus?id=3&organizationId=1">中心概况</router-link>
                <router-link to="/introduce/research?id=5&organizationId=1">研究方向</router-link>
            </div>
            <div class="footItem">
                <h3>新闻动态</h3>
                <router-link to="/news/scinews?id=13&organizationId=1">科研动态</router-link>
                <router-link to="/news/exchange?id=14&organizationId=1">学术交流</router-link>
                <router-link to="/news/industry?id=18&organizationId=1">业内活动</router-link>
                <router-link to="/news/activity?id=19&organizationId=1">中心活动</router-link>
            </div>
            <div class="footItem">
                <h3>科研队伍</h3>
                <router-link to="/team/higher?id=20&organizationId=1">高级职称</router-link>
                <router-link to="/team/medium?id=21&organizationId=1">中级职称</router-link>
                <router-link to="/team/primary?id=22&organizationId=1">初级职称</router-link>
                <router-link to="/team/manage?id=23&organizationId=1">支撑管理</router-link>
                <router-link to="/team/student?id=24&organizationId=1">学生</router-link>
            </div>
            <div class="footItem">
                <h3>科研成果</h3>
                <router-link to="/science/project?id=25&organizationId=1">科研项目</router-link>
                <router-link to="/science/paper?id=26&organizationId=1">期刊论文</router-link>
                <router-link to="/science/patent?id=27&organizationId=1">专利专著</router-link>
                <router-link to="/science/technology?id=28&organizationId=1">成果转移转化</router-link>
                <router-link to="/science/award?id=29&organizationId=1">成果奖励</router-link>
            </div>
            <div class="footItem">
                <h3>实验平台</h3>
                <router-link to="/platform/supporter?id=30&organizationId=1">支撑载体</router-link>
                <router-link to="/platform/lab?id=31&organizationId=1">实验室</router-link>
                <router-link to="/platform/equipment?id=32&organizationId=1">仪器设备</router-link>
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
                
            },
            jumpTo(url){
                // this.$router.push({path:url,query:{id:id,organizationId:organizationId}});
                this.$router.push({path:url});
            },
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
        margin:0 0 15px 0;
        color:#fff;
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
