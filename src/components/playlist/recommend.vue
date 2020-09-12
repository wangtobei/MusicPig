<template>
  <div class="recommend">
    <h3 class="title">推荐歌单</h3>
    <div class="item" v-for="item in results" :key="item.id" @click="details(item.id)">
      <el-image style="width: 150px; height: 150px" :src="item.picUrl"></el-image>
      <span class="itemname">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
import { recommend } from "@/axios/getrecommend";
export default {
  data() {
    return {
      results: [],
    };
  },
  created() {
    const baseURL = this.$store.state.baseapi;
    recommend(baseURL, 6).then((res) => (this.results = res.data.result));
  },
  methods: {
    details(id) {
      this.$router.push("/playlist/" + id);
    },
  },
};
</script>
<style scoped>
.recommend{
  height: 600px;
}
.item {
  width: 150px;
  float: left;
  margin-left: 1.5em;
  margin-top: 0.5em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.title {
  text-align: center;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  color: rgb(255, 153, 0);
}
.itemname {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
}
</style>