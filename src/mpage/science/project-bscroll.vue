<template>
    <div class="bg">
        <head-top webActive="news" title="科研成果"></head-top>
        <div class="newsBg">
            <div class="container pr">
                <div class="sciEMenu">
                    <div class="sciEMList">
                        <span v-for="(item,index) in sciMenu" :key="index" :class="item.title=='科研项目'?'active':''" @click="toUrl(item.url)">{{item.title}}</span>
                    </div>
                </div>
                <div class="teamBox">
                    <scroll class="wrapper"
                        :data="newsData"
                        :listenScroll="true"
                        :pulldown="true"
                        @pullingDown="getData()"
                        :pullup="true"
                        @pullingUp="getmoredata">
                        <div class="sciList">
                            <div class="sciItem" v-for="(item,index) in newsData" :key="index">               
                                <div class="sciInfo">
                                    <h2>{{index}}.{{item.ename}}</h2>
                                    <div class="proTail">
                                        <div class="proTlf ">项目负责人：付款经典款复健科时代峰峻临时冻结</div>
                                        <div class="proTrg ">项目分类：付款经典款复健科时代峰峻临时冻结</div>
                                    </div>
                                </div>
                            </div>
                            
                            <view class="loading">{{loadingText}}</view>
                        </div>
                        <div class="loading-wrapper"></div>
                    </scroll>
                    <!-- <div class="sciList">
                        <div class="wrapper" ref="wrapper">
                            <div class="sciItem" v-for="(item,index) in newsData" :key="index">               
                                <div class="sciInfo">
                                    <h2>{{item.title}}</h2>
                                    <div class="proTail">
                                        <div class="proTlf ">项目负责人：付款经典款复健科时代峰峻临时冻结</div>
                                        <div class="proTrg ">项目分类：付款经典款复健科时代峰峻临时冻结</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <view class="loading">{{loadingText}}</view>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/mobile/headTop';
    import {contentPage,test} from '../../service/api'
    import {getStore} from '../../config/mUtils'
    import Scroll from '../../components/common/scroll'
    
    var page=1
    export default {
        name: 'news',
        data(){
            return{
                sciMenu:[
                    {
                        title:'科研项目',
                        url:'/science/project'
                    },
                    {
                        title:'期刊论文',
                        url:'/science/paper'
                    },
                    {
                        title:'专利/专著',
                        url:'/science/patent'
                    },
                    {
                        title:'技术转移转化',
                        url:'/science/technology'
                    },
                    {
                        title:'成果奖励',
                        url:'/science/award'
                    }
                ],
                newsData:[
                    {
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    },{
                        title:'一个研究相关标题',
                        des:'50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。50多年来，我们再分子生命科学的发展以及分子和细胞生物学，遗传学，基因组学和计算生物学的革命中发挥了核心作用。',
                        date:'2020/02/05',
                        url:''
                    }

                ],
                cn:0,
                id:'',
                totalPage:1,
                totalRow:1,
                organizationId:'',
                listData:[],
                scrollY: 0,
                rows:5,
                noData: false,//false为无数据，true为有数据
                loadingText:'加载中...',
            }
        },
        components:{
            headTop,Scroll
        },
        created(){
            this.loadData();
        },
        mounted(){
            this.cn = getStore("inCN");
            
        },
        computed:{
        },
        methods:{
            loadData() {
                this.getData();
            },
            async initData(){
                this.id = this.$route.query.id;
                this.organizationId = this.$route.query.organizationId;
                this.page = 1;
                this.getData();
            },
            toUrl(url){
                this.$router.push({path:url,query:{id:id,organizationId:organizationId}});
            },
            toSciDetail(id){
                this.$router.push({path:'/science/detail',query:{id:id,organizationId:this.organizationId}});
            },
            async getData(){
                // var res = await contentPage(
                //     this.cn,
                //     this.page,
                //     this.rows,
                //     this.organizationId,
                //     this.id
                // );
                // this.listData = res.data.list;
                // this.totalPage = res.data.totalPage;
                // console.log(res);
                var res = await test('',1,this.rows);
                if (res.length != 0 && res.length == this.rows) {
					this.noData = false;
					page++;
					this.newsData = res;
					this.loadingText = '上拉加载更多';
				} else {
					this.newsData = res;
					this.noData = true;
					this.loadingText = '';
                }
                console.log(this.newsData);
                
            },
            async getmoredata(){
                console.log("getting more data");
				if(this.loadingText != '' && this.loadingText != '上拉加载更多'){
				    return false;
				}
				this.loadingText = '加载中...';
				var res = await test('',page,this.rows);
				this.loadingText = '';
				if(res.length == 0){
				  this.loadingText = '已加载全部';
				  return false;
				}
				page++;
				this.newsData  = this.newsData.concat(res);
				this.loadingText = '上拉加载更多';
			}


        },
        watch: {
           
        },
        
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .newsBg{
        margin-top:px2rem(180);
        background-color:#fff;
    }
    .bgTop{
        height:205px;
        width: 100%;
        object-fit: cover;
    }
    .teamBox{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .sciEMenu{
        background-color:#152b59;
        height:px2rem(60);
        line-height:px2rem(60);
        position:fixed;
        top:px2rem(180);
        left:0

    }
    .sciEMList{
        margin:0 px2rem(40);
        display:flex;
        flex-wrap: nowrap;
        
        
    }
    .sciEMList span{
        width:px2rem(140);
        text-align: center;
        color:#fff;
    }
    .sciEMList span.active{
        background-color:#fff;
        color:#152b59;
        height:px2rem(60);
        line-height:px2rem(60);
    }
    
    .sciList{
        padding:0 px2rem(40);
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .sciItem{
        border-bottom:1px dashed #ddd;
        padding:15px 0;
        width:100%;
    }
    .sciInfo{
    }
    .sciInfo h2{
        font-size:16px;
        font-weight: bold;
        color:#333;
        margin-bottom:5px;
        line-height: 20px;;
    }
    .sciInfo h2:hover{
        cursor:pointer;
        color:#152b59;
    }
    .proTail{
        font-size:12px;
        color:#666;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .proTlf{
        width:50%;
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        height: px2rem(48);
    }
    .proTrg{
        width:50%;
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
        height: px2rem(48);
    }
    .wrapper{
        height:300px;
        margin-top:px2rem(60);
        overflow: hidden;
    }
    .sciList{
       
    }
</style>
