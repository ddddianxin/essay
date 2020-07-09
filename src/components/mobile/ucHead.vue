<template>
    <header id='ucHead'>
        <div class="muH-nav">
            <div @click="toUrl(ucUrl)">
                <i :class="ucIcon"></i>
            </div>
            <div class="ucN-text">
                {{ucTitle}}
            </div>
            <router-link to="/home">
                <i class="el-icon-s-home icon"></i>
            </router-link>
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
        props: ['ucTitle','ucIcon','ucUrl'],
        computed: {
            ...mapState([
                'ucIndex','userInfo'
            ]),
        },
        mounted(){
            //获取用户信息
            this.getUserInfo();

        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
            toUrl(ucUrl){
                this.$router.push({ path: ucUrl });
            }
        },
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    #ucHead{
        width:100%;
        height: px2rem(90);
        position: fixed;
        top:0;
        left:0;
        background-color:#fafafa;
        border-bottom:1px solid #eee;
        z-index: 1000;
    }
    .muH-nav{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .muH-nav .icon{
        font-size:px2rem(52);
        line-height:px2rem(90);
        padding:0 px2rem(20);
    }
    .ucN-text{
        height: px2rem(90);
        line-height: px2rem(90);
        font-size: px2rem(36);
    }
</style>
