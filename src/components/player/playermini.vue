<template>
  <div v-bind:class="[isshow?'playfull':'playmini']">
    <audio
      preload="metadata"
      :src="musicurl"
      autoplay
      ref="audio"
      @play="playplayer"
      @pause="pauseplayer"
      @loadedmetadata="onladematadata"
      @timeupdate="ontimeupdate"
      @ended="next"
    ></audio>
    <div class="full" v-show="isshow">
      <div class="musicplay">
        <el-page-header @back="goBack" :content="content" title></el-page-header>
        <div :class="[state==='playing'?'spin':'cover']">
          <el-avatar :src="url" :size="150"></el-avatar>
        </div>
        <div class="lyric">
          <h3>假装这里有歌词</h3>
        </div>
        <div style="width:80%;margin:auto">
          <el-slider v-model="percentage" @change="changecurrenttime" :show-tooltip="false"></el-slider>
        </div>
        <div class="function">
          <el-button type="danger" icon="el-icon-caret-left" circle @click="pre"></el-button>
          <el-button
            v-if="state==='playing'"
            type="danger"
            icon="el-icon-video-pause"
            circle
            @click="pauseplayer"
          ></el-button>
          <el-button
            v-if="state==='pause'"
            type="danger"
            icon="el-icon-video-play"
            circle
            @click="playplayer"
          ></el-button>
          <el-button type="danger" icon="el-icon-caret-right" circle @click="next"></el-button>
          <el-button type="danger" icon="el-icon-s-fold" circle @click="showlist"></el-button>
        </div>
      </div>
    </div>
    <div class="mini" v-show="!isshow">
      <div v-if="currentmusicname" class="songname">正在播放：{{currentmusicname}}</div>
      <div v-else class="songname">当前没有播放歌曲。</div>
      <div @click="musicdetails">
        <el-image style="width: 50px; height: 50px" :src="url" class="pic"></el-image>
      </div>
      <div class="playbutton">
        <el-button
          v-if="state==='playing'"
          icon="el-icon-video-pause"
          @click="pauseplayer"
          circle
          size="mini"
          type="danger"
        ></el-button>
        <el-button
          v-else
          icon="el-icon-video-play"
          @click="playplayer"
          circle
          size="mini"
          type="danger"
        ></el-button>
      </div>
      <el-button type="danger" icon="el-icon-s-fold" circle size="mini" @click="showlist"></el-button>
      <div class="slider">
        <el-slider v-model="percentage" @change="changecurrenttime" :show-tooltip="false"></el-slider>
      </div>
    </div>
  </div>
</template>
<script>
import { musicDetail } from "@/axios/getMusicDetailById.js";
export default {
  props: ["result"],
  data() {
    return {
      percentage: 0, //进度条百分比
      musicdata: 0, //当前歌曲的总时长
      currenttime: 0, //当前歌曲的当前播放时刻
      isshow: false,
    };
  },
  computed: {
    style() {
      if (this.isshow) return "";
    },
    musicurl() {
      return (
        "http://music.163.com/song/media/outer/url?id=" +
        this.$store.state.musicdetail.songs[0].id
      );
    },
    currentmusicname() {
      return this.$store.state.musicdetail.songs[0].name;
    },
    url() {
      return this.$store.state.musicdetail.songs[0].al.picUrl;
    },
    state() {
      return this.$store.state.playstatus;
    },
    crrentsongindex() {
      //当前歌曲在列表里面的索引值
      return this.$store.state.crrentsongindex;
    },
    content() {
      return this.$store.state.musicdetail.songs[0].name.substring(0,15);
    },
    url() {
      return this.$store.state.musicdetail.songs[0].al.picUrl;
    },
    status() {
      let status = this.$store.state.playstatus;
      console.log();
      if (status === "pause") return "el-icon-video-play";
      else return "el-icon-video-pause";
    },
  },
  methods: {
    playplayer() {
      this.$store.commit("changeplaystatus", "playing");
      this.$refs.audio.play();
    },
    pauseplayer() {
      this.$store.commit("changeplaystatus", "pause");
      this.$refs.audio.pause();
    },
    onladematadata(res) {
      console.log(res.target.duration);
      this.musicdata = res.target.duration;
    },
    ontimeupdate(res) {
      this.currenttime = res.target.currentTime;
      this.percentage = (this.currenttime / this.musicdata) * 100;
    },
    changecurrenttime() {
      this.$refs.audio.currentTime = (this.percentage / 100) * this.musicdata;
    },
    next() {
      this.$store.commit("addindex");
      let crrentsongindex = this.$store.state.crrentsongindex;
      let nextid = this.$store.state.musiclist[crrentsongindex];
      if (nextid != undefined) {
        const baseURL = this.$store.state.baseapi;
        musicDetail(baseURL, nextid).then((res) => {
          this.$store.commit("changemusicdetail", res.data);
        });
      }
    },
    pre() {
      this.$store.commit("subindex");
      let crrentsongindex = this.$store.state.crrentsongindex;
      let nextid = this.$store.state.musiclist[crrentsongindex];
      if (nextid != undefined) {
        const baseURL = this.$store.state.baseapi;
        musicDetail(baseURL, nextid).then((res) => {
          this.$store.commit("changemusicdetail", res.data);
        });
      }
    },
    musicdetails() {
      this.isshow = true;
    },
    goBack() {
      this.isshow = false;
    },
    showlist() {
      this.$store.commit("changeshowlist");
    },
  },
};
</script>
<style scoped>
.playmini {
  position: fixed;
  bottom: 0em;
  background: white;
  width: 100%;
  height: 3.5em;
  box-shadow: 0 -5px 12px 0 rgba(0, 0, 0, 0.1);
  padding-top: 1em;
}
.playfull {
  position: fixed;
  top: 0em;
  height: 120%;
  background: white;
  width: 100%;
  box-shadow: 0 -5px 12px 0 rgba(0, 0, 0, 0.1);
  padding-top: 1em;
  z-index: 200;
}
.playbutton {
  float: left;
  margin-left: 0.3em;
  margin-right: 0.3em;
  color: #f56c6c;
}
.slider {
  float: right;
  width: 55%;
  margin-right: 0.5em;
}
.songname {
  height: 1.5em;
  text-indent: 0.5em;
  color: #e6a23c;
  margin-right: 0.5em;
  float: right;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
}
.pic {
  float: left;
  margin-left: 0.5em;
  border: 1px solid #606266;
}
.cover {
  width: 150px;
  height: 150px;
  margin: auto;
  margin-top: 40px;
}
.spin {
  width: 150px;
  height: 150px;
  margin: auto;
  margin-top: 40px;
  -webkit-animation: run 20s linear 0s infinite;
}
.cover :hover {
  -webkit-animation-play-state: paused;
}
@-webkit-keyframes run {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.function {
  width: 60%;
  margin: auto;
}
.lyric {
  height: 300px;
}
</style>