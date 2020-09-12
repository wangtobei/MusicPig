<template>
  <div class="mv">
    <h3 class="title">mv排行</h3>
    <div class="change">
      <el-button type="danger" :icon="icon" size="mini" round @click="change">换一换</el-button>
    </div>
    <div class="item" v-for="item in list" :key="item.id" @click="gotoplay(item.id)">
      <el-image style="width: 100px; height: 60px" :src="item.cover" :fit="fit"></el-image>
      <span class="mvname">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
import { mvlist } from "@/axios/getmvlist";
export default {
  data() {
    return {
      offset: 0,
      list: [],
      icon: "el-icon-refresh-right",
      fit: "contain",
    };
  },
  created() {
    const baseURL = this.$store.state.baseapi;
    mvlist(baseURL, this.offset).then((res) => (this.list = res.data.data));
  },
  methods: {
    change() {
      this.icon = "el-icon-loading";
      this.offset++;
      const baseURL = this.$store.state.baseapi;
      mvlist(baseURL, this.offset).then((res) => (this.list = res.data.data));
      setTimeout(() => (this.icon = "el-icon-refresh-right"), 800);
    },
    gotoplay(id) {
       this.$router.push("/mvplayer/" + id);
    },
  },
};
</script>
<style scoped>
.mv {
  height: 400px;
}
.item {
  height:90px ;
  width: 100px;
  float: left;
  margin-left: 1em;
  margin-top: 1em;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.title {
  text-align: center;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  color: rgb(255, 153, 0);
}
.mvname {
  text-align: center;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
}
.change {
  margin-left: 1em;
}
</style>