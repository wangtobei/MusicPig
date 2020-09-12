<template>
  <div class="list">
    <el-page-header @back="goBack" content="歌单详情"></el-page-header>
    <div v-for="song in results" :key="song.id" class="song" @click="play(song.id)">
      <el-image style="width: 50px; height: 50px;float:left" :src="song.al.picUrl"></el-image>
      <span class="songname">{{song.name}}</span>
      <span class="all">
        <span
          class="artists"
          v-for="artist in song.ar"
          :key="artist.id+artist.name"
        >{{artist.name}}&nbsp;&nbsp;</span>
      </span>
    </div>
  </div>
</template>
<script>
import { playlist } from "@/axios/getplaylist";
import {musicDetail} from '@/axios/getMusicDetailById'
export default {
  name:"list",
  data() {
    return {
      playlistid: this.$route.params.id,
      results: [],
    };
  },
  created() {
    const baseURL = this.$store.state.baseapi;
    playlist(baseURL, this.playlistid).then(
      (res) => (this.results = res.data.playlist.tracks)
    );
  },
  methods: {
    goBack() {
      window.history.back();
    },
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
.list {
  margin-top: 5em;
  margin-bottom: 6em;
}
.song {
  margin: 1em;
  height: 3em;
  padding: 0.5em;
}
.songname {
  text-indent: 1em;
  width: 80%;
  height: 1.5em;
  color: #f56c6c;
  font-weight: 700;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
}
.all {
  text-indent: 1em;
  width: 80%;
  height: 1.5em;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
}
.title {
  text-align: center;
  margin-top: 0.5em;
  color: rgb(255, 153, 0);
}
</style>