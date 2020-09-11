<template>
    <div class="m_bg">
        <head-top webActive="recruit" title="人才招聘"></head-top>
        <div class="wapRecBg">
            <img class="m_bgTop" src="../../images/mCtIntro.png">
            <div class="wapRecList">
                <scroll class="wrapper" :style="'height:'+scrollH+'px;'"
                    :data="listData"
                    :listenScroll="true"
                    :pulldown="true"
                    @pulldown="getData"
                    @scrollToEnd="getmoredata"
                    :pullup="true">
                    <div>
                        <div class="mrecList" v-for="(item,index) in listData" :key="index" @click="toDetail(item.id,item.organizationId)">
                            <div class="mrecInfo">
                                <div class="mrecName">{{item.contentTitle}}</div>
                                <div>
                                    <span class="mrecSalary">{{item.contentSubtitle}}</span>
                                    <span class="mrecExp">{{item.remark}}</span>
                                </div>
                                <p>岗位简介：</p>
                                <div class="mrecText" style="-webkit-box-orient: vertical;">{{item.plainText}}</div>
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
            headTop,Scroll
        },
        created(){
            
        },
        beforeMount(height) {
            var h = document.documentElement.clientHeight || document.body.clientHeight;
            this.scrollH = h-90-120-102;//头部、菜单栏、尾部
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
                this.$router.push({path:'/recruit/detail',query:{id:id,organizationId:organizationId}});
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
                console.log(this.listData);
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
    .wapRecBg{
        padding-top:px2rem(180);
    }
    .wapRecList{
        display: block;
        background-color: #f7f7f7;
        overflow: hidden;
    }
    .m_bgTop{
        height:px2rem(240);
        width: px2rem(750);
        object-fit: cover;
        text-align: center;
        display: block;
    }
    .mrecList{
        margin:0 px2rem(30);
        padding:px2rem(30) 0;
        border-bottom:px2rem(4) dashed #d8d8d8;
    }
    
    .mrecInfo{
        width:100%;
        font-size:px2rem(28);
        color:#152b59;
    }
    .mrecName{
        color:#152b59;
        font-size:px2rem(32);
        font-weight: bold;
        margin:px2rem(10) 0;
    }
    .mrecSalary{
        color:#b12b6e;
        font-size:px2rem(32);
        margin-right:px2rem(30);
    }
    .mrecText{
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        max-height: 125px;
        color:#152b59;
    }

</style>
