<template>
  <div class="newsong">
    <h3 class="title">新歌尝鲜</h3>
    <div v-for="song in results" :key="song.id" class="song" @click="play(song.id)">
      <el-image style="width: 50px; height: 50px;float:left" :src="song.picUrl"></el-image>
      <span class="songname">{{song.name}}</span>
      <span
        class="artists"
        v-for="artist in song.song.artists"
        :key="artist.id+artist.name"
      >{{artist.name}}&nbsp;</span>
    </div>
  </div>
</template>
<script>
import { musicDetail } from "@/axios/getMusicDetailById.js";
import { newsong } from "@/axios/getNewSong";
export default {
  data() {
    return {
      results: [],
    };
  },
  created() {
    const baseURL = this.$store.state.baseapi;
    newsong(baseURL).then((res) => (this.results = res.data.result));
  },
  methods: {
    play(id) {
      const baseURL = this.$store.state.baseapi;
      musicDetail(baseURL, id).then((res) =>
        this.$store.commit("changemusicdetail", res.data)
      );
    },
  },
};
</script>
<style scoped>
.song {
  margin: 1em;
  height: 3em;
  padding: 0.5em;
}
.songname {
  text-indent: 1em;
  width: 80%;
  color: #f56c6c;
  font-weight: 700;
  height: 1.5em;
  overflow: hidden;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
}
.artists {
  text-indent: 1em;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
}
.title{
  text-align: center;
  margin-top: 0.5em;
  color: rgb(255, 153, 0);
}
</style>