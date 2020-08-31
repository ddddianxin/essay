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
                    <span @click="changelanguage">{{cn==0?'English':'中文'}}</span>
                </div>
            </div>
            <div class="mLogo">
                <img src="../../images/logo.png">
            </div>
        </div>
        <div class="sideMenu" v-show="menuShow">
            <div class="sideMenuIcon" @click="menuShow=!menuShow">
                <img src="../../images/menuWhite.png">
            </div>
            <div class="sideMList" :style="'height:'+menuHeight+'px;'">
                <div class="sideItem">
                    <div class="sideBtn">
                        <router-link to="/home">{{cn==0?'首页':'Index'}}</router-link>
                    </div>
                </div>
                <div class="sideItem" v-for="(item,index) in menuData" :key="index">
                    <div class="sideBtn" @click="toUrl(item.menuUrl,item.id,item.organizationId)">
                        <span>{{item.menuName}}</span>
                        <img v-if="item.items" src="../../images/lfArrow.png" :style="ctShow?'transform:rotate(90deg);':'transform:rotate(270deg);'">
                    </div>
                    <div class="sidechild" v-show="ctShow" @click="menuShow=!menuShow">
                        <p v-for="(iitem,iindex) in item.items" :key="iindex">
                            <span @click="toUrl(iitem.menuUrl,iitem.id,iitem.organizationId)">{{iitem.menuName}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    import {setStore,getStore} from '../../config/mUtils'
    import {menuList} from '../../service/api'
    export default {
        name: 'headTop',
        data(){
            return{
                cn:0,
                menuShow:false,
                ctShow:true,
                newsShow:true,
                menu:['home','centerIntro','news','team','achievement','experiment','recruit','contactUs'],
                menuData:'',
                menuHeight:''
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
            this.cn = getStore("inCN");
            this.getMenu();
            this.menuHeight = window.screen.height-45;
        },
        computed: {
           ...mapState([
               'inCN'
           ])
        },
        methods:{
            ...mapMutations([
               'IN_CN','IN_EN'
           ]),
           changelanguage(){
               if(this.cn==0){
                   this.IN_EN();
               }else{
                   this.IN_CN();
               }
               this.$router.go(0);
           },
           async getMenu(){
               var res = await menuList(this.cn,1);
               this.menuData = res.data;
           },
           toUrl(url,id,organizationId){
               if(url!='/'){
                   this.$router.push({path:url,query:{id:id,organizationId:organizationId}});
               }else{
                   this.ctShow = !this.ctShow
               }
           }
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
    background-color:rgba(21,43,89,.85);
}
.sideMenuIcon img{
    width:px2rem(40);
    height: px2rem(40);
    padding-top:px2rem(26); 
    float:left;
}
.sideMList{
    background-color:rgba(21,43,89,.85);
    height:100%;
    overflow: auto;
}
.sideItem{
    padding:0 px2rem(30);
}
.sideBtn{
    font-size:px2rem(32);
    height:px2rem(100);
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
.sidechild span{
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
