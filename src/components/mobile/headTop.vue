<template>
    <header id='mHead'>
        <div class="mH-nav">
            <div @click="toUrl(lfUrl)">
                <i :class="lfIcon"></i>
            </div>
            <div class="logo">
                <div v-if="titleHead=='logo'" @click="toHome()">
                    <img class="logo" src="../../images/logo.png">
                </div>
                <div class="midText" v-else>
                    <div>{{titleHead}}</div>
                </div>
            </div>
            <div @click="toUrl(rgUrl)">
                <el-badge :value="cartLength" :hidden="!(login&&(rgUrl=='/cart/cart'))" :max="10" class="cartBadge">
                    <i :class="rgIcon"></i>
                </el-badge>
            </div>
        </div>
    </header>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    export default {
        name: 'mHead',
    	data(){
            return{

            }
        },
        props: ['titleHead','lfUrl','rgUrl','lfIcon','rgIcon'],
        computed: {
            ...mapState([
                'userInfo','cartList','login','cartLength'
            ]),
        },
        mounted(){
            //获取用户信息
            this.getUserInfo();
            this.initCart();
        },
        created(){

        },
        methods: {
            ...mapActions([
                'getUserInfo','initCart'
            ]),
            toUrl(ucUrl){
                if(ucUrl != 'back'){
                    this.$router.push({ path: ucUrl });
                }else{
                    this.$router.go(-1);
                }
            },
            toHome(){
                this.$router.push({ path: '/home' });
            }
        },
        watch:{
            userInfo: function (value) {

            },
            cartLength:function(){
                this.initCart();
            }

        }
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    #mHead{
        width:100%;
        height: px2rem(90);
        position: fixed;
        top:0;
        left:0;
        background-color:#fafafa;
        border-bottom:1px solid #eee;
        z-index: 1000;
    }
    .mH-nav{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .mH-nav .icon{
        font-size:px2rem(52);
        line-height:px2rem(90);
        padding:0 px2rem(20);
    }
    .mH-nav .logo{
        object-fit:fill;
        height:  px2rem(84);
        width:auto;
    }
    .cartBadge{
        position: relative;
    }
    .cartBadge .el-badge__content{
        position: absolute !important;
        top:px2rem(26) !important;
        right:px2rem(100) !important;
    }

    .midText{
        height: px2rem(90);
        line-height: px2rem(90);
        font-size: px2rem(36);
    }

</style>
