<template>
  <div class="mvplay">
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
    <h3 class="title">mv详情</h3>
    <video :src="mvurl" width="100%" controls></video>
    <div>{{mvdetails.name}}/{{mvdetails.artistName}}</div>
  </div>
</template>
<script>
import { mvdetail, mvurl } from "@/axios/getmvdetails";
export default {
  name: "mvplay",
  data() {
    return {
      mvdetails: {},
      mvurl: "",
    };
  },
  created() {
    const id = this.$route.params.id;
    const baseURL = this.$store.state.baseapi;
    mvdetail(baseURL, id).then((res) => (this.mvdetails = res.data.data));
    mvurl(baseURL, id).then((res) => (this.mvurl = res.data.data.url));
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>
<style scoped>
.mvplay {
  margin-top: 5em;
}
.title {
  margin-top: 0.5em;
  font-size: 1.5em;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
}
</style>