<template>
  <div id="app">
    <tabbar></tabbar>
    <keep-alive exclude="list,mvplay,musicplayer">
      <router-view></router-view>
    </keep-alive>
   <musiclist></musiclist>
    <playermini></playermini>
  </div>
</template>

<script>
import tabbar from "@/components/TabBar/TabBar";
import playermini from "@/components/player/playermini";
import musiclist from '@/components/player/musiclist'
export default {

  components: {
    tabbar,
    playermini,
    musiclist
  },

};
</script>
<style>
</style>
