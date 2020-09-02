<template>
    <div class="webSideMenu">
        <ul>
            <li v-for="(item,index) in menu.child" :key="index" :class="webActive==item.name?'webSItem active':'webSItem'">
                <span @click="toUrl(item.url,item.id,item.organizationId)">{{item.name}}</span>
            </li>
        </ul>
    </div>
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
                menu:'',
                menuData:''
            }
        },
        props: ['webTitle','webActive'],
        created(){
            
        },
        beforeMount(){
            this.initData();
        },
        mounted(){
            this.cn = getStore("inCN");
        },
        computed: {
          ...mapState([
               'inCN'
           ])
        },
        methods:{
           toUrl:function(url,id,organizationId){
               this.$router.push({path:url,query:{id:id,organizationId:organizationId}});
           },
           async initData(){
               //获取菜单并整理
               var res = await menuList(this.cn,1);
               var rData = res.data;
               var menuArr = [];
               for(var i = 0 ;i < rData.length ; i++){
                    var childObj = [];
                   var len = rData[i].items?parseInt(rData[i].items.length):0;
                   for(var j=0;j < len ; j++){
                       childObj.push({
                            name:rData[i].items[j].menuName,
                            name:rData[i].items[j].menuName,
                            name:rData[i].items[j].menuName,
                            url:rData[i].items[j].menuUrl,
                            name:rData[i].items[j].menuName,
                            id:rData[i].items[j].id,
                            organizationId:rData[i].items[j].organizationId
                        })
                   }
                   menuArr.push({
                       title:rData[i].menuName,
                       child:childObj
                   });
               }
               this.menuData = menuArr;
               //筛选出匹配当前栏目的
                for(var i =0 ; i<this.menuData.length ; i++){
                    if(this.menuData[i].title == this.webTitle){
                        this.menu = this.menuData[i]
                    }
                }
           }
            
        }

    }

</script>

<style lang="scss">
 @import '../../style/mixin';
.webSideMenu{
    background-color:#152b59;
    height:px2rem(60);
    color:#fff;
    font-size:13px;
    display: block;
}
.webSideMenu ul{
    display:flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding:0 px2rem(40);
}
.webSItem{
    margin-top:px2rem(12);
    height:px2rem(48);
    padding:0 px2rem(20);
}
.webSItem.active{
    background-color:#fff;
    color:#152b59;
}
</style>
