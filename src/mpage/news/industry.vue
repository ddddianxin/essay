<template>
    <div class="m_bg">
        <head-top webActive="news" title="新闻动态"></head-top>
        <div class="m_sciNewsBg">
            <side-menu webTitle="新闻动态" webActive="业内动态"></side-menu>
            <div class="m_sciNewsList">
                <scroll class="wrapper" :style="'height:'+scrollH+'px;'"
                    :data="listData"
                    :listenScroll="true"
                    :pulldown="true"
                    @pulldown="getData"
                    @scrollToEnd="getmoredata"
                    :pullup="true">
                    <div class="m_sciList">
                        <div class="m_sciNewsItem" v-for="(item,index) in listData" :key="index" @click="toNewsDetail(item.id,item.organizationId)">
                            <div class="m_sciNewsPic">
                                <img :src="item.mainPic">
                            </div>              
                            <div class="m_sciNewsInfo">
                                <div class="title" style="-webkit-box-orient: vertical;">{{item.contentTitle}}</div>
                                <div class="subTitle" style="-webkit-box-orient: vertical;">{{item.plainText}}</div>
                                <div class='m_sciNewsDate'>{{item.publishTime}}</div>
                            </div>
                        </div>
                        <view class="loading">{{loadingText}}</view>
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
        name: 'news',
        data(){
            return{
                cn:0,
                id:'',
                totalPage:1,
                totalRow:1,
                organizationId:'',
                scrollY: 0,
                page:1,
                rows:2,
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
            toNewsDetail(id,organizationId){
                this.$router.push({path:'/news/detail',query:{id:id,organizationId:organizationId}});
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
.m_sciNewsBg{
    margin-top:px2rem(180);
}
.m_sciNewsList{
    display: block;
    padding:0 px2rem(40);
    background-color: #f7f7f7;
    overflow: hidden;
}
.m_sciNewsItem{
    border-bottom:1px dashed #ddd;
    padding:px2rem(20) 0;
    display:flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.m_sciNewsPic{
    width:px2rem(100);
    height:px2rem(100);
}
.m_sciNewsPic img{
    width:px2rem(100);
    height:px2rem(100);
    object-fit: cover;
}
.m_sciNewsInfo{
    width:px2rem(570);
    padding-left:px2rem(20);
}
.m_sciNewsInfo .title{
    color:#152b59;
    overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
    font-size:px2rem(26);
    line-height: px2rem(40);
    font-weight: bold;
}
.m_sciNewsInfo .subTitle{
    overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
    font-size:px2rem(24);
    color:#152b59;
    line-height: px2rem(30);
}
.m_sciNewsDate{
    font-size:px2rem(24);
    line-height: px2rem(30);
    width:100%;
    text-align: right;
    color:#152b59;
}
    

</style>
