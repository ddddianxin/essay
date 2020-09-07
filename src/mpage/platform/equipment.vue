<template>
    <div class="m_bg">
        <head-top webActive="experiment" title="实验平台"></head-top>
        <div class="webEquBg">
            <side-menu webTitle="实验平台" webActive="仪器设备"></side-menu>
            <div class="webEquList">
                <scroll class="wrapper" :style="'height:'+scrollH+'px;'"
                    :data="listData"
                    :listenScroll="true"
                    :pulldown="true"
                    @pulldown="getData"
                    @scrollToEnd="getmoredata"
                    :pullup="true">
                    <div  class="webAList">
                        <div class="webEquItem" v-for="(item,index) in listData" :key="index" @click="toDetail(item.id,item.organizationId)">    
                            <img :src="item.mainPic">
                            <div class="mEquName">
                                <span class="wto">{{item.contentTitle}}</span>
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
        name: 'experiment',
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
            toDetail(id,organizationId){
                this.$router.push({path:'/platform/detail',query:{id:id,organizationId:organizationId}});
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
.webEquBg{
    margin-top:px2rem(180);
}
.webEquList{
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
.webEquItem{
    width:px2rem(314);
    height: px2rem(280);
    background-color: #fff;
    margin:0 0 px2rem(40) px2rem(40);
    position: relative;
}
.webEquItem img{
    width:px2rem(314);
    height: px2rem(280);
    object-fit: cover;
}

.mEquName{
       position:absolute;
       bottom:0;
       left:0;
       width:px2rem(314);
       height:px2rem(40);
       line-height: px2rem(40);
       background-color:rgba(21,43,89,.9);
       color:#fff;
       text-align: center;
       font-size:px2rem(24);
   }
   .mEquName span{
       display:block;
       padding:0 15px;
   }
    

</style>
