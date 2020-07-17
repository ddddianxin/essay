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
                    <span class="searchTit" @click="changelanguage">{{cn==0?'English':'中文'}}</span>
                    <div class="searchBox">
                        <input value="" placeholder="">
                        <button>搜索</button>
                    </div>
                </div>
            </div>
            <div class="nav">
                <div class="menu">
                    <span :class="webActive=='home'?'active':''">
                        <router-link to="/home">{{cn==0?'首页':'Index'}}</router-link>
                    </span>
                    <span v-for="(item,index) in menuData" :key="index" :class="webActive=='centerIntro'?'active newsBtn':'newsBtn'">
                        <div @click="toUrl(item.menuUrl,item.id,item.organizationId)">{{item.menuName}}<img v-if="item.items" class="menuArrow" src="../../images/lfArrow.png"></div>
                        <div class="childItem" v-if="item.items" >
                            <ul>
                                <li v-for="(iitem,iindex) in item.items" :key="iindex">
                                    <span @click="toUrl(iitem.menuUrl,iitem.id,iitem.organizationId)">{{iitem.menuName}}</span>
                                </li>
                            </ul>
                        </div>
                    </span>
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
                menu:['home','centerIntro','news','team','achievement','experiment','recruit','contactUs'],
                menuData:''
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
            this.cn = getStore("inCN");
            this.getMenu();
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
               }
           }
            
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
.searchTit:hover{
    cursor:pointer;
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
.childItem li span{
    display: block;
    height:58px;
    line-height: 58px;
}
.childItem li:hover{
    cursor:pointer;
    color:#fff;
    background-color: rgb(176,0,125);
}
.childItem li:hover span{
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
    cursor:pointer;
    color:#152b59;
    .childItem{
        display:block;
        z-index: 1000;
    }
    .menuArrow{
        transform:rotate(90deg);
    }

}


</style>
