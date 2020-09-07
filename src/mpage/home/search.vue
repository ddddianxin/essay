<template>
    <div class="m_bg">
        <head-top webActive="home" showSearch="false"></head-top>
        <div class="gSearchBg">
            <div class="globalSearch">
                <div class="gSearBox">
                    <i class="el-icon-search"></i>
                    <input type="text" value="" v-model="val" placeholder="请输入搜索关键词">
                </div>
                <span class="searBtn" @click="getData()">搜索</span>
            </div>
            <div class="gSearchList">
                <scroll class="wrapper" :style="'height:'+scrollH+'px;'"
                    :data="listData"
                    :listenScroll="true"
                    :pulldown="true"
                    @pulldown="getData"
                    @scrollToEnd="getmoredata"
                    :pullup="true">
                    <div class="gsList">
                        <div class="gSearItem" v-for="(item,index) in listData" :key="index" @click="toDetail(item.id,item.organizationId)">
                            <div class="gSearPic">
                                <img :src="item.mainImage?'http://sensing.zwin.work/'+item.mainImage:require('../../images/default.jpg')">
                            </div>              
                            <div class="gSearInfo">
                                <div class="title" style="-webkit-box-orient: vertical;">{{item.contentTitle}}</div>
                                <div class="subTitle" style="-webkit-box-orient: vertical;">{{item.plainText}}</div>
                                <div class='gSearDate'>{{item.publishTime}}</div>
                            </div>
                        </div>
                        <view class="loading">{{loadingText}}</view>
                    </div>
                    <div class="loading-wrapper">{{loadingText}}</div>
                </scroll>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    import {globalSearchContent} from '../../service/api'
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
                organizationId:'',
                scrollY: 0,
                page:1,
                rows:10,
                noData: false,//false为无数据，true为有数据
                loadingText:'加载中...',
                scrollH:300,
                listData:[],
                val:''
                
            }
        },
        components:{
            headTop,Scroll
        },
        created(){
            
        },
        beforeMount(height) {
            var h = document.documentElement.clientHeight || document.body.clientHeight;
            this.scrollH = h-90-46-102;//头部、搜索栏、尾部
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
            toDetail(id,organizationId){
                this.$router.push({path:'/home/bannerdetail',query:{id:id,organizationId:organizationId}});
            },
            async getData(){
                this.page = 1;
                var resApi = await globalSearchContent(
                    this.val,//keywords,
                    this.page,
                    this.rows
                );
                var res = resApi.data;
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
                var resApi = await globalSearchContent(
                    this.val,//keywords,
                    this.page,
                    this.rows
                );
                var res = resApi.data;
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
    .globalSearch{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding:px2rem(20) px2rem(30);
        background-color: #152b59;
    }
    .gSearBox{
        width:px2rem(540);
        height: px2rem(46);
        background-color: #fff;
        border:1px solid #707070;
        border-radius: 30px;
        float:right;
        overflow: hidden;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .gSearBox i{
        font-size:px2rem(34);
        padding:px2rem(6) 0 0 px2rem(10);
        width:px2rem(40);
    }
    .gSearBox input{
        background-color: #fff;
        font-size: px2rem(26);
        z-index:100;
        width:px2rem(400);
        text-align: right;
        padding:0 px2rem(20);
    }
    .searBtn{
        color:#fff;
        width:px2rem(120);
        border:1px solid #fff;
        font-size:px2rem(26);
        text-align: center;
        border-radius: px2rem(50);
    }
    .gSearchBg{
        margin-top:px2rem(180);
    }
    .gSearchList{
        display: block;
        padding:0 px2rem(40);
        background-color: #f7f7f7;
        overflow: hidden;
    }
    .gSearItem{
        border-bottom:1px dashed #ddd;
        padding:px2rem(20) 0;
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .gSearPic{
        width:px2rem(100);
        height:px2rem(100);
    }
    .gSearPic img{
        width:px2rem(100);
        height:px2rem(100);
        object-fit: cover;
    }
    .gSearInfo{
        width:px2rem(570);
        padding-left:px2rem(20);
    }
    .gSearInfo .title{
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
    .gSearInfo .subTitle{
        overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
        font-size:px2rem(24);
        color:#152b59;
        line-height: px2rem(30);
    }
    .gSearDate{
        font-size:px2rem(24);
        line-height: px2rem(30);
        width:100%;
        text-align: right;
        color:#152b59;
    }
    

</style>
