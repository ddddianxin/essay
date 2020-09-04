<template>
    <div class="bg">
        <head-top webActive="team" title="科研队伍"></head-top>
        <div class="webTeamBg">
            <side-menu webTitle="科研队伍" webActive="支撑管理"></side-menu>
            <div class="webTeamList">
                <scroll class="wrapper" :style="'height:'+scrollH+'px;'"
                    :data="listData"
                    :listenScroll="true"
                    :pulldown="true"
                    @pulldown="getData"
                    @scrollToEnd="getmoredata"
                    :pullup="true">
                    <div  class="webtList">
                        <div class="webteamItem" v-for="(item,index) in listData" :key="index" @click="toTeamDetail(item.id,item.organizationId)">    
                            <img :src="item.mainPic">              
                            <h4 class="wto">{{item.contentTitle}}</h4>
                            <p>{{item.plainText}}</p>
                            <div class="tc">
                                <span class="arrow">
                                    <img src="../../images/arrow.png">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="loading-wrapper"></div>
                </scroll>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    import sideMenu from '../../components/mobile/sideMenu'
    import {contentPage} from '../../service/api'
    import {getStore} from '../../config/mUtils'
    import Scroll from '../../components/common/scroll'
    //var page=1
    export default {
        name: 'team',
        data(){
            return{
                cn:0,
                id:'',
                totalPage:1,
                totalRow:1,
                organizationId:'',
                scrollY: 0,
                page:1,
                rows:10,
                noData: false,//false为无数据，true为有数据
                loadingText:'加载中...',
                scrollH:300,
                listData:[]
                
            }
        },
        components:{
            headTop,sideMenu,Scroll
        },
        created(){
            
        },
        beforeMount(height) {
            var h = document.documentElement.clientHeight || document.body.clientHeight;
            this.scrollH = h-90-30-102;//头部、菜单栏、尾部
        },
        mounted(){
            this.cn = getStore("inCN");
            this.initData();
        },
        computed:{
        },
        methods:{
            initData(){
                this.id = this.$route.query.id;
                this.organizationId = this.$route.query.organizationId;
                this.page = 1;
                this.getData();
            },
            toTeamDetail(id,organizationId){
                this.$router.push({path:'/team/detail',query:{id:id,organizationId:organizationId}});
            },
            async getData(){
                var resApi = await contentPage(
                    this.cn,
                    this.page,
                    this.rows,
                    this.organizationId,
                    this.id
                );
                var res = resApi.data.list;

                if (res.length != 0 && res.length == this.rows) {
					this.noData = false;
					this.page++;
					this.listData = res;
					this.loadingText = '上拉加载更多';
				} else {
					this.page++;
					this.listData = res;
					this.noData = true;
					this.loadingText = '';
                }
            },
            async getmoredata(){
				if(this.loadingText != '' && this.loadingText != '上拉加载更多'){
				    return false;
                }
                this.loadingText = '加载中...';
                var resApi = await contentPage(
                    this.cn,
                    this.page,
                    this.rows,
                    this.organizationId,
                    this.id
                );
                var res = resApi.data.list;
				this.loadingText = '';
				if(res.length == 0){
				  this.loadingText = '已加载全部';
				  return false;
				}
				this.page++;
				this.listData  = this.listData.concat(res);
				this.loadingText = '上拉加载更多';
			}
        },
        created(){


        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
.webTeamBg{
    margin-top:px2rem(180);
}
.webTeamList{
    display: block;
    background-color: #f7f7f7;
    overflow: hidden;
    padding:px2rem(30) 0;
}

.webtList{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
.webteamItem{
    width:px2rem(314);
    height: px2rem(400);
    background-color: #fff;
    margin:0 0 px2rem(40) px2rem(40);
}
.webteamItem:hover{
    cursor: pointer;
}
.webteamItem img{
    width:px2rem(314);
    height: px2rem(180);
    object-fit: cover;
}
.webteamItem h4{
    font-size: px2rem(28);
    font-weight: bold;
    color:#152b59;
    padding:0 px2rem(24);
}
.webteamItem p{
    font-size: px2rem(24);
    overflow: hidden ;
    display: -webkit-box ;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical ;
    word-break: break-all ;
    color:#152b59;
    padding:0 px2rem(24);
    margin-bottom:px2rem(20);
    height:px2rem(94);
    line-height: px2rem(30);
}
.webteamItem .arrow{
    width:px2rem(40);
    height:px2rem(44);
    background-color: #152b59;
    border-radius: px2rem(60) px2rem(60) 0 0;
    display: inline-block;
    text-align: center;
}
.webteamItem .arrow img{
    width:px2rem(22);
    height:px2rem(22);
    padding-top:px2rem(12);
}
    

</style>
