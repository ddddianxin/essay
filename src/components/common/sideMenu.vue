<template>
    <div class="lsideMenu">
        <h3>{{menu.title}}</h3>
        <span class="h3BLine"></span>
        <ul>
            <li v-for="(item,index) in menu.child" :key="index" :class="webActive==item.name?'lsideMItem active':'lsideMItem'">
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
               console.log(url);
               this.$router.push({path:url,query:{id:id,organizationId:this.organizationId}});
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
/* 列表页侧边 */
.lsideBox {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.lsideMenu {
    width: 240px;
    height: 850px;
    background-image: linear-gradient( #162c5a, #2d559d);
}

.lsideMenu h3 {
    margin: 30px 0 0 20px;
    color: #fff;
    font-weight: bold;
    font-size: 25px;
}

.lsideMenu .h3BLine {
    width: 70px;
    height: 3px;
    display: inline-block;
    background-color: #fff;
    margin-left: 20px;
}

.lsideMItem {
    height: 84px;
    line-height: 84px;
}

.lsideMItem.active {
    background-color: #fff;
}

.lsideMItem.active span {
    color: #152b59;
}

.lsideMItem span {
    display: block;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin: 0 20px;
    border-bottom: 2px solid #455b88;
}

.lsideMItem span:hover {
    cursor: pointer;
}

</style>
