<template>
    <div id='webfoot'>
        <div class="container foot">
            <div class="footItem" v-for="(item,index) in menuData.slice(0, -2)" :key="index">
                <h3 @click="toUrl(item.items?'/':item.menuUrl,item.id,item.organizationId)">{{item.menuName}}</h3>
                <span v-for="(iitem,iindex) in item.items" :key="iindex" @click="toUrl(iitem.menuUrl,iitem.id,iitem.organizationId)">{{iitem.menuName}}</span>
            </div>
            <div class="contact">
                <div class="erCode hoverStyle" @click="toLink(pcData.qrcode)"><img :src="pcData.qrcode"></div>
                <p>联系我们</p>
            </div>
        </div>
        <div class="container footText">
            <span class="mr15 hoverStyle" @click="toLink(pcData.copyrightUrl)">{{pcData.copyright}}</span>
            <span class="mr15 hoverStyle" @click="toLink(pcData.icpUrl)">{{pcData.icp}}</span>
            <span>{{pcData.address}}</span>
        </div>
    </div>
    
</template>

<script>
    import wxapi from '../../service/wxapi.js';
    import {mapState, mapMutations, mapActions} from 'vuex'
    import {setStore,getStore} from '../../config/mUtils'
    import {menuList,queryMenuAndHeaderFooter} from '../../service/api'
    export default {
        name: 'foot',
    	data(){
            return{
                menuData:[],
                cn:0,
                isPc:1,//0为手机，1为pc
                pcData:''
            }
        },
        mounted(){
            this.cn = getStore("inCN");
            this.isPc = getStore("isPc");
            this.getMenu();
        },
        computed: {
           ...mapState([
               'inCN'
           ])
        },
        methods:{
            async getMenu(){
               var res = await queryMenuAndHeaderFooter(this.cn,1);
               this.menuData = res.data.menu.list;
               this.pcData = res.data.footer.pcData
            },
            toUrl(url,id,organizationId){
               if(url!='/'){
                   this.$router.push({path:url,query:{id:id,organizationId:organizationId}});
               }
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
            
        }
    }

</script>

<style scoped>
    #webfoot{
        height: auto;
        background-color:#152b59;
        padding:30px 0;
    }
    .foot{
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .footItem{
        text-align: center;
        color:#fff;
        width:60px;
    }
    .footItem h3{
        font-size:13px;
        font-weight: bold;
        margin:0 0 15px 0;
        color:#fff;
    }
    .footItem span{
        font-size: 12px;
        display: block;
        color:#ddd;
    }
    .footItem span:hover{
        cursor:pointer;
    }
    .contact{
        width:100px;
        height: 100px;
    }
    .erCode{
        width:100px;
        height: 100px; 
        background-color: #fff;
    }
    .erCode img{
        width:100px;
        height: 100px; 
        object-fit: cover;
    }
    .contact p{
        color:#fff;
        font-size: 12px;
        text-align: center;

    }
    .footText{
        font-size: 13px;
        font-weight: bold;
        color:#fff;
        margin-top:30px;
    }
    .hoverStyle:hover{
        cursor:pointer;
    }
    
</style>
