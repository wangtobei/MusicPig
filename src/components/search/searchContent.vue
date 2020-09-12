<template>
  <div class="serachcontent">
    <div
      v-for="song in result.songs"
      :key="song.id+song.name"
      class="song-item"
      @click="itemplay(song.id)"
    >
      <div class="songinfo">
        <div class="name">{{song.name}}</div>
        <div class="alias">{{song.alias[0]}}</div>
        <div class="artist">
          <span
            v-for="artist in song.artists"
            :key="artist.id+artist.name"
          >{{artist.name}}&nbsp;&nbsp;</span>
          <span>-《{{song.album.name}}》</span>
        </div>
      </div>
      <div
        class="el-icon-more morefunc funicon"
        @click.stop="changemusicid(song.id)"
        type="primary"
        style="margin-left: 16px;"
      ></div>
    </div>
    <el-drawer :visible.sync="drawer" :direction="direction" class="draw">
      <div class="el-icon-video-play draweritem" @click="play()">&nbsp;&nbsp;播放歌曲</div>
      <div class="el-icon-plus draweritem" @click="addtolist()" :plain="true">&nbsp;&nbsp;下一首播放</div>
    </el-drawer>
  </div>
</template>
<script>
import { musicDetail } from "@/axios/getMusicDetailById.js";
export default {
  props: ["result"],
  data() {
    return {
      drawer: false,
      direction: "btt",
      musicid: 0,
    };
  },
  methods: {
    play() {
      const id = this.musicid;
      const baseURL = this.$store.state.baseapi;
      musicDetail(baseURL, id).then(
        (res) => (
          this.$store.commit("changemusicdetail", res.data),
          this.$store.commit("addlist", id)
        )
      );
    },
    changemusicid(id) {
      this.musicid = id;
      this.drawer = true;
    },
    itemplay(id) {
      this.musicid = id;
      this.play();
    },
    addtolist() {
      const id = this.musicid;
      this.$store.commit("addlist", id);
      this.$message({
        message: "添加成功！",
        type: "success",
      });
    },
  },
};
</script>
<style scoped>
.song-item {
  height: 70px;
  width: 100%;
  cursor: pointer;
}
.name {
  text-indent: 2em;
  color: #f56c6c;
  float: left;
  overflow: hidden;
  font-weight: 800;
  font-size: 1.1em;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
}
.serachcontent {
  margin-top: 1.5em;
}
.alias {
  text-indent: 0.5em;
  color: #aeaeae;
  overflow: hidden;
  height: 1.5em;
}
.artist {
  text-indent: 2.5em;
  height: 1.5em;
  overflow: hidden;
  font-size: 0.9em;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
}
.songinfo {
  float: left;
  width: 85%;
}
.morefunc {
  margin-left: 0.7em;
}
.draw {
  font-size: 1.3em;
}
.draweritem {
  width: 90%;
  height: 1.5em;
  margin-left: 2em;
  border-bottom: 1px solid #dcdfe6;
}
.funicon {
  -webkit-transform: rotate(90deg); /*Safari 4+,Google Chrome 1+ */
  -moz-transform: rotate(90deg); /*Firefox 3.5+*/
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1); /*ie*/
}
</style>