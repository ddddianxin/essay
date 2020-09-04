<template>
  <div id="app">
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
    min-width: 1024px;
    font-family: 'pingFangSC-Medium, sans-serif';
  }

</style>
