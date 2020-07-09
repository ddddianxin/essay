<template>
  <div id="mApp">
   <head-top></head-top>
    <router-view></router-view>
   <nav-foot></nav-foot>
  </div>
</template>

<script>
  import headTop from './components/mobile/headTop';
  import navFoot from './components/mobile/navFoot';
  export default {
    name: 'mApp',
    components:{
      headTop,
      navFoot
    },
  }
</script>

<style lang="scss">
  @import './style/base.css';
  @import './style/common.css';
  @import './style/font.css';
  @import './style/mixin';

  #app{
      background-color: $bggray;
      font-family: pingFangSC-Medium, sans-serif;
  }
    #mApp{
        margin:0 auto;
        width:100%;
        display: block;
        background-color: $bggray;
    }


</style>
