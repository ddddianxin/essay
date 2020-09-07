<template>
  <div id="app" class="pcapp">
<!--    <head-top></head-top>-->
    <router-view></router-view>
    <foot-bottom></foot-bottom>
  </div>
</template>

<script>
  // import headTop from './components/header/headTop';
  import footBottom from './components/footer/foot';
  export default {
    name: 'App',
    components:{
      footBottom
    },
  }
</script>

<style>
  @import './style/base.css';
  @import './style/common.css';
  #app{
    font-family: 'pingFangSC-Medium, sans-serif';
  }
  .pcapp{
    min-width: 1024px;
  }

</style>
