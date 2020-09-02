<template>
    <div class="bg">
        <head-top webActive="achievement" title="科研成果"></head-top>
        <div class="webAwardBg">
            <side-menu webTitle="科研成果" webActive="成果奖励"></side-menu>
            <div class="webAwardList">
                <scroll class="wrapper" :style="'height:'+scrollH+'px;'"
                    :data="listData"
                    :listenScroll="true"
                    :pulldown="true"
                    @pulldown="getData"
                    @scrollToEnd="getmoredata"
                    :pullup="true">
                    <div  class="webAList">
                        <div class="webAwardItem" v-for="(item,index) in listData" :key="index" @click="toSciDetail(item.id)">    
                            <img :src="item.mainPic">              
                            <h4>{{item.contentTitle}}</h4>
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

    export default {
        name: 'achievement',
        data(){
            return{
                cn:0,
                id:'',
                totalPage:1,
                totalRow:1,
                organizationId:'',
                scrollY: 0,
                page:1,
                rows:8,
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
            toSciDetail(id){
                this.$router.push({path:'/science/detail',query:{id:id,organizationId:this.organizationId}});
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
                console.log("getmore data page:"+this.page);
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
.webAwardBg{
    margin-top:px2rem(180);
}
.webAwardList{
    display: block;
    background-color: #f7f7f7;
    overflow: hidden;
    padding:px2rem(30) 0;
}

.webAList{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
.webAwardItem{
    width:px2rem(314);
    height: px2rem(580);
    background-color: #fff;
    margin:0 0 px2rem(40) px2rem(40);
}
.webAwardItem:hover{
    cursor: pointer;
}
.webAwardItem img{
    width:px2rem(314);
    height: px2rem(440);
    object-fit: cover;
}
.webAwardItem h4{
    font-size: px2rem(28);
    color:#152b59;
    padding:0 px2rem(24);
    overflow: hidden ;
    display: -webkit-box ;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical ;
    word-break: break-all ;
    line-height: px2rem(38);
    height: px2rem(80);
}

.webAwardItem .arrow{
    width:px2rem(40);
    height:px2rem(44);
    background-color: #152b59;
    border-radius: px2rem(60) px2rem(60) 0 0;
    display: inline-block;
    text-align: center;
}
.webAwardItem .arrow img{
    width:px2rem(22);
    height:px2rem(22);
    padding-top:px2rem(12);
}
    

</style>
