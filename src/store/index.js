import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    showlist: false,
    baseapi: "https://api.mtnhao.com", //歌曲获取的接口
    musicdetail: {
      //代表当前正在播放的歌曲
      songs: [
        {
          id: 0,
          name: "",
          al: {
            picUrl:
              "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          },
        },
      ],
    },
    musiclist: new Array(),
    playstatus: "pause",
    crrentsongindex: 0,
  },
  mutations: {
    changeshowlist(state) {
      this.state.showlist = !this.state.showlist;
    },
    changemusicdetail(state, res) {
      this.state.musicdetail = res;
    },
    addlist(state, id) {
      let have = false;
      for (let item of this.state.musiclist) {
        if (item == id) {
          have = true;
        }
      }
      if (!have) {
        this.state.musiclist.splice(this.state.crrentsongindex + 1, 0, id);
      }
    },
    changeplaystatus(state, status) {
      this.state.playstatus = status;
    },
    addindex(state) {
      if (this.state.crrentsongindex >= this.state.musiclist.length - 1)
        this.state.crrentsongindex = 0;
      else this.state.crrentsongindex++;
    },
    subindex(state) {
      if (this.state.crrentsongindex == 0)
        this.state.crrentsongindex = this.state.musiclist.length - 1;
      else this.state.crrentsongindex--;
    },
    deleteitem(state, id) {
      const index = this.state.musiclist.indexOf(id);
      if (index != -1) {
        console.log(this.state.musiclist);
        this.state.musiclist.splice(index, 1);
        console.log(index, "删除成功");
        console.log(this.state.musiclist);
      }
    },
  },
});
