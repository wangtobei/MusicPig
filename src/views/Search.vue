<template>
  <div class="search">
    <div class="searchtool">
      <el-input placeholder="请输入搜索内容" v-model="input" clearable class="serach-input" @input="clear" @keydown.enter="search"></el-input>
      <el-button type="danger" round icon="el-icon-search" @click="search"></el-button>
    </div>
    <el-alert title="输入内容为空，请重新输入！" type="error" v-show="error"></el-alert>
    <hotmusic v-show="input===''" v-on:hotsearch="hotsearch"></hotmusic>
    <search-content :result="result" v-show="input!=''"></search-content>
    <el-pagination
      v-show="result.songCount>30"
      layout="prev,next"
      :total="result.songCount>200?200:result.songCount"
      class="pagination"
      @prev-click="prevClick"
      @next-click="nextClick"
    ></el-pagination>
    <div v-if="result.songCount>0 && !result.hasMore" class="tips">————我是有底线的~————</div>
  </div>
</template>
<script>
import { searchaxios } from "@/axios/search.js";
import searchContent from "@/components/search/searchContent";
import hotmusic from "@/components/search/hotmusic";
export default {
  data() {
    return {
      pagecount: 30, //每一页的数量
      currentpage: 0, //当前页码
      input: "",
      error: false,
      result: {},
    };
  },
  methods: {
    search() {
      if (this.input === "") {
        this.error = true;
        return 0;
      } else {
        this.error = false;
        const baseURL = this.$store.state.baseapi;
        searchaxios(
          baseURL,
          this.input,
          this.currentpage * this.pagecount
        ).then((res) => (this.result = res.data.result));
      }
    },
    prevClick() {
      this.currentpage--;
      this.search();
    },
    nextClick() {
      this.currentpage++;
      this.search();
    },
    clear() {
      this.result = {};
      this.currentpage = 0;
    },
    hotsearch(musicname) {
      this.input = musicname;
      this.search();
    },
  },
  components: {
    searchContent,
    hotmusic,
  },
};
</script>
<style scoped>
.search {
  margin-bottom: 8em;
  margin-top: 5em;
}
.searchtool {
  width: 90%;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 10px;
}
.serach-input {
  width: 70%;
  margin: 1em 1em 0 0;
}
.serach-input input {
  border-radius: 16px;
}
.el-alert {
  width: 90%;
  margin: auto;
  margin-top: 5px;
}
.pagination {
  width: 20%;
  margin: auto;
}
.tips {
  text-align: center;
  color: #aeaeae;
}
</style>