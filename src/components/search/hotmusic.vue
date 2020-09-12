<template>
  <div class="hotmusic">
    <div>大家都在搜：</div>
    <div class="musicbutton" v-for="music in hotkeyworld.hots" :key="music.first">
      <el-button round @click="hotclick(music.first)">{{music.first}}</el-button>
    </div>
  </div>
</template>
<script>
import { hotsearch } from "@/axios/hotsearch";
export default {
  data() {
    return {
      hotkeyworld: {},
    };
  },
  created() {
    const baseURL = this.$store.state.baseapi;
    hotsearch(baseURL).then((res) => (this.hotkeyworld = res.data.result));
  },
  methods: {
    hotclick(musicname) {
      this.$emit('hotsearch',musicname)
    },
  },
};
</script>
<style scoped>
* {
  margin-left: 0.5em;
  
}
.musicbutton {
  float: left;
  margin-top: 0.3em;
}
</style>