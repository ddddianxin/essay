<template>
    <div id='foot'>
        <div class="lfText">
            <p @click="toLink(pcData.copyrightUrl)">{{mobileData.copyright}}</p>
            <p @click="toLink(pcData.icpUrl)">{{mobileData.icp}}</p>
            <p>{{mobileData.address}}</p>
            <p>技术支持：志晟科技（广州）有限公司</p>
        </div>
        <div class="contact">
            <div class="ercode">
                <img :src="mobileData.qrcode">
            </div>
            <p>联系我们</p>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    import {setStore,getStore} from '../../config/mUtils'
    import {queryMenuAndHeaderFooter} from '../../service/api'
    // import wxapi from '../../service/wxapi.js';
    export default {
        name: 'navFoot',
    	data(){
            return{
                menu:['home','sort','cart','message','mine'],
                cn:0,
                isPc:0,//0为手机，1为pc
                menuData:[],
                mobileData:''
            }
        },
        props: ['menuActive'],
        computed: {
        },
        mounted(){
            this.cn = getStore("inCN");
            this.isPc = getStore("isPc");
            this.getMenu();
        },
        methods: {
            async initData(){
            },
            async getMenu(){
               var res = await queryMenuAndHeaderFooter(this.cn,1);
               this.menuData = res.data.menu.list;
               this.mobileData = res.data.footer.mobileData;
            },
            toLink(url){
                if(url){
                    var arr = url.match(/http/g);
                    if(!arr){
                        url = 'http://'+url;
                    }
                    window.open(url,"_blank");
                }
            }
        },
        created(){
            this.initData();
        }
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    #foot{
        width:100%;
        height: auto;
        background-color:#152b59;
        z-index: 1000;
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        color:#fff;

    }
    .lfText{
        font-size:px2rem(24);
        width:px2rem(480);
        margin:px2rem(30) px2rem(40);
    }
    .contact{
        width:px2rem(120);
        font-size:px2rem(24);
        text-align: center;
        padding-top:px2rem(30);
        margin-right:px2rem(40);
    }
    .ercode{
        width:px2rem(120);
        height: px2rem(120);
        background-color:#fff;
    }
    .ercode img{
        width:px2rem(120);
        height: px2rem(120);
        object-fit: cover;
    }
    

</style>
